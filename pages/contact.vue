<template>
  <div class="contact">
    <div class="container h-full">
      <h2 class="contact__title">Contact</h2>
      <a :href="'mailto:' + email" class="contact__email">{{ email }}</a>
      <div class="contact-soc-wrapper">
        <h3>Join Our Community</h3>
        <SocBtns class="contact-soc__btns" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: "info@rpg.com"
  }),
  mounted() {
    this.$nuxt.$emit("loco:update");
  }
};
</script>

<style lang="postcss">
.contact {
  @apply flex-center bg-cover min-h-screen;
  background: url(@/assets/img/contact_bg.jpg) center center no-repeat;
  &__title {
    @apply mb-5;
  }
  &__email {
    @apply text-white hover:text-primary text-[22px];
  }
  &-soc-wrapper {
    @apply mt-14;
  }
  &-soc__btns {
  }
}
</style>
