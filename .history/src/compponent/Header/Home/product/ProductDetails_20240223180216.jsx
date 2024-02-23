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
import Footer from "../../../Footer/Footer";
import NavbarOne from "../Navbar/NavbarOne";
import NavbarTwo from "../Navbar/NavbarTwo";
import { Chip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Style from "../Home.module.css";
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
        <div className="col-lg-6 col-md-4 col-sm-12 col-12 shadow-lg p-3 mb-5 bg-white rounded text-start">
          <h2>{"dataById.title"} </h2>
          <small
            className={`${Style.SideBarProduct} text-wrap text-truncate d-flex`}
            style={{ overflowY: "scroll", maxHeight: "100px" }}
          >
            lorem-ipsum.paragraph : The term 'lorem-ipsum.paragraph' is not
            recognized as the name of a cmdlet, function, script file, or
            operable program. Check the spelling of the name, or if a path was
            included, verify that the path is correct and try again. At line:1
            char:1 + lorem-ipsum.paragraph + ~~~~~~~~~~~~~~~~~~~~~ +
            CategoryInfo : ObjectNotFound: (lorem-ipsum.paragraph:String) [],
            CommandNotFoundException + FullyQualifiedErrorId :
            CommandNotFoundException
          </small>
          <hr />
          <div>
            <div className="d-flex justify-content-between">
              <span>3 Reveiw</span>
              <Stack spacing={1}>
                <Rating name="size-medium" defaultValue={2} />
              </Stack>
            </div>
          </div>
          <div>
            {" "}
            <div className="d-flex align-items-center justify-content-between">
              <div>
                {" "}
                <strong>{1600}$</strong>
                <span className="text-decoration-line-through text-danger m-2">
                  {1500}$
                </span>{" "}
              </div>
              <h6
                className=" p-2 rounded text-light fw-bolder"
                style={{ backgroundColor: "#072541 " }}
              >
                Now 10% Off
              </h6>
              <div className="d-flex">
                <span
                  className="d-block m-2"
                  style={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "10%",
                    backgroundColor: "red",
                  }}
                ></span>
                <span
                  className="d-block m-2"
                  style={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "10%",
                    backgroundColor: "green",
                  }}
                ></span>
                <span
                  className="d-block m-2"
                  style={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "10%",
                    backgroundColor: "green",
                  }}
                ></span>
              </div>
            </div>
            <div>
              <div className="d-flex align-items-center">
                <h3>Size </h3>
                <small className="mx-2">3 Items</small>
                <span className="d-flex">
                quantity:
                <h5>{4}</h5>
              </span>
              <div className="d-flex align-items-center justify-content-">
                <span>ratingQuantity:</span> <h5>{4}</h5>
              </div>
              </div>
              <div className="d-flex justify-content-around mb-3">
                <Chip
                  label="xLarge"
                  avatar={
                    <Avatar
                      className="text-light fw-bold"
                      sx={{ bgcolor: "#072541" }}
                    >
                      X
                    </Avatar>
                  }
                  clickable
                  color="warning"
                  variant="elevated"
                />
                <Chip
                  label="Large"
                  avatar={
                    <Avatar
                      className="text-light fw-bold"
                      sx={{ bgcolor: "#072541" }}
                    >
                      L
                    </Avatar>
                  }
                  clickable
                  color="warning"
                  variant="elevated"
                />
                <Chip
                  label="Medium"
                  avatar={
                    <Avatar
                      className="text-light fw-bold"
                      sx={{ bgcolor: "#072541" }}
                    >
                      M
                    </Avatar>
                  }
                  clickable
                  color="warning"
                  variant="elevated"
                />
                <Chip
                  label="Small"
                  avatar={
                    <Avatar
                      className="text-light fw-bold"
                      sx={{ bgcolor: "#072541" }}
                    >
                      S
                    </Avatar>
                  }
                  clickable
                  color="warning"
                  variant="elevated"
                />
          
              </div>
            </div>
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
