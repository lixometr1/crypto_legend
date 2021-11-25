<template>
  <a v-bind="$attrs" target="_blank" v-on="$listeners" class="soc-btn">
    <slot />
  </a>
</template>

<script>
export default {};
</script>

<style lang="postcss">
.soc-btn {
  @apply bg-primary rounded-full flex-center text-white
        w-[3rem] h-[3rem] p-4;
  svg {
    @apply w-full h-auto;
  }
}
</style>
