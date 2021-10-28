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
      <svgInstagram />
    </SocBtn>
  </div>
</template>

<script>
import svgTwitter from "@/assets/icons/twitter.svg?inline";
import svgFacebook from "@/assets/icons/facebook.svg?inline";
import svgInstagram from "@/assets/icons/instagram.svg?inline";
import svgTelegram from "@/assets/icons/telegram.svg?inline";
export default {
  components: { svgTwitter, svgFacebook, svgInstagram, svgTelegram }
};
</script>

<style lang="postcss">
.soc-btns {
    @apply flex-y-center space-x-5;
}
</style>
