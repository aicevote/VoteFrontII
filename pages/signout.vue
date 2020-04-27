<template>
  <div>
    <h1>Sign out</h1>
    <div v-if="isSignedIn==true">
      <button class="pure-button pure-button-primary" v-on:click.prevent="signout()">
        <fa-icon class="fa-fw" :icon="['fas', 'sign-out-alt']" />&nbsp;Sign out
      </button>
    </div>
    <div v-else>
      <h2>You aren't signed in</h2>
      <nuxt-link to="/signin" class="pure-button pure-button-primary">
        <fa-icon class="fa-fw" :icon="['fas', 'sign-in-alt']" />&nbsp;Sign in
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    signout() {
      (this as any).$store.commit("session/signout");
      (this as any).redirect("/");
    }
  },
  computed: {
    isSignedIn() {
      return (this as any).$store.state.session.sessionToken != null;
    }
  },
  async asyncData(context: any) {
    return {
      redirect: context.redirect
    };
  }
};
</script>