<template>
  <div class="home-nft-info">
    <div class="home-nft-info__row">
      <div class="home-nft-info__title">
        <component :is="icon" />
        <span>{{ name }}</span>
      </div>
      <div>
        {{ itemId }}
      </div>
      <div class="text-primary">
        {{ k }}
      </div>
      <div>
        {{ price }}
      </div>
      <div>
        <AButton
          type="primary-stroke"
          size="sm"
          class="home-nft-info__btn sm:!hidden"
        >
          buy now
        </AButton>
      </div>
    </div>
    <div class="sm:flex hidden justify-center">
      <AButton type="primary-stroke" size="sm" class="home-nft-info__btn ">
        buy now
      </AButton>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    icon: [String, Object],
    name: String,
    itemId: String,
    price: String,
    k: String
  }
};
</script>

<style lang="postcss">
.home-nft-info {
  @apply w-[760px] xl:w-[540px] lg:w-full
   mt-14 xl:mt-3 md:mt-5 sm:mt-3 xs:mt-2;
  &__row {
    @apply flex-y-center justify-around py-9 pl-[4.375rem] pr-5 xl:pl-8 xl:pr-2 lg:pl-4
    border border-white border-opacity-40 bg-white bg-opacity-5 backdrop-filter backdrop-blur-[20px] rounded-md
    text-2xl xl:text-lg lg:text-base sm:text-sm;
  }
  &__title {
    @apply flex-y-center space-x-4 uppercase;
  }
  &__btn {
    &.app-button {
      @apply sm:mt-7 sm:mx-auto lg:w-[120px] lg:text-[10px];
    }
  }
}
</style>
