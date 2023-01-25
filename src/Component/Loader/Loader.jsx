import React from 'react'
import {GiBasketballBall} from "react-icons/gi"
export default function Loader() {
  return (
    <div className='flex justify-center items-center min-h-screen'>
                <GiBasketballBall className="animate-spin	text-8xl text-[#ee6730] " />
                <h1 className='text-4xl font-bold'> TheCBL</h1>

    </div>
  )
}
