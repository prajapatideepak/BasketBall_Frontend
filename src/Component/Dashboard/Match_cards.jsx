

import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { RxDotFilled } from 'react-icons/rx';



function Match_cards({ id, day, date, is_live, time, first_team, secound_team, F_logo, s_logo, tournament, location, tournament_logo }) {


  return (
    <div className="relative min-w-[260px] xs:min-w-[320px] sm:min-w-[350px] md:min-w-[380px] max-w-[300px] h-[310px] sm:h-[280px] md:h-[217px] 
    hover:scale-105 duration-500 transition-all group rounded-lg">
      <div className="absolute transition-all duration-300 ease-in-out cursor-pointer w-full h-full  shadow-lg flex flex-col justify-center items-center rounded-lg overflow-hidden " >
        <img src="../../CBL_Images/25144.jpg" alt="" className=' rounded-lg' />
        <div className='bg-gradient-to-t from-black/40 h-full w-full absolute'>
          <div className={`${is_live == 1 ? "block" : "hidden"} bg-red-500 flex items-center absolute top-0 left-0 cursor-pointer pr-2 px-1  text-white  `}>
            <RxDotFilled className='' />
            <p className='font-semibold text-sm'>Live</p>
          </div>
          <div className=' bg-black/5 text-white  flex justify-between items-center px-4 h-[100%] w-full absolute rounded-lg '>
            <div className="t_1  flex flex-col justify-center w-full items-center gap-2 mb-6 ">
              <h1 className='text-white font-bold text-center uppercase'>{first_team}</h1>
              <div className="w-20 h-20 md:w-24 md:h-24  rounded-full  shadow-lg">
                <img src={F_logo} className="object-contain h-full w-full rounded-full bg-white" alt="" />
              </div>
            </div>
            <div className="t_2 flex flex-col justify-center w-full items-center gap-2 mt-6 ">
              <div className="w-20 h-20 md:w-24 md:h-24  rounded-full shadow-lg">
                <img src={s_logo} className="object-contain rounded-full w-full h-full bg-white" alt="" />
              </div>
              <h1 className='text-white font-bold text-center uppercase'>{secound_team}</h1>
            </div>
          </div>
          <div className="flex flex-col justify-center items-cente w-full rounded-lg ">
            <div className="absolute flex justify-center items-center flex-col w-[50%] h-full bg-black right-[-191px] transition-all duration-500 group-hover:right-[-0px] bottom-0  ">
              <div className="w-20 h-20 md:w-24 md:h-24 flex justify-center items-center rounded-full border-2 shadow-lg">
                <img src="../../CBL_Images/logo2.png" className="object-contain w-full rounded-full bg-white" alt="" />
              </div>
              <div className='text-start  w-full mt-2'>
                <p className="pb-3 text-white text-center capitalize text-ellipsis  line-clamp-1 font-medium">{tournament}</p>
              </div>
              <div className='justify-center flex items-center '>
                <IoLocationSharp className='text-[#ee6730] text-xl' />
                <p className=" text-gray-400 text-sm capitalize text-ellipsis  line-clamp-1 font-medium">{location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Match_cards
