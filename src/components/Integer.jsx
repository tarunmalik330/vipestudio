import React from "react";
import { EnterpriseIcon } from "./IconImg";
import { Development } from "./IconImg";
import { SupportCard } from "./IconImg";

const Integer = () => {
  return (
    <>
      <div className="container xl:max-w-[1320px] mx-auto md:px-6 px-4 pt-[50px] md:pt-[92px] pb-[60px] sm:pb-[129px]">
        <h2
          className="ff_KonexyPersonalUse md:text-[48px] sm:text-[40px] text-[29px] text-black font-normal pb-[54px]"
          data-aos="fade-down-right"
        >
          Integer et nisl non
        </h2>
        <div className=" flex flex-row flex-wrap">
          <div className="lg:w-1/3 px-3 w-full" data-aos="zoom-in-right">
            <div className=" sm:px-[38px] px-[28px] pb-[38px] pt-[50px] sm:pt-[60px] hover:border-[transparent] cursor-pointer border border-[#0000001a] rounded-[16px] h-full flex flex-col justify-between hover:shadow-[0_20px_60.571px_rgba(229,_233,_246,_1)] transition-all duration-500 ease-linear">
              <div className=" flex flex-col justify-center items-center">
                <EnterpriseIcon />
                <p className=" ff_inter text-black sm:text-[24px] text-[20px] pt-[41px] pb-[15px] font-semibold leading-[130%] text-center max-w-[342px]">
                  Enterprise WordPress Solutions{" "}
                </p>
                <p className="text-black opacity-[0.7] leading-[150%] font-normal md:text-[16px] text-[20px] text-center pb-[20px]">
                  Pretium, a et sapien non nunc libero. Id dolor sed quis
                  convallis turpis purus feugiat nibh eu. Auctor cras hac ac,
                  sociis diam montes, turpis commodo elit.
                </p>
                <p className="ff_Gilroy font-semibold leading-[150%] text-[16px] text-[#6022ea] text-center">
                  Learn More
                </p>
              </div>
            </div>
          </div>
          <div
            className="lg:w-1/3 px-3 w-full py-6 lg:py-0"
            data-aos="zoom-in-up"
          >
            <div className=" sm:px-[38px] px-[28px] cursor-pointer pb-[38px] pt-[50px] sm:pt-[60px] border border-[#0000001a] hover:border-[transparent] rounded-[16px] h-full flex flex-col justify-between hover:shadow-[0_20px_60.571px_rgba(229,_233,_246,_1)] transition-all duration-500 ease-linear">
              <div className=" flex flex-col justify-center items-center">
                <Development />
                <p className=" ff_inter text-black text-[20px] sm:text-[24px] pt-[41px] pb-[15px] font-semibold leading-[130%] text-center max-w-[342px]">
                  Small to Mid Size Business Development
                </p>
                <p className="text-black opacity-[0.7] leading-[150%] font-normal md:text-[16px] text-[20px] text-center pb-[20px]">
                  Et nunc fermentum id amet tempus, elementum. Eget ac ultrices
                  tortor, mattis amet blandit aenean amet. Massa diam lacus,
                  aliquam neque, cursus.
                </p>
                <p className="ff_Gilroy font-semibold leading-[150%] text-[16px] text-[#6022ea] text-center">
                  Learn More
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 px-3 w-full" data-aos="zoom-in-left">
            <div className=" sm:px-[38px] px-[28px] pt-[50px] pb-[38px] cursor-pointer sm:pt-[60px] border hover:border-[transparent] border-[#0000001a] rounded-[16px] h-full flex flex-col justify-between hover:shadow-[0_20px_60.571px_rgba(229,_233,_246,_1)] transition-all duration-500 ease-linear">
              <div className=" flex flex-col justify-center items-center">
                <SupportCard />
                <p className=" ff_inter text-black text-[20px] sm:text-[24px] pt-[41px] pb-[15px] font-semibold leading-[130%] text-center max-w-[342px]">
                  Support & Maintenance
                </p>
                <p className="text-black opacity-[0.7] leading-[150%] font-normal md:text-[16px] text-[20px] text-center pb-[20px]">
                  Ac donec ipsum fringilla tortor, consectetur etiam sociis amet
                  quis. Viverra volutpat pretium non in fusce tellus sed urna.
                  Pharetra ullamcorper et donec aliquam.
                </p>
                <p className="ff_Gilroy font-semibold leading-[150%] text-[16px] text-[#6022ea] text-center">
                  Learn More
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Integer;
