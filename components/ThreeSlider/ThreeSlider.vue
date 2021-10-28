<template>
  <div class="three-slider" ref="el">
    <img
      class="three-slider__image"
      :class="{ one: items.length < 2 }"
      :src="img"
      alt="image"
      v-for="(img, idx) in items"
      :key="idx"
      ref="image"
    />
  </div>
</template>

<script>
import { DisplacementSlider } from "./three-slider-class";
import imagesLoaded from "imagesloaded";
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    imagesLoaded(document.querySelectorAll(".three-slider__image"), () => {
      document.body.classList.remove("loading");

      const el = this.$refs.el;
      const imgs = Array.from(el.querySelectorAll(".three-slider__image"));
      if (imgs.length < 2) return;
      this.slider = new DisplacementSlider({
        parent: el,
        images: imgs
      });
    });
  },
  methods: {
    async slideNext() {
      await this.slider.slideNext();
    },
   async slidePrev() {
      await this.slider.slidePrev();
    }
  }
};
</script>

<style lang="postcss">
.three-slider {
  @apply absolute top-0 left-0 right-0 bottom-0 z-[-1];
  img {
    @apply object-cover max-w-none w-full h-auto invisible z-[-1];
    &.one {
      @apply visible w-full h-full;
    }
  }
  canvas {
    @apply z-20 absolute inset-0; 
  }
}
</style>
