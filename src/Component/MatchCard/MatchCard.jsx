import React from 'react'
import { useNavigate } from 'react-router-dom'

function MatchCard({match}) {
  const navigate = useNavigate();

  const handleClick = () =>{
    navigate(`/match-details/${match.match_id}`)
  }
  
  return (
    <>
      <div className="relative min-w-[320px] sm:min-w-[350px] md:min-w-[380px] max-w-[440px] h-[190px] sm:h-[200px] md:h-[230px] group">
        <div className="absolute transition-all duration-300 ease-in-out cursor-pointer top-0 left-0 w-full h-full group-hover:left-[-10px] group-hover:top-[-10px] hover:left-[-10px] hover:top-[-10px] p-5 bg-white shadow-lg flex flex-col justify-center items-center" onClick={handleClick}>
            <div className='text-center w-full'>
              <p className="pb-3 text-gray-700  text-sm sm:text-base capitalize font-medium">{match.tournament_name}</p>
            </div>
            <div className='w-full flex justify-around'>
              <div className='flex flex-col justify-center items-center'>
                <div className="w-20 h-20 md:w-24 md:h-24 flex justify-center items-center rounded-full border-2">
                  <img src={match.team_1_logo} className="object-contain rounded-full" alt="" />
                </div>
                <div className='w-32 mt-2 text-center'>
                  <p className="text-[#ee6730] font-medium text-sm text-ellipsis overflow-hidden line-clamp-1 ">{match.team_1_name}</p>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">{match.team_1_score}</h3>
                <span className="text-2xl sm:text-3xl text-4xl font-bold px-1">-</span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">{match.team_2_score}</h3>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <div className="w-20 h-20 md:w-24 md:h-24 flex justify-center items-center rounded-full border-2">
                  <img src={match.team_2_logo} className="object-contain rounded-full" alt="" />
                </div>
                <div className='w-32 mt-2 text-center'>
                  <p className="text-[#ee6730] font-medium text-sm text-ellipsis overflow-hidden line-clamp-1">{match.team_2_name}</p>
                </div>
              </div>
            </div>
            <div className='w-full text-center'>
              <p className="pt-3 text-gray-500 text-sm sm:text-base">{match.date}</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default MatchCard