<template>
  <div class="home-nft home-screen" id="nft">
    <div class="container">
      <div class="home-nft__row">
        <div class="home-nft__left">
          <HomeNftFilters class="home-nft__filters" v-model="activeFilter" />
          <div class="home-nft__content">
            <TextBlock
              :title="activeItem.title"
              :description="activeItem.description"
              class="home-nft__content-text-block"
            />
            <HomeNftInfo v-bind="activeItem" class="md:hidden" />
          </div>
        </div>
        <div class="home-nft__right">
          <div class="home-nft__slider">
            <HomeNftSlider :items="sliderItems" />
          </div>
          <HomeNftInfo v-bind="activeItem" class="hidden md:block" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import homeNftData from './home-nft-data'
import HomeSectionMixin from '@/components/Home/HomeSectionMixin'
export default {
  mixins: [HomeSectionMixin],
  data: () => ({
    activeFilter: 1,
    items: homeNftData
  }),
  computed: {
    sliderItems() {
      const items = this.items[this.activeFilter]?.items || [];
      return items;
    },
    activeItem() {
      return this.items[this.activeFilter] || {};
    }
  },
  mounted() {
    
  }
};
</script>

<style lang="postcss">
.home-nft {
  @apply flex-y-center;
  &__row {
    @apply flex items-stretch justify-between w-full md:flex-col md:items-center;
  }
  &__left {
    @apply flex-shrink-0 flex flex-col items-stretch justify-start lg:mr-5 md:items-center lg:w-[450px] sm:w-full;
  }
  &__right {
    @apply min-w-0 md:w-full;
  }
  &__content {
    @apply flex-1 flex flex-col items-stretch justify-start xl:justify-between;
  }
  &__filters {
    @apply md:order-2 md:mt-3 sm:mt-6 xs:mt-5;
  }
}
</style>
