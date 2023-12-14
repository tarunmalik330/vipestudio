import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImg1 from "../assets/images/png/SliderImg1.png";
import SliderImg2 from "../assets/images/png/SliderImg2.png";
import SliderImg3 from "../assets/images/png/SliderImg3.png";
import SliderImg4 from "../assets/images/png/SliderImg4.png";
import SliderImg5 from "../assets/images/png/SliderImg6.png";
import SliderImg6 from "../assets/images/png/SliderImg7.png";

const WordpressPartner = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 5000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" bg-[#F6F6F6]">
        <div className="container xl:max-w-[1320px] mx-auto md:px-6 px-4 py-[69px]">
          <h2
            className=" text-black ff_KonexyPersonalUse text-[24px] sm:text-[48px] font-normal lg:max-w-[631px] pb-[20px]"
            data-aos="zoom-in-right"
          >
            Long Term WordPress Partner
          </h2>
          <p
            className=" max-w-[693px] ff_Gilroy font-normal leading-[150%] text-[16px] opacity-[0.8] pb-[33px]"
            data-aos="zoom-in-right"
          >
            Our motto is the long-term partnership – we will not only develop
            your perfect website, but will be behind you through the whole
            process. They already trusted us:
          </p>
          <Slider {...settings}>
            <div className=" flex justify-center items-center cursor-pointer px-3">
              <img src={SliderImg1} alt="SliderImg1" />
            </div>
            <div className="flex justify-center items-center cursor-pointer px-3">
              <img src={SliderImg2} alt="SliderImg2" />
            </div>
            <div className="flex justify-center items-center cursor-pointer px-3">
              <img src={SliderImg3} alt="SliderImg3" />
            </div>
            <div className="flex justify-center items-center cursor-pointer px-3">
              <img src={SliderImg4} alt="SliderImg4" />
            </div>
            <div className="flex justify-center items-center cursor-pointer px-3">
              <img src={SliderImg5} alt="SliderImg5" />
            </div>
            <div className="flex justify-center items-center cursor-pointer px-3">
              <img src={SliderImg6} alt="SliderImg6" />
            </div>
            <div className="flex justify-center items-center cursor-pointer px-3">
              <img src={SliderImg3} alt="SliderImg3" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default WordpressPartner;
