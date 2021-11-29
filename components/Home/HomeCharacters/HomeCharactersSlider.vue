<template>
  <div class="home-characters-slider">
    <div class="swiper-container" ref="sliderContainer">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide home-characters-slider__item"
          v-for="(item, idx) in items"
          :key="idx"
        >
          <div class="home-characters-slider__item-bg"></div>
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
        slidesPerView: "auto",
        centeredSlides: true,
        centeredSlidesBounds: false,
        slideToClickedSlide: true,
        spaceBetween: 20,
        threshold: 5,
        direction: "vertical",
        on: {
          slideChange() {
            vm.$emit("input", this.realIndex);
          },
          touchMove(e) {
            // console.log('top', e)
            e.stopPropagation();
          },
          touchEnd(e) {
            e.stopPropagation();
          },
          touchStart(e) {
            e.stopPropagation();
          },
          sliderMove(e) {
            e.stopPropagation();
          }
        }
      }
    };
  }
};
</script>

<style lang="postcss">
.home-characters-slider {
  @apply h-[580px] w-[8rem];
  @media screen and (min-width: theme("screens.xl.max")) {
    @apply absolute right-24 top-1/2 transform -translate-y-1/2;
  }
  .swiper-container {
    @apply max-h-full;
  }
  .swiper-wrapper {
    @apply items-center;
  }
  &__item {
    @apply bg-opacity-20 bg-white backdrop-filter backdrop-blur-[20px] opacity-20 w-[5.5rem] h-[5.5rem] 
    transition-all relative cursor-pointer rounded-md overflow-hidden md:w-[5rem] md:h-[5rem] !important;
    img {
      @apply object-contain absolute inset-0 w-full h-full z-30;
    }
    &-bg {
      @apply opacity-0 absolute z-10 bottom-0 left-1/2 transform -translate-x-1/2 w-[70px] h-[70px] filter blur-[50px] bg-primary;
    }
    &.swiper-slide-active {
      @apply opacity-100 w-[8rem] h-[8rem] md:w-[6.5rem] md:h-[6.5rem] !important;
    }
    &.swiper-slide-active & {
      &-bg {
        @apply opacity-100;
      }
    }
    &.swiper-slide-prev,
    &.swiper-slide-next {
      @apply opacity-50 md:opacity-100 !important;
    }
  }
}
</style>
