<template>
  <a
    :href="href"
    :style="{ 'background-color': color, color: white ? 'white' : 'black' }"
  >
    <div v-if="title" class="title">{{ title }}</div>
    <slot />
  </a>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Badge extends Vue {
  @Prop({ type: String, required: true }) color!: string;
  @Prop({ type: Boolean, default: false }) white!: boolean;
  @Prop({ type: String, required: true }) href!: string;
  @Prop({ type: String, required: false }) title!: string;
}
</script>

<style lang="scss" scoped>
a {
  display: flex;
  font-weight: 800;
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  height: 2rem;
  box-shadow: 0 0 1px 0 black;
}
</style>
