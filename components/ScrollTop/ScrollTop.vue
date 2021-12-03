<template>
  <a href="javascript:void(0)" class="scroll-top" @click.prevent="scrollTop">
    <svgScrollTop width="50" />
  </a>
</template>

<script>
import svgScrollTop from "@/assets/icons/scroll-top.svg?inline";
export default {
  components: { svgScrollTop },
  methods: {
    scrollTop() {
      this.$locoScroll.scrollTo(0, {
        duration: 500
      });
    }
  }
};
</script>

<style lang="postcss">
.scroll-top {
  @apply text-primary fixed bottom-4 shadow-primary;
}
</style>
