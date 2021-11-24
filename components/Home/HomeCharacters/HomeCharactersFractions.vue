<template>
  <div class="home-characters-fractions">
    <a
      href="javascript:void(0)"
      class="home-characters-fractions__item"
      :class="{ active: value === item.value }"
      v-for="(item, idx) in items"
      :key="idx"
      @click.prevent="selectItem(item.value)"
    >
      <compoent :is="item.icon" />
    </a>
  </div>
</template>

<script>
import svgLand from "@/assets/icons/fractions/land.svg?inline";
import svgAir from "@/assets/icons/fractions/air.svg?inline";
import svgFire from "@/assets/icons/fractions/fire.svg?inline";
import svgWater from "@/assets/icons/fractions/water.svg?inline";
import { gsap } from "gsap";
export default {
  components: { svgLand },
  data: () => ({
    items: [
      {
        icon: svgLand,
        value: "land"
      },
      {
        icon: svgAir,
        value: "air"
      },
      {
        icon: svgWater,
        value: "water"
      },
      {
        icon: svgFire,
        value: "fire"
      }
    ]
  }),
  props: {
    value: String
  },
  mounted() {
    
  },
  methods: {
    selectItem(value) {
      this.$emit("input", value);
    }
  }
};
</script>

<style lang="postcss">
.home-characters-fractions {
  @apply flex-y-center space-x-4.5 mb-16 xl:mb-4.5;
  &__item {
    @apply w-10 h-10 block bg-white bg-opacity-20 backdrop-filter backdrop-blur-[20px] rounded-full cursor-default transition-all;
    /* hover:bg-opacity-100 hover:bg-[#6E6E6E] transition-all */
    &.active {
      @apply bg-primary bg-opacity-100;
      box-shadow: 0px 0px 20px var(--color-primary);
    }
  }
}
</style>
