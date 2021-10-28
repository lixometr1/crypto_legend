<template>
  <div class="nav-bar-burger">
    <ABurger class="" />
  </div>
</template>

<script>
import svgBurger from "@/assets/icons/burger.svg?inline";
export default {
  components: { svgBurger },
  data: () => ({}),
  methods: {}
};
</script>

<style lang="postcss">
.nav-bar-burger {
  @apply h-[5.5rem] border-b border-white flex-center  relative z-300;
}
</style>
