<template>
  <nav class="header-menu">
    <ul class="header-menu__items">
      <li
        class="header-menu__item link"
        v-for="(item, idx) in items"
        :key="idx"
      >
        <a :href="item.link" @click.prevent="goToSection(item.link)">{{
          item.name
        }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import gsap from "gsap";
export default {
  data: () => ({
    items: [
      {
        name: "ABOUT",
        link: "#about"
      },
      {
        name: "ROADMAP",
        link: "#roadmap"
      },
      {
        name: "HERO",
        link: "#characters"
      },

      {
        name: "Nft",
        link: "#nft"
      },
      {
        name: "ecosystem",
        link: "#ecosystem"
      },
      {
        name: "Join airdrop",
        link: "#contact-us"
      }
    ]
  }),
  mounted() {
    gsap.from(".header-menu__item", {
      stagger: 0.1,
      opacity: 0,
      y: 50
    });
  },
  methods: {
    goToSection(sectionId) {
      this.$nuxt.$emit('scrollToSection', sectionId)
      // this.$locoScroll.scrollTo(sectionId, {
      //   duration: 800,
      //   disableLerp: true,
      //   easing: [0.6, 0.02, 0.35, 0.97]
      // });
    },
  
  },
  
};
</script>

<style lang="postcss">
.header-menu {
  &__items {
    @apply flex-y-center space-x-20;
  }
  &__item {
    @apply font-semibold uppercase;
  }
}
</style>
