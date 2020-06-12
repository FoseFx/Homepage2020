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
/* roboto-regular - latin */
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  src: url("./assets/fonts/roboto-v20-latin-regular.eot"); /* IE9 Compat Modes */
  src: local("Roboto"), local("Roboto-Regular"),
    url("./assets/fonts/roboto-v20-latin-regular.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("./assets/fonts/roboto-v20-latin-regular.woff2")
      format("woff2"),
    /* Super Modern Browsers */
      url("./assets/fonts/roboto-v20-latin-regular.woff") format("woff"),
    /* Modern Browsers */ url("./assets/fonts/roboto-v20-latin-regular.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("./assets/fonts/roboto-v20-latin-regular.svg#Roboto") format("svg"); /* Legacy iOS */
}
/* roboto-slab-regular - latin */
@font-face {
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 400;
  src: url("./assets/fonts/roboto-slab-v11-latin-regular.eot"); /* IE9 Compat Modes */
  src: local(""),
    url("./assets/fonts/roboto-slab-v11-latin-regular.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("./assets/fonts/roboto-slab-v11-latin-regular.woff2")
      format("woff2"),
    /* Super Modern Browsers */
      url("./assets/fonts/roboto-slab-v11-latin-regular.woff") format("woff"),
    /* Modern Browsers */
      url("./assets/fonts/roboto-slab-v11-latin-regular.ttf") format("truetype"),
    /* Safari, Android, iOS */
      url("./assets/fonts/roboto-slab-v11-latin-regular.svg#RobotoSlab")
      format("svg"); /* Legacy iOS */
}

/* roboto-slab-800 - latin */
@font-face {
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 800;
  src: url("./assets/fonts/roboto-slab-v11-latin-800.eot"); /* IE9 Compat Modes */
  src: local(""),
    url("./assets/fonts/roboto-slab-v11-latin-800.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("./assets/fonts/roboto-slab-v11-latin-800.woff2")
      format("woff2"),
    /* Super Modern Browsers */
      url("./assets/fonts/roboto-slab-v11-latin-800.woff") format("woff"),
    /* Modern Browsers */ url("./assets/fonts/roboto-slab-v11-latin-800.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("./assets/fonts/roboto-slab-v11-latin-800.svg#RobotoSlab")
      format("svg"); /* Legacy iOS */
}

body {
  padding: 0;
  margin: 0;
  background: #f8f8f8;
}

h1,
h2 {
  font-family: "Roboto Slab", serif;
  font-weight: 400;
  margin: 0;
}
</style>
