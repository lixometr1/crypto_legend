const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    colors: {
      orange: "#FF5A36",
      transparent: "transparent",
      primary: "var(--color-primary)",
      white: "white",
      bg: "#201D1B",
      black: "#000000"
    },
    fontFamily: {
      main: ["Montserrat"],
      second: ["Michroma"]
    },
    screens: {
      xl: { max: "1920px" },
      lg: { max: "1280px" },
      md: { max: "992px" },
      sm: { max: "768px" },
      xs: { max: "550px" },
      xxs: { max: "350px" }
    },
    boxShadow: {
      main: '0px 0px 50px var(--color-primary)'
    },
    extend: {
      spacing: {
        4.5: "1.125rem"
      },
      width: {
        navbar: "var(--navbar-width)"
      },
      zIndex: {
        100: 100,
        200: 200,
        300: 300,
        400: 400,
        500: 500
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    plugin(({ addUtilities, theme }) => {
      const utilities = [
        {
          ".flex-center": {
            display: "flex",
            "align-items": "center",
            "justify-content": "center"
          }
        },
        {
          ".flex-y-center": {
            display: "flex",
            "align-items": "center"
          }
        },
        {
          ".flex-x-center": {
            display: "flex",
            "justify-content": "center"
          }
        }
      ];
      addUtilities(utilities);
    })
  ]
};
