<template>
  <div>
    <Preloader />
    <AHeader />
    <div data-scroll-container class="smooth-scroll">
      <transition @enter="onEnter" @leave="onLeave" mode="out-in">
        <nuxt-child class="page-wrapper" :key="childKey" />
      </transition>
      <AFooter />
    </div>
    <Menu />
    <NavBar />
    <VideoModal />
  </div>
</template>

<script>
import { gsap } from "gsap";
export default {
  computed: {
    childKey() {
      return this.$route.fullPath;
    }
  },
  mounted() {
    this.$nuxt.$on("loco:update", () => {
      this.$locoScroll.update();
    });
  },
  methods: {
    onEnter(el, done) {
      const tl = gsap.timeline({
        onComplete: done
      });

      tl.from(el, {
        opacity: 0,
        x: 300
      });
    },
    onLeave(el, done) {
      const tl = gsap.timeline({ onComplete: done });
      tl.to(el, {
        opacity: 0
      });
    }
  }
};
</script>

<style lang="postcss">
.smooth-scroll {
  @apply flex items-stretch flex-col;
  .page-wrapper {
    @apply flex-1;
  }
}
</style>
