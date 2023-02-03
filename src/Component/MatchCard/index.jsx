import React from 'react'
import { useNavigate } from 'react-router-dom'

function MatchCard({match}) {
  const navigate = useNavigate();

  const handleClick = () =>{
    navigate(`/match-details/${match.match_id}`)
  }
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  let match_date = new Date(match.date)
  match_date = `${match_date.getDate()} ${months[match_date.getMonth()]} ${match_date.getFullYear()}`

  // const match_time

  return (
    <>
      <div className="relative min-w-[260px] xs:min-w-[320px] sm:min-w-[350px] md:min-w-[380px] max-w-[440px] h-[190px] sm:h-[200px] md:h-[230px] border-0 hover:border-2 hover:border-gray-400 hover:border-dashed group rounded-lg">
        <div className="absolute transition-all duration-300 ease-in-out cursor-pointer top-[-2px] left-[-2px] w-full h-full group-hover:left-[-10px] group-hover:top-[-10px] hover:left-[-10px] hover:top-[-10px] p-5 bg-white shadow-lg flex flex-col justify-center items-center rounded-lg" onClick={handleClick}>
            <div className='text-center w-full'>
              <p className="pb-3 text-gray-700 text-xs xs:text-sm sm:text-base capitalize font-medium">{match.tournament_name}</p>
            </div>
            <div className='w-full flex justify-around'>
              <div className='flex flex-col justify-center items-center'>
                <div className="w-14 h-14 xs:w-20 xs:h-20 md:w-24 md:h-24 flex justify-center items-center rounded-full border-2">
                  <img src={match.team_1_logo} className="object-contain rounded-full" alt="" />
                </div>
                <div className='w-24 xs:w-32 mt-2 text-center'>
                  <p className="text-[#ee6730] font-medium text-xs xs:text-sm text-ellipsis overflow-hidden line-clamp-1 ">{match.team_1_name}</p>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <h3 className="text:xl xs:text-2xl sm:text-3xl md:text-4xl font-bold">{match.team_1_score}</h3>
                <span className="text-2xl sm:text-3xl text-4xl font-bold px-1">-</span>
                <h3 className="text:xl xs:text-2xl sm:text-3xl md:text-4xl font-bold">{match.team_2_score}</h3>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <div className="w-14 h-14 xs:w-20 xs:h-20 md:w-24 md:h-24 flex justify-center items-center rounded-full border-2">
                  <img src={match.team_2_logo} className="object-contain rounded-full" alt="" />
                </div>
                <div className='w-24 xs:w-32 mt-2 text-center'>
                  <p className="text-[#ee6730] font-medium text-xs xs:text-sm text-ellipsis overflow-hidden line-clamp-1">{match.team_2_name}</p>
                </div>
              </div>
            </div>
            {
              match.is_successfull
              ?
                <div className='w-full text-center'>
                  <p className="pt-3 text-gray-500 text-xs xs:text-sm sm:text-base">
                    <span className="text-green-600 font-medium">{match.won_team} </span>
                    won the match
                  </p>
                </div>
              :
                <div className='w-full text-center'>
                  <p className="pt-3 text-gray-500 text-xs xs:text-sm sm:text-base">{match_date}
                    <span className="ml-2 font-medium">{match.time}</span>
                  </p>
                </div>
            }
        </div>
      </div>
    </>
  )
}


export default MatchCard