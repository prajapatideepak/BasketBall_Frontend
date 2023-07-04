import React from 'react'

function Prize({winner_prize, runner_prize}) {
  return (
    <div className='flex flex-col justify-center items-center'>
        <picture>
          <source srcSet="/CBL_Images/trophy.webp" type="image/webp" />
          <img src="/CBL_Images/trophy.webp" className='w-28 xs:w-36 sm:w-40 md:w-44' alt="Trophy" />
        </picture>
        <h2 className='text-xl xs:text-2xl sm:text-3xl md:text-4xl text-gray-700 mt-10 font-medium'>Winner : {winner_prize}</h2>
        <h2 className='text-xl xs:text-2xl sm:text-3xl md:text-4xl text-gray-700 mt-10 font-medium'>Runner Up : {runner_prize}</h2>
    </div>
  )
}

export default Prize