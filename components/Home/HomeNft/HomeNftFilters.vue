<template>
  <div class="home-nft-filters">
    <RoundIcon
      :active="value === item.value"
      class="home-nft-filters__item"
      href="javascript:void(0)"
      @click.prevent="selectItem(item.value)"
      v-for="(item, idx) in items"
      :key="idx"
    >
      <component :is="item.icon" />
    </RoundIcon>
  </div>
</template>

<script>
export default {
  props: {
    value: Number
  },
  data: () => ({
    items: [
      // {
      //   value: 1,
      //   icon: require("@/assets/icons/nft/1.svg?inline")
      // },
      {
        value: 2,
        icon: require("@/assets/icons/nft/2.svg?inline")
      },
      // {
      //   value: 3,
      //   icon: require("@/assets/icons/nft/3.svg?inline")
      // }
    ]
  }),
  methods: {
    selectItem(value) {
      this.$emit("input", value);
    }
  }
};
</script>

<style lang="postcss">
.home-nft-filters {
  @apply flex-y-center space-x-5 mb-8;
  a{
    &.active{
      background-color: #40B6BA;
      box-shadow:0 0 20px #40B6BA77;
    }
    svg{

    }
  }
}
</style>
