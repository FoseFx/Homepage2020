<template>
  <button @click="click" @keydown.enter="click" @keydown.space="click">
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "nuxt-property-decorator";

@Component
export default class Button extends Vue {
  @Emit("click")
  private click(e: Event): Event {
    return e;
  }
}
</script>

<style lang="scss" scoped>
button {
  border: none;
  background: #323232;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 20px;
  cursor: pointer;
}
</style>
