<template>
  <div class="home-characters-slider">
    <div class="swiper-container" ref="sliderContainer">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide home-characters-slider__item"
          v-for="(item, idx) in items"
          :key="idx"
        >
          <img :src="item.preview" alt="character" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  props: {
    value: Number,
    items: {
      type: Array,
      default: () => []
    }
  },
  beforeDestroy() {
    this.slider.destroy(false, false);
  },
  mounted() {
    this.slider = new Swiper(this.$refs.sliderContainer, this.swiperOptions);
  },
  data() {
    const vm = this;
    return {
      swiperOptions: {
        direction: "horizontal",
        slidesPerView: "auto",
        centeredSlides: true,
        centeredSlidesBounds: false,
        slideToClickedSlide: true,
        spaceBetween: 35,
        threshold: 5,
        breakpoints: {
          992: {
            centeredSlidesBounds: false,

            direction: "vertical",
            spaceBetween: 20
          }
        },
        on: {
          slideChange() {
            vm.$emit("input", this.realIndex);
          }
        }
      }
    };
  }
};
</script>

<style lang="postcss">
.home-characters-slider {
  @apply h-[580px] w-[8rem] md:w-full md:h-auto;
  .swiper-container {
    @apply max-h-full;
  }
  .swiper-wrapper {
    @apply items-center;
  }
  &__item {
    @apply bg-opacity-20 bg-white backdrop-filter backdrop-blur-[20px] opacity-20 w-[5.5rem] h-[5.5rem] 
    transition-all relative cursor-pointer md:border md:border-primary md:opacity-100 !important;
    img {
      @apply object-contain absolute inset-0 w-full h-full;
    }
    &.swiper-slide-active {
      @apply opacity-100 w-[8rem] h-[8rem] md:w-[5.5rem]  md:h-[5.5rem] !important;
    }
    &.swiper-slide-prev,
    &.swiper-slide-next {
      @apply opacity-50 md:opacity-100 !important;
    }
  }
}
</style>
