<template>
  <div id="app">
    <Hero />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Hero from "./components/Hero.vue";

@Component({
  components: {
    Hero
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  background: #f8f8f8;
}
</style>
