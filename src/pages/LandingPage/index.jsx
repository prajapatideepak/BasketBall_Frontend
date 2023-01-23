import React from "react"
import image from "/CBL_Images/7xm.xyz272003.jpg"


function LandingPage() {
    return (
        <div className="bg-black">
            <div className="bg-black h-screen ">
                <div className="img absolute top-52 md:top-52 lg:top-32 2xl:top-28 right-0 left-20 lg:left-64 xl:left-96 lg:right-0 ">
                    <img src={image} alt="landing" className=" 2xl:h-[600px] h-[350px] md:h-[400px] lg:h-[420px] xl:h-[500px] " />
                </div>

                <div className="absolute space-y-3 text-white font-sans mx-10 h-[100%] 2xl:top- 2xl:left-32 2xl:pt-40 pt-28 md:pt-24 lg:pt-32 lg:left-16 xl:left-20 ">
                    <h1 className="sm:text-6xl md:text-7xl xl:text-8xl 2xl:text-8xl font-roboto font-bold  uppercase">Corporate</h1>
                    <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-7xl 2xl:text-7xl font-roboto font-bold text-[#ee6730] uppercase ">BasketBall</h1>
                    <h1 className="sm:text-6xl md:text-7xl xl:text-8xl 2xl:text-8xl font-roboto font-bold uppercase ">League</h1>
                    <p className="w-[250px] md:w-[300px] lg:w-[350px] 2xl:w-96 text-xs md:text-sm font-roboto py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore facilis, atque pariatur modi aliquid odio voluptatum explicabo incidunt iusto cumque! Aperiam, consequatur. Obcaecati, omnis ex? Velit aliquid repudiandae quae adipisci.</p>
                    <button className="border border-white hover:border-[#ee6730] hover:text-white hover:bg-[#ee6730] duration-700 font-semibold my-3 px-5 py-1 rounded-2xl">Know More </button>
                </div>

            </div>


        </div>
    )
}

export default LandingPage
