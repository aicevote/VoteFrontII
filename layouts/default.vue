<template>
  <div>
    <div class="pure-menu pure-menu-horizontal pure-menu-scrollable">
      <nuxt-link to="/" class="pure-menu-heading pure-menu-link">AICEVOTE</nuxt-link>
      <ul class="pure-menu-list">
        <li class="pure-menu-item">
          <nuxt-link to="/about" class="pure-menu-link">About</nuxt-link>
        </li>
        <li class="pure-menu-item">
          <nuxt-link to="/qa" class="pure-menu-link">Q&A</nuxt-link>
        </li>
        <li class="pure-menu-item">
          <nuxt-link to="/aboutus" class="pure-menu-link">About us</nuxt-link>
        </li>
        <li class="pure-menu-item">
          <nuxt-link to="/feedback" class="pure-menu-link">Feedback</nuxt-link>
        </li>
        <li class="pure-menu-item" v-if="isSignedIn==false">
          <nuxt-link to="/signin" class="pure-menu-link">Sign in</nuxt-link>
        </li>
      </ul>
    </div>

    <div class="pure-g">
      <div class="pure-u-1 pure-u-md-1-5 pure-u-lg-5-24" />
      <div class="pure-u-1 pure-u-md-3-5 pure-u-lg-14-24">
        <div v-if="isSignedIn==true">
          <img class="pure-img pure-u-3-24" v-bind:src="imageURI" />
          <p class="pure-u-20-24">Signed in as {{name}}</p>
        </div>
        <nuxt />
        <p>
          (C) 2020 AICEVOTE Dev Team
          <a href="https://github.com/aicevote">GitHub</a>
          <a href="https://twitter.com/aicevote">Twitter</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  computed: {
    isSignedIn() {
      return (this as any).$store.state.session.sessionToken != null;
    },
    name() {
      return (this as any).$store.state.session.name;
    },
    imageURI() {
      return (this as any).$store.state.session.imageURI;
    }
  }
};
</script>