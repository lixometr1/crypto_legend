<template>
  <component
    :is="tag"
    v-on="$listeners"
    v-bind="$attrs"
    class="app-button"
    :class="[`color-${type}`, `size-${size}`]"
    ><slot
  /></component>
</template>

<script>
export default {
  props: {
    // primary, primary-stroke, blur
    type: {
      type: String,
      default: "primary"
    },
    tag: {
      type: String,
      default: "a"
    },
    // lg, md, sm
    size: {
      type: String,
      default: "lg"
    }
  }
};
</script>

<style lang="postcss">
.app-button {
  @apply h-10  inline-flex items-center justify-center 
        text-center font-main text-sm uppercase transition-all sm:text-[0.625rem]
        xxs:h-8;
  letter-spacing: 1.6px;
  @screen sm {
    letter-spacing: 1.1px;
  }
  &.size-lg {
    @apply w-[18.5rem] lg:w-[17rem] md:w-[15rem] sm:w-[8.625rem];
  }
  &.size-md {
    @apply w-[15.625rem];
  }
  &.size-sm {
    @apply w-[11.25rem];
  }
  &.color-primary {
    @apply text-white bg-primary hover:shadow-main;
    &:active {
      box-shadow: 0px 0px 50px theme("colors.primary"),
        inset 0px 4px 50px rgba(theme("colors.primary"), 0.3);
    }
  }
  &.color-primary-stroke {
    @apply text-primary border border-primary hover:text-white hover:bg-primary;
  }
  &.color-blur {
    @apply text-white border border-white bg-white bg-opacity-10 backdrop-filter backdrop-blur-md hover:bg-opacity-100 hover:text-primary;
  }
}
</style>
