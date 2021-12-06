<template>
  <transition @enter="onEnter" @leave="onLeave">
    <div class="menu" v-if="isOpen">
      <div class="container h-full">
        <div class="menu-inner-wrapper">
          <div class="menu-title">Menu</div>
          <MenuItemsWrapper :items="items" />
          <MenuSoc />
        </div>
      </div>
      <div class="menu-close" @click="close">
        <svgCross width="30" />
      </div>
    </div>
  </transition>
</template>

<script>
import menuItems from "./menu-items";
import { gsap } from "gsap";
import svgCross from "@/assets/icons/cross.svg?inline";
export default {
  components: { svgCross },
  data: () => ({
    isOpen: false,
    items: menuItems
  }),
  mounted() {
    this.$nuxt.$on("menu:open", e => {
      this.openMenu();
    });
    this.$nuxt.$on("menu:close", e => {
      this.closeMenu();
    });
  },
  methods: {
    close() {
      this.$nuxt.$emit("menu:close");
    },
    onEnter(el, done) {
      const tl = gsap.timeline({
        onComplete: () => {
          this.$nuxt.$emit("menu:afterOpen");
          done();
        }
      });
      tl.set(el, {
        // scaleY: "0.5%",
        // top: "50%",
        // transform: "translateY(-50%)",
        // translateY: "-50%",
        overflow: "hidden",
      });

      tl.from(el, {

        scaleY: 0,
        ease: "Power1.easeIn"
      });
      // tl.to(el, {
      //   scaleY: "100%",
      //   // translateY: "-50%",
      //   ease: "Power2.easeOut"
      // });
      tl.from(".menu-title", {
        y: 20,
        opacity: 0
      });
      tl.from(
        ".menu .menu-item",
        {
          y: 50,
          opacity: 0,
          stagger: 0.08
        },
        "-=0.2"
      );

      tl.from(
        ".menu .soc-btn",
        {
          stagger: 0.1,
          x: -10,
          opacity: 0
        },
        "-=0.4"
      );
      tl.from(
        ".menu .menu-close",
        {
          opacity: 0,
          display: "none",
          scale: "0.1",
          ease: "Power2.easeOut",
          duration: 0.2
        },
        "-=0.4"
      );
    },
    onLeave(el, done) {
      const tl = gsap.timeline({
        onComplete: () => {
          this.$nuxt.$emit("menu:afterClose");
          this.$nuxt.$emit("header:show");
          this.$nuxt.$emit("navbar:show");
          done();
        }
      });
      tl.set(el, {
        top: "50%",
        transform: "translateY(-50%)",
        overflow: "hidden"
      });
      tl.to(".menu-title", {
        opacity: 0,
        y: -20,
        duration: 0.3
      });
      tl.to(
        ".menu-item",
        {
          opacity: 0,
          x: -50,
          stagger: 0.08,
          duration: 0.2
        },
        "-=0.1"
      );
      tl.to(
        ".menu .soc-btn",
        {
          opacity: 0,
          y: 10,
          duration: 0.3
        },
        "-=0.2"
      );
      tl.to(
        ".menu .menu-close",
        {
          opacity: 0,
          scale: 0.1,
          ease: "Power2.easeOut",
          duration: 0.2
        },
        "-=0.3"
      );
      tl.to(el, {
        scaleY: 0,
        ease: "Power1.easeOut"
      });
    },
    closeMenu() {
      this.isOpen = false;
    },
    openMenu() {
      this.isOpen = true;
    }
  }
};
</script>

<style lang="postcss">
.menu {
  @apply fixed z-200 top-0 left-0 right-0 bottom-0 w-full h-full 
    bg-black bg-opacity-20 backdrop-filter backdrop-blur-[15px]
    py-[100px] xl:py-[50px];
  &-title {
    @apply text-4xl text-[#8E8E8E] mb-5 ;
  }
  &-inner-wrapper {
    @apply flex flex-col h-full;
  }

  &__soc {
  }
  &-close {
    @apply absolute top-8 right-8 cursor-pointer;
  }
}
</style>
