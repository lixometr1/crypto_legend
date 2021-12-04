<template>
  <div class="partners-items">
    <div class="partners-item" v-for="(item, idx) in items" :key="idx">
      <img :src="item" alt="partner" />
    </div>
  </div>
</template>

<script>
import partnersData from "./partners-data";

export default {
  data() {
    return {
      items: partnersData
    };
  }
};
</script>

<style lang="postcss">
.partners {
  &-items {
    @apply flex flex-wrap justify-between items-center -mx-10 lg:-mx-6;
  }
  &-item {
    @apply w-1/5 p-10 lg:p-6 md:w-1/4 sm:p-4;
    img {
      @apply w-[14rem] max-h-[78px] object-contain;
    }
  }
}
</style>
