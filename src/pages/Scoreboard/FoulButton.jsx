import React from 'react'

function FoulButton({text}) {
  return (
    <button className='w-28 bg-red-600 px-2 py-2 rounded-md hover:opacity-70 text-white'>{text}</button>
  )
}

export default FoulButton