<template>
  <div>
    <transition @enter="onEnter" @leave="onLeave">
      <div class="video-modal" :class="{ open: isOpen }" v-if="isOpen">
        <svgCross @click="closeModal" class="video-modal__close" />
        <div class="video-modal__content">
          <iframe
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/23OJEDvJ7nc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="video-modal-overlay" @click="closeModal"></div>
      </div>
    </transition>
  </div>
</template>

<script>
import { gsap } from "gsap";
import svgCross from "@/assets/icons/cross.svg?inline";
export default {
  components: { svgCross },
  mounted() {
    this.$nuxt.$on("modal:show:video", this.showModal);
  },
  beforeDestroy() {
    this.$nuxt.$off("modal:show:video", this.showModal);
  },
  data: () => ({
    isOpen: false
  }),
  methods: {
    showModal() {
      this.isOpen = true;
      this.$nuxt.$emit("navbar:hide");
      this.$nuxt.$emit("header:hide");
    },
    closeModal() {
      this.isOpen = false;
      this.$nuxt.$emit("navbar:show");
      this.$nuxt.$emit("header:show");
    },
    onEnter(el, done) {
      const tl = gsap.timeline({ onComplete: done });
      tl.from(el, {
        opacity: 0
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
.video-modal {
  @apply fixed inset-0 h-full w-full flex-center;
  &__content {
    @apply relative z-20 w-[70%] pb-[40%] sm:w-[90%] sm:pb-[50%];
    iframe {
      @apply w-full h-full absolute;
    }
  }
  &__close {
    @apply absolute top-6 right-6 w-6 text-white z-20 cursor-pointer;
  }
  &-overlay {
    @apply z-10 absolute inset-0 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm;
  }
}
</style>
