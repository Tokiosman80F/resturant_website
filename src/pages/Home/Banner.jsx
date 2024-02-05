import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import banner1 from "../../assets/home/01.jpg";
import banner2 from "../../assets/home/02.jpg";
import banner3 from "../../assets/home/03.png";
import banner4 from "../../assets/home/04.jpg";
import banner5 from "../../assets/home/05.png";
import banner6 from "../../assets/home/06.png";
import "./banner.css";
const Banner = () => {

  return (
    <div>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        <SwiperSlide>
          <img src={banner1} alt="Banner 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="Banner 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="Banner 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner4} alt="Banner 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner5} alt="Banner 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner6} alt="Banner 6" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
