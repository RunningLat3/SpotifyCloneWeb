module.exports = {
  darkMode: false,
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      width: {
        sideBar: "232px"
      },
      height: {
        topBar: "60px",
        nowPlayingBar: "90px"
      },
      colors: {
        primary: '#1db954',
        sliderRail: '#535353',
        sliderTrack: '#b3b3b3'
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("tailwindcss-logical")],
};
