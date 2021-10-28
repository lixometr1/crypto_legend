<template>
  <div class="blog-slider">
    <div class="swiper-container blog-slider-slider">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, idx) in items" :key="idx">
          <BlogCard v-bind="item" />
        </div>
      </div>
    </div>
    <div class="blog-slider__arrow blog-slider__arrow-prev">
      <svgArrowLeft />
    </div>
    <div class="blog-slider__arrow blog-slider__arrow-next">
      <svgArrowRight />
    </div>
  </div>
</template>

<script>
import svgArrowLeft from "@/assets/icons/arrow_left.svg?inline";
import svgArrowRight from "@/assets/icons/arrow_right.svg?inline";
import blogItems from "./blog-data";
import Swiper from "swiper";
export default {
  components: { svgArrowLeft, svgArrowRight },

  // props: {
  //   items: {
  //     type: Array,
  //     default: () => []
  //   }
  // },
  beforeDestroy() {
    this.destroySlider(false);
  },
  mounted() {
    const checkSlider = e => {
      if (window.innerWidth < 992) {
        this.destroySlider(true);
      } else {
        this.initSlider();
      }
    };
    checkSlider();
    window.addEventListener("resize", checkSlider);
  },
  data: () => ({
    items: blogItems,
    swiperOptions: {
      slidesPerView: 3,
      spaceBetween: 40,
      cleanupStylesOnDestroy: false,
      navigation: {
        nextEl: ".blog-slider__arrow-next",
        prevEl: ".blog-slider__arrow-prev"
      },
      breakpoints: {
        1920: {
          spaceBetween: 100
        }
      }
    }
  }),
  methods: {
    initSlider() {
      if (this.slider) return;
      this.slider = new Swiper(".blog-slider-slider", {
        ...this.swiperOptions
      });
    },
    destroySlider(cleanStyles) {
      if (this.slider) {
        this.slider.destroy(false, cleanStyles);
        this.slider = null;
      }
    }
  }
};
</script>

<style lang="postcss">
.blog-slider {
  @apply relative;
  .swiper-wrapper {
    @apply md:flex-col md:items-stretch;
  }
  .swiper-slide {
    @apply md:mb-7;
  }
  &__arrow {
    @apply absolute top-1/2 transform -translate-y-1/2 text-white md:hidden;
    svg {
      @apply w-5;
    }
  }
  &__arrow-next {
    @apply -right-4 translate-x-full;
  }
  &__arrow-prev {
    @apply -left-4 -translate-x-full;
  }
}
</style>
