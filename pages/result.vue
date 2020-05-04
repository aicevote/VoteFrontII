<template>
  <div>
    <h1>{{theme.title}}</h1>
    <p>{{theme.description}}</p>
    <h2>Result</h2>
    <bar-chart
      class="pure-u-1 pure-u-md-2-3 pure-u-lg-1-2"
      :chart-data="result"
      :options="barOptions"
    />

    <h2>Transition</h2>
    <div class="pure-u-1 pure-u-md-1-3 pure-u-lg-10-24">
      <h3>Short term</h3>
      <line-chart :chart-data="shortTransition" :options="lineOptions" />
    </div>
    <div class="pure-u-1 pure-u-md-1-3 pure-u-lg-10-24">
      <h3>Long term</h3>
      <line-chart :chart-data="longTransition" :options="lineOptions" />
    </div>

    <h2>Comments</h2>
    <div v-if="isSignedIn==true">
      <form class="pure-form">
        <input placeholder="New comment" v-model="message" required />
        <button class="pure-button pure-button-primary" v-on:click.prevent="comment()">
          <fa-icon class="fa-fw" :icon="['fas', 'comment']" />&nbsp;Comment
        </button>
      </form>
      <p v-if="commentResult==0"></p>
      <p v-if="commentResult==200">Success! You commented!</p>
      <p v-if="commentResult==400">Sorry, failed to comment...</p>
      <p v-if="commentResult==401">Please sign in to comment</p>
    </div>
    <table class="pure-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Comment</th>
          <th>Date</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="comment in comments" v-bind:key="comment.createdAt">
          <td>
            <img
              alt="User icon"
              class="pure-img"
              v-bind:src="getUserInfo(comment.userProvider,comment.userID).imageURI"
            />
          </td>
          <td>{{getUserInfo(comment.userProvider,comment.userID).name}}</td>
          <td>{{comment.message}}</td>
          <td>{{new Date(comment.createdAt).toDateString()}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import * as aicevote from "aicevote";
import io from "socket.io-client";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";

const backgroundColors = [
  "rgba(255, 99, 132, 0.2)",
  "rgba(255, 159, 64, 0.2)",
  "rgba(255, 205, 86, 0.2)",
  "rgba(75, 192, 192, 0.2)",
  "rgba(54, 162, 235, 0.2)",
  "rgba(153, 102, 255, 0.2)",
  "rgba(201, 203, 207, 0.2)"
];
const borderColors = [
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(54, 162, 235)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)"
];

function convertToResult(title: string, choices: string[], results: number[]) {
  return {
    labels: choices,
    datasets: [
      {
        label: title,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
        fill: false,
        data: results
      }
    ]
  };
}

function convertToTransition(
  choices: string[],
  transition: { timestamp: number; percentage: number[] }[]
) {
  transition = transition.reverse();
  return {
    labels: transition.map(result => new Date(result.timestamp)),
    datasets: choices.map((choice, i) => ({
      label: choice,
      backgroundColor: backgroundColors[i],
      borderColor: borderColors[i],
      borderWidth: 1,
      fill: true,
      data:
        i == choices.length - 1
          ? new Array(transition.length).fill(100)
          : transition.map(result =>
              result.percentage
                .filter((_, j) => j <= i)
                .reduce((pre, cur) => pre + cur)
            )
    }))
  };
}

export default {
  components: {
    BarChart,
    LineChart
  },
  data: () => ({
    message: "",
    commentResult: 0,
    barOptions: {
      responsive: true,
      scales: { yAxes: [{ ticks: { beginAtZero: true } }] }
    },
    lineOptions: {
      responsive: true,
      scales: {
        xAxes: [{ type: "time" }],
        yAxes: [{ ticks: { beginAtZero: true } }]
      }
    }
  }),
  methods: {
    async comment() {
      const sessionToken = (this as any).$store.state.session.sessionToken;
      if (sessionToken == null) {
        (this as any).commentResult = 401;
        return;
      }
      try {
        await aicevote.comment(
          (this as any).theme.themeID,
          sessionToken,
          (this as any).message
        );
      } catch (e) {
        (this as any).commentResult = 400;
        return;
      }
      (this as any).commentResult = 200;
    },
    getUserInfo(userProvider: string, userID: string) {
      return (this as any).users.find(
        (user: any) =>
          user.userProvider == userProvider && user.userID == userID
      );
    }
  },
  computed: {
    isSignedIn() {
      return (this as any).$store.state.session.sessionToken != null;
    }
  },
  mounted() {
    (this as any).websocket.on(
      "result",
      (result: { themeID: number; results: number[] }) => {
        if ((this as any).theme.themeID == result.themeID) {
          (this as any).result = convertToResult(
            (this as any).theme.title,
            (this as any).theme.choices,
            result.results
          );
        }
      }
    );
    (this as any).websocket.on(
      "comments",
      (comments: { from: number; comments: any[] }) => {
        const themeID = (this as any).theme.themeID;
        const newComments = comments.comments
          .filter(comment => comment.themeID == themeID)
          .sort((a, b) => (a.createdAt = b.createdAt));
        (this as any).comments = newComments + (this as any).comments;
      }
    );
  },
  async asyncData(context: any) {
    try {
      const themeID = parseInt(context.route.hash.slice(2), 10),
        theme = await aicevote.getTheme(themeID),
        result = await aicevote.getResult(themeID),
        transition = await aicevote.getTransition(themeID),
        comments = await aicevote.getComments(themeID),
        users = await aicevote.getProfiles(
          comments.map(comment => ({
            userID: comment.userID,
            userProvider: comment.userProvider
          }))
        );

      return {
        theme: theme,
        shortTransition: convertToTransition(
          theme.choices,
          transition.shortTransition
        ),
        longTransition: convertToTransition(
          theme.choices,
          transition.longTransition
        ),
        comments: comments.reverse(),
        users: users,
        result: convertToResult(theme.title, theme.choices, result.results),
        websocket: io("https://api.aicevote.com")
      };
    } catch (e) {
      context.error({
        statusCode: 404,
        message: "This page could not be found"
      });
    }
  }
};
</script>