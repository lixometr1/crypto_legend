<template>
  <div class="faq page">
    <PagePreview :image="require('@/assets/img/faq.jpg')">
      <template #title>
        <h1 class="faq__title">FAQ</h1>
      </template>
    </PagePreview>
    <div class="container">
      <div class="faq-content">
        <FaqBlock v-for="(block, idx) in blocks" :key="idx" v-bind="block" />
      </div>
    </div>
  </div>
</template>

<script>
import PageProgressMixin from "@/mixins/PageProgressMixin";
export default {
  mixins: [PageProgressMixin],
  data: () => ({
    blocks: [
      {
        title: "Gameplay",
        items: [
          {
            title: "What is?",
            number: "1.1",
            content:
              "Mist is an open-world, Action Role Playing Game with a dynamic combat style that is unique in the world of MMOs. <br> The game contains core fighting and questing mechanics with a large influence from the Action RPG genre. The massive multiplayer world, and in-game player interactions are developed with main MMO systems in mind."
          },
          {
            title: "What character classes will be available in Mist?",
            number: "1.2",
            content:
              "Mist is an open-world, Action Role Playing Game with a dynamic combat style that is unique in the world of MMOs. <br> The game contains core fighting and questing mechanics with a large influence from the Action RPG genre. The massive multiplayer world, and in-game player interactions are developed with main MMO systems in mind."
          },
          {
            title:
              "What kind of in-game combat style and pace can we expect from Mist?",
            number: "1.3",
            content:
              "Mist is an open-world, Action Role Playing Game with a dynamic combat style that is unique in the world of MMOs. <br> The game contains core fighting and questing mechanics with a large influence from the Action RPG genre. The massive multiplayer world, and in-game player interactions are developed with main MMO systems in mind."
          }
        ]
      },
      {
        title: "Ecosystem",
        items: [
          {
            title: "What is?",
            number: "1.1",
            content:
              "Mist is an open-world, Action Role Playing Game with a dynamic combat style that is unique in the world of MMOs. <br> The game contains core fighting and questing mechanics with a large influence from the Action RPG genre. The massive multiplayer world, and in-game player interactions are developed with main MMO systems in mind."
          },
          {
            title: "What character classes will be available in Mist?",
            number: "1.2",
            content:
              "Mist is an open-world, Action Role Playing Game with a dynamic combat style that is unique in the world of MMOs. <br> The game contains core fighting and questing mechanics with a large influence from the Action RPG genre. The massive multiplayer world, and in-game player interactions are developed with main MMO systems in mind."
          },
          {
            title:
              "What kind of in-game combat style and pace can we expect from Mist?",
            number: "1.3",
            content:
              "Mist is an open-world, Action Role Playing Game with a dynamic combat style that is unique in the world of MMOs. <br> The game contains core fighting and questing mechanics with a large influence from the Action RPG genre. The massive multiplayer world, and in-game player interactions are developed with main MMO systems in mind."
          }
        ]
      },
    ]
  })
};
</script>

<style lang="postcss">
.faq {
  &__title {
    @apply text-[300px] font-bold lg:text-[165px] sm:text-[96px] xs:text-[64px];
  }
  &-content {
    @apply py-[200px] xl:py-[150px] md:py-[100px] xs:py-[50px] space-y-[200px] xl:space-y-[150px] md:space-y-[120px] sm:space-y-[50px];
  }
}
</style>
