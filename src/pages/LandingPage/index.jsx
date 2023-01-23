import React from "react"
import image from "../../../public/CBL_Images/7xm.xyz290762.jpg"


function LandingPage() {
    return (
        <>
            <div className="bg-black h-screen ">
                <div className="img absolute bottom-10 sm:bottom-0 md:bottom-0 lg:bottom-0 2xl:bottom-0 right-0  ">
                    <img src={image} alt="landing" className=" h-[250px] sm:h-[400px] sm:w-[500px] md:h-[450px] md:w-[550px] lg:h-[500px] lg:w-[650px] xl:h-[580px] xl:w-full 2xl:h-[600px]  " />
                </div>

                <div className="absolute space-y-1 sm:space-y-3 text-white font-sans mx-10 h-[100%] pt-20 md:pt-20 lg:pt-20 xl:pt-32 2xl:pt-32 ||  lg:left-16 xl:left-20 2xl:left-26 ">
                    <h1 className="text-5xl sm:text-8xl md:text-8xl xl:text-9xl 2xl:text-9xl text-[#f1e2e2]  uppercase">Corporate</h1>
                    <h1 className="text-2xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-roboto font-bold text-[#ee6730] uppercase ">BasketBall</h1>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-8xl  uppercase ">League</h1>
                    <p className="w-[250px] md:w-[300px] lg:w-[350px] 2xl:w-96 text-xs md:text-sm font-roboto py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore facilis, atque pariatur modi aliquid odio voluptatum explicabo incidunt iusto cumque! Aperiam, consequatur. Obcaecati, omnis ex? Velit aliquid repudiandae quae adipisci.</p>
                    <button className="border border-white hover:border-[#ee6730] hover:text-white hover:bg-[#ee6730] duration-700 font-semibold my-3 px-5 || py-1 sm:py-2 rounded-2xl">Know More </button>
                </div>

            </div>


        </>
    )
}

export default LandingPage
