<template>
  <div class="home-roadmap-bar">
    <div class="container ">
      <div class="relative h-full">
        <div class="home-roadmap-bar__items">
          <a
            href="javascript:void(0)"
            class="home-roadmap-bar__item"
            v-for="(item, idx) in items"
            :class="{ active: idx <= value }"
            :key="idx"
            @click.prevent="selectItem(idx)"
            ref="barItems"
          >
            <span> {{ item }}</span>
          </a>
        </div>
        <div class="home-roadmap-bar__progress">
          <div
            class="home-roadmap-bar__progress-active"
            :style="{ width: progressWidth }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: Number,
    items: Array
  },
  data: () => ({
    progressWidth: 0
  }),
  computed: {},
  methods: {
    calculateProgressbarWidth() {
      const els = this.$refs.barItems;

      if (!els) return 0;
      const activeEl = els[this.value];
      const width = activeEl.offsetLeft;
      console.log(width);
      this.progressWidth = width + "px";
    },
    selectItem(idx) {
      this.$emit("input", idx);
    },
    onResize() {
      this.calculateProgressbarWidth();
    }
  },
  mounted() {
    this.calculateProgressbarWidth();

    window.addEventListener("resize", this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  watch: {
    value() {
      this.calculateProgressbarWidth();
    }
  }
};
</script>

<style lang="postcss">
.home-roadmap-bar {
  @apply mt-auto bottom-0 left-0 right-0 h-[156px] flex-y-center backdrop-filter backdrop-blur-[15px]
    xl:h-[104px] lg:h-[80px] md:h-[62px] relative border-t border-white border-opacity-50;
  &__items {
    @apply flex-y-center justify-around;
  }
  &__item {
    @apply w-[3.75rem] h-[3.75rem] bg-primary rounded-full flex-center font-semibold
    relative z-20 bg-[#515151] border-[5px] border-[#444444] border-solid hover:bg-primary hover:shadow-main hover:border-primary transition-all
    xl:h-10 xl:w-10 xl:text-sm xl:border-2 lg:w-8 lg:h-8 lg:text-xs md:w-6 md:h-6 sm:w-3 sm:h-3;
    span {
      @apply sm:hidden;
    }
    &.active {
      @apply bg-primary shadow-main border-primary;
    }
  }
  &__progress {
    @apply h-[5px] bg-white bg-opacity-20 absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-10;
    &-active {
      @apply bg-primary shadow-main h-full transition-all duration-300;
    }
  }
}
</style>
