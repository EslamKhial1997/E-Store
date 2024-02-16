import React from 'react'
import { FavoriteBorder, ShoppingCart } from "@mui/icons-material";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img from "../img/skinCare.png";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay } from "swiper/modules";
const Tranding = () => {
  return (
       
    <div>
    <h3 className="fst-italic" style={{color:"#072541"}}>Tranding</h3>{" "}
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      centeredSlides={false}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper3 mt-3 border rounded"
    >
      <SwiperSlide style={{ position: "relative" }}>
        <img src={img} />
        <div className="d-flex flex-wrap bg-warning border">
          {" "}
          <strong className="col-12"  style={{color:"#072541" ,cursor: "pointer"}}>Skin Care</strong>
          <small className="col-12 ">
            <span className="text-dark mx-1"  style={{color:"#072541" ,cursor: "pointer"}}>1200L.E</span>
          </small>
        </div>
        <div
          className="postion-absolute"
          style={{ position: "absolute", top: "5px" }}
        >
          <ShoppingCart color="warning" />
          <FavoriteBorder color="warning" />
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ position: "relative" }}>
        <img src={img} />
        <div className="d-flex flex-wrap bg-warning border">
          {" "}
          <strong className="col-12">Skin Care</strong>
          <small className="col-12 ">
            <span className="text-dark mx-1">1200L.E</span>
          </small>
        </div>
        <div
          className="postion-absolute"
          style={{ position: "absolute", top: "5px" }}
        >
          <ShoppingCart color="warning" />
          <FavoriteBorder color="warning" />
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ position: "relative" }}>
        <img src={img} />
        <div className="d-flex flex-wrap bg-warning border">
          {" "}
          <strong className="col-12">Skin Care</strong>
          <small className="col-12 ">
            <span className="text-dark mx-1">1200L.E</span>
          </small>
        </div>
        <div
          className="postion-absolute"
          style={{ position: "absolute", top: "5px" }}
        >
          <ShoppingCart color="warning" />
          <FavoriteBorder color="warning" />
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ position: "relative" }}>
        <img src={img} />
        <div className="d-flex flex-wrap bg-warning border">
          {" "}
          <strong className="col-12">Skin Care</strong>
          <small className="col-12 ">
            <span className="text-dark mx-1">1200L.E</span>
          </small>
        </div>
        <div
          className="postion-absolute"
          style={{ position: "absolute", top: "5px" }}
        >
          <ShoppingCart color="warning" />
          <FavoriteBorder color="warning" />
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ position: "relative" }}>
        <img src={img} />
        <div className="d-flex flex-wrap bg-warning border">
          {" "}
          <strong className="col-12">Skin Care</strong>
          <small className="col-12 ">
            <span className="text-dark mx-1">1200L.E</span>
          </small>
        </div>
        <div
          className="postion-absolute"
          style={{ position: "absolute", top: "5px" }}
        >
          <ShoppingCart color="warning" />
          <FavoriteBorder color="warning" />
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ position: "relative" }}>
        <img src={img} />
        <div className="d-flex flex-wrap bg-warning border">
          {" "}
          <strong className="col-12">Skin Care</strong>
          <small className="col-12 ">
            <span className="text-dark mx-1">1200L.E</span>
          </small>
        </div>
        <div
          className="postion-absolute"
          style={{ position: "absolute", top: "5px" }}
        >
          <ShoppingCart color="warning" />
          <FavoriteBorder color="warning" />
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ position: "relative" }}>
        <img src={img} />
        <div className="d-flex flex-wrap bg-warning border">
          {" "}
          <strong className="col-12">Skin Care</strong>
          <small className="col-12 ">
            <span className="text-dark mx-1">1200L.E</span>
          </small>
        </div>
        <div
          className="postion-absolute"
          style={{ position: "absolute", top: "5px" }}
        >
          <ShoppingCart color="warning" />
          <FavoriteBorder color="warning" />
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ position: "relative" }}>
        <img src={img} />
        <div className="d-flex flex-wrap bg-warning border">
          {" "}
          <strong className="col-12">Skin Care</strong>
          <small className="col-12 ">
            <span className="text-dark mx-1">1200L.E</span>
          </small>
        </div>
        <div
          className="postion-absolute"
          style={{ position: "absolute", top: "5px" }}
        >
          <ShoppingCart color="warning" />
          <FavoriteBorder color="warning" />
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ position: "relative" }}>
        <img src={img} />
        <div className="d-flex flex-wrap bg-warning border">
          {" "}
          <strong className="col-12">Skin Care</strong>
          <small className="col-12 ">
            <span className="text-dark mx-1">1200L.E</span>
          </small>
        </div>
        <div
          className="postion-absolute"
          style={{ position: "absolute", top: "5px" }}
        >
          <ShoppingCart color="warning" />
          <FavoriteBorder color="warning" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
  )
}

export default Tranding
