/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "light":"#ffffff",
        "dark": "#2b2b2b",
        "primary": "#005E7F",
        "accent": "#ffc139",
      },
      backgroundImage:{
        "banner-desk":"url('/dist/img/cinet-banner-desktop.svg')",
        "cat-1":"url('/dist/img/destinations-1-363x260.jpg')",
        "cat-2":"url('/dist/img/destinations-2-363x260.jpg')",
        "cat-3":"url('/dist/img/destinations-3-363x260.jpg')",
        "cat-4":"url('/dist/img/destinations-4-363x260.jpg')",
        "cat-5":"url('/dist/img/destinations-5-363x260.jpg')",
      },
    },
  },
  plugins: [],
}