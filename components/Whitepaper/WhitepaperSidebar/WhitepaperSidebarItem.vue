<template>
  <div class="whitepaper-sidebar-item" :class="{ open: isOpen }">
    <a
      href="javascript:void(0)"
      @click.prevent="clickItem"
      class="whitepaper-sidebar-item__header"
    >
      <span> {{ value }} </span><svgArrowRight v-if="hasChildren" width="8" />
    </a>
    <div class="whitepaper-sidebar-item__children" v-if="hasChildren && isOpen">
      <WhitepaperSidebarItem
        v-for="(item, idx) in children"
        :key="idx"
        v-bind="item"
        :isChild="true"
        @select="onItemSelect(item)"
      />
    </div>
  </div>
</template>

<script>
import svgArrowRight from "@/assets/icons/arrow_right.svg?inline";
export default {
  components: { svgArrowRight },
  props: {
    value: String,
    slug: String,
    children: {
      type: Array,
      default: () => []
    },
    isChild: Boolean
  },
  data: () => ({
    isOpen: false
  }),
  computed: {
    currentSlug() {
      console.log(this.$route);
      const arr = this.$route.fullPath.split("/");
      const slug = arr[arr.length - 1];
      return slug.replace(/\//g, '');
    },
    hasChildren() {
      return this.children.length > 0 && this.currentSlug === this.slug;
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    onItemSelect(item) {
      this.$nuxt.$emit("whitepaper:select", item.id);
    },
    clickItem() {
      if (this.isChild) {
        this.$emit("select");
      } else {
        if (this.currentSlug !== this.slug) {
          this.$router.push(`/whitepaper/${this.slug}`);
        } else {
          this.toggle();
        }
      }
    }
  }
};
</script>

<style lang="postcss">
.whitepaper-sidebar-item {
  @apply w-[180px] font-semibold text-base text-[#D0D2D6];
  &__header {
    @apply flex items-center w-full justify-between font-semibold select-none;
    svg {
      @apply transform transition-all;
    }
  }
  &__children {
    @apply pt-1 pl-3 space-y-2;
    .whitepaper-sidebar-item__header {
      @apply font-normal;
    }
  }
  &.open & {
    &__header {
      svg {
        @apply rotate-90;
      }
    }
  }
}
</style>
