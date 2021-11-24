<template>
  <transition @enter="enter" @leave="leave" mode="out-in" :css="false">
    <div class="home-characters-info" :key="animationKey">
      <TextBlock :title="name" :description="description" ref="textBlock" />
      <!-- <div class="home-characters-info__skills">
        <div class="home-characters-info__skills-title">
          <svgSwords width="18" /> <span>SKILLS</span>
        </div>
        <div class="home-characters-info__skills-items" ref="skillsItems">
          <div
            class="home-characters-info__skills-item"
            v-for="(skill, idx) in skills"
            :key="idx"
          >
            <img :src="skill.image" alt="image" width="80" height="80" />
          </div>
        </div>
      </div> -->
    </div>
  </transition>
</template>

<script>
import svgSwords from "@/assets/icons/swords.svg?inline";
import { gsap } from "gsap";
import SplitTextJS from "split-text-js";

export default {
  components: { svgSwords },
  props: {
    animationKey: [String, Number],
    image: String,
    name: String,
    description: String,
    skills: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    leave: function(el, done) {
      const title = this.$refs.textBlock.$refs.title;
      const description = this.$refs.textBlock.$refs.description;
      // const skillsItems = this.$refs.skillsItems;

      // const splitTextTitle = new SplitTextJS(title);
      // const splitTextDescription = new SplitTextJS(description);
      const tl = gsap.timeline({
        onComplete: () => {
          done();
        }
      });
      tl.to(title, {
        x: -200,
        opacity: 0,
        ease: "Power2.easeInOut"
      });
      tl.to(
        description,
        {
          x: 200,
          opacity: 0,
          ease: "Power2.easeInOut"
        },
        "<"
      );
      // tl.to(
      //   skillsItems.children,
      //   {
      //     x: -200,
      //     opacity: 0
      //   },
      //   "<"
      // );
    },
    enter(el, done) {
      const title = this.$refs.textBlock.$refs.title;
      const description = this.$refs.textBlock.$refs.description;
      // const skillsItems = this.$refs.skillsItems;
      const splitTextTitle = new SplitTextJS(title);
      const splitTextDescription = new SplitTextJS(description);
      const tl = gsap.timeline({
        onComplete: () => {
          done();
        }
      });
      tl.from(title, {
        x: -100,
        opacity: 0,
        ease: "Power2.easeInOut"
      });
      tl.from(
        description,
        {
          x: -100,
          opacity: 0,
          ease: "Power2.easeInOut"
        },
        "<"
      );
      // tl.from(
      //   skillsItems.children,
      //   {
      //     stagger: 0.05,
      //     y: 50,
      //     opacity: 0
      //   },
      //   "<"
      // );
    }
  }
};
</script>

<style lang="postcss">
.home-characters-info {
  @apply md:hidden;
  &__skills {
    @apply mt-[4.5rem];
    &-title {
      @apply flex space-x-2 text-2xl uppercase mb-5;
    }
    &-items {
      @apply flex-y-center space-x-9 pr-[16rem] md:hidden h-[128px] relative;

      &::before {
        content: "";
        @apply absolute left-0 right-0 top-0 bottom-0 
            bg-white bg-opacity-20 backdrop-filter backdrop-blur-[50px] h-[128px] z-[-1];
        margin-left: calc((100vw - 1670px) * -1);
        clip-path: polygon(0 0, 100% 0%, 85% 100%, 0% 100%);
        @media screen and (max-width: 1720px) {
          @apply ml-[-3.125rem];
        }
      }
    }
    &-item {
      @apply w-20 relative z-10;
    }
  }
}
</style>
