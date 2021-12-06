<template>
  <div class="footer-menu">
    <div class="footer-menu__col" v-for="(col, idx) in cols" :key="idx">
      <component
        :is="item.external ? 'a' : 'nuxt-link'"
        :href="item.link"
        :to="item.link || '#'"
        class="footer-menu-item"
        v-for="(item, index) in col.items"
        :key="index"
        :target="item.newWindow ? '_blank' : ''"
      >
        {{ item.title }}
      </component>
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
            title: "Home",
            link: "#",
            newWindow: true,
            // внешняя
            external: true
          }
          // {
          //   title: "Team"
          // }
        ]
      },
      {
        items: [
          {
            title: "DAPP",
            link: "#"
          }
          // {
          //   title: "Stacking"
          // }
        ]
      },
      {
        items: [
          // {
          //   title: "Buy Token"
          // },
          {
            title: "Whitepapper",
            link: "#"
          }
        ]
      },
      {
        items: [
          {
            title: "Blog",
            link: "/blog"
          }
          // {
          //   title: "Privacy Policy"
          // }
        ]
      },
      {
        items: [
          // {
          //   title: "Contact"
          // },
          {
            title: "About Airdrop"
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
