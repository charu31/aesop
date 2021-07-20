import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Scrollbar } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import "./Slider.css";
SwiperCore.use([Navigation, Scrollbar]);

const Slider = ({ data }) => {
  console.log("data", data);
  const classs = data[0].classs;

  return (
    <div className={`topmost-cont ${classs}`}>
      <div className="card-maincont">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          navigation
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            638: {
              // width: 640,
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1027: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {data.map((dat) => {
            const { id, image, title, desc } = dat;
            return (
              <SwiperSlide>
                <section className="card-cont" key={id}>
                  <div className="card-img-cont">
                    <img className="card-img" src={image} alt={image} />
                  </div>

                <div className ="slidertext_cont">
                  <h1 className="card-title">{title}</h1>
                  <p className="card-desc">{desc}</p>
                </div>
                </section>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
