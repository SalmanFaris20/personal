import download from "../img/svg/download.svg";
import pdf from "../img/resume_salmanfarissiddiq.pdf";
import message from "../img/svg/message.svg";
import instagram from "../img/svg/instagram.svg";
import linkedin from "../img/svg/linkedin.svg";
import medium from "../img/svg/medium.svg";

const Main = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center lg:justify-around items-center mt-10 font-utama">
      <div className="flex flex-col justify-center items-center md:items-start">
        <div className="flex space-x-2">
          <div className="w-6 bg-orange h-1 mt-2.5 rounded"></div>
          <h4 className="text-orange ml-2 mb-5">Hello</h4>
        </div>
        <div className="font-bold text-4xl mb-5 w-72 text-center md:text-left text-putih mx-auto">
          <h1>I'M SALMAN FARIS SIDDIQ</h1>
        </div>

        <h4 className="text-abu mb-5">Fullstack Web Developer</h4>
        <div className="flex">
          <button className="border border-orange px-6 py-2 rounded-md text-orange">
            Hire Me
          </button>

          <button>
            <a href={pdf} className="flex py-2 px-2">
              <img src={download} alt="" />
              <h4 className="text-orange">Download CV</h4>
            </a>
          </button>
        </div>
      </div>
      <div className="flex space-x-0">
        <div className="bg-profile h-80 w-60 bg-cover rounded-l-3xl"></div>
        <div className="flex flex-col-reverse items-center mb-10">
          <img src={message} alt="" />
          <div className="flex  flex-col-reverse  space-y-5 items-center pb-20 mb-5">
            <h4 className="-rotate-90 mt-10 w-max text-abu">Follow Me</h4>
            <a href="https://www.instagram.com/salmanfarissiddiq/">
              <img src={instagram} alt="instagram" className="-rotate-90" />
            </a>
            <a href="https://www.linkedin.com/in/salman-faris-siddiq-952881155/">
              <img src={linkedin} alt="linkedin" className="-rotate-90" />
            </a>
            <a href="https://medium.com/@salman.faris.siddiq">
              <img src={medium} alt="medium" className="-rotate-90" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
