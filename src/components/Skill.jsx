import Mobile from "../img/svg/mobile.svg";
const Skill = () => {
  return (
    <div
      className="flex flex-col-reverse md:flex-row mt-10 font-utama justify-center md:justify-around items-center"
      id="skill"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="grid grid-cols-1 space-y-4 gap-x-10 mt-10 text-putih">
        <div className="bg-orange dark:bg-abu dark:bg-opacity-10 flex space-x-4 p-5 h-16 rounded-md">
          <svg
            width="24"
            height="24"
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-putih dark:fill-orange"
          >
            <path d="M17.9318 22.9966C18.3712 23.5459 19.0835 23.5459 19.523 22.9966L20.3182 22.0025C20.7577 21.4532 20.7577 20.5629 20.3182 20.0136L17.8066 16.875L20.3175 13.7355C20.757 13.1862 20.757 12.2959 20.3175 11.7466L19.5223 10.7525C19.0828 10.2032 18.3705 10.2032 17.9311 10.7525L13.8291 15.8801C13.3896 16.4294 13.3896 17.3197 13.8291 17.869L17.9318 22.9966V22.9966ZM24.6825 22.0034L25.4777 22.9975C25.9172 23.5468 26.6295 23.5468 27.0689 22.9975L31.1709 17.8699C31.6104 17.3206 31.6104 16.4303 31.1709 15.881L27.0689 10.7534C26.6295 10.2041 25.9172 10.2041 25.4777 10.7534L24.6825 11.7475C24.243 12.2968 24.243 13.1871 24.6825 13.7364L27.1934 16.875L24.6825 20.0145C24.243 20.5638 24.243 21.4541 24.6825 22.0034V22.0034ZM43.875 36.5625H26.827C26.775 38.3036 25.7927 39.375 24.525 39.375H20.25C18.9359 39.375 17.9283 37.8396 17.9459 36.5625H1.125C0.50625 36.5625 0 37.1953 0 37.9688V39.375C0 42.4688 2.025 45 4.5 45H40.5C42.975 45 45 42.4688 45 39.375V37.9688C45 37.1953 44.4938 36.5625 43.875 36.5625ZM40.5 4.21875C40.5 1.89844 38.9812 0 37.125 0H7.875C6.01875 0 4.5 1.89844 4.5 4.21875V33.75H40.5V4.21875ZM36 28.125H9V5.625H36V28.125Z" />
          </svg>
          <h4>Create Website</h4>
        </div>
        <div className="bg-orange dark:bg-abu dark:bg-opacity-10 flex space-x-4 p-5 h-16 rounded-md">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-putih dark:fill-orange"
          >
            <path d="M4.5 3C4.5 2.20435 4.81607 1.44129 5.37868 0.87868C5.94129 0.316071 6.70435 0 7.5 0L16.5 0C17.2956 0 18.0587 0.316071 18.6213 0.87868C19.1839 1.44129 19.5 2.20435 19.5 3V21C19.5 21.7956 19.1839 22.5587 18.6213 23.1213C18.0587 23.6839 17.2956 24 16.5 24H7.5C6.70435 24 5.94129 23.6839 5.37868 23.1213C4.81607 22.5587 4.5 21.7956 4.5 21V3ZM13.5 19.5C13.5 19.1022 13.342 18.7206 13.0607 18.4393C12.7794 18.158 12.3978 18 12 18C11.6022 18 11.2206 18.158 10.9393 18.4393C10.658 18.7206 10.5 19.1022 10.5 19.5C10.5 19.8978 10.658 20.2794 10.9393 20.5607C11.2206 20.842 11.6022 21 12 21C12.3978 21 12.7794 20.842 13.0607 20.5607C13.342 20.2794 13.5 19.8978 13.5 19.5Z" />
          </svg>
          <h4>Create Mobile App</h4>
        </div>
      </div>
      <div className="space-y-3 flex flex-col justify-center items-center md:items-start">
        <div className="flex space-x-2">
          <button className="h-0.5 w-4 bg-orange mt-3"></button>
          <h4 className="text-birutua dark:text-orange">What Can I do ?</h4>
        </div>
        <h1 className="text-birutua dark:text-white font-bold text-3xl">
          Build
        </h1>
        <h1 className="text-birutua dark:text-white font-bold text-3xl">
          Website & App
        </h1>
        <div className="w-72 text-birutua dark:text-abu text-sm text-center md:text-left">
          I have experience making websites and applications from design,
          slicing, coding to the deploying process.
        </div>
      </div>
    </div>
  );
};

export default Skill;
