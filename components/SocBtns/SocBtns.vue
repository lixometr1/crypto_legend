<template>
  <div class="soc-btns">
    <SocBtn href="#">
      <svgTwitter />
    </SocBtn>
    <SocBtn href="#">
      <svgFacebook />
    </SocBtn>
    <SocBtn href="#">
      <svgTelegram />
    </SocBtn>
    <SocBtn href="#">
      <svgDiscord />
    </SocBtn>
    <SocBtn href="#">
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
export default {
  components: { svgTwitter, svgFacebook, svgDiscord,svgReddit, svgTelegram }
};
</script>

<style lang="postcss">
.soc-btns {
    @apply flex-y-center space-x-5;
}
</style>
