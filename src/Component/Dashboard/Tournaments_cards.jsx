

import React from 'react'
import { RxDotFilled } from 'react-icons/rx';
import { BsCalendar2Week } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import moment from 'moment'



function Tournaments_cards({ tournament }) {
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
            <div className="flex justify-center items-center r:bg-white cursor-pointer shadow-lg shadow-[#ea5a2e12] xs:min-w-[145px] sm:min-w-[160px] md:min-w-[180px]  lg:max-w-[150] xl:w-[155px]  2xl:min-w-[350px]  h-[140px] sm:h-[155px] md:h-[165px] xl:h-[155px] 2xl:h-[175px]
   group rounded-lg" onClick={handleClick}>
                <div className='flex flex-col justify-start items-center w-full h-full mt-10 '>
                    {
                        tournament.status == 2
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
                        <img src={tournament?.logo} alt="" className=' w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 2xl:w-24 2xl:h-24 rounded-full border-2 shadow-lg border-slate-700' />
                        <div className='px-3 2xl:space-y-1 '>
                            <p className='text-[#ee6630]  font-bold text-start  uppercase text-[12px] 2xl:text-base'>{tournament.tournament_name}</p>
                            <p className='text-gray-500 font-medium text-[11px] 2xl:text-base  2xl:text-start text-center'>{tournament.address}</p>
                        </div>
                    </div>

                    <div className='w-full flex-col 2xl:flex-row flex justify-center items-center  z-[2] xl:space-x-5 mt-3'>
                        <BsCalendar2Week className='hidden 2xl:block text-base transition-all text-black' />
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

