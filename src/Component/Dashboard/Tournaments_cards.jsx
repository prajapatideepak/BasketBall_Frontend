

import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { RxDotFilled } from 'react-icons/rx';


function Tournaments_cards({id,logo}) {


    return (
        <div className="relative min-w-[260px] xs:min-w-[320px] flex justify-center items-center bg-black hover:bg-white cursor-pointer shadow-lg sm:min-w-[350px] md:min-w-[170px] max-w-[300px] h-[310px] sm:h-[280px] md:h-[170px] 
   group rounded-lg">
            <div className='flex justify-center items-center w-full h-full '>
                <img src={logo} alt="" className='w-40 p-3' />

            </div>
        </div>
    )
}

export default Tournaments_cards

