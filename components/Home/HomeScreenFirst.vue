<template>
  <div class="home-screen-first home-screen" id="first-screen" ref="container">
    <div class="container relative z-20">
      <div class="home-screen-first__inner">
        <div class="home-screen-first__title">
          <img src="@/assets/img/first_logo.svg" alt="" />
        </div>
        <div class="home-screen-first__buttons">
          <a-button
            href="https://gleam.io/21TP6/airdrop"
            target="_blank"
            type="primary"
            size="lg"
            class="home-screen-first__btn home-screen-first__btn-primary"
            >Join Airdrop</a-button
          >
          <a-button
            type="blur"
            href="https://www.youtube.com/watch?v=23OJEDvJ7nc"
            size="lg"
            class="home-screen-first__btn home-screen-first__btn-second"
            @click.prevent="openVideo"
          >
            <span>TRAILER</span>
          </a-button>
        </div>
      </div>
      <scroll-down text="about project" @click="scrollNext" />
    </div>
    <div class="home-screen-first__bg">
      <img
        src="@/assets/img/first_bg_front.png"
        alt="front"
        class="home-screen-first__bg-front"
      />
      <img
        src="@/assets/img/first_bg_back.png"
        alt="back"
        class="home-screen-first__bg-back"
      />
    </div>
  </div>
</template>

<script>
import AButton from "../AButton/AButton.vue";
import ScrollDown from "../Base/ScrollDown.vue";
import HomeSectionMixin from "@/components/Home/HomeSectionMixin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitTextJS from "split-text-js";
import { gsap } from "gsap";
export default {
  mixins: [HomeSectionMixin],
  components: { AButton, ScrollDown },
  mounted() {
    const tl = gsap.timeline();

    ScrollTrigger.create({
      animation: tl,
      start: "top 5%",
      trigger: ".home-screen-first"
    });
    this.paralax();
  },
  methods: {
    scrollNext() {
      this.$nuxt.$emit("scrollNextSection");
    },
    openVideo() {
      this.$nuxt.$emit("modal:show:video");
    },

    paralax() {
      const container = this.$refs.container;

      const parallaxIt = (e, target, movement) => {
        if (window.matchMedia("(max-width: 992px)").matches) return;
        const rect = container.getBoundingClientRect();
        const containerW = container.offsetWidth;
        const containerH = container.offsetHeight;
        var relX = e.pageX - rect.left;
        var relY = e.pageY - rect.top;

        gsap.to(target, {
          x: ((relX - containerW / 2) / containerW) * movement,
          y: ((relY - containerH / 2) / containerH) * movement,
          duration: 0.7
        });
      };
      container.addEventListener("mousemove", function(e) {
        // parallaxIt(e, ".home-screen-first__bg-front", 70);
        parallaxIt(e, ".home-screen-first__bg-back", -90);
      });
    }
  }
};
</script>

<style lang="postcss">
.home-screen-first {
  @apply flex overflow-hidden pt-[90px];
  /* background: url(~@/assets/img/first_bg.jpeg) center center no-repeat; */
  /* background-size: cover; */
  &__inner {
    @apply transform translate-x-[33px] md:transform-none;
  }
  &__title {
    @apply max-w-[750px] mt-[110px] mx-auto lg:w-[650px] xl:mt-[70px] md:w-[660px] md:mt-[70px] sm:mt-[20px] sm:w-full;
  }
  &__buttons {
    @apply flex-center mt-8 w-full space-x-12  xs:space-x-2 md:transform md:translate-x-[5px];
  }
  &__bg {
    @apply absolute inset-0 z-0;
    &-front,
    &-back {
      @apply absolute inset-0 object-cover h-full w-full transform scale-110;
    }
    &-front {
      @apply z-20;
    }
    &-back {
      @apply z-10;
    }
  }
  &__btn.app-button {
    @apply h-[40px] w-[220px] font-semibold text-lg md:w-[180px] md:h-[35px] md:text-sm sm:w-[150px] sm:h-[30px] sm:text-xs;
    letter-spacing: 3.6px;
    box-shadow: 0px 20px 15px -15px rgba(0, 0, 0, 0.3);
  }
  &__btn {
    &-primary {
      @apply text-white !important;
      background: linear-gradient(
        91.8deg,
        rgba(196, 119, 81, 0.7) 0%,
        rgba(152, 113, 132, 0.7) 100%
      ) !important;
      box-shadow: 3px 16px 15px -15px rgba(0, 0, 0, 0.25) /* -2px -4px 15px rgba(255, 255, 255, 0.35)  */ !important;
      border-radius: 3px !important;
      &:hover {
        box-shadow: 0px 20px 25px -15px rgba(0, 0, 0, 0.45) !important;
        /* margin-bottom:-8px; */
        background: linear-gradient(
          91.8deg,
          rgba(196, 119, 81, 1) 0%,
          rgba(152, 113, 132, 1) 100%
        ) !important;
        @apply opacity-100;
        /* box-shadow: 3px 6px 15px -2px rgba(0, 0, 0, 0.25), -2px -4px 10px rgba(255, 255, 255, 0.2), -1px -1px 3px rgba(255, 255, 255, 0.35) !important; */
      }
    }
    &-second {
      @apply text-white border-none !important;
      background: rgba(255, 255, 255, 0.1) !important;
      box-shadow: 3px 16px 15px -15px rgba(0, 0, 0, 0.25) /* -2px -4px 15px rgba(255, 255, 255, 0.35)  */ !important;
      border-radius: 3px !important;
      &:hover {
        box-shadow: 0px 20px 25px -15px rgba(0, 0, 0, 0.45) !important;
        background: rgba(255, 255, 255, 0.65) !important;

        /* background: linear-gradient(91.8deg, rgba(196, 119, 81, 1) 0%, rgba(152, 113, 132, 1) 100%) !important; */
        /* margin-bottom:-8px; */
        @apply opacity-100;
        span {
          color: rgba(0, 0, 0, 0.75);
        }
      }
    }
  }
}
</style>
