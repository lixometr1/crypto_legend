<template>
  <div
    ref="el"
    class="whitepaper-sidebar"
    :class="{ open: isOpen }"
  >
    <div class="whitepaper-sidebar__title">
      Whitepaper
    </div>
    <div class="whitepaper-sidebar__items">
      <WhitepaperSidebarItem
        v-for="(item, idx) in items"
        :key="idx"
        v-bind="item"
      />
    </div>
  </div>
</template>

<script>
import PageProgressMixin from '~/mixins/PageProgressMixin';
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  mixins: [PageProgressMixin],
  data: () => ({
    isOpen: false
  }),
  methods: {
    checkOpen() {
      if (window.matchMedia("(max-width: 992px)").matches) {
        this.isOpen = false;
      } else {
        this.isOpen = true;
      }
    },
    addListeners() {
      window.addEventListener("resize", this.checkOpen);

      this.$nuxt.$on("whitepaper:menu:open", this.open);
      this.$nuxt.$on("whitepaper:menu:close", this.close);
    },
    removeListeners() {
      window.removeEventListener("resize", this.checkOpen);

      this.$nuxt.$off("whitepaper:menu:open", this.open);
      this.$nuxt.$off("whitepaper:menu:close", this.close);
    },
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    }
  },
  mounted() {
    this.checkOpen();
    this.addListeners();
    document.body.appendChild(this.$refs.el);
  },
  beforeDestroy() {
    this.removeListeners();
    document.body.removeChild(this.$refs.el);
  }
};
</script>

<style lang="postcss">
.whitepaper-sidebar {
  @apply fixed left-0 top-0 bottom-0 overflow-y-auto overflow-x-hidden
     h-full pt-[150px] xl:pt-[120px] w-[350px] lg:w-[310px] flex flex-col items-center border-r border-white border-opacity-30
     transform -translate-x-full md:border-none md:max-w-[310px] md:w-[80%] xs:w-[70%];
  @screen md {
    background: linear-gradient(180deg, #080823 0%, #0c061b 100%);
  }
  &__title {
    @apply uppercase text-[#676D7D] w-[180px] mb-3;
  }
  &__items {
    @apply space-y-3;
  }
  &.open {
    @apply translate-x-0;
  }
}
</style>
