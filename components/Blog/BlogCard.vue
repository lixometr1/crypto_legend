<template>
  <NuxtLink :to="link" class="blog-card">
    <div
      class="blog-card__image"
      :style="{ backgroundImage: `url(${image})` }"
    ></div>
    <div class="blog-card__content">
      <div class="blog-card__title">{{ title }}</div>
      <div class="blog-card__description">{{ description }}</div>
      <div class="blog-card__date">
        <svgCalendar width="16" /><span>{{ date }}</span>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
import svgCalendar from "@/assets/icons/calendar.svg?inline";
export default {
  components: { svgCalendar },
  props: {
    title: String,
    description: String,
    date: String,
    image: String
  },
  computed: {
    link() {
      return "/blog/some-link";
    }
  }
};
</script>

<style lang="postcss">
.blog-card {
  @apply text-white bg-[#201A17] rounded-[25px] overflow-hidden 
    md:flex md:items-stretch md:min-h-[180px];
  box-shadow: 0px 50px 50px rgba(0, 0, 0, 0.05);
  &__content {
    @apply py-7 px-8 bg-[#201A17] rounded-br-[25px] rounded-bl-[25px] md:bg-[#88786E]
      md:rounded-bl-none;
  }
  &__image {
    @apply bg-center bg-cover h-[350px] rounded-tr-[25px] rounded-tl-[25px] xl:h-[260px] 
        md:h-auto md:flex-shrink-0 md:w-[280px] md:rounded-tr-none md:rounded-bl-[25px]
        sm:hidden;
  }
  &__title {
    @apply text-2xl font-semibold mb-2;
  }
  &__description {
    @apply text-sm font-light;
  }
  &__date {
    @apply mt-4 flex-y-center space-x-3 text-primary text-sm font-light md:text-[#494949];
  }
}
</style>
