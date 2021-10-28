<template>
  <div class="home-nft-slider-wrapper">
    <div class="home-nft-slider__image">
      <transition @enter="imageEnter" @leave="imageLeave" mode="out-in">
        <img :src="activeImage" alt="" :key="activeImageIdx" />
      </transition>
    </div>
    <div
      class="home-nft-slider__thumbs swiper-container"
      v-swiper="swiperOptions"
    >
      <div class="swiper-wrapper">
        <div
          class="swiper-slide home-nft-slider__thumb"
          v-for="(item, idx) in items"
          :key="idx"
        >
          <img :src="item.image" alt="image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    imageEnter(el, done) {
      gsap.from(el, {
        scale: 0,
        duration: 0.4,
        ease: "Bounce.easeOut",
        onComplete: () => done()
      });
    },
    imageLeave(el, done) {
      gsap.to(el, {
        scale: 0,
        duration: 0.4,
        ease: "Expo.easeOut",

        onComplete: () => done()
      });
    }
  },
  data() {
    const vm = this;
    return {
      activeImageIdx: 0,
      swiperOptions: {
        direction: "vertical",
        slidesPerView: "auto",
        spaceBetween: 4,
        threshold: 5,
        breakpoints: {
          992: {
            spaceBetween: 15
          },
          768: {
            spaceBetween: 6
          }
        },
        on: {
          click() {
            if (typeof this.clickedIndex === "number") {
              vm.activeImageIdx = this.clickedIndex;
            }
          }
        }
      }
    };
  },
  computed: {
    activeImage() {
      return this.items[this.activeImageIdx]?.image;
    }
  }
};
</script>

<style lang="postcss">
.home-nft-slider {
  &-wrapper {
    @apply flex items-stretch space-x-4 h-[485px] xl:h-[400px] md:h-[315px] sm:h-[215px] xs:h-[150px] sm:space-x-2;
  }

  &__image {
    @apply h-full w-[485px] xl:w-[400px] flex-center bg-white bg-opacity-5 backdrop-filter backdrop-blur-[20px]
        rounded-md border border-white border-opacity-40 p-9 md:w-full md:p-16 sm:p-10;
    img {
      @apply w-full max-h-full object-contain;
    }
  }
  &__thumbs {
    @apply w-[4.375rem] flex-shrink-0 mb-[-15px] lg:w-[4rem] md:w-14 md:mb-[-6px] sm:mb-[-4px] sm:w-9 xs:w-7 ;
  }
  &__thumb {
    @apply p-2.5 flex-auto w-full h-[4.375rem] rounded-md border border-white border-opacity-20 flex-center
        bg-white bg-opacity-5 backdrop-blur-[50px] cursor-pointer md:p-1 sm:rounded-sm;
  }
}
</style>
