<template>
  <div class="app-accordion" :class="{ open: isOpen }">
    <div class="app-accordion__header" @click="toggle">
      <div class="app-accordion__title">
        <span class="app-accordion__title-number">{{ number }}</span>
        <span> {{ title }}</span>
      </div>
      <svgArrowDown class="app-accordion__arrow" width="15" />
    </div>
    <CollapseTransition @after-enter="updateScroll" @after-leave="updateScroll">
      <div class="app-accordion__content" v-if="isOpen">
        <div v-html="content" v-if="content"></div>
        <slot name="content" />
      </div>
    </CollapseTransition>
  </div>
</template>

<script>
import svgArrowDown from "@/assets/icons/arrow_down.svg?inline";
import { CollapseTransition } from "@ivanv/vue-collapse-transition";
export default {
  props: {
    title: String,
    number: String,
    content: String
  },
  data: () => ({
    isOpen: false
  }),
  components: { svgArrowDown, CollapseTransition },
  methods: {
    updateScroll() {
      this.$nuxt.$emit("loco:update");
    },
    open() {
      this.isOpen = true;
      this.$emit("open");
    },
    close() {
      this.isOpen = false;
      this.$emit("close");
      this.$locoScroll.update();
    },
    toggle() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }
  }
};
</script>

<style lang="postcss">
.app-accordion {
  @apply bg-[#88786E] border border-[#634F42] text-lg sm:text-sm;
  box-shadow: 0px 50px 50px rgba(0, 0, 0, 0.05);

  &__header {
    @apply flex-y-center justify-between cursor-pointer min-h-[60px] select-none;
  }
  &__content {
    @apply pb-10 xl:pb-5 sm:pb-7 xs:pb-4;
  }
  &__header,
  &__content {
    @apply px-[86px] xl:px-[58px] md:px-[44px] sm:px-[35px] xs:px-[22px] xxs:px-[13px];
  }
  &__title {
    @apply font-bold pr-3;
    &-number {
      @apply text-primary;
    }
  }

  &__arrow {
    @apply transition-all;
  }
  &.open & {
    &__arrow {
      @apply transform rotate-180;
    }
  }
}
</style>
