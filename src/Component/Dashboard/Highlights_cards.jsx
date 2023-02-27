

import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { RxDotFilled } from 'react-icons/rx';

function Hilights_Cards({ id, photo, first_team, secound_team, F_logo, s_logo, tournament_logo }) {


    return (
        <>
            {/* <div className="relative min-w-[260px] xs:min-w-[320px] sm:min-w-[350px] md:min-w-[210px] max-w-[300px] h-[310px] sm:h-[280px] md:h-[280px] 
    // group rounded-lg ">
    //         <div className="absolute  cursor-pointer shadow-lg flex flex-col justify-center h-full w-full items-center rounded-lg overflow-hidden " >
    //             <img src={photo} alt="" className=' rounded-lg bg-cover bg-center ' />
    //             <div className='bg-gradient-to-b from-black/40 hover:from-black/30 h-full w-full absolute'>
    //             </div>
    //             <div className='absolute bottom-7 left-0 w-full'>
    //                 <div className='flex justify-center items-center h-full skew-y-[-5deg] '>
    //                     <div className="  rounded-full flex flex-col justify-center items-center ">
    //                         <img src={F_logo} className="object-contain w-20 h-20 md:w-14 md:h-14 rounded-full " alt="" />
    //                         <h1 className='text-white text-[8px] bg-[#ee6730] px-1 rounded-lg uppercase'>{first_team}</h1>
    //                     </div>
    //                     <div>
    //                         <h1 className='font-extrabold text-white px-1 text-xs font-serif'>VS</h1>
    //                     </div>
    //                     <div className=" rounded-full flex flex-col justify-center items-center">
    //                         <img src={s_logo} className="object-contain w-20 h-20 md:w-14 md:h-14  rounded-full " alt="" />
    //                         <h1 className='text-white text-[8px] bg-[#ee6730] px-1 rounded-lg uppercase'>{secound_team}</h1>
    //                     </div>
    //                 </div>
    //                 <div className='flex justify-start items-center w-full my-1  pr-5'>
    //                     <div className='w-full  border-2 skew-y-[-5deg] pr-1 pt-1 mt-1'>
    //                         <div className='w-full  bg-black skew-y-[-1deg] px-2 '>
    //                             <p className='uppercase text-white font-serif font-extrabold text-xl'>Highlights</p>
    //                         </div>
    //                     </div>

    //                 </div>
    //             </div>
    //         </div>
        </div> */}
            <div className="relative  hover:scale-110 hover:z-[999] duration-300 min-w-[260px] xs:min-w-[320px] sm:min-w-[350px] md:min-w-[330px] max-w-[300px] h-[310px] sm:h-[280px] md:h-[270px] cursor-pointer  group ">
                <div className='h-44 w-[100%] bg-gradient-to-t from-black/50 absolute'>

                </div>
                <div className='w-[100%] h-44'>

                <img src={photo} alt="" className='bg-cover bg-center w-[100%] h-full' />
                </div>
                <div className='flex flex-col items-start  py-3 px-5'>
                    <div className='flex items-center gap-2'>
                        <h1 className='text-black font-bold'>Saudi Arabia</h1>
                        <p className='text-black font-bold'>V</p>
                        <h1 className='text-black font-bold'>New Zealand</h1>
                    </div>
                    <p className='font-semibold text-slate-500'>NBA National</p>
                </div>
            </div>

        </>
    )
}

export default Hilights_Cards