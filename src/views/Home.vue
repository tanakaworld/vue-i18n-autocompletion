<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <h1>{{$tc($i18nHints.home.title)}}</h1>

        <p>{{message}}</p>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { i18n, i18nHints } from "@/i18n";

export default Vue.extend({
  name: "home",
  data() {
    return {
      message: i18n.tc(i18nHints.message.hello)
    };
  }
});
</script>
