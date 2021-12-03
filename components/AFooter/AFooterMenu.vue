<template>
  <div class="footer-menu">
    <div class="footer-menu__col" v-for="(col, idx) in cols" :key="idx">
      <a
        :href="item.link"
        @click.prevent
        class="footer-menu-item"
        v-for="(item, index) in col.items"
        :key="index"
      >
        {{ item.title }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    cols: [
      {
        items: [
          {
            title: "About game"
          },
          {
            title: "Team"
          }
        ]
      },
      {
        items: [
          {
            title: "NFT marketplace"
          },
          {
            title: "Stacking"
          }
        ]
      },
      {
        items: [
          {
            title: "Buy Token"
          },
          {
            title: "FAQ"
          }
        ]
      },
      {
        items: [
          {
            title: "Blog"
          },
          {
            title: "Privacy Policy"
          }
        ]
      },
      {
        items: [
          {
            title: "Contact"
          },
          {
            title: "info@rpg.com"
          }
        ]
      }
    ]
  })
};
</script>

<style lang="postcss">
.footer-menu {
  @apply flex justify-between flex-1 md:flex-wrap xs:flex-col xs:items-center xs:text-center;
  &__col {
    @apply space-y-3 md:w-1/2 xs:w-full mb-3;
    a {
        @apply block text-lg font-light hover:underline md:text-sm;
    }
  }
}
</style>
