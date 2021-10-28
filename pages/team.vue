<template>
  <div class="page page-team page-offset">
    <div class="container">
      <h2 class="page-team__title">Executive Team</h2>
      <div class="page-team__subtitle">
        Making it easy for billions of gamers around the world to monetize their
        game play, participate in ownership & earn real money
      </div>
      <TeamItems :items="teamItems" />
      <TeamPartners class="page-team__partners"/>
    </div>
  </div>
</template>

<script>
import PageProgressMixin from "~/mixins/PageProgressMixin";
export default {
  mixins: [PageProgressMixin],
  data: () => ({
    teamItems: []
  })
};
</script>

<style lang="postcss">
.page-team {
  &__title {
    @apply text-center;
  }
  &__subtitle {
    @apply text-lg text-center mt-4 md:mt-2 max-w-[920px] mx-auto;
  }
  &__partners {
      @apply mt-[150px] xl:mt-[120px] md:mt-[100px] sm:mt-14;
  }
}
</style>
