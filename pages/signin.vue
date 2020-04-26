<template>
  <div>
    <h1>Sign in</h1>
    <div v-if="isSignedIn==true">
      <h2>You're already signed in!</h2>
      <p>
        <nuxt-link to="/" class="pure-button pure-button-primary">
          <i class="fas fa-home fa-fw" />
          Go to home
        </nuxt-link>
      </p>
    </div>
    <div v-else>
      <p>
        <a class="pure-button pure-button-primary" v-bind:href="authURI">
          <i class="fab fa-twitter fa-fw" />
          Sign in with Twitter
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