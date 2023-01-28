import React from "react"
import image from "../../../public/CBL_Images/7xm.xyz987598.jpg"
import { Link, Outlet } from 'react-router-dom'
import { RxArrowRight } from "react-icons/rx"


function LandingPage() {
    return (
        <div className="bg-black h-screen xl:px-10">
            <div className=" flex flex-col justify-center items-center  md:items-start   ">
                <div className=" z-40 space-y-2 sm:space-y-3 2xl:space-y-6 text-white font-sans mx-10 h-[100%] || pt-5 md:pt-5 lg:pt-32 xl:pt-28 2xl:pt-20 || 
                flex flex-col justify-start items-center sm:items-start md:items-start lg:items-start  ">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-[115px] font-serif uppercase">Corporate</h1>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-5xl 2xl:text-6xl font-serif font-medium text-[#ee6730]  uppercase ">BasketBall</h1>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-[115px] font-serif uppercase ">League</h1>
                    <p className="text-center sm:text-start || sm:mr-60 md:w-[300px] lg:w-[350px] xl:w-[500px] || text-xs sm:text-sm md:text-sm 2xl:text-base || text-white ||
                     py-2 ">Use in khelo India, khel mahakumb, state level tournament, district level tournament, inter university, any professional league.</p>
                    <Link className='Link' to={"/register"} >
                        <button type="submit" className="bg-[#ee6730]  relative inline-flex items-center justify-center w-full px-4 py-1.5 sm:px-8 sm:py-[10px] 2xl:px-20 2xl:py-2 overflow-hidden font-medium tracking-tighter text-white hover:text-[#ee6730] rounded-lg cursor-pointer group">
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-lg group-hover:w-full group-hover:h-56"></span>
                            <span className="relative flex justify-center items-center flex-row">
                            Register
                            </span>
                        </button>
                    </Link>
                </div>
                <div className="img absolute sm:bottom-0 md:bottom-32 xl:bottom-10 right-0  h-[280px] w-[400px] sm:h-[400px] sm:w-[400px] md:h-[370px] md:w-[500px] lg:h-[450px] lg:w-[550px] xl:h-[570px] xl:w-[650px] 2xl:h-[600px] 2xl:w-[680px]  ">
                    <img src={image} alt="landing" className="" />
                </div>
            </div>


        </div>
        //   </div>
        // </div>
    );
}

export default LandingPage;
