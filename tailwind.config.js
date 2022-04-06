module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        utama: ["Quicksand"],
      },
      colors: {
        birutua: "#0E1630",
        orange: "#EB4A4B",
        putih: "#FFFFFF",
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
      },
      screens: {
        laptop: "1320px",
      },
    },
  },
  plugins: [],
};
