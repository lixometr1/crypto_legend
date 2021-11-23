<template>
  <div class="home-screen-first home-screen" id="first-screen" ref="container">
    <div class="container relative z-20">
      <div class="home-screen-first__inner">
        <div class="home-screen-first__title">
          <img src="@/assets/img/first_logo.svg" alt="" />
        </div>
        <div class="home-screen-first__buttons">
          <a-button
            type="primary"
            size="lg"
            class="home-screen-first__btn home-screen-first__btn-primary"
            >SUBSCRIBE</a-button
          >
          <a-button
            type="blur"
            size="lg"
            class="home-screen-first__btn home-screen-first__btn-secon"
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
  }
  &__title {
    @apply max-w-[1000px] mt-[110px] mx-auto lg:w-[680px] md:w-[660px] md:mt-[80px] sm:w-full;
  }
  &__buttons {
    @apply flex-center mt-8 w-full space-x-12  xs:space-x-2;
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
      @apply text-[#010103] !important;
      background: linear-gradient(91.8deg, #c47751 0%, #987184 100%);
    }
    &-second {
      @apply text-white border-2 border-white !important;
    }
  }
}
</style>
