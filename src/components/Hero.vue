<template>
  <section id="hero">
    <div id="hero-left">
      <h1>
        <span>Hey!</span><br />
        <span>I'm Max</span>
      </h1>
      <h2>Web Developer</h2>
      <Button>Read more</Button>
    </div>
    <div id="hero-right">
      <Hand />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Button from "./Button.vue";
import Hand from "./Hand.vue";

@Component({
  components: {
    Button,
    Hand
  }
})
export default class Hero extends Vue {}
</script>

<style lang="scss" scoped></style>
