<template>
  <div class="card">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Card extends Vue {}
</script>

<style lang="scss" scoped>
.card {
  width: 35rem;
  background: white;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.5);
  border-radius: 0.4rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
  margin-bottom: 1rem;

  p {
    padding: 0 1rem 1rem;
  }

  img {
    width: 100%;
    padding: 1rem;
    border-radius: 1.5rem;
  }

  h2 {
    font-size: 2rem;
    padding-top: 1rem;
    text-align: center;
  }
}
</style>
