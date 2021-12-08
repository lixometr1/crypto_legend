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
import imagesloaded from "imagesloaded";
export default {
  data: () => ({
    sidebarItems: items
  }),
  mounted() {
    imagesloaded(document.body, () => {
      this.$nuxt.$emit("loco:update");
    });
  },
  computed: {
    content() {
      return content;
    }
  }
};
</script>

<style lang="postcss">
.page-whitepaper {
  @apply relative z-10;
}
.whitepaper {
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
