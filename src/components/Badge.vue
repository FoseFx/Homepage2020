<template>
  <img :alt="alt" :src="'https://img.shields.io/badge/' + path" />
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Badge extends Vue {
  @Prop() path!: string;
  @Prop() alt!: string;
}
</script>

<style lang="scss" scoped>
img {
  padding: 0 !important;
  padding-top: 0.3rem !important;
  padding-bottom: 0.3rem !important;
  margin-left: 4px;
  margin-right: 4px;
  width: auto !important;
  border-radius: 0 !important;
}
</style>
