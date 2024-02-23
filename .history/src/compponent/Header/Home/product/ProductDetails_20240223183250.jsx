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
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
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
          <div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                {" "}
                <h3>Size </h3>
                <small className="mx-2">3 Items</small>
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
            <div className="d-flex justify-content-between align-items-center">
              {" "}
              <span className="d-flex ">
                quantity:
                <h5>{4}</h5>
              </span>
              <div className="d-flex  ">
                <span>ratingQuantity:</span> <h5>{4}</h5>
              </div>
            </div>
          </div>

        

          <div className="d-flex align-items-center justify-content-between">
            <div className="col-4 d-flex justify-content-around align-items-center">
              <button className="col-4 d-flex justify-content-around align-items-center text-dark p-2  text-dark p-1 rounded border-0 bg-warning fw-bolder text-light">
                <RemoveIcon fontSize="small" />
              </button>
              <button
                className="col-3 rounded border-0 text-light"
                style={{ backgroundColor: "#072541", cursor: "pointer" }}
              >
                5
              </button>
              <button className="col-4 d-flex justify-content-around align-items-center text-dark p-2 rounded border-0 bg-warning fw-bolder text-light">
                <AddIcon fontSize="small" />
              </button>
            </div>
            <button
              className="btn text-light col-3"
              style={{ backgroundColor: "#072541", cursor: "pointer" }}
            >
              Add To Cart
            </button>
            <button
              className="btn text-light col-3"
              style={{ backgroundColor: "#072541", cursor: "pointer" }}
            >
              Buy Now !
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
