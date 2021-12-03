<template>
  <div class="whitepaper-controls">
    <a
      href="javascript:void(0)"
      class="whitepaper-controls__btn whitepaper-controls__btn-back"
    >
      <svgArrowLeft width="5" />
      <span>
        Back <span>{{ prevName }}</span></span
      >
    </a>
    <a
      href="javascript:void(0)"
      class="whitepaper-controls__btn whitepaper-controls__btn-next"
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
</template>

<script>
import svgArrowRight from "@/assets/icons/arrow_right.svg?inline";
import svgArrowLeft from "@/assets/icons/arrow_left.svg?inline";
export default {
  components: { svgArrowRight, svgArrowLeft },
  computed: {
    prevName() {
      return "whitepaper";
    },
    nextName() {
      return "whitepaper";
    }
  }
};
</script>

<style lang="postcss">
.whitepaper-controls {
  @apply flex items-center justify-between;
  &__btn {
    @apply flex items-center justify-center px-10 py-0 space-x-4 border border-white rounded-md uppercase
    font-semibold text-sm;
    &-next {
    }
    &-prev {
    }
  }
}
</style>
