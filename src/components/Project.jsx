import { useState } from "react";


const Webproject = [
  {
    title: "Landing Page Website",
    description: "Landing Page Website Games",
    image: "bg-games",
  },
  {
    title: "Rock Scissor Paper Games Complete",
    description: "Authentication, Play Games, Leaderboard",
    image: "bg-gamesjadi",
  },
];

const Speakerproject = [
  {
    title: "Pembicara di Komunitas Cuapria, Ciamis",
    description: "Menjadi bintang tamu sebagai founder Rancah Betah",
    image: "bg-cuapria",
  },
  {
    title: "Pembicara di Komunitas Smart With Islam",
    description: "Menjadi bintang tamu sebagai founder Rancah Betah",
    image: "bg-swi",
  },
  {
    title: "Pembicara di Komunitas Kopiku Literasi",
    description: "Menjadi bintang tamu sebagai founder Rancah Betah",
    image: "bg-kopiku",
  },
];

const Project = () => {
  const [isWeb, setIsWeb] = useState(false);
  const [isApp, setIsApp] = useState(true);
  const [isSpeaker, setIsSpeaker] = useState(false);

  const handleWeb = () => {
    setIsWeb(true);
    setIsSpeaker(false);
    setIsApp(false);
  };
  const handleApp = () => {
    setIsWeb(false);
    setIsApp(true);
    setIsSpeaker(false);
  };

  const handleSpeaker = () => {
    setIsSpeaker(true);
    setIsApp(false);
    setIsWeb(false);
  };

  return (
    <div className="font-utama mt-14 flex flex-col justify-center items-center md:items-start md:px-20 lg:px-32 xl:px-44">
      <div className="md:flex md:justify-between md:w-full md:items-end">
        <div className="text-center md:text-left">
          <div className="flex space-x-2 justify-center md:justify-start mb-5 text-orange">
            <div className="h-0.5 w-7 bg-orange mt-3"></div>
            <h1>My Portofolio</h1>
          </div>
          <div>
            <h2 className="font-bold text-2xl text-putih">
              Some of My Project
            </h2>
          </div>
        </div>
        <div>
          <div className="text-putih mt-5 flex space-x-4">
            <div
              className={
                isApp
                  ? "bg-orange px-5 py-1 rounded-md text-center cursor-pointer"
                  : "bg-abu bg-opacity-10 px-5 py-1 rounded-md text-center cursor-pointer"
              }
              onClick={() => handleApp()}
            >
              app
            </div>
            <div
              className={
                isWeb
                  ? "bg-orange px-5 py-1 rounded-md text-center cursor-pointer"
                  : "bg-abu bg-opacity-10 px-5 py-1 rounded-md text-center cursor-pointer"
              }
              onClick={() => handleWeb()}
            >
              website
            </div>
            <div
              className={
                isSpeaker
                  ? "bg-orange px-5 py-1 rounded-md text-center cursor-pointer"
                  : "bg-abu bg-opacity-10 px-5 py-1 rounded-md text-center cursor-pointer"
              }
              onClick={() => handleSpeaker()}
            >
              speaker
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 md:px-0 mt-10">
        {isApp && (
          <div className="p-5 bg-abu bg-opacity-10 w-80 rounded-3xl space-y-3 flex flex-col justify-center items-center  text-center">
            <h4 className="text-orange font-bold">App Android Rancah Betah</h4>
            <p className="text-abu">
              Aplikasi yang digunakan untuk menghubungkan user dengan pelaku
              usaha melalui link whatsapp.
            </p>
            <a href="https://play.google.com/store/apps/details?id=com.rancahbetah">
              <button className="bg-orange px-5 py-1.5 rounded-lg text-putih">
                Detail Project
              </button>
            </a>
            <div className="bg-app h-80 w-60 bg-cover rounded-xl"></div>
          </div>
        )}
        {isWeb && (
          <div className="grid md:grid-cols-2 laptop:grid-cols-3 gap-10 w-full">
            {Webproject.map((item) => {
              return (
                <div className="p-5 bg-abu bg-opacity-10 rounded-3xl w-80 space-y-3 flex flex-col justify-center items-center text-center">
                  <h4 className="text-orange font-bold">{item.title}</h4>
                  <p className="text-abu">{item.description}</p>
                  <a href="https://games-gunting.herokuapp.com/">
                    <button className="bg-orange px-5 py-1.5 rounded-lg text-putih">
                      Detail Project
                    </button>
                  </a>
                  <div
                    className={`${item.image} bg-center h-80 w-60 bg-cover rounded-xl`}
                  ></div>
                </div>
              );
            })}
          </div>
        )}

        {isSpeaker && (
          <div className="grid md:grid-cols-2 laptop:grid-cols-3 gap-10 w-full">
            {Speakerproject.map((item) => {
              return (
                <div className="p-5 bg-abu bg-opacity-10 rounded-3xl w-80 space-y-3 flex flex-col justify-center items-center text-center">
                  <h4 className="text-orange font-bold">{item.title}</h4>
                  <p className="text-abu">{item.description}</p>
                  <a href="">
                    <button className="bg-orange px-5 py-1.5 rounded-lg text-putih">
                      Detail Project
                    </button>
                  </a>
                  <div
                    className={`${item.image} h-80 w-60 bg-cover rounded-xl`}
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
