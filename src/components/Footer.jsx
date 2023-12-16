import React from "react";
import LogoImg from "../assets/images/png/Logo.png";
import { SearchIconB } from "./IconImg";
import { Footericon } from "./IconImg";
import { EuCall } from "./IconImg";
import { UsCall } from "./IconImg";
import { MailIcon } from "./IconImg";
import { Srebarna } from "./IconImg";
import { Github } from "./IconImg";
import { InIcon } from "./IconImg";
import { Twitter } from "./IconImg";
import { Facebook } from "./IconImg";
import { Instagram } from "./IconImg";
import { WIcon } from "./IconImg";

const Footer = () => {
  return (
    <>
      <div className="container xl:max-w-[1320px] mx-auto md:px-6 px-4 pt-[40px] sm:pt-[120px]">
        <div className="flex translate-y-[20%] py-[24px] px-[24px] sm:px-[43px] justify-between items-center sm:pb-11 shadow-[0_3px_20px_rgba(39,_0,_124,_0.50)] flex-row flex-wrap bg-gradient-to-r from-violet-700 to-fuchsia-500 rounded-[17px] box_animation">
          <div>
            <h2 className=" ff_KonexyPersonalUse sm:text-[48px] text-[32px] text-white font-normal pb-2">
              Have you
            </h2>
            <p className=" ff_Gilroy sm:text-[24px] text-[13px] pb-4 sm:pb-0 text-white leading-[130%] font-semibold lg:max-w-[638px]">
              read our study about Speed and Performance in WordPress?
            </p>
          </div>
          <div>
            <button className=" hover:shadow-[0_3px_20px_rgba(225,_225,_225,_1)] transition-all duration-500 ease-linear ff_inter text-[#6022EA] text-[16px] leading-[150%] font-semibold bg-white rounded-[80px] py-[14px] px-[38px]">
              Check It Out
            </button>
          </div>
        </div>
      </div>
      <div className=" bg-black">
        <div className="container xl:max-w-[1320px] mx-auto md:px-6 px-4 pt-[100px]">
          <div className=" flex justify-between md:flex-row flex-col pb-[47px]">
            <img
              src={LogoImg}
              alt="LogoImg"
              className=" w-full max-w-[176px] h-[62px]"
            />

            <div className=" flex justify-between mt-8 lg:mt-0 items-center w-full bg-white rounded-[80px] py-[20px] pl-[33px] pr-[31px] max-w-[537px]">
              <input
                type="text"
                placeholder="Search here...."
                className=" bg-transparent outline-none w-full placeholder:text-[#131313] opacity-[0.7] placeholder:text-[16px]  placeholder:ff_Gilroy placeholder:leading-[150%] placeholder:font-normal"
              />
              <SearchIconB />
            </div>
          </div>
          <div className=" flex flex-row flex-wrap">
            <div className="lg:w-3/12 sm:w-1/2 w-full">
              <h6 className=" ff_Gilroy leading-[150%] font-normal text-[16px] text-white pb-[18px]">
                Services
              </h6>
              <ul>
                <li className=" flex items-center gap-1 pb-[13px] group">
                  <Footericon />
                  <a
                    className=" text-white ff_Gilroy text-[14px] font-normal group-hover:text-[#C10CF7] transition-all duration-300 ease-linear"
                    href=""
                  >
                    WordPress Development
                  </a>
                </li>
                <li className=" flex items-center gap-1 pb-[13px] group">
                  <Footericon />
                  <a
                    className=" text-white ff_Gilroy  group-hover:text-[#C10CF7] transition-all duration-300 ease-linear text-[14px] font-normal"
                    href=""
                  >
                    WooCommerce Development
                  </a>
                </li>
                <li className=" flex items-center gap-1 pb-[13px] group">
                  <Footericon />
                  <a
                    className=" text-white ff_Gilroy text-[14px] group-hover:text-[#C10CF7] transition-all duration-300 ease-linear font-normal"
                    href=""
                  >
                    WordPress Maintenance
                  </a>
                </li>
                <li className=" flex items-center gap-1 pb-[13px] group">
                  <Footericon />
                  <a
                    className=" text-white ff_Gilroy text-[14px] group-hover:text-[#C10CF7] transition-all duration-300 ease-linear font-normal"
                    href=""
                  >
                    Speed Optimization
                  </a>
                </li>
                <li className=" flex items-center group gap-1 pb-[13px]">
                  <Footericon />
                  <a
                    className=" text-white ff_Gilroy group-hover:text-[#C10CF7] transition-all duration-300 ease-linear text-[14px] font-normal"
                    href=""
                  >
                    Dedicated WordPress Developer
                  </a>
                </li>
                <li className=" flex items-center group gap-1 pb-[13px]">
                  <Footericon />
                  <a
                    className=" text-white ff_Gilroy group-hover:text-[#C10CF7] transition-all duration-300 ease-linear text-[14px] font-normal"
                    href=""
                  >
                    Headless WordPress Development
                  </a>
                </li>
                <li className=" flex items-center group gap-1 pb-[13px]">
                  <Footericon />
                  <a
                    className=" text-white group-hover:text-[#C10CF7] transition-all duration-300 ease-linear ff_Gilroy text-[14px] font-normal"
                    href=""
                  >
                    White Label Development
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:w-3/12 sm:w-1/2 w-full">
              <h6 className=" ff_Gilroy leading-[150%] font-normal text-[16px] text-white pb-[18px]">
                Services
              </h6>
              <ul>
                <li className=" flex items-center group gap-1 pb-[13px]">
                  <Footericon />
                  <a
                    className=" text-white group-hover:text-[#C10CF7] transition-all duration-300 ease-linear ff_Gilroy text-[14px] font-normal"
                    href=""
                  >
                    WordPress Hosting
                  </a>
                </li>
                <li className=" flex items-center group gap-1 pb-[13px]">
                  <Footericon />
                  <a
                    className=" text-white group-hover:text-[#FA00FF] ff_Gilroy text-[14px] font-normal"
                    href=""
                  >
                    PSD, XD, Figma to WordPress Conversion
                  </a>
                </li>
                <li className=" flex items-center group gap-1 pb-[13px]">
                  <Footericon />
                  <a
                    className=" text-white ff_Gilroy group-hover:text-[#C10CF7] transition-all duration-300 ease-linear text-[14px] font-normal"
                    href=""
                  >
                    Custom WordPress Theme
                  </a>
                </li>
                <li className=" flex items-center group gap-1 pb-[13px]">
                  <Footericon />
                  <a
                    className=" text-white ff_Gilroy group-hover:text-[#C10CF7] transition-all duration-300 ease-linear text-[14px] font-normal"
                    href=""
                  >
                    Custom WordPress Plugins
                  </a>
                </li>
                <li className=" flex items-center group gap-1 pb-[13px]">
                  <Footericon />
                  <a
                    className=" text-white group-hover:text-[#C10CF7] transition-all duration-300 ease-linear ff_Gilroy text-[14px] font-normal"
                    href=""
                  >
                    CMS to WordPress
                  </a>
                </li>
                <li className=" flex items-center gap-1 group pb-[13px]">
                  <Footericon />
                  <a
                    className=" text-white ff_Gilroy group-hover:text-[#C10CF7] transition-all duration-300 ease-linear text-[14px] font-normal"
                    href=""
                  >
                    WordPress Malware Removal
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:w-3/12 sm:w-1/2 w-full pt-8 lg:pt-0">
              <h6 className=" ff_Gilroy text-white text-[16px] font-normal leading-[150%] pb-[15px]">
                Latest Articles
              </h6>
              <ul>
                <li className="pb-[21px] group">
                  <a
                    className=" text-white ff_Gilroy text-[14px] group-hover:text-[#C10CF7] transition-all duration-300 ease-linear font-normal"
                    href=""
                  >
                    7 WordPress Plugins to Create an Effective Newsletter
                    03.01.2022
                  </a>
                </li>
                <li className="pb-[21px] group">
                  <a
                    className=" text-white ff_Gilroy group-hover:text-[#C10CF7] transition-all duration-300 ease-linear text-[14px] font-normal"
                    href=""
                  >
                    What’s the Perfect Blog Post Length for Your WordPress
                    Site’s SEO? 02.01.2022
                  </a>
                </li>
                <li className="pb-[21px] group">
                  <a
                    className=" text-white ff_Gilroy group-hover:text-[#C10CF7] transition-all duration-300 ease-linear text-[14px] font-normal"
                    href=""
                  >
                    5 Reasons the Future of WordPress Is Headless 01.01.2022
                  </a>
                </li>
                <li className="pb-[21px] group">
                  <a
                    className=" text-white group-hover:text-[#C10CF7] transition-all duration-300 ease-linear ff_Gilroy text-[14px] font-normal"
                    href=""
                  >
                    Viptor Says: Vipe Studio’s WordPress Developers Wrap Up the
                    Amazingly Successful 2021 30.12.2021
                  </a>
                </li>
              </ul>
            </div>
            <div className=" lg:w-3/12 sm:w-1/2 w-full pt-8 lg:pt-0 flex lg:justify-center">
              <div>
                <h6 className=" text-white ff_Gilroy text-[16px] leading-[150%] font-normal pb-[20px]">
                  Contact
                </h6>
                <li className=" flex items-center gap-[10px] pb-[28px]">
                  <EuCall />
                  <a
                    className=" text-white ff_Gilroy text-[14px] font-normal"
                    href=""
                  >
                    EU: +359 988 993 128
                  </a>
                </li>
                <li className=" flex items-center gap-[10px] pb-[28px]">
                  <UsCall />
                  <a
                    className=" text-white ff_Gilroy text-[14px] font-normal"
                    href=""
                  >
                    US: +1 (1 888) 266-6917
                  </a>
                </li>
                <li className=" flex items-center gap-[10px]  pb-[28px]">
                  <MailIcon />
                  <a
                    className="text-white ff_Gilroy text-[14px] font-normal"
                    href=""
                  >
                    office@vipestudio.com
                  </a>
                </li>
                <li className=" flex items-center gap-[10px]  pb-[28px]">
                  <Srebarna />
                  <a
                    className="text-white ff_Gilroy text-[14px] font-normal"
                    href=""
                  >
                    14 Srebarna, Sofia 1407, Bulgaria
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className=" border border-[#FFFFFF] opacity-[0.3] w-full"></div>
        <div className="container xl:max-w-[1320px] mx-auto md:px-6 px-4">
          <div className=" flex md:flex-row flex-col lg:items-center justify-between pt-[31px] pb-[36px]">
            <div>
              <p className=" ff_Gilroy text-white text-[14px] font-normal pb-[14px] ">
                © Vipe Studio 2016-2022
              </p>
              <div className="flex gap-2">
                <p className="text-white ff_Gilroy text-[14px] font-normal">
                  Privacy <span>|</span>
                </p>
                <p className="ff_Gilroy text-white text-[14px] font-normal">
                  Careers <span>|</span>
                </p>
                <p className="ff_Gilroy text-white text-[14px] font-normal">
                  Media <span>|</span>
                </p>
                <p className="ff_Gilroy text-white text-[14px] font-normal">
                  Client Area
                </p>
              </div>
            </div>
            <div className=" flex gap-[17px] pt-8 md:pt-0">
              <div className=" w-[40px] h-[40px] bg-[#B2B2B2] rounded-[80px] flex items-center justify-center hover:shadow-[0_3px_20px_rgba(225,_225,_225,_1)] transition-all duration-500 ease-linear">
                <Github />
              </div>
              <div className=" w-[40px] h-[40px] bg-[#B2B2B2] rounded-[80px] flex items-center justify-center hover:shadow-[0_3px_20px_rgba(225,_225,_225,_1)] transition-all duration-500 ease-linear">
                <InIcon />
              </div>
              <div className=" w-[40px] h-[40px] bg-[#B2B2B2] rounded-[80px] flex items-center justify-center hover:shadow-[0_3px_20px_rgba(225,_225,_225,_1)] transition-all duration-500 ease-linear">
                <Twitter />
              </div>
              <div className=" w-[40px] h-[40px] bg-[#B2B2B2] rounded-[80px] flex items-center justify-center hover:shadow-[0_3px_20px_rgba(225,_225,_225,_1)] transition-all duration-500 ease-linear">
                <Facebook />
              </div>
              <div className=" w-[40px] h-[40px] bg-[#B2B2B2] rounded-[80px] flex items-center justify-center hover:shadow-[0_3px_20px_rgba(225,_225,_225,_1)] transition-all duration-500 ease-linear">
                <Instagram />
              </div>
              <div className=" w-[40px] h-[40px] bg-[#B2B2B2] rounded-[80px] flex items-center justify-center hover:shadow-[0_3px_20px_rgba(225,_225,_225,_1)] transition-all duration-500 ease-linear">
                <WIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
