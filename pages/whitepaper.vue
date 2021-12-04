<template>
  <div class="page-whitepaper page-offset">
    <div class="whitepaper-row">
      <div class="whitepaper-col__left">
        <WhitepaperSidebar :items="sidebarItems" />
      </div>
      <div class="whitepaper-col__right container">
        <nuxt-child />
      </div>
    </div>
    <WhitepaperBg />
  </div>
</template>

<script>
import items from "@/components/Whitepaper/whitepaper-data";
import content from "@/components/Whitepaper/whitepaper-content";
export default {
  data: () => ({
    sidebarItems: items
  }),
  mounted() {
    this.$nuxt.$emit("loco:update");
  },
  computed: {
    content() {
      return content;
    }
  }
};
</script>

<style lang="postcss">
.whitepaper {
  @apply relative;
  &-page {
  }
  &-row {
    @apply flex relative z-20;
  }
  &-col {
    &__left {
      @apply w-[350px] lg:w-[310px] md:w-0;
    }
    &__right {
    }
  }
}
</style>
