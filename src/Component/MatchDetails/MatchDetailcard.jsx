import React from "react";
import {useNavigate} from 'react-router-dom';


function MatchDetailsCard() {
const navigate = useNavigate();

const team_id = 1

    return (
        <>
            <div className='px-5 sm:px-10 lg:px-20 xl:px-40'>
                <div className='w-full  bg-gray-800 shadow-lg rounded-xl flex flex-col py-7 px-5 sm:px-8 lg:px-10 items-center'>
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl text-white pb-3'>Gokuldham Premier League</h1>
                    <p className='text-white text-xs sm:text-base font-semibold pb-5'>Gujarat University basketball ground , ahmedabad</p>
                    <div className='h-[.8px] w-full bg-gray-700'>
                    </div>
                    <div className='flex justify-center items-center mt-4 lg:pt-3 space-x-10 '>
                        <div className="left flex flex-col lg:flex-row items-center space-y-2">
                            <div onClick={() => navigate(`/team/profile-detail/${team_id}`)}
                                className="w-14 h-14 xs:w-20 xs:h-20 lg:order-2 cursor-pointer md:w-24 md:h-24 flex shadow-sm shadow-gray-400 justify-center items-center rounded-full border-2">
                                <img src="../../CBL_Images/basketball_team_logo_1.webp" className="object-contain rounded-full" alt="" />
                            </div>
                            <div className="left lg:order-1 pr-5">
                                <h1 className='text-[#ee6730] text-center text-sm font-bold uppercase'>Mehta Ke Mahaarathi</h1>
                                <p className='text-white font-bold text-center lg:text-end sm:text-2xl lg:text-5xl'>24</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-white font-serif'>
                                V/S
                            </p>
                        </div>
                        <div className="right flex flex-col lg:flex-row items-center lg:space-x-5 space-y-2 ">
                            <div onClick={() => navigate(`/team/profile-detail/${team_id}`)}
                                className="w-14 h-14 xs:w-20 xs:h-20 lg:order-1 cursor-pointer md:w-24 md:h-24 flex shadow-sm shadow-gray-400 justify-center items-center rounded-full border-2">
                                <img src="../../CBL_Images/basketball_team_logo_1.webp" className="object-contain rounded-full" alt="" />
                            </div>
                            <div className="left lg:order-2 ">
                                <h1 className='text-[#ee6730] text-center text-sm font-bold uppercase'>Mehta Ke Mahaarathi</h1>
                                <p className='text-white font-bold text-center lg:text-start sm:text-2xl lg:text-5xl'>24</p>
                            </div>
                        </div>
                        {/* <div className="Right flex space-x-5">
                            <div className="w-14 h-14 xs:w-20 xs:h-20 md:w-24 cursor-pointer md:h-24 shadow-sm shadow-gray-400 flex justify-center items-center rounded-full border-2">
                                <img src="../../CBL_Images/basketball_team_logo_2.webp" className="object-contain rounded-full" alt="" />
                            </div>
                            <div className="left flex flex-col justify-start items-start">
                                <h1 className='text-[#ee6730] font-bold uppercase'>Mehta Ke Mahaarathi</h1>
                                <p className='text-white font-bold text-5xl'>07</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MatchDetailsCard
