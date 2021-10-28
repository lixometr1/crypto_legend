<template>
  <a href="javascript:void(0)" class="scroll-down" @click.prevent>
    <svgScrollDown width="40" />
  </a>
</template>

<script>
import svgScrollDown from "@/assets/icons/arrow_down_double.svg?inline";
export default {
  components: { svgScrollDown },
};
</script>

<style lang="postcss">
.scroll-down {
  @apply absolute left-1/2 transform -translate-x-1/2 bottom-16 xl:hidden text-white;
}
</style>
