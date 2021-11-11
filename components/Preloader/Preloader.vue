<template>
  <transition @enter="onEnter" @leave="onLeave">
    <div class="preloader" v-if="isShown">
      <video autoplay muted loop>
        <source src="@/assets/video/preloader.mp4" />
      </video>
      <div class="preloader-info">
        <div class="preloader-logo">
          <img src="@/assets/img/preloader_logo.png" alt="logo" />
        </div>

        <PreloaderProgress :progress="progress" />
      </div>
    </div>
  </transition>
</template>

<script>
import imagesloaded from "imagesloaded";
import { gsap } from "gsap";
export default {
  data: () => ({
    isShown: true,
    progress: 0
  }),
  mounted() {
    const resolvers = [];
    resolvers.push(this.imageResolver());
    resolvers.push(this.progressResolver());
    Promise.all(resolvers).then(() => {
      this.isShown = false;
    });
  },
  methods: {
    onEnter(el, done) {
      // const tl = gsap.timeline({ onComplete: done });
      done();
    },
    onLeave(el, done) {
      const tl = gsap.timeline({ onComplete: done });
      tl.to(".preloader video", {
        opacity: 0,
        x: -100
      });
      tl.to(".preloader-info", {
        x: 100,
        opacity: 0
      }, '<');
      tl.to(el, {
        xPercent: 100
        // opacity: 0
      });
    },
    imageResolver() {
      return new Promise(resolve => {
        imagesloaded(document.body, () => {
          resolve();
        });
      });
    },
    timerResolver() {
      return new Promise(resolve => {
        setTimeout(() => resolve(), 3000);
      });
    },
    progressResolver() {
      this.startProgressTimer();

      return new Promise(resolve => {
        imagesloaded(document.body, () => {
          clearInterval(this.progressTimer);
          this.startProgressEndTimer().then(() => {
            resolve();
          });
        });
      });
    },

    startProgress() {},
    easeOutCubic(x) {
      return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
    },
    startProgressTimer() {
      let t = 0;
      this.progressTimer = setInterval(() => {
        if (this.progress >= 70) {
          clearInterval(this.progressTimer);
          return;
        }
        this.progress = this.easeOutCubic(t) * 100;
        t += 0.006;
      }, 20);
    },
    startProgressEndTimer() {
      let t = 0;
      return new Promise(resolve => {
        this.progressEndTimer = setInterval(() => {
          if (this.progress >= 100) {
            clearInterval(this.progressEndTimer);
            resolve();
            return;
          }
          this.progress = this.easeOutCubic(t) * 100;
          t += 0.008;
        }, 20);
      });
    }
  }
};
</script>

<style lang="postcss">
.preloader {
  @apply fixed inset-0 h-full w-full z-400 bg-black;
  video {
    @apply absolute bottom-0 left-0 w-[80%] lg:w-[90%] min-w-[600px];
  }
  &-info {
    @apply absolute right-[200px] top-0 bottom-0 pt-[100px] pl-4
       flex-center flex-col 
      lg:right-auto lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:pt-0
      sm:justify-start sm:pt-[100px];
  }
  &-logo {
    @apply mb-12;
  }
}
</style>
