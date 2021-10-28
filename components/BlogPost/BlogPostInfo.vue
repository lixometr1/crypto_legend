<template>
  <div class="blog-post-info">
    <div class="blog-post-info__author">Written by {{ author }}</div>
    <div class="blog-post-info__date">
      {{ date }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: String,
    date: String
  }
};
</script>

<style lang="postcss">
.blog-post-info {
  @apply pt-11 pb-3.5 flex-y-center border-b border-[#E8E7E7] space-x-4 text-lg sm:flex-col sm:items-start sm:space-x-0;
  &__author {
    @apply font-bold text-[#777777];
  }
  &__date {
    @apply text-primary;
  }
}
</style>
