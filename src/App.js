import { Route, Routes } from "react-router-dom";
import Homepages from "./pages/Homepages";
import Detailproject from "./pages/Detailproject";
import games1 from "./img/games1.png";
import games2 from "./img/games2.png";
import games3 from "./img/games3.png";
import games4 from "./img/games4.png";
import games5 from "./img/games5.jpg";
import games6 from "./img/games6.jpg";
import react from "./img/svg/react.svg";
import firebase from "./img/svg/firebase.svg";
import node from "./img/svg/node.svg";
import html from "./img/svg/html.svg";
import css from "./img/svg/css.svg";
import js from "./img/svg/js.svg";
import gunting1 from "./img/gunting1.png";
import gunting2 from "./img/gunting2.jpg";
import gunting3 from "./img/gunting3.jpg";
import gunting4 from "./img/gunting4.png";
import gunting5 from "./img/gunting5.png";
import gunting6 from "./img/gunting6.jpg";
import porto1 from "./img/porto1.png";
import porto2 from "./img/porto2.png";
import porto3 from "./img/porto3.png";
import porto4 from "./img/porto4.png";
import porto5 from "./img/porto5.png";
import tailwind from "./img/svg/tailwind.svg";
import mui from "./img/svg/mui.svg";
import bootstrap from "./img/svg/bootstrap.svg";

const Webproject = [
  {
    id: 1,
    title: "Landing Page Website",
    description: ["Responsive"],
    image: "bg-games",
    gambar: [gunting1, gunting2, gunting3, gunting4, gunting5, gunting6],
    tech: [html, css, js, bootstrap],
    launch: "https://games-gunting.herokuapp.com/",
  },
  {
    id: 2,
    title: "Rock Scissor Paper Games Complete",
    description: [
      "Authentication",
      "Authorization",
      "Game Play",
      "Leaderboard",
      "Edit Profile",
    ],
    image: "bg-gamesjadi",
    gambar: [games1, games2, games3, games4, games5, games6],
    tech: [react, firebase, node, mui],
    launch: "https://binar-challenge9.herokuapp.com/",
  },
  {
    id: 3,
    title: "Portofolio Website",
    description: ["Responsive", "Single Page Application"],
    image: "bg-porto",
    gambar: [porto1, porto2, porto3, porto4, porto5],
    tech: [react, tailwind],
    launch: "portofoliosalman.herokuapp.com",
  },
];

const Appproject = [
  {
    id: 1,
    title: "Aplikasi Android Rancah Betah",
    description: ["Authorization", "Authentication"],
    gambar: [porto1, porto2, porto3, porto4, porto5],
    image: "bg-app",
    tech: [react, firebase],
    launch: "portofoliosalman.herokuapp.com",
  },
];

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Homepages Webproject={Webproject} Appproject={Appproject} />}
      />
      <Route
        path="/detail/:title"
        element={
          <Detailproject Webproject={Webproject} Appproject={Appproject} />
        }
      />
    </Routes>
  );
}

export default App;
