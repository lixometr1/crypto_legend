import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { ScrollContainerSelector } from "~/helpers/constants";
export default (_, inject) => {
  ScrollTrigger.defaults({
    scroller: ScrollContainerSelector,
    toggleActions: "play pause play reverse"
  });
  const el = document.querySelector(ScrollContainerSelector);
  const locoScroll = new LocomotiveScroll({
    el,
    smooth: true,
    smoothMobile: true,
    smartphone: { smooth: true, lerp: 1 },
    tablet: { smooth: true },
    // scrollFromAnywhere: true,
    // lerp: 0.09,
    lerp: 0.3
  });

  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy(ScrollContainerSelector, {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    pinType: el.style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();

  inject("locoScroll", locoScroll);
};
