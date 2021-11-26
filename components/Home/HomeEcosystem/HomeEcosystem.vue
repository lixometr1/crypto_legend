<template>
  <div class="home-ecosystem home-screen" id="ecosystem">
    <div class="container h-full">
      <div class="home-ecosystem__row">
        <div class="home-ecosystem__content">
          <h2 class="home-ecosystem__title">
            ECOSYSTEM
          </h2>
          <div class="home-ecosystem__subtitle">
            <span>Total Supply:</span>
            <span>137.000.000</span>
          </div>
          <div class="home-ecosystem__image-mob">
            <img
              width="550"
              src="@/assets/img/ecosystem_stat.svg"
              alt="statistics"
            />
          </div>
          <div class="home-ecosystem-table">
            <div class="home-ecosystem-table__row">
              <div
                class="home-ecosystem-table__group"
                v-for="(item, idx) in items"
                :key="idx"
              >
                <div class="home-ecosystem-table__col">{{ item.label }}</div>
                <div class="home-ecosystem-table__col">{{ item.value }}</div>
              </div>
            </div>
          </div>
          <a href="#" class="home-ecosystem__btn">WHITEPAPPER</a>
        </div>
        <div class="home-ecosystem__image">
          <img
            width="780"
            src="@/assets/img/ecosystem_stat.svg"
            alt="statistics"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "./home-ecosystem-data";
export default {
  data: () => ({
    items: data
  })
};
</script>

<style lang="postcss">
.home-ecosystem {
  .container {
    @apply flex-y-center;
  }
  &__title {
    @apply mb-20 xl:mb-5 md:text-4xl md:mb-3 xs:text-2xl;
  }
  &__row {
    @apply flex-y-center w-full md:flex-col;
  }
  &__image {
    @apply md:hidden;
  }
  &__image-mob {
    @apply hidden md:block w-[350px] mx-auto mb-5 xs:w-[260px];
  }
  &__content {
    @apply mr-[100px] flex-1 lg:mr-[30px] md:mr-0 md:text-center;
  }
  &__subtitle {
    @apply uppercase text-2xl mb-5 font-semibold flex w-full flex-wrap space-x-5
    md:flex-center md:text-lg xs:text-xs;
  }
  &-table {
    @apply text-left text-lg xl:text-sm lg:text-xs md:text-sm sm:text-xs;
    &__row {
      @apply border-t border-l border-[#C4C4C4] flex items-stretch flex-wrap w-[720px] 
      xl:w-[530px] lg:w-[350px] md:w-full;
    }
    &__group {
      @apply flex items-stretch w-1/2 flex-shrink-0;
    }
    &__col {
      @apply flex-1 py-5 pl-8 pr-4 border-r border-b border-[#C4C4C4]
      xl:pl-4 xl:pr-2 lg:py-3.5 lg:pl-3.5 xs:py-2;
    }
  }
  &__btn {
    @apply mt-10 text-black h-10 px-4 font-semibold text-sm 
      inline-flex items-center justify-center rounded transition-all;
    background: linear-gradient(180deg, #cfbb4e 0%, #a28f28 100%);
    letter-spacing: 5px;
    &:hover {
      background: linear-gradient(0deg, #cfbb4e 0%, #a28f28 100%);
    }
  }
}
</style>
