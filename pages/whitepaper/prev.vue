<template>
  <div>
    <WhitepaperContent :content="content" />
  </div>
</template>

<script>
import dataItems from "@/components/Whitepaper/whitepaper-content";
export default {
  data: () => ({
    content: ""
  }),
  created() {
    this.getData()
  },
  methods: {
    getData() {
      const slug = this.$route.params.slug;
      const item = dataItems.find(item => item.slug === slug);
      if (!item) return;
      this.content = item.content;
    }
  }
};
</script>

<style lang="postcss"></style>
