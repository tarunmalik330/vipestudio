import React from "react";

const Loader = () => {
  return (
    <>
      <div className="loading min-h-screen fixed flex flex-col justify-center items-center left-0 right-0">
        <div>
          <h2 className=" ff_KonexyPersonalUse mb-4 tracking-wider text-[16px] sm:text-[24px] uppercase leading-[.1em] text-center font-bold text-white">
            VIPESTUDIO.COM
          </h2>
          <span className="inline-block align-middle w-[9px] mx-1 h-[9px] bg-[#6022EA] rounded-[9px]"></span>
          <span className="inline-block align-middle w-[9px] mx-1 h-[9px] bg-[#6022EA] rounded-[9px]"></span>
          <span className="inline-block align-middle w-[9px] mx-1 h-[9px] bg-[#6022EA] rounded-[9px]"></span>
          <span className="inline-block align-middle w-[9px] mx-1 h-[9px] bg-[#6022EA] rounded-[9px]"></span>
          <span className="inline-block align-middle w-[9px] mx-1 h-[9px] bg-[#6022EA] rounded-[9px]"></span>
          <span className="inline-block align-middle w-[9px] mx-1 h-[9px] bg-[#6022EA] rounded-[9px]"></span>
          <span className="inline-block align-middle w-[9px] mx-1 h-[9px] bg-[#6022EA] rounded-[9px]"></span>
        </div>
      </div>
    </>
  );
};

export default Loader;
