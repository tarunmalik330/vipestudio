import React from "react";
import AgileProject from "../assets/images/png/AgileProject.png";

const AgileWordpress = () => {
  return (
    <div>
      <div className="container xl:max-w-[1320px] mx-auto md:px-6 px-4 pt-[67px] pb-[50px] sm:pb-[100px]">
        <div className=" flex flex-row flex-wrap items-center">
          <div className=" lg:w-5/12 w-full flex sm:justify-start justify-center">
            <img
              src={AgileProject}
              alt="AgileProject"
              className=" w-full h-full max-w-[576px]"
              data-aos="zoom-in-right"
            />
          </div>
          <div className=" lg:w-7/12 w-full pt-6 lg:pt-0 flex items-center sm:justify-end">
            <div data-aos="zoom-in-left">
              <h2
                className=" ff_KonexyPersonalUse font-normal lg:text-[48px] lg:max-w-[670px] sm:text-[40px] text-[30px] text-black pb-3"
                data-aos="zoom-in-left"
              >
                {" "}
                <span className=" ff_KonexyPersonalUse font-semibold text-[#6022EA]">
                  Agile WordPress
                </span>{" "}
                <span className=" block">Development Project </span> management
              </h2>
              <p
                className=" text-black ff_Gilroy text-[16px] font-normal leading-[150%] opacity-[0.7] lg:max-w-[572px] pb-[32px]"
                data-aos="zoom-in-left"
              >
                Suspendisse consequat egestas arcu et et. Viverra quis euismod
                neque luctus bibendum. Fringilla in nibh fringilla vulputate in.
                Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum.
                Lacus tortor sollicitudin risus eget euismod in bibendum turpis.{" "}
              </p>
              <button className=" text-white ff_Gilroy text-[16px] font-semibold leading-[150%] bg-[#6022EA] py-[10px] px-6 rounded-[80px] hover:shadow-[0_3px_20px_rgba(96,_34,_234,_0.20)] transition-all duration-500 ease-linear">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgileWordpress;
