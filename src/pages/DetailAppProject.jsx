import React from "react";
import Slider from "../components/Slider";
import "./detail.css";
import react from "../img/svg/react.svg";
import node from "../img/svg/node.svg";
import firebase from "../img/svg/firebase.svg";
import arrow from "../img/svg/arrow.svg";
import { useParams } from "react-router-dom";

export default function DetailAppProject({ Appproject }) {
  const params = useParams();
  const { title } = params;
  return (
    <div className="bg-birutua h-screen w-screen font-utama flex px-10 py-28">
      <Slider className="w-1/2" />
      <div className="w-1/2 space-y-9">
        {Appproject.filter((list) => list.title === title).map((item) => {
          return (
            <>
              <div className="space-y-3">
                <h1 className="text-white text-6xl font-bold">{item.title}</h1>
                <div className="flex gap-2">
                  <div className="h-0.5 w-7 bg-orange mt-3"></div>
                  <p className="text-orange">Portofolio</p>
                </div>
              </div>
              <div className="space-y-4">
                <h1 className="text-white font-bold text-xl">Technology:</h1>
                <div className="flex gap-2">
                  <img src={react} alt="react" />
                  <img src={node} alt="node" />
                  <img src={firebase} alt="firebase" />
                </div>
              </div>
              <div className="space-y-4">
                <h1 className="text-white font-bold text-xl">Description:</h1>
                <p className="text-abu font-light">{item.description}</p>
              </div>
              <div className="flex gap-2 text-white">
                <h1>Launch Project</h1>
                <img src={arrow} alt="arrow" />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
