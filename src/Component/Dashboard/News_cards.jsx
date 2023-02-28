

import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { RxDotFilled } from 'react-icons/rx';


function News_cards({ id, date, photo, heading, title1, title2, title3 }) {

    return (
            <div className="relative min-w-[260px] hover:scale-110  duration-300 xs:min-w-[320px] sm:min-w-[350px] md:min-w-[330px] max-w-[300px] h-[200px] md:h-[195px] 
         group ">
                <div className="absolute cursor-pointer w-full h-full  shadow-lg flex flex-col justify-center items-center  overflow-hidden " >
                    <img src={photo} alt="" className=' bg-cover' />
                    <div className='bg-gradient-to-b from-black/40  h-full w-full absolute'>
                        <div className='bg-gradient-to-r from-black/70 absolute bottom-0 w-full py-3 space-y-2 '>
                            <div className='flex justify-start items-center gap-4 px-4 '>
                                <h1 className='bg-[#ee6730] px-1 rounded-md text-white font-semibold text-sm'>
                                    {title1}
                                </h1>
                                <h1 className='bg-[#ee6730] px-1 rounded-md text-white font-semibold text-sm'>
                                    {title2}
                                </h1>
                                <h1 className='bg-[#ee6730] px-1 rounded-md text-white font-semibold text-sm'>
                                    {title3}
                                </h1>
                            </div>
                            <div className='px-4 space-y-2'>
                                <h1 className='text-white font-semibold '>
                                    {heading}
                                </h1>
                                <p className='text-xs text-[#ee6730] font-semibold'>
                                    {date}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    )
}

export default News_cards
