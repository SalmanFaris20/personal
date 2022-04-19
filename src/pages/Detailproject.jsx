import React from "react";
import Slider from "../components/Slider";
import "./detail.css";
import arrow from "../img/svg/arrow.svg";
import { Link, useParams } from "react-router-dom";
import check from "../img/svg/check.svg";


function Detailproject({ Webproject, Appproject }) {
  const params = useParams();
  const { title } = params;

  return (
    <div className="bg-putih dark:bg-birutua xl:h-screen font-utama flex flex-wrap space-y-2 justify-center px-5 text-center xl:text-left xl:justify-start xl:flex-nowrap xl:px-10 py-28 xl:space-x-5 2xl:space-x-10">
      <Slider Webproject={Webproject} title={title} Appproject={Appproject} />
      <div className="space-y-9">
        {Webproject.filter((list) => list.title === title).map((item) => {
          return (
            <>
              <div className="space-y-3 mt-10 w-full">
                <h1 className="text-birutua dark:text-white text-6xl font-bold ">
                  {item.title}
                </h1>
                <div className="flex gap-2 justify-center xl:justify-start">
                  <div className="h-0.5 w-7 bg-orange mt-3"></div>
                  <p className="text-birutua dark:text-orange">Portofolio</p>
                </div>
              </div>
              <div className="text-birutua dark:text-white">
                <h1 className="text-birutua dark:text-white font-bold text-xl">
                  Description:
                </h1>
                <p className="text-birutua dark:text-abu">{item.penjelasan}</p>
              </div>
              <div className="space-y-4">
                <h1 className="text-birutua dark:text-white font-bold text-xl">
                  Technology:
                </h1>
                <div className="flex gap-2 justify-center xl:justify-start">
                  {item.tech.map((item) => {
                    return <img src={item} alt="item" />;
                  })}
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-birutua dark:text-white font-bold text-xl">
                  Fitur:
                </h1>
                <p className="text-birutua dark:text-abu font-light gap-3 flex flex-wrap justify-center xl:justify-start">
                  {item.description.map((item) => {
                    return (
                      <div className="flex gap-2">
                        <img src={check} alt="check" />
                        <p>{item}</p>
                      </div>
                    );
                  })}
                </p>
              </div>
              <div className=" text-birutua dark:text-white">
                <a
                  href={item.launch}
                  className="flex gap-2 justify-center xl:justify-start"
                >
                  <h1>Launch Project</h1>
                  <img src={arrow} alt="arrow" />
                </a>
              </div>
            </>
          );
        })}
        {Appproject.filter((list) => list.title === title).map((item) => {
          return (
            <>
              <div className="space-y-3">
                <h1 className="text-birutua dark:text-white text-6xl font-bold">
                  {item.title}
                </h1>
                <div className="flex gap-2 justify-center xl:justify-start">
                  <div className="h-0.5 w-7 bg-orange mt-3"></div>
                  <p className="text-orange">Portofolio</p>
                </div>
                <div className="text-birutua dark:text-white">
                  <h1 className="text-birutua dark:text-white font-bold text-xl">
                    Description:
                  </h1>
                  <p className="text-birutua dark:text-abu">
                    {item.penjelasan}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <h1 className="text-birutua dark:text-white font-bold text-xl">
                  Technology:
                </h1>
                <div className="flex gap-2 justify-center xl:justify-start">
                  {item.tech.map((item) => {
                    return <img src={item} alt="item" />;
                  })}
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-birutua dark:text-white font-bold text-xl">
                  Fitur:
                </h1>
                <p className="text-birutua dark:text-abu font-light gap-3 flex flex-wrap justify-center xl:justify-start">
                  {item.description.map((item) => {
                    return (
                      <div className="flex gap-2">
                        <img src={check} alt="check" />
                        <p>{item}</p>
                      </div>
                    );
                  })}
                </p>
              </div>
              <div className=" text-birutua dark:text-white">
                <a
                  href={item.launch}
                  className="flex gap-2 justify-center xl:justify-start"
                >
                  <h1>Launch Project</h1>
                  <img src={arrow} alt="arrow" />
                </a>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}



export default Detailproject;
