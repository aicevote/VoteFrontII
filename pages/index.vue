<template>
  <div>
    <h1>Welcome.</h1>
    <h2>Voting themes</h2>
    <table class="pure-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="theme in themes" :key="theme.title">
          <td>
            <img class="pure-img" v-bind:src="theme.imageURI" />
          </td>
          <td>
            <nuxt-link v-bind:to="'/vote#!'+ theme.themeID">{{theme.title}}</nuxt-link>
          </td>
          <td>{{theme.description}}</td>
        </tr>
      </tbody>
    </table>
    <h2>Related articles</h2>
    <a
      class="pure-u-1-3"
      target="_blank"
      v-bind:href="article.uri"
      v-for="article in articles"
      :key="article.title"
    >
      <img class="pure-img" v-bind:src="article.uriToImage" />
      <p>{{article.title +' ('+ article.source+')'}}</p>
    </a>
  </div>
</template>

<script lang="ts">
import axios from "axios";
export default {
  async asyncData(context: any) {
    let articles = (await axios.get("https://api.aicevote.com/news/articles"))
      .data;
    for (let i = 0; i < articles.related.length; i++) {
      articles.related[i].forEach((article: any) => (article["id"] = i));
    }
    articles = articles.related
      .reduce((prev: any, cur: any) => prev.concat(cur))
      .sort((a: any, b: any) => b.publishedAt - a.publishedAt);
    return {
      themes: (await axios.get("https://api.aicevote.com/themes")).data.sort(
        (a: any, b: any) => b.topicality - a.topicality
      ),
      articles: articles
    };
  }
};
</script>
