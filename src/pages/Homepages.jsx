import { useState } from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Project from "../components/Project";
import Skill from "../components/Skill";
import Software from "../components/Software";
import Toogle from "../components/Toogle";

function Homepages({ Webproject, Appproject }) {
  const [editMenu, setEditMenu] = useState(false);
  const handleClickMenu = () => {
    setEditMenu(true);
  };

  const handleExit = () => {
    setEditMenu(false);
  };
  return (
    <div className="bg-birutua ">
      {editMenu ? <Toogle exit={handleExit} /> : ""}

      <div>
        <div className="flex justify-between px-10 py-5">
          <div className="text-3xl px-0 sm:px-5 md:px-10 lg:px-14 xl:px-32 text-orange font-utama font-bold">
            SFS
          </div>
          {editMenu ? (
            ""
          ) : (
            <div
              onClick={() => handleClickMenu()}
              className="fixed top-5 right-16 sm:right-32 lg:right-28  xl:right-44 cursor-pointer text-abu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 6.98291C7.73478 6.98291 7.48043 7.08827 7.29289 7.2758C7.10536 7.46334 7 7.71769 7 7.98291C7 8.24813 7.10536 8.50248 7.29289 8.69002C7.48043 8.87755 7.73478 8.98291 8 8.98291H16C16.2652 8.98291 16.5196 8.87755 16.7071 8.69002C16.8946 8.50248 17 8.24813 17 7.98291C17 7.71769 16.8946 7.46334 16.7071 7.2758C16.5196 7.08827 16.2652 6.98291 16 6.98291H8V6.98291ZM7 11.9999C7 11.7347 7.10536 11.4803 7.29289 11.2928C7.48043 11.1053 7.73478 10.9999 8 10.9999H16C16.2652 10.9999 16.5196 11.1053 16.7071 11.2928C16.8946 11.4803 17 11.7347 17 11.9999C17 12.2651 16.8946 12.5195 16.7071 12.707C16.5196 12.8946 16.2652 12.9999 16 12.9999H8C7.73478 12.9999 7.48043 12.8946 7.29289 12.707C7.10536 12.5195 7 12.2651 7 11.9999ZM8 15.0169C7.73478 15.0169 7.48043 15.1223 7.29289 15.3098C7.10536 15.4973 7 15.7517 7 16.0169C7 16.2821 7.10536 16.5365 7.29289 16.724C7.48043 16.9116 7.73478 17.0169 8 17.0169H16C16.2652 17.0169 16.5196 16.9116 16.7071 16.724C16.8946 16.5365 17 16.2821 17 16.0169C17 15.7517 16.8946 15.4973 16.7071 15.3098C16.5196 15.1223 16.2652 15.0169 16 15.0169H8Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12ZM20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12V12Z"
                  fill="white"
                />
              </svg>
            </div>
          )}
        </div>
        {editMenu ? "" : <Main />}

        <Skill />
        <Project Webproject={Webproject} Appproject={Appproject} />
        <Software />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Homepages;
