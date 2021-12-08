<template>
  <div class="whitepaper-controls">
    <div class="whitepaper-controls__btns">
      <a
        href="javascript:void(0)"
        class="whitepaper-controls__btn whitepaper-controls__btn-back"
        v-if="prevName"
        @click.prevent="goPrev"
      >
        <svgArrowLeft width="5" />
        <span>
          Back <span>{{ prevName }}</span></span
        >
      </a>
      <a
        href="javascript:void(0)"
        class="whitepaper-controls__btn whitepaper-controls__btn-next"
        v-if="nextName"
        @click.prevent="goNext"
      >
        <span>
          Next
          <span>
            {{ nextName }}
          </span>
        </span>
        <svgArrowRight width="5" />
      </a>
    </div>
    <WhitepaperBurger />
  </div>
</template>

<script>
import svgArrowRight from "@/assets/icons/arrow_right.svg?inline";
import svgArrowLeft from "@/assets/icons/arrow_left.svg?inline";
import data from "@/components/Whitepaper/whitepaper-data";
export default {
  components: { svgArrowRight, svgArrowLeft },
  computed: {
    currentSlug() {
      const arr = this.$route.fullPath.split("/");
      let slug = arr[arr.length - 1];
      if (!slug) {
        slug = arr[arr.length - 2];
      }
      return slug;
    },
    currentItem() {
      return data.find(item => item.slug === this.currentSlug);
    },
    currentItemIdx() {
      return data.findIndex(item => item.slug === this.currentSlug);
    },
    prevName() {
      const prevItem = data[this.currentItemIdx - 1];
      if (!prevItem) return;
      return prevItem.value;
    },
    nextName() {
      const nextItem = data[this.currentItemIdx + 1];
      if (!nextItem) return;
      return nextItem.value;
    }
  },
  methods: {
    goPrev() {
      const prevItem = data[this.currentItemIdx - 1];
      this.$router.push(`/whitepaper/${prevItem.slug}`);
    },
    goNext() {
      const nextItem = data[this.currentItemIdx + 1];
      this.$router.push(`/whitepaper/${nextItem.slug}`);
    }
  }
};
</script>

<style lang="postcss">
.whitepaper-controls {
  @apply flex items-center justify-between;
  &__btns {
    @apply flex-1 flex items-center justify-between md:justify-start md:space-x-4;
  }
  &__btn {
    @apply flex items-center justify-center px-10 py-0 space-x-4 border border-white rounded-md uppercase
    font-semibold text-sm md:h-[37px] sm:space-x-0;
    span {
      @apply sm:hidden;
    }
    &-next {
    }
    &-prev {
    }
  }
}
</style>
