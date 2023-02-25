

import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { RxDotFilled } from 'react-icons/rx';
import { AiFillCaretLeft } from 'react-icons/ai';



function Match_cards({ id, day, date, is_live, time, first_team, secound_team, F_logo, s_logo, tournament, location, tournament_logo }) {


  return (
    <>
      {/* <div className="relative min-w-[260px] xs:min-w-[320px] sm:min-w-[350px] md:min-w-[380px] max-w-[300px] h-[310px] sm:h-[280px] md:h-[217px] 
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

      </div> */}
      <div className="relative min-w-[260px] xs:min-w-[320px] sm:min-w-[350px] md:min-w-[350px] max-w-[440px] h-[190px] sm:h-[200px] md:h-[200px] border-0 hover:border-2 hover:border-gray-400 hover:border-dashed group rounded-lg">
        <div className="absolute flex transition-all duration-300 ease-in-out cursor-pointer top-[-2px] left-[-2px] w-full h-full group-hover:left-[-10px] group-hover:top-[-10px] hover:left-[-10px] hover:top-[-10px] bg-white shadow-lg p-2 md:p-0 rounded-lg">
          {
            is_live == 1 
            ?
          <div className='bg-[#ee6730] w-1 h-full  rounded-l'>

          </div>
            : 
            null
          }
          <div className='flex justify-center items-start w-full flex-col ml-3'>
            <div className='flex flex-col items-start '>
            {
              is_live == 1 
              ? 
              <div className='flex items-center space-x-3'>
                <p className='uppercase font-semibold text-red-600 flex items-center'>
                  <RxDotFilled className='text-2xl' />
                  Watch Live
                </p>
                <p className='text-black font-semibold'>
                  FINAL
                </p>
              </div>
              :
              null
            }
              <div className='flex items-center space-x-2 ml-3'>
                <p className='text-slate-500 text-[15px] font-medium'>Sat, <span>25Feb</span></p>
                <p className='text-black font-bold text-[15px]'>5:30PM  </p>
              </div>
            </div>
            <div className='flex flex-col items-center text-white gap-2 py-1 w-full '>
              <div className='flex justify-center items-center w-full  '>
                <div className='flex justify-between items-center w-full mr-3'>
                  <div className="t_1  flex  justify-start w-full items-center gap-2  ">
                    <div className="w-20 h-20 md:w-[40px] md:h-[40px]">
                      <img src="../../CBL_Images/logo6.png" className="object-contain h-full w-full rounded-full " alt="" />
                    </div>
                    <h1 className='text-black font-extrabold text-lg text-center uppercase'>Tunisia</h1>
                  </div>
                  <div className='flex items-center '>
                    <h1 className='font-bold text-black text-xl'>
                      40
                    </h1>
                  </div>
                </div>
                {/* <AiFillCaretLeft className='text-[#ee6730] text-xl' /> */}
              </div>
              <div className='flex justify-center items-center w-full  '>
                <div className='flex justify-between items-center w-full mr-3'>
                  <div className="t_1  flex  justify-start w-full items-center gap-2  ">
                    <div className="w-20 h-20 md:w-[40px] md:h-[40px]">
                      <img src="../../CBL_Images/logo5.png" className="object-contain h-full w-full rounded-full " alt="" />
                    </div>
                    <h1 className='text-black font-extrabold text-lg text-center uppercase'>Tunisia</h1>
                  </div>
                  <div className='flex items-center '>
                    <h1 className='font-bold text-black text-xl'>
                      40
                    </h1>
                  </div>
                </div>
                {/* <AiFillCaretLeft className='text-[#ee6730] text-xl' /> */}
              </div>
            </div>
            <div>
              <p className='text-slate-500 font-semibold text-sm'>
                FIBA Basketball World Cup 2023 African Qualifiers
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Match_cards
