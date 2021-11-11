<template>
  <div class="preloader-progress__wrapper">
    <div class="preloader-progress__title">
      LOADING
    </div>
    <div class="preloader-progress">
      <div
        class="preloader-progress__active"
        :style="{ width: progress + '%' }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loaded: {
      type: Boolean,
      default: false
    },
    progress: Number
  }
};
</script>

<style lang="postcss">
.preloader-progress {
  @apply h-[5px] w-[370px] bg-white xs:w-[285px];
  &__wrapper {
  }
  &__active {
    @apply bg-primary h-full;
  }
  &__title {
    @apply mb-4 text-5xl font-semibold text-center xs:text-3xl;
    letter-spacing: 25px;
  }
}
</style>
