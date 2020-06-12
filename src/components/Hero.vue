<template>
  <section id="hero">
    <div id="hero-left">
      <div>
        <h1>
          <span id="hey">Hey!</span><br />
          <span id="max">I'm Max</span>
        </h1>
        <h2>Web Developer</h2>
        <Button>Read more</Button>
      </div>
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

<style lang="scss" scoped>
#hero {
  width: 100%;
  height: 100vh;
  display: flex;
  #hero-left,
  #hero-right {
    width: 50%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

#hey {
  font-size: 80px;
}
#max {
  font-size: 144px;
}
</style>
