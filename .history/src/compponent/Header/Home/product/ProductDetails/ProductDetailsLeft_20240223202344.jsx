import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import img from "../../../img/cat-1.jpg";
const ProductDetailsLeft = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="col-lg-5 col-md-6 col-sm-12 col-12">
      <div className="d-flex flex-wrap">
        {" "}
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 col-9"
        >
          <SwiperSlide>
            <img src={img} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} />
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={8}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper d-flex flex-wrap col-2"
        >
          <SwiperSlide className="row col-10">
            <img src={img} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductDetailsLeft;
