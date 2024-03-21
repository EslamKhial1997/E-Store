import React, { useEffect, useRef, useState } from "react";
import Style from "../Home.module.css";
import img from "../../img/product-1.jpg";
import img2 from "../../img/product-2.jpg";
import img3 from "../../img/product-3.jpg";
// Import Swiper styles

import { useDispatch } from "react-redux";
import axios from "axios";
import { setCreate, setOpen } from "../../../Store/store";


export default function Brands() {
  const [data, setData] = React.useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:8008/api/v1/categories`)
      .then((e) => {
        setData(e.data.data);
      })
      .catch((err) => {
        dispatch(setOpen(true));
        dispatch(setCreate("Something wont wrong"));
      });
  }, []);
  return (
    <div
      className={`d-flex justify-content-center bg-light mt-3 border align-items-center ${Style.slidein} `}
    >
    sdfsdfsdfasdasd
      <div
        className={`d-flex justify-content-center w-100 ${Style.slideinChild} `}
      >
   
        <div className=" justify-content-center  col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img} className="w-100 h-100 rounded-circle " />
        </div>
        <div className=" justify-content-center  col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img3} className="w-100 h-100 rounded-circle " />
        </div>
        <div className=" justify-content-center  col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img3} className="w-100 h-100 rounded-circle " />
        </div>
        <div className=" justify-content-center  col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img3} className="w-100 h-100 rounded-circle " />
        </div>
        <div className=" justify-content-center  col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img3} className="w-100 h-100 rounded-circle " />
        </div>
        <div className=" justify-content-center  col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img3} className="w-100 h-100 rounded-circle " />
        </div>
        <div className=" justify-content-center  col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img} className="w-100 h-100 rounded-circle" />
        </div>
        <div className=" justify-content-center   col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img3} className="w-100 h-100 rounded-circle" />
        </div>
        <div className=" justify-content-center border   col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img} className="w-100 h-100 rounded-circle" />
        </div>

        <div className=" justify-content-center   col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img} className="w-100 h-100 rounded-circle" />
        </div>
        <div className=" justify-content-center   col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img} className="w-100 h-100 rounded-circle" />
        </div>
        <div className=" justify-content-center   col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img} className="w-100 h-100 rounded-circle" />
        </div>
        <div className=" justify-content-center   col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img} className="w-100 h-100 rounded-circle" />
        </div>
        <div className=" justify-content-center   col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img} className="w-100 h-100 rounded-circle" />
        </div>
        <div className=" justify-content-center   col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img} className="w-100 h-100 rounded-circle" />
        </div>
        <div className=" justify-content-center   col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img} className="w-100 h-100 rounded-circle" />
        </div>
        <div className=" justify-content-center   col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img2} className="w-100 h-100 rounded-circle" />
        </div>
        <div className=" justify-content-center   col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img2} className="w-100 h-100 rounded-circle" />
        </div>
        <div className=" justify-content-center   col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img2} className="w-100 h-100 rounded-circle" />
        </div>
        <div className=" justify-content-center   col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img2} className="w-100 h-100 rounded-circle" />
        </div>
        <div className=" justify-content-center   col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img2} className="w-100 h-100 rounded-circle" />
        </div>
        <div className=" justify-content-center   col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img2} className="w-100 h-100 rounded-circle" />
        </div>
        <div className=" justify-content-center   col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img2} className="w-100 h-100 rounded-circle" />
        </div>
        <div className=" justify-content-center   col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img2} className="w-100 h-100 rounded-circle" />
        </div>
        <div className=" justify-content-center   col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img2} className="w-100 h-100 rounded-circle" />
        </div>
        <div className=" justify-content-center   col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img2} className="w-100 h-100 rounded-circle" />
        </div>
        <div className=" justify-content-center   col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img2} className="w-100 h-100 rounded-circle" />
        </div>
        <div className=" justify-content-center   col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img2} className="w-100 h-100 rounded-circle" />
        </div>
        <div className=" justify-content-center   col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img2} className="w-100 h-100 rounded-circle" />
        </div>
        <div className=" justify-content-center   col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img2} className="w-100 h-100 rounded-circle" />
        </div>
        <div className=" justify-content-center   col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img2} className="w-100 h-100 rounded-circle" />
        </div>
        <div className=" justify-content-center   col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img2} className="w-100 h-100 rounded-circle" />
        </div>
        <div className=" justify-content-center   col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img2} className="w-100 h-100 rounded-circle" />
        </div>
        <div className=" justify-content-center   col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img2} className="w-100 h-100 rounded-circle" />
        </div>
        <div className=" justify-content-center   col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img2} className="w-100 h-100 rounded-circle" />
        </div>
        <div className=" justify-content-center   col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img2} className="w-100 h-100 rounded-circle" />
        </div>
        <div className=" justify-content-center   col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img2} className="w-100 h-100 rounded-circle" />
        </div>
        <div className=" justify-content-center   col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img2} className="w-100 h-100 rounded-circle" />
        </div>
        <div className=" justify-content-center   col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img2} className="w-100 h-100 rounded-circle" />
        </div>
        <div className=" justify-content-center   col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img2} className="w-100 h-100 rounded-circle" />
        </div>
        <div className=" justify-content-center   col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img2} className="w-100 h-100 rounded-circle" />
        </div>
        <div className=" justify-content-center   col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img2} className="w-100 h-100 rounded-circle" />
        </div>
        <div className=" justify-content-center   col-lg-1 col-md-2 col-sm-3 col-3">
          <img src={img3} className="w-100 h-100 rounded-circle" />
        </div>
      </div>
    </div>
  );
}
