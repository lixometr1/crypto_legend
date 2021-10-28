<template>
  <component :is="tag" class="data-card">
   
  </component>
</template>

<script>
import svgCalendar from "@/assets/icons/calendar.svg?inline";
export default {
  components: { svgCalendar },
  props: {
    image: String,
    tag: {
      type: String,
      default: "NuxtLink"
    }
  }
};
</script>

<style lang="postcss">
.data-card {
  @apply text-white bg-[#201A17] rounded-[25px] overflow-hidden 
    md:flex md:items-stretch md:min-h-[180px];
  box-shadow: 0px 50px 50px rgba(0, 0, 0, 0.05);
  &__content {
    @apply py-7 px-8 bg-[#201A17] rounded-br-[25px] rounded-bl-[25px] md:bg-[#88786E]
      md:rounded-bl-none md:flex-1;
  }
  &__image {
    @apply bg-center bg-cover bg-no-repeat h-[350px] rounded-tr-[25px] rounded-tl-[25px] xl:h-[260px] 
        md:h-auto md:flex-shrink-0 md:w-[280px] md:rounded-tr-none md:rounded-bl-[25px]
        sm:hidden;
  }
}
</style>
