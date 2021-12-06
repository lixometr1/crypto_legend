<template>
  <header class="header" :class="{ 'menu-open': menuOpen }">
    <div class="container">
      <div class="header__row">
        <router-link to="/">
          <Logo />
        </router-link>
        <AHeaderMenu v-if="showMenu" class="header__menu" />
        <AHeaderBurger />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    showMenu: true,
    menuOpen: false
  }),
  mounted() {
    this.checkMenu();
  },
  beforeMount() {
    this.$nuxt.$on("header:hide", () => {
      this.menuOpen = true;
    });
    this.$nuxt.$on("header:show", () => {
      this.menuOpen = false;
    });
  },
  methods: {
    checkMenu() {
      if (this.$route.name === "index") {
        this.showMenu = true;
      } else {
        this.showMenu = false;
      }
    }
  },
  watch: {
    $route() {
      this.checkMenu();
    }
  }
};
</script>

<style lang="postcss">
.header {
  @apply py-5 fixed left-0 right-0 top-0 z-100 md:z-300 transition-transform duration-300;
  &.menu-open {
    @apply transform -translate-y-full;
  }
  &__row {
    @apply flex-y-center md:justify-between;
  }
  &__menu {
    @apply mx-auto lg:hidden;
  }
}
</style>
