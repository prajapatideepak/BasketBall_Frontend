import React from 'react'
import image from "/CBL_images/Screenshot (51).png"
export default function NewsCard() {
  return (
    <div className='md:w-full lg:w-2/3 relative shadow-2xl rounded-2xl '>
        <div className="">
            <img className='opacity-80  '  src={"/CBL_Images/7xm.xyz946052.webp"} />
        </div>
        <div className='absolute w-full bottom-0 text-white bg-gradient-to-l   from-transparent via-black  to-gray-900 px-8 pt-4 pb-2 opacity-90 duration-200 hover:p-20'>
            <div className='flex space-x-4 italic items-center uppercase text-xs font-bold '>
              <span className='bg-orange-600 px-3  rounded '>CBL </span>
               <span className='bg-orange-600 px-3  rounded '>basketball </span>
                <span className='bg-orange-600 px-3  rounded '>Lj </span>
                <span className='text-orange-600 text-normal font-bold ' >26/03/12</span>
            </div>
            <div className='py-3 uppercase leading-relaxed'>
              <h1 className='text-xl font-bold opacity-100'> Wellbenix created amazing basketball web application  people are going crazy </h1>
            </div>
        </div>


    </div>
  )
}
