import exit from "../img/svg/exit.svg";
import home from "../img/svg/home.svg";
import project from "../img/svg/project.svg";
import contact from "../img/svg/contact.svg";
import about from "../img/svg/about.svg";

const Toogle = (props) => {
  return (
    <div>
      <div className="fixed h-screen w-screen bg-birutua">
        <div
          className="fixed top-5 right-16 sm:right-32 lg:right-28 xl:right-44 cursor-pointer"
          onClick={() => props.exit()}
        >
          <img src={exit} alt="exit" />
        </div>
        <div className="text-abu flex flex-col justify-center items-center h-screen space-y-5 text-3xl text-left">
          <div className="p-5 space-y-8">
            <div className="flex space-x-5">
              <img src={home} alt="home" />
              <div className="hover:text-orange cursor-pointer">Home</div>
            </div>
            <div className="flex space-x-5">
              <img src={project} alt="project" />
              <div className="hover:text-orange cursor-pointer">Project</div>
            </div>
            <div className="flex space-x-5">
              <img src={contact} alt="contact" />
              <a href="#contact">
                <div className="hover:text-orange cursor-pointer">Contact</div>
              </a>
            </div>
            <div className="flex space-x-5">
              <img src={about} alt="about" />
              <div className="hover:text-orange cursor-pointer">About</div>
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
