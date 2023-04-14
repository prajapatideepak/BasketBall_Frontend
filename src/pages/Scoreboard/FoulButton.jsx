import React from 'react'

function FoulButton({text, disabled, onClick}) {
  return (
    <button className={`${disabled ? 'opacity-60' : ''} lg:w-28 sm:w-24 w-20 lg:text-base sm:text-sm text-xs bg-red-600 px-2 py-2 rounded-md hover:opacity-70 text-white`} disabled={disabled} onClick={() =>{ onClick()}}>{text}</button>
  )
}

export default FoulButton