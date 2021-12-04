<template>
  <div class="home-nft-info">
    <div class="home-nft-info__row">
      <div class="home-nft-info__title">
        <component :is="icon" />
        <span>{{ name }}</span>
      </div>
      <!-- <div>
        {{ itemId }}
      </div>
      <div class="text-primary">
        {{ k }}
      </div> -->
      <!-- <div>
        {{ price }}
      </div> -->
      <div class="btn_container">
        <AButton
          type="primary-stroke"
          size="sm"
          class="home-nft-info__btn sm:!hidden "
        >
          NFT Marketplace
        </AButton>
          <div class="comming_soon sm:!hidden">comming soon</div>
      </div>
      <div class="btn_container">
        <AButton
          type="primary-stroke"
          size="sm"
          class="home-nft-info__btn sm:!hidden opensea" 
        >
          OpenSea
        </AButton>
      </div>
      
    </div>
    <div class="sm:flex hidden justify-center space-x-8 ">
      
      <div class="btn_container">
        <AButton type="primary-stroke" size="sm" class="home-nft-info__btn ">
          NFT Marketplace
        </AButton>
        <div class="comming_soon ">comming soon</div>
      </div>

      <div class="btn_container">
      <AButton type="primary-stroke" size="sm" class="home-nft-info__btn opensea">
        OpenSea
      </AButton>
      </div>
      

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
  
  @apply w-[1060px] xl:w-[740px] lg:w-full
   mt-14 xl:mt-3 md:mt-5 sm:mt-3 xs:mt-2;
  &__row {
    grid-gap:1rem;
    
    @apply flex-y-center justify-around py-9 pl-[4.375rem] pr-5 xl:pl-8 xl:pr-4 lg:pl-4
    border border-white border-opacity-40 bg-white bg-opacity-5 backdrop-filter backdrop-blur-[20px] rounded-md
    text-2xl xl:text-lg lg:text-base sm:text-sm;
    
    
    
    
  }
  .btn_container{
      position: relative;
      text-align: center;
    }
    .comming_soon{
      position: absolute;
      color:#777;
      font-size: 14px;
      font-variant: small-caps;
        left:0;
        right:0;
        margin-left:auto;
        margin-right:auto;
      }
 
  &__title {
    @apply flex-y-center space-x-4 uppercase;
  }
  &__btn {
    
    &.app-button {
      border-color:#ffffffaa;
      color:#ffffffaa;
      margin-top:8px;
      
      @apply sm:mt-7 sm:mx-auto lg:w-[120px] lg:text-[10px] md:w-[160px];

      &.opensea{
        border-color:#40B6BA;
        background-color:#40B6BA;
      color:white;
      }

      &:hover{
        background-color:#40B6BA;
        box-shadow:0 0 20px #40B6BA77;
        border-color:#40B6BA;
        color:white;
      }
    
    }
  }
}
</style>
