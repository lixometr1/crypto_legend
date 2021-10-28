<template>
  <div class="header-burger">
    <ABurger v-if="showBurger" />
  </div>
</template>

<script>
export default {
  data: () => ({
    showBurger: true
  }),
  beforeMount() {
    this.$nuxt.$on("menu:open", () => {
      this.showBurger = false;
    });
    this.$nuxt.$on("menu:close", () => {
      this.showBurger = true;
    });
  }
};
</script>

<style lang="postcss">
.header-burger {
  @apply hidden md:block;
}
</style>
