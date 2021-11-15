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
  @apply h-[5px] w-[370px] bg-white 
  lg:w-[305px]
  md:w-[240px]
  sm:w-[220px]
   ;
  &__wrapper {
  }
  &__active {
    @apply bg-primary h-full;
  }
  &__title {
    @apply mb-4 text-5xl font-semibold text-center lg:text-[34px] md:text-[28px]
    sm:text-[24px];
    letter-spacing: 25px;
    @screen md {
      letter-spacing: 19px;
    }
  
  }
}
</style>
