import Mobile from "../img/svg/mobile.svg";
import website from "../img/svg/website.svg";

const Skill = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row mt-10 font-utama justify-center md:justify-around items-center">
      <div className="grid grid-cols-1 space-y-4 gap-x-10 mt-10 text-putih">
        <div className="bg-abu bg-opacity-10 flex space-x-4 p-5 h-16 rounded-md">
          <img src={website} alt="website" />
          <h4>Create Website</h4>
        </div>
        <div className="bg-abu bg-opacity-10 flex space-x-4 p-5 h-16 rounded-md">
          <img src={Mobile} alt="mobile" />
          <h4>Create Mobile App</h4>
        </div>
      </div>
      <div className="space-y-3 flex flex-col justify-center items-center md:items-start">
        <div className="flex space-x-2">
          <button className="h-0.5 w-4 bg-orange mt-3"></button>
          <h4 className="text-orange">What Can I do ?</h4>
        </div>
        <h1 className="text-white font-bold text-3xl">Build</h1>
        <h1 className="text-white font-bold text-3xl">Website & App</h1>
        <div className="w-72 text-abu text-sm text-center md:text-left">
          I was experience create from zero many website & app. Especially I
          prefer Frontend Developer.
        </div>
      </div>
    </div>
  );
};

export default Skill;
