import exit from "../img/svg/exit.svg";
import home from "../img/svg/home.svg";
import project from "../img/svg/project.svg";
import contact from "../img/svg/contact.svg";
import about from "../img/svg/about.svg";

const Toogle = (props) => {
  return (
    <div>
      <div
        className="fixed h-screen w-screen bg-putih dark:bg-birutua z-10 transition-all"
        data-aos="flip-left"
      >
        <div
          className="fixed top-5 right-16 sm:right-32 lg:right-28 xl:right-44 cursor-pointer"
          onClick={() => props.exit()}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-orange dark:fill-putih"
          >
            <path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM17 15.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12L17 15.59Z" />
          </svg>
        </div>
        <div className="text-birutua dark:text-abu flex flex-col justify-center items-center h-screen space-y-5 text-3xl text-left">
          <div className="p-5 space-y-8">
            <div>
              <a
                href="#home"
                onClick={() => props.exit()}
                className="flex space-x-5"
              >
                <img src={home} alt="home" />
                <div className="hover:text-orange cursor-pointer">Home</div>
              </a>
            </div>
            <div>
              <a
                href="#project"
                onClick={() => props.exit()}
                className="flex space-x-5"
              >
                <img src={project} alt="project" />
                <div className="hover:text-orange cursor-pointer">Project</div>
              </a>
            </div>
            <div>
              <a
                href="#contact"
                onClick={() => props.exit()}
                className="flex space-x-5"
              >
                <img src={contact} alt="contact" />
                <div className="hover:text-orange cursor-pointer">Contact</div>
              </a>
            </div>

            <div className="flex space-x-2">
              <div className="bg-orange px-5 py-1 text-birutua rounded-lg cursor-pointer">
                Hire Me
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toogle;
