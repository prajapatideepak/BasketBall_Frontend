import React from 'react'

function Prize() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <picture>
          <source srcSet="/CBL_Images/trophy.webp" type="image/webp" />
          <img src="/CBL_Images/trophy.webp" className='w-44' alt="Trophy" />
        </picture>
        <h2 className='text-4xl text-gray-700 mt-10 font-medium'>Winner team will get Rs 10 Core</h2>
    </div>
  )
}

export default Prize