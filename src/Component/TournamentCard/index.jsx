import React from 'react'
import { useNavigate } from 'react-router-dom'
import {IoLocationSharp} from 'react-icons/io5'
import {BsCalendar2Week} from 'react-icons/bs'

function TournamentCard({tournament}) {
  const navigate = useNavigate();

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  let startDate = new Date(tournament.start_date)
  let endDate = new Date(tournament.end_date)

  startDate = `${startDate.getDate()} ${months[endDate.getMonth()]} ${startDate.getFullYear()}`
  endDate = `${endDate.getDate()} ${months[endDate.getMonth()]} ${endDate.getFullYear()}`

  const handleClick = () =>{
    navigate(`/Tournament-details/${tournament.tournament_id}`)
  }
  
  return (
    <>
      <div className="relative min-w-[260px] xs:min-w-[320px] sm:min-w-[350px] md:min-w-[380px] max-w-[440px] h-[310px] sm:h-[280px] md:h-[300px] group rounded-lg">
        <div className="absolute transition-all duration-300 ease-in-out cursor-pointer w-full h-full p-5 bg-white shadow-lg flex flex-col justify-center items-center rounded-lg overflow-hidden" onClick={handleClick}>
            <div className="w-20 h-20 md:w-24 md:h-24 flex justify-center items-center rounded-full border-2 shadow-lg">
              <img src={tournament.logo} className="object-contain rounded-full" alt="" />
            </div>
            <div className='text-center w-full mt-2'>
              <p className="pb-3 text-[#ee6730] text-base sm:text-xl capitalize text-ellipsis overflow-hidden line-clamp-1 font-medium">{tournament.tournament_name}</p>
            </div>
            <div className="flex flex-col justify-center items-center bg-gray-100 group-hover:bg-white w-full rounded-lg p-2 mt-2">
              <div className='w-32 mt-2 text-center z-[2]'>
                <p className="text-gray-700 font-medium text-sm transition-all group-hover:text-gray-300 ">{tournament.level}</p>
              </div>
              <div className='w-full flex justify-center items-center mt-3 z-[2]'>
                <BsCalendar2Week className=' text-base transition-all group-hover:text-gray-300'/>
                <div className='flex  justify-center items-center ml-2'>
                  <p className="text-gray-500 transition-all group-hover:text-gray-300 text-sm md:text-base">{startDate}</p>
                  <p className='mx-2 font-medium transition-all group-hover:text-gray-300 text-sm md:text-base'>to</p>
                  <p className="text-gray-500 transition-all group-hover:text-gray-300 text-sm md:text-base">{endDate}</p>
                </div>
              </div>
              <div className='w-full flex justify-center items-center mt-3 z-[2]'>
                <IoLocationSharp className='md:text-lg text-orange-300'/>
                <p className="text-gray-500 text-sm md:text-base transition-all group-hover:text-gray-300">{tournament.city}</p>
              </div>
              <div className="absolute w-full h-3/5 bg-black bottom-[-240px] transition-all duration-300 group-hover:bottom-[-50px] right-0 skew-x-30 skew-y-[-8deg]">
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default TournamentCard