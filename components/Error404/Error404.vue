<template>
  <div class="error-404">
    <div class="container">
      <div class="error-404__content">
        <h1>404</h1>
        <img class="error-404__image" src="@/assets/img/404.png" alt="404" />
        <div class="error-404__texts">
          <div class="error-404__texts-title">Page not found</div>
          <AButton tag="NuxtLink" to="/" color="primary">BACK TO HOME</AButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss">
.error-404 {
  @apply min-h-screen flex-y-center;
  &__content {
    @apply relative;
  }
  h1 {
    @apply text-center text-[600px] font-semibold leading-none lg:text-[400px] lg:font-bold
      md:text-[350px] sm:text-[220px] xs:text-[140px];
  }
  &__image {
    @apply w-[810px] absolute top-0 left-1/2 transform -translate-x-1/2
      lg:w-[560px] md:w-[485px] sm:w-[378px] sm:top-[-30px] xs:w-[240px];
  }
  &__texts {
    @apply relative z-30 flex-y-center flex-col transform -translate-y-8 lg:-translate-y-2;
    &-title {
      @apply text-5xl mb-10 lg:text-2xl lg:mb-5 sm:mb-4 xs:text-lg;
    }
  }
}
</style>
