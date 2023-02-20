import React from "react"
import image from "../../../public/CBL_Images/main-img-1.webp"
import { Link, Outlet } from 'react-router-dom'
import { RxArrowRight } from "react-icons/rx"


function LandingPage() {
    return (
        <>
            <div className="min-h-screen ">
                <div className=" flex flex-col px-10 items-start justify-between ">
                    <div className="bg-[#F5F5F7] pb-24 sm:pb-5 md:pb-2 w-full flex  flex-col justify-between items-center  md:items-start   ">
                        <div className=" z-40 sm:space-y-0 2xl:space-y-4 text-white font-sans   || mt-2 md:mt-5 lg:mt-10 || 
                flex flex-col justify-start items-center sm:items-start lg:justify-center ">
                            <h1 className="xs:text-[44px] sm:text-[55px] md:text-7xl lg:text-[80px] text-black xl:text-8xl font-semibold 2xl:text-[96px] font-serif uppercase">Corporate</h1>
                            <h1 className=" md:py-3 xs:text-[32px] sm:text-3xl md:text-4xl lg:text-[40px] xl:text-5xl 2xl:text-[60px] font-semibold font-serif  text-[#ea592e]  uppercase ">BasketBall</h1>
                            <h1 className="xs:text-[44px] sm:text-[55px] md:text-7xl lg:text-[80px] xl:text-8xl text-black 2xl:text-[96px] font-semibold font-serif uppercase ">League</h1>
                            <p className="text-center sm:text-start ||  sm:mr-80 md:w-[300px] lg:w-[350px] text-black xl:w-[500px] || text-xs sm:text-sm md:text-sm lg:font-normal 2xl:text-base  ||
                     py-2 ">Use in khelo India, khel mahakumb, state level tournament, district level tournament, inter university, any professional league.</p>
                            <Link className='Link' to={"/register"} >
                                <button type="submit" className="bg-[#ee6730]  relative inline-flex items-center border hover:border-[#ea592e] justify-center w-full px-8 py-1.5 sm:px-8 my-2 sm:py-[5px] 2xl:px-20 2xl:py-2 overflow-hidden font-medium tracking-tighter text-white hover:text-[#ee6730] rounded-lg cursor-pointer group">
                                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-lg group-hover:w-full group-hover:h-56"></span>
                                    <span className="relative flex justify-center items-center flex-row">
                                        Register
                                    </span>
                                </button>
                            </Link>
                        </div>
                        <div className="img sm:absolute right-0 sm:top-40 md:top-40 lg:top-20 2xl:top-20 h-[350px] w-[350px] sm:h-[400px] sm:w-[380px] md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px] xl:h-[480px] xl:w-[480px] 2xl:h-[500px] 2xl:w-[540px]  ">
                            <img src={image} alt="landing" className="" />
                        </div>
                    </div>
                </div>
                <div className="bg-[#F5F5F7] w-full px-10 flex items-center justify-center sm:justify-start gap-10 lg:mt-16  mb-5">
                    <img src="../../CBL_Images/mahakumbh.png" alt="" className="w-10 lg:w-14 xl:w-16 2xl:w-[70px]" />
                    <img src="../../CBL_Images/67433339.webp" alt="" className="w-10 lg:w-14 xl:w-16 2xl:w-[80px]" />
                    <img src="../../CBL_Images/nsfi.png" alt="" className="w-10 lg:w-14 xl:w-16 2xl:w-[65px]" />
                    <img src="../../CBL_Images/afi.jpeg" alt="" className="w-10 lg:w-14 xl:w-16 2xl:w-[110px]" />
                </div>
            </div>
        </>

    );
}

export default LandingPage;