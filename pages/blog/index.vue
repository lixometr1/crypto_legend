<template>
  <div class="page page-blog page-offset">
    <div class="container">
      <BlogSlider :items="items" />
    </div>
  </div>
</template>

<script>
import PageProgressMixin from "@/mixins/PageProgressMixin";
export default {
  mixins: [PageProgressMixin],
  data: () => ({
    items: []
  })
};
</script>

<style lang="postcss">
.page-blog {

}
</style>
