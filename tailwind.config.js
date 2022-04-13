module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        utama: ["Quicksand"],
      },
      colors: {
        birutua: "#0E1630",
        orange: "#EB4A4B",
        putih: "#FEECE9",
        abu: "#808DAD",
      },
      backgroundImage: {
        profile: "url('img/rb.jpg')",
        app: "url('img/homeapp.jpg')",
        guru: "url('img/guru.jpg')",
        cuapria: "url('img/cuapria.jpg')",
        swi: "url('img/swi.jpeg')",
        kopiku: "url(img/kopiku.png)",
        games: "url(img/games.jpg)",
        gamesjadi: "url(img/gamesjadi.jpg)",
        porto: "url(img/porto1.png)",
      },
      screens: {
        laptop: "1320px",
      },
      darkMode: "class",
    },
  },
  plugins: [require("flowbite/plugin")],
};
