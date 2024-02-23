import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import img from "../../img/cat-1.jpg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../../../../Footer/Footer";
import NavbarOne from "../../Navbar/NavbarOne";
import NavbarTwo from "../../Navbar/NavbarTwo";
import { Chip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Style from "../Home.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ProductDetailsRight from "./ProductDetailsRight";
const ProductDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { dataById } = useSelector((state) => state.StoreSlice);

  return (
    <div>
      <NavbarOne />
      <NavbarTwo />
      <div className="d-flex container justify-content-around mb-2 mt-5 flex-wrap">
        <div className="col-lg-5 col-md-6 col-sm-12 col-12">
          <div>
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
              className="mySwiper2 "
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
              className="mySwiper "
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
          </div>
        </div>
        <ProductDetailsRight
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
