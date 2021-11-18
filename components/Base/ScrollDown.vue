<template>
  <a
    href="javascript:void(0)"
    class="scroll-down"
    @click.prevent
    v-on="$listeners"
  >
    <svgScrollDown width="40" />
    <span v-if="text"> {{ text }}</span>
  </a>
</template>

<script>
import svgScrollDown from "@/assets/icons/arrow_down_double.svg?inline";
export default {
  props: {
    text: String
  },
  components: { svgScrollDown }
};
</script>

<style lang="postcss">
.scroll-down {
  @apply absolute left-1/2 transform -translate-x-1/2 bottom-16  text-white flex-center
    md:flex-col;
  svg {
    @apply xl:w-4 md:order-2  md:w-3 sm:w-2.5;
  }
  span {
    @apply ml-2 uppercase text-lg font-bold sm:text-[10px] md:order-1 md:ml-0 md:mb-2;
  }
}
</style>
