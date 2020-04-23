<template>
  <div>
    <h1>{{theme.title}}</h1>
    <p>{{theme.description}}</p>
    <div v-if="isSignedIn==true">
      <form class="pure-form">
        <label
          class="pure-radio"
          v-for="(choice, index) in theme.choices"
          v-bind:key="choice"
          v-bind:for="choice"
        >
          <input
            type="radio"
            name="optionsRadios"
            v-bind:id="choice"
            v-bind:value="index"
            v-model="answer"
          />
          {{choice}}
        </label>
        <button
          class="pure-button pure-input-1-2 pure-button-primary"
          v-on:click.prevent="vote()"
        >Vote</button>
      </form>
      <p v-if="voteResult==400">Sorry, failed to vote...</p>
      <p v-if="voteResult==401">Please sign in to vote</p>
    </div>
    <div v-else>
      <h2>You aren't signed in!</h2>
      <p>
        <nuxt-link to="/signin" class="pure-button pure-button-primary">Sign in to vote</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import * as aicevote from "aicevote";
export default {
  data: () => ({
    answer: 0,
    voteResult: 0
  }),
  methods: {
    async vote() {
      const sessionToken = (this as any).$store.state.session.sessionToken;
      if (sessionToken == null) {
        (this as any).voteResult = 401;
        return;
      }
      try {
        await aicevote.vote(
          (this as any).theme.themeID,
          sessionToken,
          (this as any).answer
        );
      } catch (e) {
        (this as any).voteResult = 400;
        return;
      }
      (this as any).redirect(`/result#!${(this as any).theme.themeID}`);
    }
  },
  computed: {
    isSignedIn() {
      return (this as any).$store.state.session.sessionToken != null;
    }
  },
  async asyncData(context: any) {
    const themeID = parseInt(context.route.hash.slice(2), 10);
    return {
      theme: await aicevote.getTheme(themeID),
      redirect: context.redirect
    };
  }
};
</script>