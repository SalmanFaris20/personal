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
import app1 from "./img/app.jpg";
import app2 from "./img/app2.jpg";
import app3 from "./img/app3.jpg";
import app4 from "./img/app4.jpg";

const Webproject = [
  {
    id: 1,
    title: "Landing Page Website",
    description: ["Responsive"],
    penjelasan:
      "Landing Page Game Website yang terdapat berbagai pilihan permainan",
    image: "bg-games",
    gambar: [gunting1, gunting2, gunting3, gunting4, gunting5, gunting6],
    tech: [html, css, js, bootstrap],
    launch: "https://games-gunting.herokuapp.com/",
  },
  {
    id: 2,
    title: "Rock Scissor Paper Games",
    description: [
      "Authentication",
      "Authorization",
      "Game Play",
      "Leaderboard",
      "Edit Profile",
    ],
    penjelasan:
      "Website games dengan banyak pilihan permainan. Games utama yaitu rock paper scissor yang bisa dimainkan melawan computer. User yang menang akan mendapatkan poin dan bersaing untuk menjadi top 1 leaderboard.",
    image: "bg-gamesjadi",
    gambar: [games1, games2, games3, games4, games5, games6],
    tech: [react, firebase, node, mui],
    launch: "https://binar-challenge9.herokuapp.com/",
  },
  {
    id: 3,
    title: "Portofolio Website",
    description: ["Responsive", "Single Page Application"],
    penjelasan:
      "Website portofolio untuk menginformasikan beberapa project yang pernah dikerjakan, ataupun skillset yang sudah dikuasai",
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
    penjelasan:
      "aplikasi cloning gojek yang lebih sederhana, user dapat memesan produk yang nantinya terhubung ke whatsapp. Aplikasi sudah dilaunch secara public dan telah digunakan oleh masyarakat",
    gambar: [app1, app2, app3, app4],
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
