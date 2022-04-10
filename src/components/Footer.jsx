import love from "../img/svg/love.svg";

const Footer = () => {
  return (
    <div className="mt-20 flex flex-col justify-center px-5 sm:px-24 text-left font-utama">
      <div className="flex flex-col ">
        <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-7  mb-5 text-abu justify-center lg:justify-around">
          <a href="#" className="hover:text-orange">
            <h4>Home</h4>
          </a>
          <a href="#about" className="hover:text-orange">
            <h4>Skill</h4>
          </a>
          <a href="#project" className="hover:text-orange">
            <h4>Portofolio</h4>
          </a>
          <a href="#software" className="hover:text-orange">
            <h4>Tools</h4>
          </a>
          <a href="#contact" className="hover:text-orange">
            <h4>Contact Me</h4>
          </a>
        </div>
        <div className="flex space-x-2 text-abu md:justify-center">
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
