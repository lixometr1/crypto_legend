<template>
  <div class="nav-bar-progress">
    <div class="nav-bar-progress__line">
      <div
        class="nav-bar-progress__active"
        :class="{ 'transition-all duration-500': hasTransition }"
        :style="{ height: progress + '%' }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    progress: Number
  },
  data: () => ({
    hasTransition: false
  }),
  beforeMount() {
    this.$nuxt.$on("nav:transition", val => {
      this.hasTransition = val;
    });
  }
};
</script>

<style lang="postcss">
.nav-bar-progress {
  @apply flex-1 flex-center;
  &__line {
    @apply h-[344px] w-[3px] bg-[#858585];
  }
  &__active {
    @apply w-full bg-white ;
  }
}
</style>
