import React from "react";
export default function NewsCard() {
  return (
    <div className="w-full relative shadow-2xl  rounded-2xl ">
      <div className="">
        <img
          className="opacity-80 rounded-2xl"
          src={"/CBL_Images/7xm.xyz972781.webp"}
        />
      </div>
      <div className="absolute  rounded-b-2xl flex flex-col  space-y-0 md:space-y-0 justify-end w-full  bottom-0 text-white bg-gradient-to-l hover:h-full  from-transparent via-black  to-gray-900 px-2 lg:px-8 py-2 lg:pt-4 pb-2 opacity-90 hover:opacity-100  duration-500 transition">
        <div className="flex space-x-2 lg:space-x-4 italic items-center uppercase text-xs font-bold ">
          <span className="bg-orange-600 px-3  rounded ">CBL </span>
          <span className="bg-orange-600 px-3  rounded ">basketball </span>
          <span className="bg-orange-600 px-3  rounded ">Lj </span>
          <span className="text-orange-600 text-normal font-bold ">
            26/03/12
          </span>
        </div>
        <div className="py-1 lg:py-3 uppercase leading-relaxed">
          <h1 className="text-sm md:text-lg lg:text-lg font-bold opacity-100">
            {" "}
            Wellbenix created amazing basketball web application people are
            going crazy{" "}
          </h1>
        </div>
      </div>
    </div>
  );
}
