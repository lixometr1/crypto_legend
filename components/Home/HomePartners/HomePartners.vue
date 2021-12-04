<template>
  <div class="home-partners home-screen" id="technology">
    <div class="home-partners__title">
      <div class="container">
        <h2>Technology</h2>
      </div>
    </div>
    <div class="container">
      <PartnersItems />
    </div>
  </div>
</template>

<script>
import HomeSectionMixin from "@/components/Home/HomeSectionMixin";
export default {
  mixins: [HomeSectionMixin],
  
};
</script>

<style lang="postcss">
.home-partners {
  @apply flex flex-col items-stretch justify-center;
  &__title {
    @apply relative py-3 uppercase;
    &::before {
      content: "";
      @apply block absolute left-0  top-0 bottom-0 bg-black z-0 bg-opacity-30;
      clip-path: polygon(0 0, 100% 0%, 85% 100%, 0% 100%);
      width: calc((100vw - 1720px) / 2 + 500px);
      @media screen and (max-width: 1720px) {
        width: 450px;
      }
      /* @screen xl {
              width: 300px;
          } */
    }
    h2 {
      @apply relative z-10;
    }
  }
  
}
</style>
