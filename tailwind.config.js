/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],

  theme: {
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#000000",
      yellow: "#E3A93B",
      yellow_hover: "#DE9813",
      blue: "#1B3BA5",
      blue_hover: "#133195",
      text_light: "#fff",
      text_gray: "#565656",
      text_gray_light: "#9B9B9B",
      text_gray_dark: "#2C2C2C",
      title_light: "#FFFFFF",
      title_dark: "#474747",
      dark_background: "#3e3d3d",
    },
  },
};
