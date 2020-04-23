<template>
  <div>
    <h1>Feedback</h1>
    <p>「この部分が良い」、「こういう機能をつけて欲しい」、「この部分がわかりにくい」などご意見がありましたら、できるだけ具体的に 詳しく以下にお書きください。</p>

    <form class="pure-form">
      <fieldset class="pure-group">
        <textarea class="pure-input-1-2" placeholder="Feedback" v-model="feedback" required />
      </fieldset>
      <button
        class="pure-button pure-input-1-2 pure-button-primary"
        v-on:click.prevent="sendFeedback()"
      >Submit</button>
    </form>
    <p v-if="sendFeedbackResult==200">Success! Thank you for your feedback!</p>
    <p v-if="sendFeedbackResult==400">Sorry, failed to send a feedback...</p>
  </div>
</template>

<script lang="ts">
import * as aicevote from "aicevote";
export default {
  data: () => ({
    feedback: "",
    sendFeedbackResult: 0
  }),
  methods: {
    sendFeedback: async function() {
      if ((this as any).feedback == "") {
        (this as any).sendFeedbackResult = 400;
        return;
      }
      try {
        await aicevote.postFeedback((this as any).feedback);
      } catch (e) {
        (this as any).sendFeedbackResult = 400;
        return;
      }
      (this as any).sendFeedbackResult = 200;
    }
  }
};
</script>