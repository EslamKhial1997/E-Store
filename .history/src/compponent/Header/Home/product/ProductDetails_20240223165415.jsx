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
import img from ""
import { NavLink } from "react-router-dom";
import {  useSelector } from "react-redux";
import Footer from "../../../Footer/Footer";
const ProductDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { dataById } = useSelector((state) => state.StoreSlice);
  
  return (
    <div>
      <div className="d-flex container justify-content-around mb-2 flex-wrap">
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
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
              {dataById.images
                ? dataById.images.map((img , inx) => (
                    <SwiperSlide key={inx}>
                      <img src={img} />
                    </SwiperSlide>
                  ))
                : ""}
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
              {dataById.images
                ? dataById.images.map((img , inx) => (
                    <SwiperSlide key={inx}>
                      <img src={img} />
                    </SwiperSlide>
                  ))
                : ""}
            </Swiper>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-12 shadow-lg p-3 mb-5 bg-white rounded text-start">
          <h4>{dataById.title} </h4>
          <h6 className="text-wrap">{dataById.description}</h6>
          <div>
            <div className="d-flex">
              <span>3 Reveiw</span>
              <Stack spacing={1}>
                <Rating name="size-medium" defaultValue={2} />
              </Stack>
            </div>
          </div>
          <div>
            {" "}
            <strong>{dataById.price}$</strong>
            <span className="text-decoration-line-through m-2">
              {dataById.priceAfterDiscount}$
            </span>{" "}
            <h6>Now 10% Off</h6>
            <h6>
              SAVE{" "}
              {dataById.price -
                dataById.priceAfterDiscount}
              $
            </h6>
            <h6>quantity:
              {dataById.quantity
               }
              
            </h6>
           <div className="d-flex align-items-center"><span>ratingQuantity:</span> <h6>
           
             {dataById.ratingQuantity
              }
             
           </h6></div>
          </div>
          <div className="d-flex">
            {dataById.colors
              ? dataById.colors.map((color , inx) => (
                  <span
                  key={inx}
                    className="d-block m-2"
                    style={{
                      width: "25px",
                      height: "25px",
                      borderRadius: "10%",
                      backgroundColor: color,
                    }}
                  ></span>
                ))
              : ""}
          </div>

          <NavLink to="/shopCart" className="btn btn-primary">
            Buy Now !
          </NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
