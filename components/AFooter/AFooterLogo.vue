<template>
  <div class="footer-logo">
    <svgLogo />
  </div>
</template>

<script>
import svgLogo from "@/assets/icons/logo.svg?inline";
export default {
  components: { svgLogo }
};
</script>

<style lang="postcss">
.footer-logo {
    @apply w-[300px] flex-shrink-0 xl:w-[160px] xs:w-auto xs:mb-4;
    svg {
        @apply w-[3.75rem] xl:w-[60px];
    }
}
</style>
