<template>
  <div class="home-roadmap home-screen" id="roadmap">
    <transition @enter="onSlideEnter" @leave="onSlideLeave" mode="out-in">
      <div class="container home-roadmap__content" :key="activeItem">
        <TextBlock
          :title="activeItemData.title"
          :description="activeItemData.description"
          ref="textBlock"
        />
        <a href="javascript:void(0)" class="home-roadmap__skip" @click.prevent>
          <svgScrollDown width="10" />
          <span>
            SKIP
          </span>
        </a>
      </div>
    </transition>

    <HomeRoadmapBar :progress="1.5" v-model="activeItem" :items="headings" />
  </div>
</template>

<script>
import svgScrollDown from "@/assets/icons/arrow_down_double.svg?inline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import HomeSectionMixin from "@/components/Home/HomeSectionMixin";
import homeRoadmapData from "@/components/Home/HomeRoadmap/home-roadmap-data";
export default {
  components: { svgScrollDown },
  mixins: [HomeSectionMixin],
  data: () => ({ activeItem: 0, items: homeRoadmapData }),
  mounted() {
    this.onViewEnter();
  },
  computed: {
    activeItemData() {
      return this.items[this.activeItem];
    },
    headings() {
      return this.items.map((item, idx) => `Q${idx + 1}`);
    }
  },
  methods: {
    onSlideEnter(el, done) {
      const title = this.$refs.textBlock.$refs.title;
      const description = this.$refs.textBlock.$refs.description;
      const tl = gsap.timeline({ onComplete: done });
      tl.from(title, {
        opacity: 0,
        x: -200
      });

      tl.from(description, {
        opacity: 0,
        x: -100
      }, '-=0.4');
    },
    onSlideLeave(el, done) {
      const title = this.$refs.textBlock.$refs.title;
      const description = this.$refs.textBlock.$refs.description;
      const tl = gsap.timeline({ onComplete: done });
      tl.to(title, {
        opacity: 0,
        x: 100
      });
      tl.to(description, {
        opacity: 0,
        x: 100
      }, '-=0.4');
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
  }
  &__skip {
    @apply flex-y-center text-2xl space-x-1.5 font-bold mt-6 self-start w-auto hover:text-primary transition-all lg:hidden;
    svg {
      @apply flex-shrink-0 w-4;
    }
  }
}
</style>
