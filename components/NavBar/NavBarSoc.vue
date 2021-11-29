<template>
  <div class="nav-bar-soc">
    <a
      :href="item.link"
      class="nav-bar-soc__item link"
      v-for="(item, idx) in items"
      target="_blank"
      :key="idx"
    >
      <component :is="item.icon" />
    </a>
  </div>
</template>

<script>
import svgTwitter from "@/assets/icons/twitter.svg?inline";
import svgFaceook from "@/assets/icons/facebook.svg?inline";
import svgTelegram from "@/assets/icons/telegram.svg?inline";
// import svgInstagram from "@/assets/icons/instagram.svg?inline";
import svgDiscord from "@/assets/icons/discord.svg?inline";
import svgReddit from "@/assets/icons/reddit.svg?inline";
import { SocLinks } from "~/helpers/constants";
export default {
  components: { svgTwitter },
  data: () => ({
    items: [
      {
        icon: svgTwitter,
        link: SocLinks.twitter
      },
      {
        icon: svgTelegram,
        link: SocLinks.telegram
      },
      {
        icon: svgDiscord,
        link: SocLinks.discord
      },
      {
        icon: svgReddit,
        link: SocLinks.reddit
      }
    ]
  })
};
</script>

<style lang="postcss">
.nav-bar-soc {
  @apply flex-y-center flex-col space-y-6 pb-16;
  &__item {
    @apply block w-4.5 text-white;
  }
}
</style>
