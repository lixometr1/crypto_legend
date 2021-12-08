<template>
  <div class="home-contact" id="contact-us">
    <div class="container h-full">
      <div class="home-contact__row">
        <div class="home-contact__content">
          <div class="home-contact__title">
            <h2 class="uppercase font-normal">Join Our Airdrop</h2>
          </div>
          <a href="https://gleam.io/21TP6/airdrop"
            target="_blank" class="home-contact__btn">JOIN AIRDROP</a>
          <!-- <SocBtns class="home-contact__soc" /> -->
        </div>
        <div class="home-contact__image">
          <img src="@/assets/img/contact_image.png" alt="contact_image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeSectionMixin from "@/components/Home/HomeSectionMixin";
export default {
  mixins: [HomeSectionMixin]
};
</script>

<style lang="postcss">
.home-contact {
  @apply relative overflow-hidden;
  &__row {
    @apply flex-y-center h-full md:flex-col;
  }
  &__content {
    @apply w-[570px] flex-shrink-0 md:text-center;
  }
  &__title {
    @apply mb-5 md:text-center;
  }
  &__soc {
    @apply space-x-[3rem] xl:space-x-9 lg:space-x-7 md:justify-center;
    .soc-btn {
      @apply w-20 h-20 p-5 xl:w-16 xl:h-16 xl:p-4 lg:w-[3rem] lg:h-[3rem] lg:p-3;
      svg {
      }
    }
  }
  &__image {
    @apply right-0 top-0 max-h-full max-w-[1150px] 
        lg:transform lg:-translate-x-24 lg:w-[800px] lg:max-w-none lg:flex-shrink-0 
        md:w-full md:transform-none md:mt-2;
  }
  &__btn {
    @apply font-bold text-2xl text-white px-5 py-3 mt-3 inline-block md:text-lg md:py-2 sm:text-base sm:px-4 transition-all;
    letter-spacing: 3px;
    background: linear-gradient(90deg, #dc2d2d 0%, #af0f0f 100%);
    &:hover {
      background: linear-gradient(90deg, #b92525 0%, #8b0b0b 100%);
    }
  }
}
</style>
