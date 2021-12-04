<template>
  <div class="whitepaper-content">
    <div v-html="content"></div>
    <WhitepaperControls class="mt-8" />
  </div>
</template>

<script>
export default {

  props: {
    content: String
  },
  beforeDestroy() {
    this.$nuxt.$off("whitepaper:select", this.scrollToSection);
  },
  mounted() {
    this.$nuxt.$emit("loco:update");

    this.$nuxt.$on("whitepaper:select", this.scrollToSection);
  },
  methods: {
    scrollToSection(id) {
      this.$locoScroll.scrollTo(`#${id}`);
    }
  }
};
</script>

<style lang="postcss">
.whitepaper-content {
  @apply max-w-[1000px] pl-[180px] xl:pl-[80px] md:pl-0;
  h2 {
    @apply mb-6;
  }
  img {
    @apply my-6 block w-full;
  }
  p {
    @apply block my-3;
  }
}
</style>
