import love from "../img/svg/love.svg";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="mt-20 flex flex-col justify-center px-5 sm:px-24 text-left font-utama">
      <div className="flex flex-col ">
        <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-7  mb-5 text-birutua dark:text-abu justify-center lg:justify-around">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="hover:text-orange cursor-pointer"
          >
            <h4>Home</h4>
          </Link>

          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="hover:text-orange cursor-pointer"
          >
            <h4>Portofolio</h4>
          </Link>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="hover:text-orange cursor-pointer"
          >
            <h4>Contact Me</h4>
          </Link>
        </div>
        <div className="flex space-x-2 text-birutua dark:text-abu md:justify-center">
          <img src={love} alt="love" />
          Created by Salman F.S.
        </div>
      </div>
      <div className="bg-abu h-0.5"></div>
      <div></div>
    </div>
  );
};

export default Footer;
