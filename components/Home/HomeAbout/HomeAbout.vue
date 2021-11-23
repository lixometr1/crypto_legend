<template>
  <div class="home-about home-screen" id="about" ref="container">
    <div class="container h-full">
      <three-slider :items="imageSlider" ref="slider" />
      <div class="home-about__content">
        <div class="home-about__inner">
          <div class="home-about__texts">
            <transition @enter="onEnter" @leave="onLeave" mode="out-in">
              <TextBlock
                :title="activeSlideData.title"
                ref="textBlock"
                :key="activeSlide"
              >
                <template #description>
                  <div>
                    <ul class="home-about__list">
                      <li
                        class="home-about__list-item"
                        v-for="(item, idx) in activeSlideData.description"
                        :key="idx"
                      >
                        <svgListIcon />
                        <span>{{ item }}</span>
                      </li>
                    </ul>
                  </div>
                </template>
              </TextBlock>
            </transition>
          </div>
          <div class="home-about__progress">
            <div class="home-about__progress-num">0{{ activeSlide + 1 }}</div>
            <div class="home-about__progress-line">
              <div
                class="home-about__progress-active"
                :style="{ width: progress + '%' }"
              ></div>
            </div>

            <div class="home-about__progress-num">0{{ totalSlides }}</div>
          </div>
        </div>
        <scroll-down text="roadmap" @click="scrollNext" />
      </div>
    </div>
  </div>
</template>

<script>
import AButton from "../../AButton/AButton.vue";
import ScrollDown from "../../Base/ScrollDown.vue";
import ThreeSlider from "../../ThreeSlider/ThreeSlider.vue";
import HomeSectionMixin from "@/components/Home/HomeSectionMixin";
import slidesData from "./home-about-data";
import { gsap } from "gsap";
import SplitTextJS from "split-text-js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import svgListIcon from "@/assets/icons/list_icon.svg?inline";
export default {
  mixins: [HomeSectionMixin],
  components: { AButton, ScrollDown, ThreeSlider, svgListIcon },
  data: () => ({
    slides: slidesData,
    activeSlide: 0,
    isAnimating: false
  }),
  mounted() {},
  computed: {
    progress() {
      return ((this.activeSlide + 1) / this.totalSlides) * 100;
    },
    activeSlideData() {
      return this.slides[this.activeSlide];
    },
    totalSlides() {
      return this.slides.length;
    },
    imageSlider() {
      return this.slides.map(slide => slide.image);
    }
  },
  methods: {
    scrollNext() {
      this.$nuxt.$emit("scrollNextSection");
    },
    beforeEnter() {
      const tl = gsap.timeline();
      const title = this.$refs.container.querySelector(".text-block__title");
      const description = this.$refs.container.querySelector(
        ".text-block__description"
      );

      tl.from(title, {
        y: 50,
        opacity: 0
      });
      tl.from(
        description,
        {
          y: 50,
          opacity: 0
        },
        "-=0.4"
      );
      ScrollTrigger.create({
        trigger: ".home-about",
        start: "top 5%",
        animation: tl
      });
      this.$store.dispatch("changePrimaryColor", "#F32121");
    },
    onEnter(el, done) {
      const tl = gsap.timeline({ onComplete: done });
      tl.from(this.$refs.textBlock.$refs.title, {
        opacity: 0,
        x: -200,
        ease: "Power2.easeOut"
      });
      tl.from(
        this.$refs.textBlock.$refs.description,
        {
          opacity: 0,
          x: 200
        },
        "<"
      );
    },
    onLeave(el, done) {
      const tl = gsap.timeline({ onComplete: done });
      tl.to(this.$refs.textBlock.$refs.title, {
        opacity: 0,
        x: 200
      });
      tl.to(
        this.$refs.textBlock.$refs.description,
        {
          opacity: 0,
          x: -200
        },
        "<"
      );
    },
    async slideNext() {
      if (this.isAnimating) return;
      this.isAnimating = true;
      this.activeSlide++;
      await this.$refs.slider.slideNext();
      this.isAnimating = false;
    },
    async slidePrev() {
      if (this.isAnimating) return;
      this.isAnimating = true;

      this.activeSlide--;
      await this.$refs.slider.slidePrev();
      this.isAnimating = false;
    },
    beforeLeaveDown() {
      if (this.activeSlide < this.slides.length - 1) {
        this.slideNext();

        return false;
      }

      return true;
    },
    beforeLeaveUp() {
      if (this.activeSlide > 0) {
        this.slidePrev();

        return false;
      }
      return true;
    }
  }
};
</script>

<style lang="postcss">
.home-about {
  &__content {
    @apply relative z-30 flex flex-col justify-center items-end h-full xs:items-start;
  }
  &__inner {
    @apply max-w-[560px];
  }
  &__texts {
    &-title {
      @apply mb-3;
    }
  }
  &__progress {
    @apply flex-y-center w-[350px] font-semibold mt-8 md:w-full;
    &-line {
      @apply bg-white bg-opacity-50 flex-1 h-[3px] mx-2.5;
    }
    &-active {
      @apply bg-primary h-full bg-opacity-100 transition-all duration-500;
    }
  }
  &__list {
    @apply space-y-4;
    &-item {
      @apply flex-y-center;
      svg {
        @apply block w-6 mr-2 flex-shrink-0;
      }
    }
  }
}
</style>
