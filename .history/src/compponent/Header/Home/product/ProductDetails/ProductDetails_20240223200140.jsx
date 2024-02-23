import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";

import img from "../../../img/cat-1.jpg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../../../../Footer/Footer";
import NavbarOne from "../../Navbar/NavbarOne";
import NavbarTwo from "../../Navbar/NavbarTwo";

import ProductDetailsRight from "./ProductDetailsRight";
const ProductDetails = () => {

  const { dataById } = useSelector((state) => state.StoreSlice);

  return (
    <div>
      <NavbarOne />
      <NavbarTwo />
      <div className="d-flex container justify-content-around mb-2 mt-5 flex-wrap">
     
        <ProductDetailsRight/>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
