<template>
  <div class="team-card">
    <div
      class="team-card__image"
      :style="{ backgroundImage: `url(${image})` }"
    ></div>
    <div class="team-card__content">
      <div class="team-card__title">{{ title }}</div>
      <div class="team-card__description">{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    image: String
  }
};
</script>

<style lang="postcss">
.team-card {
  @apply text-white rounded-[25px] overflow-hidden 
    sm:flex sm:items-stretch sm:min-h-[180px] xs:min-h-[80px] xs:rounded-[15px];
  box-shadow: 0px 50px 50px rgba(0, 0, 0, 0.05);

  &__content {
    @apply py-7 px-8  rounded-br-[25px] rounded-bl-[25px] md:bg-[#88786E]
      md:rounded-bl-none md:flex-1 bg-[#88786E] md:flex md:justify-center md:flex-col
      xs:px-4 xs:rounded-br-[15px];
  }
  &__image {
    @apply bg-center bg-cover bg-no-repeat h-[350px] rounded-tr-[25px] rounded-tl-[25px] xl:h-[260px] 
          md:h-[190px]
        sm:h-auto sm:flex-shrink-0 sm:w-[200px]  sm:rounded-tr-none sm:rounded-bl-[25px] xs:w-[100px]
        xs:rounded-bl-[15px] xs:rounded-tl-[15px];
  }

  &__title {
    @apply text-4xl font-semibold xl:text-2xl xs:text-lg;
  }
  &__description {
    @apply text-lg font-semibold text-[#494949] relative flex  sm:text-xl xs:text-sm;
    &::before {
      content: "";
      @apply w-2 h-2 bg-[#494949] rounded-full mt-2.5 mr-1 xs:mt-1.5;
    }
  }
}
</style>
