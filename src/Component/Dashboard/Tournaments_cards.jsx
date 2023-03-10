

import React from 'react'
import { RxDotFilled } from 'react-icons/rx';
import { BsCalendar2Week } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';



function Tournaments_cards({ tournament }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/Tournament-details/${tournament.tournament_id}`)
    }
    const prevSlide = () => {
        var tournament = document.getElementById("tournament")
        tournament.scrollLeft = tournament.scrollLeft - 380;
    };

    const nextSlide = () => {
        var tournament = document.getElementById("tournament")
        tournament.scrollLeft = tournament.scrollLeft + 380;
    };

    return (
        <>
            <div className="flex justify-center items-center hover:bg-white cursor-pointer bg-black shadow-lg xs:min-w-[145px] sm:min-w-[160px] md:min-w-[180px]  lg:max-w-[150] xl:w-[155px]  2xl:min-w-[350px]  h-[140px] sm:h-[155px] md:h-[165px] xl:h-[155px] 2xl:h-[195px]
   group rounded-lg" onClick={handleClick}>
                <div className='flex flex-col justify-start items-center w-full h-full '>
                    {
                        tournament.is_live == 1
                            ?
                            <div className='flex items-end justify-end  w-full '>
                                <p className='uppercase font-semibold bg-red-600 rounded-tr-lg text-white text-[10px] md:text-[12px] xl:text-sm flex items-center px-1'>
                                    <RxDotFilled className='md:text-base xl:text-2xl' />
                                    Live
                                </p>
                            </div>
                            :
                            null
                    }
                    <div className='flex flex-col 2xl:flex-row items-center bg '>
                        <img src={tournament.logo} alt="" className=' w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 2xl:w-32 2xl:h-32 p-3' />
                        <div className='px-3 2xl:space-y-1 '>
                            <p className='group-hover:text-[#ee6630] text-white font-bold text-start  uppercase text-[12px] 2xl:text-base'>{tournament.name}</p>
                            <p className='text-gray-500 font-medium text-[11px] 2xl:text-base  2xl:text-start text-center'>{tournament.location}</p>
                        </div>
                    </div>

                    <div className='w-full flex-col 2xl:flex-row flex justify-center items-center  z-[2] xl:space-x-5 py-1'>
                        <BsCalendar2Week className='hidden 2xl:block text-base text-white transition-all group-hover:text-black' />
                        <div className='flex  justify-center items-center   '>
                            <p className="text-gray-500 transition-all group-hover:text-black text-[10px] md:text-[12px] font-semibold xl:text-base">{tournament.start_date}</p>
                            <p className='mx-2  font-medium transition-all hidden md:block text-[#ee6730]  text-[7px] md:text-base'>to</p>
                            <p className='mx-2  font-medium transition-all md:hidden text-[#ee6730]  text-[7px] md:text-base'>/</p>
                            <p className="text-gray-500 transition-all group-hover:text-black text-[10px] md:text-[12px] font-semibold xl:text-base">{tournament.end_date}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Left Arrow  */}
            <div onClick={prevSlide}
                className="justify-center hidden lg:block absolute left-2 bottom-[40%] active:scale-90 hover:bg-black duration-300 group items-center p-2 bg-white  text-black shadow-xl  rounded-full cursor-pointer">
                <FaChevronLeft
                    className="text-lg group-hover:text-white" />
            </div>
            {/* Right Arrow  */}
            <div onClick={nextSlide}
                className="justify-center hidden lg:block absolute bottom-[40%] right-2 active:scale-90 hover:bg-black duration-300 group items-center p-2 bg-white  text-black shadow-xl  rounded-full cursor-pointer">
                <FaChevronRight
                    className="text-lg group-hover:text-white" />
            </div>
        </>
    )
}

export default Tournaments_cards

