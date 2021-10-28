<template>
  <div class="blog-post-content" v-html="content"></div>
</template>

<script>
export default {
  props: {
    content: String
  }
};
</script>

<style lang="postcss">
.blog-post-content {
  @apply mt-16 leading-normal xl:mt-10 md:mt-6 sm:mt-4 xs:mt-3;
}
</style>
