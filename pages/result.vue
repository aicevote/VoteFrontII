<template>
  <div>
    <h1>{{theme.title}}</h1>
    <p>{{theme.description}}</p>
    <h2>Result</h2>
    <table class="pure-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Percentage</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(result,index) in result.results" v-bind:key="result">
          <td>{{theme.choices[index]}}</td>
          <td>{{result}}</td>
        </tr>
      </tbody>
    </table>

    <h2>Transition</h2>

    <h2>Comments</h2>
    <div v-if="isSignedIn==true">
      <form class="pure-form">
        <input placeholder="New Comment" v-model="message" required />
        <button class="pure-button pure-button-primary" v-on:click.prevent="comment()">Submit</button>
      </form>
      <p v-if="commentResult==200">Success! You commented!</p>
      <p v-if="commentResult==400">Sorry, failed to comment...</p>
      <p v-if="commentResult==401">Please sign in to comment</p>
    </div>
    <div v-for="comment in comments" v-bind:key="comment.createdAt">
      <p>{{comment.message}}</p>
      <p>{{new Date(comment.createdAt).toDateString()}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import * as aicevote from "aicevote";
import io from "socket.io-client";
export default {
  data: () => ({
    message: "",
    commentResult: 0
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
    }
  },
  computed: {
    isSignedIn() {
      return (this as any).$store.state.session.sessionToken != null;
    }
  },
  mounted() {
    (this as any).websocket.on("result", (result: any) => {
      if ((this as any).theme.themeID == result.themeID) {
        (this as any).result = result;
      }
    });
  },
  async asyncData(context: any) {
    const themeID = parseInt(context.route.hash.slice(2), 10);
    return {
      theme: await aicevote.getTheme(themeID),
      result: await aicevote.getResult(themeID),
      transition: await aicevote.getTransition(themeID),
      comments: (await aicevote.getComments(themeID)).reverse(),
      websocket: io("https://api.aicevote.com")
    };
  }
};
</script>