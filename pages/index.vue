<template>
  <div class="page-home">
    <!-- <HomeScreenFirst class="home-screen-full" ref="section1" />
    <HomeAbout class="home-screen-full" ref="section2" />
    <HomeRoadmap class="home-screen-full" ref="section3" />
    <HomeCharacters class="home-screen-full" ref="section4" />
    <HomeNft class="home-screen-full" ref="section5" /> -->
    <HomeEcosystem />
    <!-- <HomePartners class="" /> -->
    <HomeContact class="" />
  </div>
</template>

<script>
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import imagesLoaded from "imagesloaded";

export default {
  name: "Home",
  components: {},
  data: () => ({
    activeScreen: 0,
    scrollType: "section" // free
  }),

  mounted() {
    imagesLoaded(".page-home", () => {
      this.$nuxt.$emit("loco:update");
    });
    this.Hammer = require("hammerjs");
    this.sections = document.querySelectorAll(".home-screen-full");
    this.$locoScroll.scrollTo(0);
    this.startSectionScroll();
    this.$nuxt.$on("scrollNextSection", this.scrollNextSection);
    this.$nuxt.$on("scrollToSection", this.scrollToSectionById);
  },
  beforeDestroy() {
    this.stopFreeScroll();
    this.stopSectionScroll();
    this.$locoScroll.start();
    this.$nuxt.$off("scrollNextSection", this.scrollNextSection);
    this.$nuxt.$off("scrollToSection", this.scrollToSectionById);
  },
  computed: {
    activeSectionComp() {
      return this.$refs[`section${this.activeScreen + 1}`];
    }
  },
  methods: {
    scrollToSectionById(id) {
      if (this.isScrolling) return;
      const section = document.querySelector(id);
      const fullScreenSections = new Array(5)
        .fill(0)
        .map((_, index) => this.$refs[`section${index + 1}`]);
      const sectionFullIdx = fullScreenSections.findIndex(
        sec => sec.$el === section
      );
      if (sectionFullIdx > -1) {
        if (this.scrollType !== "section") {
          this.stopFreeScroll();
          this.startSectionScroll();
        }
        this.activeScreen = sectionFullIdx;
        this.$store.dispatch("resetPrimaryColor");
        this.activeSectionComp.beforeEnter();
        this.scrollToActiveSection();
      } else {
        this.activeScreen = 4;
        this.$store.dispatch("resetPrimaryColor");
        // this.activeSectionComp.beforeEnter();
        this.$locoScroll.scrollTo(id, {
          duration: 800,
          disableLerp: true,
          easing: [0.6, 0.02, 0.35, 0.97],
          callback: () => {
            if (this.scrollType !== "free") {
              this.stopSectionScroll();
              this.startFreeScroll();
            }
          }
        });
      }
    },
    startSectionScroll() {
      this.$nuxt.$emit("nav:transition", true);

      this.scrollType = "section";
      this.isScrolling = false;
      this.isAnimating = false;
      this.$locoScroll.stop();
      document.addEventListener("mousewheel", this.scrollSections);
      this.touchController = new this.Hammer.Manager(document.body);
      const Swipe = new this.Hammer.Swipe({
        event: "swipe"
      });
      this.touchController.add(Swipe);
      this.touchController.on("swipedown", e => {
        if (e.deltaY > 30) {
          if (this.activeScreen < 1) return;
          this.scrollPrevSection();
        }
      });
      this.touchController.on("swipeup", e => {
        if (e.deltaY < -30) {
          if (this.activeScreen >= this.sections.length - 1) return;
          this.scrollNextSection();
        }
      });
    },
    scrollNextSection() {
      if (this.activeScreen >= this.sections.length - 1) return;
      if (!this.activeSectionComp.beforeLeaveDown()) return;
      this.activeScreen++;
      this.$store.dispatch("resetPrimaryColor");
      this.activeSectionComp.beforeEnter();
      this.scrollToActiveSection();
    },
    scrollPrevSection() {
      if (this.activeScreen < 1) return;

      if (!this.activeSectionComp.beforeLeaveUp()) return;
      this.activeScreen--;
      this.$store.dispatch("resetPrimaryColor");
      this.activeSectionComp.beforeEnter();

      this.scrollToActiveSection();
    },
    stopSectionScroll() {
      this.scrollType = "free";
      document.removeEventListener("mousewheel", this.scrollSections);
      this.touchController.destroy();
      this.$nuxt.$emit("nav:transition", false);
    },
    scrollToSection(sectionIdx) {
      const nextSection = this.sections[sectionIdx];
      this.isScrolling = true;
      const top = nextSection.offsetTop;
      this.$nuxt.$emit(
        "nav:progress",
        (sectionIdx / (this.sections.length - 1)) * 100
      );
      this.$locoScroll.scrollTo(top, {
        duration: 800,
        disableLerp: true,
        easing: [0.6, 0.02, 0.35, 0.97],
        callback: () => {
          this.isScrolling = false;
          this.afterSectionEnter();
        }
      });
    },

    scrollToActiveSection() {
      this.scrollToSection(this.activeScreen);
    },
    scrollSections(e) {
      if (this.isScrolling || this.isAnimating) return;

      const delta = e.wheelDeltaY;
      if (delta < -10) {
        this.scrollNextSection();
      } else if (delta > 10) {
        this.scrollPrevSection();
      } else {
        return;
      }
      this.scrollToActiveSection();
    },
    startFreeScroll() {
      this.scrollType = "free";

      this.$locoScroll.start();
      this.$locoScroll.on("scroll", this.freeScrollListener);
    },
    freeScrollListener(e) {
      const lastSectionOffset = this.sections[this.sections.length - 1]
        .offsetTop;
      const currentScroll = e.scroll.y;
      const scrollSpace = e.limit.y - lastSectionOffset;
      const currentScrollSpace = e.scroll.y - lastSectionOffset;

      this.$nuxt.$emit(
        "nav:progress",
        (currentScrollSpace / scrollSpace) * 100
      );
      if (currentScroll < lastSectionOffset && this.scrollType !== "section") {
        this.startSectionScroll();
        this.stopFreeScroll();
        this.activeScreen--;
        this.scrollToActiveSection();
      }
    },
    stopFreeScroll() {
      this.scrollType = "section";
      this.$locoScroll.off("scroll", this.freeScrollListener);
    },

    afterSectionEnter() {
      if (this.activeScreen >= this.sections.length - 1) {
        // last screen
        this.stopSectionScroll();
        this.startFreeScroll();
      }
      this.activeSectionComp.afterEnter();
    }
  }
};
</script>
<style lang="postcss">
.page-home {
  .home-screen {
    @apply h-screen relative;

    /* scroll-snap-type: y mandatory; */
  }
}
</style>
