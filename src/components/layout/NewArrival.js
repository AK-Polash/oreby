import React from "react";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import Container from "./Container";
import Flex from "./Flex";
import Heading from "./Heading";
import Product from "./Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const NewArrival = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          width: "67px",
          height: "67px",
          borderRadius: "50%",
          background: "#c7c7c7",
          cursor: "pointer",
          position: "absolute",
          top: "50%",
          right: "0",
          transform: "translateY(-50%)",
          zIndex: "5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClick}
      >
        <HiOutlineArrowNarrowRight className="text-2xl font-bold text-pure" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          width: "67px",
          height: "67px",
          borderRadius: "50%",
          background: "#c7c7c7",
          cursor: "pointer",
          position: "absolute",
          top: "50%",
          right: "0",
          transform: "translateY(-50%)",
          zIndex: "5",
          position: "absolute",
          top: "50%",
          left: "0",
          transform: "translateY(-50%)",
          zIndex: "5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClick}
      >
        <HiOutlineArrowNarrowLeft className="text-2xl font-bold text-pure" />
      </div>
    );
  }

  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full md:pt-6 xl:pt-14 2xl:pt-32">
      <Container>
        <Heading
          className="pb-2 font-dm text-xl font-bold capitalize text-primary md:pb-6 md:text-2xl xl:pb-9 xl:text-[39px] 2xl:pb-12"
          title="new arrival"
        />

        <Slider
          {...settings}
          className="realtive flex w-full flex-wrap items-center justify-between !gap-x-10 lg:flex-nowrap"
        >
          <Product
            className="sm:max-xl:mb-5 sm:max-md:max-w-[200px] md:max-xl:max-w-[230px] 2xl:max-w-[370px]"
            imgClass="w-full"
            src="assets/n1.png"
            alt="new_arrival_1"
            badgeShow={true}
            badgeTitle="New"
            productTitle="Basic Table Watch"
            productPrice="$44.00"
            productColor="Black"
          />
          <Product
            className="sm:max-xl:mb-5 sm:max-md:max-w-[200px] md:max-xl:max-w-[230px] 2xl:max-w-[370px]"
            imgClass="w-full"
            src="assets/n2.png"
            alt="new_arrival_2"
            badgeShow={false}
            badgeTitle="New"
            productTitle="Basic Crew Neck Tee"
            productPrice="$89.00"
            productColor="Green"
          />
          <Product
            className="sm:max-xl:mb-5 sm:max-md:max-w-[200px] md:max-xl:max-w-[230px] 2xl:max-w-[370px]"
            imgClass="w-full"
            src="assets/n3.png"
            alt="new_arrival_3"
            badgeShow={true}
            badgeTitle="New"
            productTitle="Basic Crew Neck Tee"
            productPrice="$54.00"
            productColor="Blue"
          />
          <Product
            className="sm:max-xl:mb-5 sm:max-md:max-w-[200px] md:max-xl:max-w-[230px] 2xl:max-w-[370px]"
            imgClass="w-full"
            src="assets/n4.png"
            alt="new_arrival_4"
            badgeShow={false}
            badgeTitle="New"
            productTitle="Basic Crew Neck Tee"
            productPrice="$85.00"
            productColor="Purple"
          />
          <Product
            className="sm:max-xl:mb-5 sm:max-md:max-w-[200px] md:max-xl:max-w-[230px] 2xl:max-w-[370px]"
            imgClass="w-full"
            src="assets/n3.png"
            alt="new_arrival_3"
            badgeShow={false}
            badgeTitle="New"
            productTitle="Basic Crew Neck Tee"
            productPrice="$54.00"
            productColor="Blue"
          />
        </Slider>
      </Container>
    </div>
  );
};

export default NewArrival;
