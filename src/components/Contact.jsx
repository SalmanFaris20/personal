import phone from "../img/svg/phone.svg";
import mail from "../img/svg/mail.svg";
import tempat from "../img/svg/tempat.svg";

const Contact = () => {
  return (
    <div
      className="flex flex-col lg:flex-row justify-center items-center mt-10 font-utama space-y-6 px-5"
      id="contact"
    >
      <div className="space-y-6 flex flex-col justify-center items-center text-center lg:text-left lg:px-24 xl:px-40 lg:items-start">
        <div className="flex space-x-2">
          <div className="h-0.5 w-5 bg-orange mt-3"></div>
          <h4 className="text-birutua dark:text-orange">Contact Me</h4>
        </div>
        <div>
          <h2 className="font-bold text-3xl text-birutua dark:text-white">
            Let's Work Together
          </h2>
        </div>
        <div>
          <p className="text-birutua dark:text-abu text-center lg:text-left">
            in bellow here, some own contact you can touch me
          </p>
        </div>
        <div className="space-y-5">
          <div className="flex items-center space-x-3">
            <div className="bg-abu bg-opacity-10 p-2 rounded-md">
              <img src={tempat} alt="tempat" />
            </div>

            <h4 className="text-birutua dark:text-abu">
              Ciamis - Jawa Barat - Indonesia
            </h4>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-abu bg-opacity-10 p-2 rounded-md">
              <img src={mail} alt="email" />
            </div>

            <h4 className="text-birutua dark:text-abu">
              salman.faris.siddiq@gmail.com
            </h4>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-abu bg-opacity-10 p-2 rounded-md">
              <img src={phone} alt="phone" />
            </div>

            <h4 className="text-birutua dark:text-abu">+6285157554036</h4>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full sm:px-20">
        <form className="space-y-5 " name="submit-form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full h-14 text-birutua dark:text-abu bg-abu px-3 py-2 rounded-md bg-opacity-10 placeholder-birutua dark:placeholder-abu block focus:outline-none focus:ring-2 focus:ring-orange focus:border-orange"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full h-14 text-birutua dark:text-abu bg-abu px-3 py-2 rounded-md bg-opacity-10 placeholder-birutua dark:placeholder-abu  block focus:outline-none focus:ring-2 focus:ring-orange focus:border-orange invalid:text-orange invalid:focus:ring-orange invalid:focus:border-orange peer"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full h-14 text-birutua dark:text-abu bg-abu px-3 py-2 rounded-md bg-opacity-10 placeholder-birutua dark:placeholder-abu  block focus:outline-none focus:ring-2 focus:ring-orange focus:border-orange"
          />
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-birutua dark:text-abu bg-abu bg-opacity-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange focus:border-orange placeholder-birutua dark:placeholder-abu "
            placeholder="Message"
            name="message"
          ></textarea>

          <button
            type="submit"
            className="py-2.5 px-5 text-white bg-orange rounded-full mx-auto hover:bg-red-700 cursor-pointer focus:ring-1 focus:ring-white btn-kirim"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
