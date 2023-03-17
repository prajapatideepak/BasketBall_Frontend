import React from 'react'

function FoulButton({text, handleShowModal}) {
  return (
    <button className='lg:w-28 sm:w-24 w-20 lg:text-base sm:text-sm text-xs bg-red-600 px-2 py-2 rounded-md hover:opacity-70 text-white' onClick={() =>{ handleShowModal(true)}}>{text}</button>
  )
}

export default FoulButton