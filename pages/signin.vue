<template>
  <div>
    <h1>Sign in</h1>
    <div v-if="isSignedIn==true">
      <h2>You're already signed in!</h2>
      <nuxt-link to="/" class="pure-button pure-button-primary">
        <fa-icon class="fa-fw" :icon="['fas', 'home']" />&nbsp;Go to home screen
      </nuxt-link>
    </div>
    <div v-else>
      <p>
        <a class="pure-button pure-button-primary" v-bind:href="authURI">
          <fa-icon class="fa-fw" :icon="['fab', 'twitter']" />&nbsp;Sign in with Twitter
        </a>
      </p>
      <p>
        <nuxt-link to="/" class="pure-button pure-button-primary">Continue without sign in</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  computed: {
    isSignedIn() {
      return (this as any).$store.state.session.sessionToken != null;
    },
    authURI() {
      return `https://api.aicevote.com/auth/twitter?callback=${location.origin}/`;
    }
  }
};
</script>