<template>
  <div
    class="menu-items-wrapper"
    :class="{ 'sub-open': activeItemIdx !== undefined }"
  >
    <MenuItems class="menu-main-items" :items="items" v-model="activeItemIdx" />
    <transition @enter="onItemsEnter" @leave="onItemsLeave" mode="out-in">
      <MenuSubItems
        :key="activeItemIdx"
        :name="activeItem.name"
        :items="children"
        v-if="children.length"
        @back="onBack"
      />
    </transition>
  </div>
</template>

<script>
import { gsap } from "gsap";
export default {
  props: {
    items: {
      type: Array
    }
  },
  data: () => ({
    activeItemIdx: undefined
  }),
  computed: {
    activeItem() {
      return this.items[this.activeItemIdx];
    },
    children() {
      return this.activeItem?.children || [];
    }
  },
  methods: {
    onItemsLeave(el, done) {
      const tl = gsap.timeline({
        onComplete: done
      });
      tl.to(".menu-sub-items .menu-item", {
        x: -200,
        opacity: 0
      });
      if (window.matchMedia("(max-width: 992px)").matches) {
        tl.from(
          ".menu-main-items",
          {
            opacity: 0,
            x: -200
          },
          "-=0.5"
        );
      }
    },
    onItemsEnter(el, done) {
      const tl = gsap.timeline({
        onComplete: done
      });
      tl.from(".menu-sub-items .menu-item", {
        stagger: 0.08,
        x: -200
      });
    },
    onBack() {
      this.activeItemIdx = undefined;
    }
  }
};
</script>

<style lang="postcss">
.menu-items-wrapper {
  @apply flex-1 flex items-stretch space-x-10 min-h-0;
  &.sub-open {
    @apply md:space-x-0;
  }
}
</style>
