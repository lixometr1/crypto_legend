<template>
  <div class="menu-items" :class="{ 'sub-open': value !== undefined }">
    <MenuItem
      v-for="(item, idx) in items"
      :key="idx"
      v-bind="item"
      :active="value === idx"
      @click.prevent="clickItem(idx)"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: Number,
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    clickItem(idx) {
      const currentItem = this.items[idx];
      if (currentItem.children) {
        this.$emit("input", idx);
      } else {
        this.$nuxt.$emit("menu:close");
        const afterClose = () => {
          if (currentItem.link) {
            this.$router.push(currentItem.link);
          }
          this.$nuxt.$off("menu:afterClose", afterClose);
        };
        this.$nuxt.$on("menu:afterClose", afterClose);
      }
    }
  }
};
</script>

<style lang="postcss">
.menu-items {
  @apply sm:w-full flex flex-col items-start justify-start overflow-auto min-h-0;
  &.sub-open {
    @apply md:hidden;
  }
}
</style>
