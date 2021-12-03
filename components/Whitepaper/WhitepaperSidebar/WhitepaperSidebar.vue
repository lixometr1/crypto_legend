<template>
  <div class="whitepaper-sidebar">
    <div class="whitepaper-sidebar__title">
      Menu
    </div>
    <div class="whitepaper-sidebar__items">
      <WhitepaperSidebarItem
        v-for="(item, idx) in items"
        :key="idx"
        v-bind="item"

      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="postcss">
.whitepaper-sidebar {
  @apply fixed left-0 top-0 bottom-0 overflow-scroll
     h-full pt-[150px] xl:pt-[120px] w-[350px] lg:w-[310px] flex flex-col items-center border-r border-white border-opacity-30;
  &__title {
    @apply uppercase text-[#676D7D] w-[180px] mb-3;
  }
  &__items {
    @apply space-y-3;
  }
}
</style>
