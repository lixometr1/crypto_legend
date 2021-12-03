<template>
  <div>
    <WhitepaperContent :content="content" />
  </div>
</template>

<script>
export default {
    data: () => ({
        content: ''
    }),
    methods: {
        getData() {
            const slug = this.$route.params.slug
            console.log(slug)
            
        }
    },

};
</script>

<style lang="postcss"></style>
