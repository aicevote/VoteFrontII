<template>
  <div>
    <div v-if="isVisitedHome!=true">
      <h1>Hello, new user!</h1>
      <nuxt-link to="/about" class="pure-button pure-button-primary">Let's see what AICEVOTE is!</nuxt-link>
    </div>
    <h2>Voting themes</h2>
    <div v-for="theme in themes" :key="theme.title">
      <nuxt-link v-bind:to="'/'+(isSignedIn?'vote':'result')+'#!'+ theme.themeID">
        <img class="pure-img pure-u-1-24" v-bind:src="theme.imageURI" />
        <h3 class="pure-u-20-24">{{theme.title}}</h3>
      </nuxt-link>
      <p>{{theme.description}}</p>
    </div>

    <h2>Related articles</h2>
    <a
      class="pure-u-1 pure-u-md-1-3 pure-u-lg-1-5 pure-u-xl-1-7"
      target="_blank"
      v-bind:href="article.uri"
      v-for="article in articles"
      :key="article.publishedAt"
    >
      <img class="pure-img" v-bind:src="article.uriToImage" />
      <p>{{article.title +' ('+ article.source+')'}}</p>
    </a>
  </div>
</template>

<script lang="ts">
import * as aicevote from "aicevote";
export default {
  computed: {
    isSignedIn() {
      return (this as any).$store.state.session.sessionToken != null;
    },
    isVisitedHome() {
      const ret = (this as any).$store.state.session.isVisitedHome;
      (this as any).$store.commit("session/visitHome");
      return ret;
    }
  },
  async asyncData(context: any) {
    const sessionID = context.route.query?.sessionid;
    if (sessionID != undefined) {
      context.store.dispatch("session/signin", sessionID);
    }

    const articles = (await aicevote.getAllArticles()).related
      .reduce((prev, cur) => prev.concat(cur))
      .sort((a, b) => b.publishedAt - a.publishedAt);
    return {
      themes: (await aicevote.getAllThemes()).sort(
        (a, b) => b.topicality - a.topicality
      ),
      articles: articles
    };
  }
};
</script>