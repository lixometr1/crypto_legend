<template>
  <div class="whitepaper-content" >
      <div v-html="content"></div>
      <WhitepaperControls class="mt-8"/>
  </div>
</template>

<script>
export default {
  props: {
    content: String
  }
};
</script>

<style lang="postcss">
.whitepaper-content {
    @apply max-w-[1000px] pl-[180px] xl:pl-[50px];
    h2 {
        @apply mb-6;
    }
    img {
        @apply my-6 block w-full;
    }
    p {
        @apply block my-3;
    }
}
</style>
