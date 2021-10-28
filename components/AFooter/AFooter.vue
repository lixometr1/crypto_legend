<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-main">
        <AFooterLogo />
        <AFooterMenu />
      </div>
      <AFooterBottom />
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="postcss">
.footer {
  &-main {
    @apply flex-y-center py-8 xs:flex-col;
  }
}
</style>
