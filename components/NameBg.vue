<template>
  <span id="name-bg" aria-hidden="true">Max Baumann</span>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class NameBg extends Vue {}
</script>

<style lang="scss" scoped>
#name-bg {
  position: absolute;
  font-size: 10rem;
  top: 8vh;
  left: 4%;
  z-index: 1;
  font-weight: 800;
  text-transform: uppercase;
  width: 13rem;
  word-break: break-all;
  font-family: sans-serif;
  text-align: center;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  color: #f8f8f8;
  opacity: 0.4;
  line-height: 11rem;
  user-select: none;

  @media (max-width: 750px) {
    display: none;
  }
}
</style>
