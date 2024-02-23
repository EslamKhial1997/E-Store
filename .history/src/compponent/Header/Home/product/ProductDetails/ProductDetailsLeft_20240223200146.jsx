import React from 'react'

const ProductDetailsLeft = () => {
  return (
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
  )
}

export default ProductDetailsLeft
