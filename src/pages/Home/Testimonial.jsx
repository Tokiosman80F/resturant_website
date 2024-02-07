import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect } from "react";

// import react rating
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
// icon
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/clientreviews")
      .then((response) => response.json())
      .then((data) => setReview(data));
  }, []);
  console.log(reviews);
  return (
    <div className="max-width-container mb-36">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((custosmer) => (
          <SwiperSlide key={custosmer._id}>
            <div className="flex flex-col items-center gap-10 ">
              <Rating
                style={{ maxWidth: 180 }}
                value={custosmer.rating}
                readOnly
              />
              <p>
                <FaQuoteLeft className="text-6xl" />
              </p>
              <div className="text-center w-2/3">
              <p className="text-gray-500 text-xl">{custosmer.details}</p>
              </div>
              <p className="text-3xl text-[#CD9003] uppercase">{custosmer.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
