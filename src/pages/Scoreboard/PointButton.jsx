import React from 'react'

function PointButton({text}) {
  return (
    <button className='w-28 bg-black px-2 py-2 rounded-md hover:opacity-70 text-white'>{text}</button>
  )
}

export default PointButton