import React, { useState } from "react";
import LogoImg from "../assets/images/webp/LogoImg.webp";
import { NavArrow } from "./IconImg";
import { Earth } from "./IconImg";
import { PlayBtn } from "./IconImg";
import WordpressTeam from "../assets/images/webp/WordPressTeam.webp";
import { SearchIcon } from "./IconImg";
import { SpinnerRefresh } from "./IconImg";
import Trust from "../assets/images/png/trustimg.png";
import Fivestar from "../assets/images/png/5-start-img.png";

const VipeHeader = () => {
  const [show, setshow] = useState(true);
  if (show === false) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  return (
    <>
      <div className="bg-black relative">
        <div className=" container xl:max-w-[1320px] mx-auto md:px-6 px-4">
          <nav className=" flex justify-between items-center py-4">
            <div className=" flex justify-between gap-12 items-center">
              <img
                src={LogoImg}
                alt="LogoImg"
                className=" w-full sm:max-w-[176px] max-w-[140px] cursor-pointer"
              />
              <ul
                className={`${
                  show
                    ? "flex flex-row items-center max-xl:fixed bottom-0 max-xl:z-[5] max-xl:min-h-screen max-xl:left-[-130%] max-xl:h-full gap-[20px] max-xl:w-full transition-all duration-300 ease-linear"
                    : "max-xl:bg-[#021A38FA] max-xl:flex-col max-xl:fixed text-black max-xl:z-[5] max-xl:left-[0] max-xl:h-full bottom-0 gap-[20px] max-xl:w-full max-xl:min-h-screen flex items-center justify-center"
                }`}
              >
                <li className=" group relative">
                  <a
                    className=" text-white flex ff_Gilroy font-normal text-[16px] leading-[150%] "
                    href=""
                  >
                    WordPress Solution
                    <span>
                      <NavArrow />
                    </span>
                  </a>
                  <div className=" absolute bg-transparent min-w-[109px] z-[1] hidden justify-center items-center flex-col left-0 right-0 top-[43px] transition-all duration-300 ease-linear group-hover:flex ">
                    <a
                      href="#Home"
                      className=" w-[108px] ff_Gilroy h-[45px] text-black bg-white flex justify-center items-center"
                    >
                      eBooks
                    </a>
                  </div>
                </li>
                <li className=" group relative">
                  <a
                    className=" text-white ff_Gilroy font-normal text-[16px] flex"
                    href=""
                  >
                    Services
                    <span>
                      <NavArrow />
                    </span>
                  </a>
                  <div className=" absolute bg-transparent min-w-[109px] z-[1] hidden justify-center items-center flex-col left-0 right-0 top-[43px] transition-all duration-300 ease-linear group-hover:flex ">
                    <a
                      href="#Home"
                      className=" w-[108px] h-[45px] ff_Gilroy text-black bg-white flex justify-center items-center"
                    >
                      eBooks
                    </a>
                  </div>
                </li>
                <li>
                  <a
                    className=" text-white font-normal ff_Gilroy text-[16px] leading-[150%] flex"
                    href=""
                  >
                    Portfolio
                  </a>
                </li>
                <li className=" group relative">
                  <a
                    className=" text-white font-normal ff_Gilroy text-[16px] leading-[150%] flex"
                    href=""
                  >
                    About
                    <span>
                      <NavArrow />
                    </span>
                  </a>
                  <div className=" absolute bg-transparent min-w-[109px] z-[1] hidden justify-center items-center flex-col left-0 right-0 top-[43px] transition-all duration-300 ease-linear group-hover:flex ">
                    <a
                      href="#Home"
                      className=" w-[108px] h-[45px] text-black ff_Gilroy bg-white flex justify-center items-center"
                    >
                      eBooks
                    </a>
                  </div>
                </li>
                <li>
                  <a
                    className=" text-white font-normal ff_Gilroy text-[16px] leading-[150%] flex"
                    href=""
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:block hidden">
              <ul className="flex items-center justify-center gap-9">
                <li>
                  <a
                    className=" text-white ff_Gilroy text-[16px] font-normal "
                    href=""
                  >
                    1 888 266-6917 (eu <span className=" ff_inter">?</span>)
                  </a>
                </li>
                <li>
                  <a
                    className=" text-white hover:shadow-[0_3px_20px_rgba(225,_225,_225,_1)] transition-all duration-500 ease-linear text-[18px] font-semibold leading-[150%] py-[10px] px-[24px] bg-[#6022EA] ff_Gilroy shadow rounded-[80px] "
                    href=""
                  >
                    Contact Us
                  </a>
                </li>
                <li className=" relative after:absolute after:w-[1px] after:h-full after:bg-[#888] after:top-0 after:left-0 pl-[10px] group flex gap-1">
                  <Earth />
                  <a
                    className=" text-white flex font-normal ff_Gilroy text-[16px] leading-[150%] "
                    href=""
                  >
                    Eng
                    <span>
                      <NavArrow />
                    </span>
                  </a>
                  <div className=" absolute bg-transparent min-w-[109px] z-[1] hidden justify-center items-center flex-col left-0 right-0 top-[43px] transition-all duration-300 ease-linear group-hover:flex ">
                    <a
                      href="#Home"
                      className=" w-[108px] h-[45px] text-black bg-white  flex justify-center items-center"
                    >
                      eBooks
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div
              onClick={() => setshow(!show)}
              className="w-[39px] h-[27px] relative z-[15] flex flex-col justify-between xl:hidden"
            >
              <span
                className={`${
                  show
                    ? " bg-white w-full h-[4px] transition-all duration-300 ease-linear rounded-3xl"
                    : "bg-white w-full h-[4px] transition-all duration-300 ease-linear rounded-3xl rotate-[50deg] translate-y-[26px]"
                }`}
              ></span>
              <span
                className={`${
                  show
                    ? " bg-white w-full h-[4px] transition-all duration-300 ease-linear rounded-3xl"
                    : "opacity-0"
                }`}
              ></span>
              <span
                className={`${
                  show
                    ? " bg-white w-full h-[4px] transition-all duration-300 ease-linear rounded-3xl"
                    : "bg-white w-full h-[4px] transition-all duration-300 ease-linear rounded-3xl rotate-[-50deg] translate-y-[50%]"
                }`}
              ></span>
            </div>
          </nav>
        </div>
        <div className="container xl:max-w-[1320px] mx-auto md:px-6 px-4 sm:pt-[107px] pt-[50px] sm:pb-[150px] pb-[20px]">
          <div className=" flex flex-row flex-wrap items-center">
            <div className="lg:w-1/2 w-full">
              <h1
                className=" ff_KonexyPersonalUse text-white xxl:text-7xl xl:text-[60px] md:text-[50px] text-[36px] font-normal leading-[106%] relative after:absolute after:bg-[#6022EA] after:w-1 after:h-full after:left-0 after:top-0 pl-3"
                data-aos="fade-right"
              >
                WordPress Development Agency
              </h1>
              <p
                className=" pt-[30px] text-white ff_Gilroy text-[24px] leading-[121%] font-bold pb-[22px]"
                data-aos="fade-right"
              >
                for Enterprise + Friendly Team{" "}
              </p>
              <p
                className=" opacity-[0.7] relative z-[1] text-white lg:max-w-[592px] xl:text-[16px] lg:text-[13px] text-[16px] font-normal ff_Gilroy pb-[27px]"
                data-aos="fade-right"
              >
                Vipe Studio is a WordPress Agency for development - a long-term
                partner for any WordPress service. Websites and,online shops
                development, maintenance and customization is what we do best.
              </p>
              <div className=" flex sm:items-center sm:flex-row flex-col gap-[34px]">
                <div data-aos="fade-right">
                  <a
                    href=""
                    className=" hover:shadow-[0_3px_20px_rgba(225,_225,_225,_1)] ff_Gilroy text-[16px] font-semibold leading-[150%] text-white py-3 px-10 bg-[#6022EA] shadow rounded-[80px] transition-all duration-300 ease-linear"
                  >
                    Get Started
                  </a>
                </div>
                <div
                  className=" flex items-center gap-[14px]"
                  data-aos="fade-right"
                >
                  <PlayBtn />
                  <p className=" cursor-pointer leading-[150%] ff_Gilroy font-normal text-white opacity-[0.7]">
                    What is Vipe? (1min)
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full pt-12 lg:pt-0 relative">
              <div className="w-[187.13px] h-[187.13px] bg-gradient-to-b to-[#6022EA] from-[#FA00FF] absolute rounded-full blur-[100px] right-[-10%] top-[-9%]" />
              <div className="w-[187.13px] h-[187.13px] bg-gradient-to-b to-[#6022EA] from-[#FA00FF] absolute rounded-full blur-[100px] left-[-10%] bottom-[-9%]"></div>
              <img
                src={WordpressTeam}
                alt="WordpressTeam"
                className=" w-full rounded-[20px] relative z-[1] 2xl:!translate-x-[16px]"
                data-aos="fade-left"
              />
              <div
                className="bg-[#0000004d] backdrop-blur-md absolute z-[2] py-[10px] cursor-pointer pl-[18px] pr-[28px] left-0 bottom-0 rounded-[15px] m-[24px] 2xl:ml-[40px] 2xl:mb-[24px]"
                data-aos="fade-left"
              >
                <img
                  src={Trust}
                  alt="Trust"
                  className="relative z-[2] w-full max-w-[60px] md:max-w-[107px]"
                />
                <img
                  src={Fivestar}
                  alt="Fivestar"
                  className="pt-[5px] md:max-w-[170px] max-w-[80px]"
                />
                <p className="text-base font-normal ff_inter md:text-[16px] text-[12px] text-white pt-[8px]">
                  Rated 5.0 Excellent
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" bottom-0 left-0 w-full bg-[#e1ffff0d]">
          <div className="container xl:max-w-[1320px] mx-auto md:px-6 px-4 py-[64px]">
            <div className=" flex  max-lg:flex-col items-center justify-between">
              <div>
                <h2
                  className=" text-white text-[36px] lg:text-start text-center font-normal ff_KonexyPersonalUse relative pb-[16px]"
                  data-aos="fade-up-right"
                >
                  Tell us more....
                </h2>
                <p
                  className=" text-white text-[16px] ff_Gilroy lg:text-start text-center max-w-[573px] font-normal"
                  data-aos="fade-up-right"
                >
                  Lectus vitae est ultrices sed. Sit aliquam commodo hac donec
                  augue in quis. Magna vel orci sem neque fringilla et lectus
                  laoreet.
                </p>
              </div>
              <div className=" w-full flex flex-col lg:items-end items-center">
                <div
                  className=" flex justify-between mt-8 lg:mt-0 items-center w-full bg-[#ffffff1a] rounded-[80px] py-[20px] pl-[33px] pr-[31px] max-w-[537px] border-[#ffffff1a] border"
                  data-aos="fade-up-left"
                >
                  <input
                    type="text"
                    placeholder="What do you need assistance with?"
                    className=" bg-transparent outline-none w-full text-[#ffffffb3] sm:text-[16px] text-[12px] ff_Gilroy leading-[150%] font-normal"
                  />
                  <SearchIcon />
                </div>
                <div className=" flex sm:gap-[205px] gap-[40px] pt-3">
                  <div
                    className=" flex items-center gap-1 justify-start"
                    data-aos="fade-up-left"
                  >
                    <SpinnerRefresh />
                    <p className=" text-white ff_Gilroy font-normal leading-[150%] text-[12px] sm:text-[16px]">
                      or send us an inquire?{" "}
                    </p>
                  </div>
                  <p
                    className=" text-white text-[12px] sm:text-[16px] ff_Gilroy leading-[150%] font-normal"
                    data-aos="fade-up-left"
                  >
                    Learn more about...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VipeHeader;
