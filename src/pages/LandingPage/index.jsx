import React from "react"
import image from "/CBL_Images/7xm.xyz290762.jpg"
import { Link, Outlet } from 'react-router-dom'
import { RxArrowRight } from "react-icons/rx"


function LandingPage() {
    return (
        <div className="bg-black h-screen mt-14 xl:px-10">
            <div className=" flex flex-col justify-center items-center  md:items-start   ">
                <div className=" z-40 space-y-2 sm:space-y-3 2xl:space-y-6 text-white font-sans mx-10 h-[100%] || pt-20 md:pt-20 lg:pt-32 xl:pt-28 2xl:pt-32 || 
                flex flex-col justify-start items-center sm:items-start md:items-start lg:items-start  ">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-[115px] font-serif uppercase">Corporate</h1>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-5xl 2xl:text-6xl font-serif font-medium text-[#ee6730]  uppercase ">BasketBall</h1>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-[115px] font-serif uppercase ">League</h1>
                    <p className="text-center sm:text-start || sm:mr-60 md:w-[300px] lg:w-[350px] xl:w-[500px] || text-xs sm:text-sm md:text-sm 2xl:text-base || text-white ||
                     py-2 ">Use in khelo India, khel mahakumb, state level tournament, district level tournament, inter university, any professional league.</p>
                    <Link className='Link' to={"/register"} >
                        <div className="flex items-center space-x-5 border border-[#ee6730] rounded-full px-3 py-1 bg-[#ee6730] hover:bg-none  cursor-pointer hover:border-white hover:bg-transparent duration-700 ">
                            <RxArrowRight className="text-xl md:text-2xl font-semibold " />
                            <h1 className="  text-white text-sm md:text-base font-medium uppercase ">Register</h1>
                        </div>
                    </Link>
                </div>
                <div className="img  absolute  bottom-5 sm:bottom-0 lg:bottom-10 xl:bottom-14 right-0   ">
                    <img src={image} alt="landing" className=" h-[280px] sm:h-[350px] sm:w-[500px] md:h-[450px] md:w-[550px] lg:h-[500px] lg:w-[650px] xl:h-[550px] xl:w-[750px] 2xl:h-[600px] 2xl:w-[850px]  " />
                </div>
            </div>


        </div>
    //   </div>
    // </div>
  );
}

export default LandingPage;
