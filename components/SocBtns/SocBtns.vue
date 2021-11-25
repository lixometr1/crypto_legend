<template>
  <div class="soc-btns">
    <SocBtn :href="SocLinks.twitter">
      <svgTwitter />
    </SocBtn>
    <SocBtn :href="SocLinks.facebook">
      <svgFacebook />
    </SocBtn>
    <SocBtn :href="SocLinks.telegram">
      <svgTelegram />
    </SocBtn>
    <SocBtn :href="SocLinks.discord">
      <svgDiscord />
    </SocBtn>
    <SocBtn :href="SocLinks.reddit">
      <svgReddit />
    </SocBtn>
  </div>
</template>

<script>
import svgTwitter from "@/assets/icons/twitter.svg?inline";
import svgFacebook from "@/assets/icons/facebook.svg?inline";
import svgDiscord from "@/assets/icons/discord.svg?inline";
import svgTelegram from "@/assets/icons/telegram.svg?inline";
import svgReddit from "@/assets/icons/reddit.svg?inline";
import { SocLinks } from "@/helpers/constants";
export default {
  components: { svgTwitter, svgFacebook, svgDiscord, svgReddit, svgTelegram },
  data: () => ({
    SocLinks
  })
};
</script>

<style lang="postcss">
.soc-btns {
  @apply flex-y-center space-x-5;
}
</style>
