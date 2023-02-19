

import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { RxDotFilled } from 'react-icons/rx';

function Hilights_Cards({ id, photo , first_team, secound_team, F_logo, s_logo , tournament_logo }) {


    return (
        <div className="relative min-w-[260px] xs:min-w-[320px] sm:min-w-[350px] md:min-w-[251px] bg-red-600 max-w-[300px] h-[310px] sm:h-[280px] md:h-[350px] 
    group rounded-lg ">
            <div className="absolute  cursor-pointer shadow-lg flex flex-col justify-center h-full w-full items-center rounded-lg overflow-hidden " >
                <img src={photo} alt="" className=' rounded-lg bg-cover bg-center ' />
                <div className='bg-gradient-to-b from-black/40 hover:from-black/30 h-full w-full absolute'>
                </div>

                <div className='absolute bottom-14 left-0'>
                    <div className='flex justify-center items-center  ml-10'>
                        <div className="  rounded-full flex flex-col justify-center items-center  shadow-lg">
                            <img src={F_logo} className="object-contain w-20 h-20 md:w-14 md:h-14 rounded-full " alt="" />
                            <h1 className='text-white text-[8px] bg-[#ee6730] px-1 rounded-lg uppercase'>{first_team}</h1>
                        </div>
                        <div>
                            <h1 className='font-extrabold text-white px-1 text-xs font-serif'>VS</h1>
                        </div>
                        <div className=" rounded-full flex flex-col justify-center items-center shadow-lg">
                            <img src={s_logo} className="object-contain w-20 h-20 md:w-14 md:h-14  rounded-full " alt="" />
                            <h1 className='text-white text-[8px] bg-[#ee6730] px-1 rounded-lg uppercase'>{secound_team}</h1>
                        </div>
                    </div>
                    <div className='flex justify-start items-center'>
                        <div className="w-20 h-20 md:w-14 md:h-10  rounded-full  shadow-lg">
                            <img src={tournament_logo} className="object-contain h-full w-full rounded-full bg-white" alt="" />
                        </div>
                        <div className='w-full ml-1 py-[2px] bg-gradient-to-tl from-black px-1'>
                            <p className='uppercase text-white font-serif font-extrabold text-xl'>Highlights</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hilights_Cards
