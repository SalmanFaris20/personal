import phone from "../img/svg/phone.svg";
import mail from "../img/svg/mail.svg";
import tempat from "../img/svg/tempat.svg";

const Contact = () => {
  return (
    <div
      className="flex flex-col lg:flex-row justify-center items-center mt-10 font-utama space-y-6 px-5"
      id="contact"
    >
      <div
        className="space-y-6 flex flex-col justify-center items-center text-center lg:text-left lg:px-24 xl:px-40 lg:items-start"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
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
            <div className="bg-orange dark:bg-abu dark:bg-opacity-10 p-2 rounded-md">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-putih dark:fill-orange"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.66304 14.2366 10.2989 13.7678 10.7678C13.2989 11.2366 12.663 11.5 12 11.5V11.5Z" />
              </svg>
            </div>

            <h4 className="text-birutua dark:text-abu">
              Ciamis - Jawa Barat - Indonesia
            </h4>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-orange dark:bg-abu dark:bg-opacity-10 p-2 rounded-md">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-putih dark:fill-orange"
              >
                <path d="M4.644 4.80005H20.544C22.044 4.80005 22.8 5.50805 22.8 6.94805V17.052C22.8 18.48 22.044 19.2 20.544 19.2H4.644C3.144 19.2 2.388 18.48 2.388 17.052V6.94805C2.388 5.50805 3.144 4.80005 4.644 4.80005ZM12.588 15.12L20.676 8.48405C20.964 8.24405 21.192 7.69205 20.832 7.20005C20.484 6.70805 19.848 6.69605 19.428 6.99605L12.588 11.628L5.76 6.99605C5.34 6.69605 4.704 6.70805 4.356 7.20005C3.996 7.69205 4.224 8.24405 4.512 8.48405L12.588 15.12Z" />
              </svg>
            </div>

            <h4 className="text-birutua dark:text-abu">
              salman.faris.siddiq@gmail.com
            </h4>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-orange dark:bg-abu dark:bg-opacity-10 p-2 rounded-md">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-putih dark:fill-orange"
              >
                <path d="M20.7563 5.39531L18.2602 2.90156C18.0841 2.72471 17.8748 2.58439 17.6443 2.48867C17.4139 2.39294 17.1668 2.34369 16.9172 2.34375C16.4086 2.34375 15.9305 2.54297 15.5719 2.90156L12.8859 5.5875C12.7091 5.76358 12.5688 5.97286 12.473 6.20333C12.3773 6.4338 12.3281 6.68091 12.3281 6.93047C12.3281 7.43906 12.5273 7.91719 12.8859 8.27578L14.85 10.2398C14.3903 11.2532 13.7511 12.175 12.9633 12.9609C12.1775 13.7506 11.2557 14.3922 10.2422 14.8547L8.27813 12.8906C8.10205 12.7138 7.89277 12.5735 7.6623 12.4777C7.43183 12.382 7.18472 12.3328 6.93516 12.3328C6.42657 12.3328 5.94844 12.532 5.58985 12.8906L2.90156 15.5742C2.7245 15.7506 2.58406 15.9603 2.48832 16.1912C2.39259 16.4221 2.34346 16.6696 2.34375 16.9195C2.34375 17.4281 2.54297 17.9062 2.90156 18.2648L5.39297 20.7562C5.96485 21.3305 6.75469 21.6562 7.56563 21.6562C7.73672 21.6562 7.90079 21.6422 8.0625 21.6141C11.2219 21.0938 14.3555 19.4133 16.8844 16.8867C19.4109 14.3625 21.0891 11.2312 21.6164 8.0625C21.7758 7.09453 21.4547 6.09844 20.7563 5.39531V5.39531Z" />
              </svg>
            </div>

            <h4 className="text-birutua dark:text-abu">+6285157554036</h4>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full sm:px-20">
        <form
          className="space-y-5 "
          name="submit-form"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
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
