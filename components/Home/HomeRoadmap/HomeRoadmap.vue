<template>
  <div
    class="home-roadmap home-screen"
    id="roadmap"
    :style="{ '--window-height': wHeight + 'px' }"
  >
    <transition @enter="onSlideEnter" @leave="onSlideLeave" mode="out-in">
      <div class="container home-roadmap__content" :key="activeItem">
        <TextBlock :title="activeItemData.title" ref="textBlock">
          <template #description>
            <div>
              <div
                class="home-roadmap__content-subtitle"
                v-if="activeItemData.showGameMechanic"
              >
                Game mechanics:
              </div>
              <ul class="home-roadmap__list home-roadmap__list-pros">
                <li
                  class="home-roadmap__list-item"
                  v-for="(item, idx) in activeItemData.pros"
                  :key="idx"
                >
                  <svgPlus /><span> {{ item }}</span>
                </li>
              </ul>
              <ul class="home-roadmap__list home-roadmap__list-cons">
                <li
                  class="home-roadmap__list-item"
                  v-for="(item, idx) in activeItemData.cons"
                  :key="idx"
                >
                  <svgMinus /> {{ item }}
                </li>
              </ul>
            </div>
          </template>
        </TextBlock>
        
      </div>
    </transition>

    <HomeRoadmapBar
      :progress="1.5"
      v-model="activeItem"
      :items="headings"
    />
  </div>
</template>

<script>
import svgScrollDown from "@/assets/icons/arrow_down_double.svg?inline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import HomeSectionMixin from "@/components/Home/HomeSectionMixin";
import homeRoadmapData from "@/components/Home/HomeRoadmap/home-roadmap-data";
import svgPlus from "@/assets/icons/list_plus.svg?inline";
import svgMinus from "@/assets/icons/list_minus.svg?inline";
export default {
  components: { svgScrollDown, svgPlus, svgMinus },
  mixins: [HomeSectionMixin],
  data: () => ({ activeItem: 0, items: homeRoadmapData, wHeight: 0 }),
  mounted() {
    this.onViewEnter();
    window.addEventListener("resize", this.onResize);
    this.onResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
  computed: {
    activeItemData() {
      return this.items[this.activeItem];
    },
    headings() {
      return this.items.map((item, idx) => `${idx + 1}`);
    }
  },
  methods: {
    onResize() {
      this.wHeight = window.innerHeight;
    },
    

    beforeEnter() {
      this.$store.dispatch("changePrimaryColor", "#EBD666");
    },
    onSlideEnter(el, done) {
      const title = this.$refs.textBlock.$refs.title;
      const description = this.$refs.textBlock.$refs.description;
      const tl = gsap.timeline({ onComplete: done });
      tl.from(title, {
        opacity: 0,
        x: -200
      });

      tl.from(
        description,
        {
          opacity: 0,
          x: -100
        },
        "-=0.4"
      );
    },
    onSlideLeave(el, done) {
      const title = this.$refs.textBlock.$refs.title;
      const description = this.$refs.textBlock.$refs.description;
      const tl = gsap.timeline({ onComplete: done });
      tl.to(title, {
        opacity: 0,
        y: -40
      });
      tl.to(
        description,
        {
          opacity: 0,
          x: 100
        },
        "-=0.4"
      );
    },
    onViewEnter() {
      const tl = gsap.timeline();
      tl.from(".home-roadmap-bar", {
        y: "100%"
      });
      tl.from(
        [
          ".home-roadmap .text-block .text-block__title",
          ".home-roadmap .text-block .text-block__description"
        ],
        {
          y: 50,
          opacity: 0,
          stagger: 0.2
        }
      );
      ScrollTrigger.create({
        trigger: ".home-roadmap",
        start: "top 5%",
        animation: tl
      });
    }
  }
};
</script>

<style lang="postcss">
.home-roadmap {
  background: url(~@/assets/img/roadmap_bg.png) center center no-repeat;
  background-size: cover;
  @apply flex flex-col items-stretch overflow-hidden;
  &__content {
    @apply flex-1 flex flex-col justify-center;
    &-subtitle {
      @apply opacity-70 mb-1;
    }
  }
  &__skip {
    @apply flex-y-center text-2xl space-x-1.5 font-bold mt-6 self-start w-auto hover:text-primary transition-all lg:hidden;
    svg {
      @apply flex-shrink-0 w-4;
    }
  }
  &__list {
    @apply space-y-3;

    &-item {
      @apply flex-y-center;
      svg {
        @apply mr-3.5 w-4;
      }
    }
    &-pros {
      @apply space-y-1 mb-2;

      svg {
        @apply w-6 mr-2.5 -ml-1;
      }
    }
  }
 
}
</style>
