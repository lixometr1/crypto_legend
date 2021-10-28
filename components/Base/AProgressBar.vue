<template>
  <div class="app-progress-bar">
    <div
      class="app-progress-bar__active"
      :style="{ width: progress + '%' }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    progress: Number
  }
};
</script>

<style lang="postcss">
.app-progress-bar {
  @apply bg-white bg-opacity-50 h-[3px];
  &__active {
    @apply bg-primary h-full;
  }
}
</style>
