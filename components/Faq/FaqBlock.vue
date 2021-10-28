<template>
  <div class="faq-block">
    <h3 class="faq-block__title">{{ title }}</h3>
    <div>
      <AppAccordion
        v-for="(item, idx) in items"
        :key="idx"
        v-bind="item"
        ref="accordions"
        class="faq-block__accordion"
        @open="onOpen(idx)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    items: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    console.log(this.$refs.accordions);
  },
  methods: {
    onOpen(idx) {
      this.$refs.accordions.forEach((acc, index) => {
        if (index === idx) return;
        acc.close();
      });
    }
  }
};
</script>

<style lang="postcss">
.faq-block {
  &__title {
    @apply mb-5;
  }
  &__accordion {
    &:first-child {
      @apply rounded-tl-[25px] rounded-tr-[25px];
    }
    &:last-child {
      @apply rounded-bl-[25px] rounded-br-[25px];
    }
  }
}
</style>
