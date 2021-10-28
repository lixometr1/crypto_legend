<template>
  <div class="home-screen-first home-screen" id="first-screen">
    <div class="container">
      <div class="home-screen-first__inner">
        <h1 ref="title">Crypto legend</h1>
        <div class="home-screen-first__buttons">
          <a-button type="primary" size="lg">go to play</a-button>
          <a-button type="blur" size="lg">
            <span class="sm:hidden">WATCH TRAILER</span>
            <span class="hidden sm:inline-block">WATCH VIDEO</span>
          </a-button>
        </div>
      </div>
      <scroll-down />
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
    const title = this.$refs.title;
    const splitTextTitle = new SplitTextJS(title);
    const tl = gsap.timeline();
    tl.from(splitTextTitle.chars, {
      stagger: 0.04,
      y: 50,
      opacity: 0
    });
    ScrollTrigger.create({
      animation: tl,
      start: "top 5%",
      trigger: ".home-screen-first"
    });
  }
};
</script>

<style lang="postcss">
.home-screen-first {
  @apply flex-center;
  background: url(~@/assets/img/first_bg.jpeg) center center no-repeat;
  background-size: cover;
  h1 {
    @apply uppercase text-center;
  }
  &__inner {
  }
  &__buttons {
    @apply flex-center mt-20 w-full space-x-12 xxs:flex-col xxs:items-center xxs:space-x-0 xxs:space-y-4;
  }
}
</style>
