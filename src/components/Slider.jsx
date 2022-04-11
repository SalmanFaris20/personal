import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../public/slider.css";

import { Navigation } from "swiper";

export default function Slider({ Webproject, title, Appproject }) {
  return (
    <>
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="MySwipper"
      >
        {Webproject.filter((item) => item.title === title).map((image) => {
          return (
            <>
              {image.gambar.map((item) => {
                return (
                  <SwiperSlide>
                    <img src={item} alt="fixed" />
                  </SwiperSlide>
                );
              })}
            </>
          );
        })}
        {Appproject.filter((item) => item.title === title).map((image) => {
          return (
            <>
              {image.gambar.map((item) => {
                return (
                  <SwiperSlide>
                    <img src={item} alt="fixed" />
                  </SwiperSlide>
                );
              })}
            </>
          );
        })}
      </Swiper>
    </>
  );
}
