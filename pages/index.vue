<template>
  <div>
    <h1 v-if="isVisitedHome==true">Hi there!</h1>
    <div v-else>
      <h1>Welcome, new visitor!</h1>
      <nuxt-link to="/about" class="pure-button pure-button-primary">
        <fa-icon class="fa-fw" :icon="['fas', 'check']" />&nbsp;Let's see what AICEVOTE is!
      </nuxt-link>
    </div>
    <div v-for="theme in themes" :key="theme.title">
      <nuxt-link v-bind:to="'/'+(isSignedIn?'vote':'result')+'#!'+ theme.themeID">
        <h2>{{theme.title}}</h2>
      </nuxt-link>
      <p>{{theme.description}}</p>
    </div>
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
      context.store.commit("session/signin", sessionID);
      context.store.dispatch("session/auth");
    }
    return {
      themes: (await aicevote.getAllThemes()).sort(
        (a, b) => b.topicality - a.topicality
      )
    };
  }
};
</script>