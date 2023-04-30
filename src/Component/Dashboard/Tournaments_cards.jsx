

import React from 'react'
import { RxDotFilled } from 'react-icons/rx';
import { BsCalendar2Week } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import moment from 'moment'



function Tournaments_cards({ tournament }) {
    console.log(tournament?.tournament_name?.length)
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/tournament/${tournament.id}`);
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
            <div className="relative items-center hover:scale-105 duration-300 cursor-pointer shadow-lg shadow-[#ea5a2e99] xxs:w-full xs:min-w-full sm:min-w-[100px] md:min-w-[180px]  lg:max-w-[150] xl:w-[320px]  2xl:min-w-[350px]  h-[155px] sm:h-[155px] md:h-[165px] xl:h-[155px] 2xl:h-[180px]
   group rounded-lg" onClick={handleClick}>
                <div className='w-full flex justify-end items-end'>
                    <img src="/CBL_Images/495f339d-92fe-4b3c-a820-621336d292f6.jpg" alt="" className='rounded-lg w-2/4 xs:w-2/4 sm:w-1/2 lg:w-2/5 xl:w-[55%] 2xl:w-3/5' />
                </div>
                {
                    tournament.status == 2
                        ?
                        <div className='flex items-end justify-start  w-full absolute top-0 left-0 '>
                            <p className='uppercase font-semibold bg-red-600 rounded-tl-lg text-white text-[10px] md:text-[12px] xl:text-sm flex items-center px-1'>
                                <RxDotFilled className='md:text-base xl:text-2xl' />
                                Live
                            </p>
                        </div>
                        :
                        null
                }
                <div className='absolute left-6 top-9 space-y-3 w-1/2 '>
                    <h1 className={`${tournament?.tournament_name?.length < 8 ? "xs:text-3xl text-4xl uppercase" : "text-2xl uppercase"} uppercase font-bold `}>
                        {tournament?.tournament_name}
                    </h1>
                    <div className='bg-[#ee6730] rounded-md text-center text-sm py-1 text-white w-40'>
                        Ahmedabad
                    </div>
                </div>
                <div className='w-full flex justify-center items-center z-[2] space-x-5 mt-5 xs:mt-7 md:mt-3 lg:mt-1 '>
                    <BsCalendar2Week className=' text-base transition-all text-black' />
                    <div className='flex  justify-center items-center   '>
                        <p className=" transition-all text-black text-[10px] md:text-[12px] font-semibold xl:text-base">
                            {moment(tournament.start_date).format('DD / MM / YY')}
                        </p>
                        <p className='mx-2  font-medium transition-all hidden md:block text-[#ee6730]  text-[7px] md:text-base'>to</p>
                        <p className='mx-2  font-medium transition-all md:hidden text-[#ee6730]  text-[7px] md:text-base'>/</p>
                        <p className="transition-all text-black text-[10px] md:text-[12px] font-semibold xl:text-base">
                            {moment(tournament.end_date).format('DD / MM / YY')}
                        </p>
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

