import { useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = ({ Webproject, Appproject }) => {
  AOS.init();
  const [isWeb, setIsWeb] = useState(false);
  const [isApp, setIsApp] = useState(true);

  const handleWeb = () => {
    setIsWeb(true);

    setIsApp(false);
  };
  const handleApp = () => {
    setIsWeb(false);
    setIsApp(true);
  };

  return (
    <div
      className="font-utama mt-14 flex flex-col justify-center items-center md:items-start md:px-20 lg:px-32 xl:px-44"
      id="project"
    >
      <div className="md:flex md:justify-between md:w-full md:items-end">
        <div className="text-center md:text-left">
          <div className="flex space-x-2 justify-center md:justify-start mb-5 text-birutua dark:text-orange">
            <div className="h-0.5 w-7 bg-orange mt-3"></div>
            <h1>My Portofolio</h1>
          </div>
          <div>
            <h2 className="font-bold text-2xl text-birutua dark:text-putih">
              Some of My Project
            </h2>
          </div>
        </div>
        <div>
          <div className="text-putih mt-5 flex space-x-4">
            <div
              className={
                isApp
                  ? " bg-orange px-5 py-1 rounded-md text-center cursor-pointer"
                  : "bg-orange dark:bg-abu dark:bg-opacity-10 px-5 py-1 rounded-md text-center cursor-pointer"
              }
              onClick={() => handleApp()}
            >
              app
            </div>
            <div
              className={
                isWeb
                  ? " bg-orange px-5 py-1 rounded-md text-center cursor-pointer"
                  : "bg-orange dark:bg-abu dark:bg-opacity-10 px-5 py-1 rounded-md text-center cursor-pointer"
              }
              onClick={() => handleWeb()}
            >
              website
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 md:px-0 mt-10">
        {isApp && (
          <div
            className="p-5 bg-orange dark:bg-abu dark:bg-opacity-10 w-80 rounded-3xl space-y-3 flex flex-col justify-center items-center  text-center"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            {Appproject.map((item) => {
              return (
                <>
                  <h4 className="text-putih dark:text-orange font-bold">
                    {item.title}
                  </h4>

                  <Link to={`/detail/${item.title}`}>
                    <button className="bg-birutua dark:bg-orange px-5 py-1.5 rounded-lg text-putih">
                      Detail Project
                    </button>
                  </Link>

                  <div
                    className={`${item.image} h-80 w-60 bg-cover rounded-xl`}
                  ></div>
                </>
              );
            })}
          </div>
        )}
        {isWeb && (
          <div
            className="grid md:grid-cols-2 laptop:grid-cols-3 gap-10 w-full"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            {Webproject.map((item) => {
              return (
                <div className="p-5 bg-orange dark:bg-abu dark:bg-opacity-10 rounded-3xl w-80 space-y-3 flex flex-col justify-center items-center text-center">
                  <h4 className="text-putih dark:text-orange font-bold">
                    {item.title}
                  </h4>

                  <Link to={`/detail/${item.title}`}>
                    <button className="bg-birutua dark:bg-orange px-5 py-1.5 rounded-lg text-putih">
                      Detail Project
                    </button>
                  </Link>
                  <div
                    className={`${item.image} bg-center h-80 w-60 bg-cover rounded-xl`}
                  ></div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
