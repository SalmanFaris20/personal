const Skill = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row mt-10 font-utama justify-center md:justify-around items-center">
      <div className="grid grid-cols-1 space-y-4 gap-x-10 mt-10 text-putih">
        <div className="bg-abu bg-opacity-10 flex space-x-4 p-5 h-16 rounded-md">
          <svg
            width="24"
            height="24"
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.9318 22.9966C18.3712 23.5459 19.0835 23.5459 19.523 22.9966L20.3182 22.0025C20.7577 21.4532 20.7577 20.5629 20.3182 20.0136L17.8066 16.875L20.3175 13.7355C20.757 13.1862 20.757 12.2959 20.3175 11.7466L19.5223 10.7525C19.0828 10.2032 18.3705 10.2032 17.9311 10.7525L13.8291 15.8801C13.3896 16.4294 13.3896 17.3197 13.8291 17.869L17.9318 22.9966V22.9966ZM24.6825 22.0034L25.4777 22.9975C25.9172 23.5468 26.6295 23.5468 27.0689 22.9975L31.1709 17.8699C31.6104 17.3206 31.6104 16.4303 31.1709 15.881L27.0689 10.7534C26.6295 10.2041 25.9172 10.2041 25.4777 10.7534L24.6825 11.7475C24.243 12.2968 24.243 13.1871 24.6825 13.7364L27.1934 16.875L24.6825 20.0145C24.243 20.5638 24.243 21.4541 24.6825 22.0034V22.0034ZM43.875 36.5625H26.827C26.775 38.3036 25.7927 39.375 24.525 39.375H20.25C18.9359 39.375 17.9283 37.8396 17.9459 36.5625H1.125C0.50625 36.5625 0 37.1953 0 37.9688V39.375C0 42.4688 2.025 45 4.5 45H40.5C42.975 45 45 42.4688 45 39.375V37.9688C45 37.1953 44.4938 36.5625 43.875 36.5625ZM40.5 4.21875C40.5 1.89844 38.9812 0 37.125 0H7.875C6.01875 0 4.5 1.89844 4.5 4.21875V33.75H40.5V4.21875ZM36 28.125H9V5.625H36V28.125Z"
              fill="#EC4A4B"
            />
          </svg>
          <h4>Create Website</h4>
        </div>
        <div className="bg-abu bg-opacity-10 flex space-x-4 p-5 h-16 rounded-md">
          <svg
            width="24"
            height="24"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 4.1C50 2.1 47.9 0 45.7 0H18.3C16.1 0 14 2.1 14 4.1V59.8C14 61.9 16.1 63.9 18.3 63.9H45.8C47.9 63.9 50.1 61.8 50.1 59.8V4.1H50Z"
              fill="#171F38"
            />
            <path
              d="M49 59C49 61 47 63 45 63H19C17 63 15 61 15 59V5C15 3 17 1 19 1H45C47 1 49 3 49 5V59Z"
              fill="#EC4A4B"
            />
            <path
              d="M43.5 5.5C44.0523 5.5 44.5 5.05228 44.5 4.5C44.5 3.94772 44.0523 3.5 43.5 3.5C42.9477 3.5 42.5 3.94772 42.5 4.5C42.5 5.05228 42.9477 5.5 43.5 5.5Z"
              fill="#171F38"
            />
            <path
              d="M35 4.5C35 4.8 34.9 5 34.7 5H29.3C29.1 5 29 4.8 29 4.5C29 4.3 29.1 4 29.3 4H34.7C34.9 4 35 4.3 35 4.5Z"
              fill="#171F38"
            />
            <path d="M17 8H47V56H17V8Z" fill="#171F38" />
            <path
              d="M35.8 60.2C35.8 60.6 35.5 61 35 61H29C28.6 61 28.2 60.7 28.2 60.2V58.7C28.2 58.3 28.5 57.9 29 57.9H35C35.4 57.9 35.8 58.2 35.8 58.7V60.2Z"
              fill="#171F38"
            />
          </svg>
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
