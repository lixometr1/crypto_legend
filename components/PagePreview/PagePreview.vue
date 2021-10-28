<template>
  <div class="page-preview" :style="{ backgroundImage: `url(${image})` }">
    <div class="container page-preview__row">
      <slot name="title">
        <h1>{{ title }}</h1>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    title: String
  }
};
</script>

<style lang="postcss">
.page-preview {
  @apply h-[90vh] bg-cover bg-center bg-no-repeat;
  &__row {
    @apply h-full flex-y-center w-full;
  }
}
</style>
