import React from "react"
import image from "../../../public/CBL_Images/7xm.xyz272003.jpg"


function LandingPage() {
    return (
        <>
            <div className="bg-black h-screen ">
                <div className="img absolute sm:top-20 2xl:top-20 right-0 ">
                    <img src={image} alt="landing" className=" 2xl:h-[600px] sm:h-[400px] md:h-[500px] xl:h-[550px]  " />
                </div>

                <div className="absolute text-white font-sans mx-10 h-[100%] 2xl:top-0 2xl:left-32 2xl:pt-40 sm:pt-72 md:pt-60 lg:pt-32 lg:left-16 xl:left-20 ">
                    <h1 className="sm:text-6xl md:text-7xl xl:text-8xl 2xl:text-8xl font-roboto font-bold text-[#ee6730] uppercase">Passion</h1>
                    <h1 className="sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-7xl font-roboto font-bold  uppercase ">always</h1>
                    <h1 className="sm:text-6xl md:text-7xl xl:text-8xl 2xl:text-8xl font-roboto font-bold uppercase ">dominates</h1>
                    <p className="sm:w-[450px] 2xl:w-96 text-sm font-roboto py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore facilis, atque pariatur modi aliquid odio voluptatum explicabo incidunt iusto cumque! Aperiam, consequatur. Obcaecati, omnis ex? Velit aliquid repudiandae quae adipisci.</p>
                    <button className="border border-white hover:bg-white hover:text-orange-500 duration-700 font-semibold my-3 px-5 py-1 rounded-lg">Know More </button>
                </div>

            </div>


        </>
    )
}

export default LandingPage
