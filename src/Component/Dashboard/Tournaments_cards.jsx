

import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { RxDotFilled } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom'



function Tournaments_cards({ tournament }) {
    const navigate = useNavigate();
    console.log(tournament)
    const handleClick = () => {
        navigate(`/Tournament-details/${tournament.tournament_id}`)
    }

    return (
        <>
            <div className="flex justify-center items-center bg-black hover:bg-white cursor-pointer shadow-lg xs:min-w-[120px] sm:min-w-[130px]  lg:max-w-[150] xl:w-[155px]  2xl:min-w-[200px]  h-[120px] sm:h-[120px] xl:h-[155px] 2xl:h-[180px]
   group rounded-lg" onClick={handleClick}>
                <div className='flex flex-col justify-start items-center w-full h-full '>
                    <img src={tournament.logo} alt="" className=' w-24 h-24 xl:w-32 xl:h-32 p-3' />
                    <p className='text-gray-600'>NBA World cup</p>
                </div>
            </div>
        </>
    )
}

export default Tournaments_cards

