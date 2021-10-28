<template>
  <div class="app-burger" @click="open">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
import svgBurger from "@/assets/icons/burger.svg?inline";
export default {
  components: { svgBurger },
  data: () => ({
    isOpen: false
  }),
  mounted() {
    this.$nuxt.$on("menu:open", () => {
      this.isOpen = true;
    });
    this.$nuxt.$on("menu:close", () => {
      this.isOpen = false;
    });
  },

  methods: {
    toggle() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    },
    open() {
      this.$nuxt.$emit("menu:open");
    },
    close() {
      this.$nuxt.$emit("menu:close");
    }
  }
};
</script>

<style lang="postcss">
.app-burger {
  @apply cursor-pointer space-y-[3px] w-7 h-full flex-center flex-col;
  span {
    @apply block bg-white h-[4px] w-full;
  }
}
</style>
