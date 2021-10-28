import imagesLoaded from "imagesloaded";
export default {
  methods: {
    updateNavProgress(e) {
      this.$nuxt.$emit("nav:progress", (e.scroll.y / e.limit.y) * 100);
    }
  },
  mounted() {
    imagesLoaded(".page", () => {
      this.$nuxt.$emit("loco:update");
    });
    this.$nuxt.$emit("nav:transition", false);
    this.$locoScroll.on("scroll", this.updateNavProgress);
  },

  beforeDestroy() {
    this.$locoScroll.off("scroll", this.updateNavProgress);
  }
};
