<template>
  <div class="nav-bar" :class="{ 'is-hidden': isHidden }">
    <nav-bar-burger class="flex-shrink-0" />
    <nav-bar-progress class="flex-1" :progress="progress" />
    <nav-bar-soc />
  </div>
</template>

<script>
import NavBarBurger from "./NavBarBurger.vue";
import NavBarProgress from "./NavBarProgress.vue";
import NavBarSoc from "./NavBarSoc.vue";
export default {
  components: { NavBarSoc, NavBarBurger, NavBarProgress },
  data: () => ({
    progress: 0,
    isHidden: false
  }),
  mounted() {
    this.$nuxt.$on("nav:progress", val => {
      this.progress = val;
    });
    this.$nuxt.$on("menu:open", () => {
      this.isHidden = true;
    });
    this.$nuxt.$on("menu:afterClose", () => {
      this.isHidden = false;
    });
  },
  methods: {}
};
</script>

<style lang="postcss">
.nav-bar {
  @apply fixed top-0 h-screen right-0 w-navbar
    border-l border-white border-opacity-40
    backdrop-filter backdrop-blur-sm bg-black bg-opacity-10
    flex flex-col items-stretch z-300 md:hidden transition-transform duration-300 transform;
  &.is-hidden {
    @apply translate-x-full;
  }
}
</style>
