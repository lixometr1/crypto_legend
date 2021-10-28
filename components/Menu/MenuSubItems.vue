<template>
  <div class="menu-sub-items">
    <div class="menu-item menu-sub-items__header" @click="$emit('back')">
      <svgArrowLeft width="14"/>{{ name }}
    </div>
    <MenuItems class="h-full" :items="items" />
  </div>
</template>

<script>
import svgArrowLeft from "@/assets/icons/arrow_left_double.svg?inline";
export default {
  components: { svgArrowLeft },
  props: {
    name: String,
    items: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="postcss">
.menu-sub-items {
  @apply overflow-hidden;
  &__header {
    @apply font-bold cursor-pointer;
    svg {
      @apply ml-0 mr-3 transition-all hidden md:block;
    }
    &:hover {
      svg {
        @apply text-primary;
      }
    }
  }
}
</style>
