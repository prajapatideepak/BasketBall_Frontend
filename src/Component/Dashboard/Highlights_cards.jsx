

import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


function Hilights_Cards({ highlights }) {
    // const prevSlide = () => {
    //     var highlights = document.getElementById("highlights")
    //     highlights.scrollLeft = highlights.scrollLeft - 380;
    // };

    // const nextSlide = () => {
    //     var highlights = document.getElementById("highlights")
    //     highlights.scrollLeft = highlights.scrollLeft + 380;
    // };

    return (
        <>
            {/* <div className="relative  hover:scale-110  duration-300 min-w-[260px] xs:min-w-[320px] sm:min-w-[350px] md:min-w-[330px] max-w-[300px] h-[250px] cursor-pointer  group ">
                <div className='h-44 w-[100%] bg-gradient-to-t from-black/50 absolute'>

                </div>
                <div className='w-[100%] h-44'>

                    <img src={highlights.photo} alt="" className='bg-cover bg-center w-[100%] h-full' />
                </div>
                <div className='flex flex-col items-start  py-3 px-5'>
                    <div className='flex items-center gap-2'>
                        <h1 className='text-black font-bold'>{highlights.first_team}</h1>
                        <p className='text-black font-bold'>V</p>
                        <h1 className='text-black font-bold'>{highlights.secound_team}</h1>
                    </div>
                    <p className='font-semibold text-slate-500'>{highlights.tournament}</p>
                </div>
            </div> */}
            {/* Left Arrow  */}
            {/* <div onClick={prevSlide}
                className="justify-center hidden lg:block absolute left-2 bottom-[47%] active:scale-90 hover:bg-black duration-300 group items-center p-2 bg-white  text-black shadow-xl  rounded-full cursor-pointer">
                <FaChevronLeft
                    className="text-lg group-hover:text-white" />
            </div> */}
            {/* Right Arrow  */}
            {/* <div onClick={nextSlide}
                className="justify-center hidden lg:block absolute bottom-[47%] right-2 active:scale-90 hover:bg-black duration-300 group items-center p-2 bg-white  text-black shadow-xl  rounded-full cursor-pointer">
                <FaChevronRight
                    className="text-lg group-hover:text-white" />
            </div> */}
        </>
    )
}

export default Hilights_Cards