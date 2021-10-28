<template>
  <a
    href="javascript:void(0)"
    class="round-icon"
    :class="{ active }"
    v-on="$listeners"
    v-bind="$attrs"
  >
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    active: Boolean
  }
};
</script>

<style lang="postcss">
.round-icon {
  @apply flex-center w-10 h-10 block bg-white bg-opacity-20 backdrop-filter backdrop-blur-[20px] rounded-full hover:bg-opacity-100 hover:bg-[#6E6E6E] transition-all;
  &.active {
    @apply bg-[#6E6E6E] bg-opacity-100;
  }
}
</style>
