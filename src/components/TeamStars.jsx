import React from "react";
import TeamsStars from "../assets/images/png/TeamStars.png";

const TeamStars = () => {
  return (
    <>
      <div className=" bg-[#F6F6F6]">
        <div className="container xl:max-w-[1320px] mx-auto md:px-6 px-4">
          <div className=" flex flex-row flex-wrap items-center">
            <div className=" lg:w-1/2 w-full" data-aos="zoom-in-right">
              <h2
                className=" text-black ff_KonexyPersonalUse text-[27px] sm:text-[48px] font-normal pb-3"
                data-aos="zoom-in-right"
              >
                Team Full of Stars{" "}
              </h2>
              <p
                className=" text-black ff_Gilroy text-[16px] font-normal leading-[150%] lg:max-w-[476px] pb-8"
                data-aos="zoom-in-right"
              >
                Suspendisse consequat egestas arcu et et. Viverra quis euismod
                neque luctus bibendum. Fringilla in nibh fringilla vulputate in.
                Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum.
                Lacus tortor sollicitudin risus eget euismod in bibendum turpis.{" "}
              </p>
              <button className=" text-white ff_Gilroy text-[16px] font-semibold leading-[150%] bg-[#6022EA] py-[10px] px-6 rounded-[80px] hover:shadow-[0_3px_20px_rgba(96,_34,_234,_1)] transition-all duration-500 ease-linear">
                Explore
              </button>
            </div>
            <div className=" lg:w-1/2 w-full">
              <div className=" translate-y-[12%]">
                <img
                  src={TeamsStars}
                  alt="TeamsStars"
                  className=" rounded-[32px] w-full h-full max-w-[686px]"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamStars;
