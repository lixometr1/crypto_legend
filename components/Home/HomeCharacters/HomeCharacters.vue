<template>
  <div class="home-characters home-screen" id="characters" ref="container">
    <div class="container h-full">
      <ThreeSlider :items="bgSlider" />
      <transition @enter="onEnter" @leave="onLeave" mode="out-in">
        <div class="home-characters__row" :key="activeFraction">
          <div class="home-characters__left">
            <HomeCharactersFractions v-model="activeFraction" />
            <HomeCharactersInfo
              v-bind="activeSlide"
              :animationKey="activeSlideIdx + activeFraction"
            />
          </div>
          <div class="home-characters__right">
            <HomeCharactersSlider
              :items="activeCharacters"
              v-model="activeSlideIdx"
            />
          </div>
          <ScrollDown />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { charactersData } from "./home-characters-data";
import HomeSectionMixin from "@/components/Home/HomeSectionMixin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
export default {
  mixins: [HomeSectionMixin],
  data() {
    return {
      bgSlider: [require("@/assets/img/characters_bg.png")],
      activeFraction: "water",
      activeSlideIdx: 0,
      items: charactersData
    };
  },
  computed: {
    activeSlide() {
      return this.activeFractionData?.items?.[this.activeSlideIdx];
    },
    activeFractionData() {
      return this.items[this.activeFraction];
    },
    activeCharacters() {
      return this.activeFractionData.items;
    }
  },
  mounted() {
    const tl = gsap.timeline();
    const title = this.$refs.container.querySelector(".text-block__title");
    const description = this.$refs.container.querySelector(
      ".text-block__description"
    );

    const fractions = this.$refs.container.querySelector(
      ".home-characters-fractions"
    );
    const skills = this.$refs.container.querySelector(
      ".home-characters-info__skills-items"
    );
    const slider = this.$refs.container.querySelector(
      ".home-characters-slider"
    );

    tl.from(fractions, {
      y: -50,
      opacity: 0
    });
    tl.from(
      title,
      {
        y: 50,
        opacity: 0
      },
      "-=0.3"
    );
    tl.from(
      description,
      {
        y: 50,
        opacity: 0
      },
      "-=0.4"
    );
    tl.from(
      skills,
      {
        x: -200,
        opacity: 0
      },
      "-=0.4"
    );
    tl.from(
      slider,
      {
        x: 100,
        opacity: 0
      },
      "-=0.4"
    );

    ScrollTrigger.create({
      trigger: ".home-characters",
      start: "top 5%",
      animation: tl
    });
  },
  methods: {
    beforeEnter() {
      this.$store.dispatch("changePrimaryColor", "#236FE1");
    },
    onEnter(el, done) {
      const tl = gsap.timeline({
        onComplete: done
      });
      tl.from(".home-characters-slider", {
        opacity: 0,
        x: 100
      });
    },
    onLeave(el, done) {
      const tl = gsap.timeline({
        onComplete: done
      });
      tl.to(".home-characters-slider", {
        opacity: 0,
        x: 100
      });
    }
  },
  watch: {
    activeFraction() {
      this.activeSlideIdx = 0;
      if (this.activeFractionData?.color) {
        this.$store.dispatch(
          "changePrimaryColor",
          this.activeFractionData.color
        );
      }
    }
  }
};
</script>

<style lang="postcss">
.home-characters {
  @apply md:pb-[100px];
  &__row {
    @apply flex-y-center justify-between h-full w-full md:flex-col md:justify-end md:items-stretch;
  }
  &__left {
    @apply flex flex-col items-stretch md:items-center;
  }
  &__right {
    @apply min-h-0;
  }
}
</style>
