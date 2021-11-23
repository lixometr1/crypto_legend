<template>
  <div class="text-block">
    <h2 class="text-block__title" ref="title">{{ title }}</h2>
    <div class="text-block__description" ref="description">
      <slot name="description">
        {{ description }}
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String
  }
};
</script>

<style lang="postcss">
.text-block {
  @apply max-w-[560px];
  &__title {
    @apply mb-3;
  }
  &__description {
  }
}
</style>
