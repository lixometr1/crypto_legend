<template>
  <div class="team-items">
    <div class="team-item" v-for="(item, idx) in items" :key="idx">
      <TeamCard v-bind="item" />
    </div>
  </div>
</template>

<script>
import teamData from "./team-data";
export default {
  data: () => ({
    items: teamData
  })
};
</script>

<style lang="postcss">
.team-items {
  @apply mt-14 md:mt-10 flex flex-wrap mx-[-3rem] xl:-mx-5 md:-mx-3 sm:flex-col sm:space-y-7;
  .team-item {
    @apply w-1/3 px-[3rem] xl:px-5 md:px-3 sm:w-full;
  }
}
</style>
