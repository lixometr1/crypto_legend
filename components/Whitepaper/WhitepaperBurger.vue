<template>
  <div class="whitepaper-burger" :class="{ open: isOpen }" @click="toggleMenu">
    <svgClose width="16" v-if="isOpen" />
    <svgBurger width="28" v-else />
  </div>
</template>

<script>
import svgBurger from "@/assets/icons/whitepaper_burger.svg?inline";
import svgClose from "@/assets/icons/whitepaper_close.svg?inline";
export default {
  components: { svgBurger, svgClose },
  data: () => ({
    isOpen: false
  }),
  methods: {
    toggleMenu() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    },
    open() {
      this.$nuxt.$emit("whitepaper:menu:open");
      this.isOpen = true;
    },
    close() {
      this.$nuxt.$emit("whitepaper:menu:close");
      this.isOpen = false;
    }
  }
};
</script>

<style lang="postcss">
.whitepaper-burger {
  @apply hidden md:flex w-[50px] h-[38px] bg-[#1F1E23] items-center justify-center rounded-md cursor-pointer;
  span {
    @apply w-7 h-1 bg-white;
  }
  &.open {
    @apply bg-white text-black;
  }
}
</style>
