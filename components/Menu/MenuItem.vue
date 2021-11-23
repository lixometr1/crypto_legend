<template>
  <a
    class="menu-item"
    href="javascript:void(0)"
    :class="{ active }"
    v-on="$listeners"
  >
    {{ name }} <svgArrowRight width="14" v-if="hasChildren" />
  </a>
</template>

<script>
import svgArrowRight from "@/assets/icons/arrow_right_double.svg?inline";
export default {
  components: { svgArrowRight },
  props: {
    name: String,
    children: {
      type: Array,
      default: () => []
    },
    active: Boolean
  },
  computed: {
    hasChildren() {
      return this.children.length > 0;
    }
  }
};
</script>

<style lang="postcss">
.menu-item {
  @apply relative py-4.5 text-2xl flex items-center w-[290px] hover:text-primary transition-colors xs:w-full;
  svg {
    @apply ml-auto;
  }
  &.active {
    svg {
      @apply text-primary;
    }
  }
  &:first-child {
    &::before {
      content: "";
      @apply absolute top-0 left-0 right-0 w-full h-[1px];
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.2) 0%,
        rgba(255, 255, 255, 0)
      );
    }
  }
  &::after {
    content: "";
    @apply absolute bottom-0 left-0 right-0 w-full h-[1px];
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0)
    );
  }
}
</style>
