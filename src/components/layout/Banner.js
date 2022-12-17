import React from "react";
import Image from "./Image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Banner = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings}>
        <div className="w-full">
          <Image
            className="w-full"
            source="assets/banner_one.png"
            alt="banner one"
          />
        </div>
        <div className="w-full">
          <Image
            className="w-full"
            source="assets/banner_one.png"
            alt="banner two"
          />
        </div>
        <div className="w-full">
          <Image
            className="w-full"
            source="assets/banner_one.png"
            alt="banner three"
          />
        </div>
      </Slider>
    </>
  );
};

export default Banner;
