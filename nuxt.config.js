export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "crypto legend",
    htmlAttrs: {
      lang: "ru"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      // REMOVE
      { hid: "robots", name: "robots", content: "noindex" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/css/index.css"],
  
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/gsap", mode: "client" },
    { src: "@/plugins/locomotive", mode: "client" },
    { src: "@/plugins/swiper", mode: "client" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    { path: "~/components", extensions: ["vue"] },
    { path: "~/components/Base", extensions: ["vue"] }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/svg",
    "@nuxtjs/google-fonts"
  ],
  googleFonts: {
    families: {
      "Open+Sans": [400, 500, 600, 700],
      Michroma: [400, 500, 600, 700]
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],
  server: {
    host: "0.0.0.0"
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        "postcss-import": true,
        "postcss-nested": {}
      }
    }
  }
};
