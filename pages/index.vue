<template>
  <div id="app">
    <Hero />
    <About />
    <NameBg />
    <Projects />
    <Social :absolute="false" />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'nuxt-property-decorator';

@Component({
  name: 'Index',
})
export default class Index extends Vue {
  head() {
    return {
      title: 'Max Baumann',
      meta: [
        {
          name: 'description',
          content:
            'My name is Max Baumann, I am a Software Engineer by heart for many years now and ' +
            'I like to tinker with all kinds of technology.',
        },
      ],
    };
  }
}
</script>

<style lang="scss">
@import '../assets/_anim.scss';
/* roboto-regular - latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url('../assets/fonts/roboto-v20-latin-regular.eot'); /* IE9 Compat Modes */
  src: local('Roboto'), local('Roboto-Regular'),
    url('../assets/fonts/roboto-v20-latin-regular.eot?#iefix')
      format('embedded-opentype'),
    /* IE6-IE8 */ url('../assets/fonts/roboto-v20-latin-regular.woff2')
      format('woff2'),
    /* Super Modern Browsers */
      url('../assets/fonts/roboto-v20-latin-regular.woff') format('woff'),
    /* Modern Browsers */ url('../assets/fonts/roboto-v20-latin-regular.ttf')
      format('truetype'),
    /* Safari, Android, iOS */
      url('../assets/fonts/roboto-v20-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */
}
/* roboto-slab-regular - latin */
@font-face {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url('../assets/fonts/roboto-slab-v11-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
    url('../assets/fonts/roboto-slab-v11-latin-regular.eot?#iefix')
      format('embedded-opentype'),
    /* IE6-IE8 */ url('../assets/fonts/roboto-slab-v11-latin-regular.woff2')
      format('woff2'),
    /* Super Modern Browsers */
      url('../assets/fonts/roboto-slab-v11-latin-regular.woff') format('woff'),
    /* Modern Browsers */
      url('../assets/fonts/roboto-slab-v11-latin-regular.ttf')
      format('truetype'),
    /* Safari, Android, iOS */
      url('../assets/fonts/roboto-slab-v11-latin-regular.svg#RobotoSlab')
      format('svg'); /* Legacy iOS */
}

/* roboto-slab-800 - latin */
@font-face {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-display: swap;
  font-weight: 800;
  src: url('../assets/fonts/roboto-slab-v11-latin-800.eot'); /* IE9 Compat Modes */
  src: local(''),
    url('../assets/fonts/roboto-slab-v11-latin-800.eot?#iefix')
      format('embedded-opentype'),
    /* IE6-IE8 */ url('../assets/fonts/roboto-slab-v11-latin-800.woff2')
      format('woff2'),
    /* Super Modern Browsers */
      url('../assets/fonts/roboto-slab-v11-latin-800.woff') format('woff'),
    /* Modern Browsers */ url('../assets/fonts/roboto-slab-v11-latin-800.ttf')
      format('truetype'),
    /* Safari, Android, iOS */
      url('../assets/fonts/roboto-slab-v11-latin-800.svg#RobotoSlab')
      format('svg'); /* Legacy iOS */
}

html {
  scroll-behavior: smooth;
}
body {
  overflow-x: hidden;
  padding: 0;
  margin: 0;
  background: #f8f8f8;
  font-family: 'Roboto', sans-serif;
}

h1,
h2 {
  font-family: 'Roboto Slab', serif;
  margin: 0;
}

h1 {
  font-size: 80px;
  font-weight: 800;

  @media (max-width: 1500px) {
    font-size: 65px;
  }

  @media (max-width: 1000px) {
    font-size: 50px;
  }
}

a {
  color: initial;
}
</style>
