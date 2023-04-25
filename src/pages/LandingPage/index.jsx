import React from "react";
import image from "../../../public/CBL_Images/main-img-1.webp";
import { Link, Outlet } from "react-router-dom";
import { RxArrowRight } from "react-icons/rx";

function LandingPage() {
  return (
    <>
      <div className="min-h-screen relative " style={{ minHeight: "calc(100vh - 70px)" }}>
        <div className="contant grid grid-flow-row lg:grid-cols-2 ">
          <div className="flex flex-col w-full justify-center items-center lg:items-start lg:mt-20 lg:px-10 xl:px-32 space-y-2 lg:space-y-5 order-2 lg:order-1 z-50 sm:pb-10 ">
            <h1 className="xs:text-[44px] font-roboto text-black italic font-bold sm:text-6xl md:text-7xl lg:text-[80px] text-blabg-black
                             xl:text-8xl  2xl:text-[120px]  uppercase ">
              Corporate
            </h1>
            <div className="flex flex-col sm:flex-row items-center space-x-8">
              <h1
                className="landing-sub text-[#ee6730] lg:text-4xl italic  font-bold  uppercase ">
                BasketBall
              </h1>
              <h1 className="landing-sub text-black lg:text-4xl italic  font-bold  uppercase ">
                League
              </h1>
            </div>
            <p
              className="text-center sm:text-center lg:text-start || sm:px-20 lg:px-0 text-black  xl:w-[500px] || text-xs sm:text-sm md:text-sm lg:font-normal 2xl:text-base  ||
                     py-2 "
            >
              Use in khelo India, khel mahakumb, state level tournament,
              district level tournament, inter university, any professional
              league.
            </p>
            <div className='flex items-center space-x-5'>
              <Link className="Link" to={"/register"}>
                <button
                  type="submit"
                  className="bg-transparent border-2 border-black hover:text-white  relative inline-flex items-center justify-center w-full px-8 py-1.5 sm:px-8 my-2 sm:py-[5px] 2xl:px-20 2xl:py-2 overflow-hidden font-medium tracking-tighter text-black rounded-full cursor-pointer group"
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-lg group-hover:w-full group-hover:h-56"></span>
                  <span className="relative flex justify-center items-center flex-row">
                    Register
                  </span>
                </button>
              </Link>
              <Link className="Link" to={"/register"}>
                <button
                  type="submit"
                  className="bg-[#ee6730] border-2  relative border-[#ee6730] hover:text-[#ee6730] inline-flex items-center justify-center w-full px-8 py-1.5 sm:px-8 my-2 sm:py-[5px] 2xl:px-20 2xl:py-2 overflow-hidden font-medium tracking-tighter text-white rounded-full cursor-pointer group"
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-lg group-hover:w-full group-hover:h-56"></span>
                  <span className="relative flex justify-center items-center flex-row">
                    Register
                  </span>
                </button>
              </Link>
            </div>
            <div className="flex items-center pt-5 space-x-7">
              <img
                src="../../CBL_Images/mahakumbh.png"
                alt=""
                className="w-10 sm:w-12 lg:w-14 xl:w-16 2xl:w-[70px]"
              />
              <img
                src="../../CBL_Images/67433339.webp"
                alt=""
                className="w-10 sm:w-12 lg:w-14 xl:w-16 2xl:w-[80px]"
              />
              <img
                src="../../CBL_Images/nsfi.png"
                alt=""
                className="w-10 sm:w-12 lg:w-14 xl:w-16 2xl:w-[65px]"
              />
              <img
                src="../../CBL_Images/afi.jpeg"
                alt=""
                className="w-10 sm:w-12 lg:w-14 xl:w-16 2xl:w-[110px]"
              />
            </div>
          </div>
          <div className="right flex items-center w-full justify-center order-1 lg:order-2">
            <div className="img lg:absolute right-0 mt-10 lg:top-6 2xl:top-0 h-[230px] w-[280px] sm:h-[300px] sm:w-[380px] md:h-[400px] md:w-[400px] lg:w-[550px] xl:w-[600px] 2xl:h-[600px] 2xl:w-[800px] lg:mr-10 xl:mr-20">
              <img src="/CBL_Images/portrait-two-basketball-players-training-dribbling-isolated-white-studio-background.jpg" alt="landing" className=" w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
