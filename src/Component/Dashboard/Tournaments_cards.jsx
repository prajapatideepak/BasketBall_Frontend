

import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { RxDotFilled } from 'react-icons/rx';


function Tournaments_cards({ id, logo }) {


    return (
        <>
            <div className="flex justify-center items-center bg-black hover:bg-white cursor-pointer shadow-lg xs:min-w-[120px] sm:min-w-[130px]  lg:max-w-[150] xl:w-[155px]  2xl:min-w-[158px]  h-[120px] sm:h-[120px] xl:h-[155px] 2xl:h-[150px]
   group rounded-lg">
                <div className='flex justify-center items-center w-full h-full '>
                    <img src={logo} alt="" className=' w-24 h-24 xl:w-32 xl:h-32 p-3' />

                </div>
            </div>
        </>
    )
}

export default Tournaments_cards

