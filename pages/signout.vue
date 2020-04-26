<template>
  <div>
    <h1>Sign out</h1>
    <div v-if="isSignedIn==true">
      <h2>Do you really want to sign out?</h2>
      <p>
        <button class="pure-button pure-button-primary" v-on:click.prevent="signout()">
          <i class="fas fa-sign-out-alt fa-fw" />
          Sign out
        </button>
      </p>
    </div>
    <div v-else>
      <h2>You aren't signed in</h2>
      <nuxt-link to="/signin" class="pure-button pure-button-primary">
        <i class="fas fa-sign-in-alt fa-fw" />
        Sign in
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