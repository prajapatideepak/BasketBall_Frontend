import React from 'react'
import {useNavigate} from 'react-router-dom';

function TeamCard({teamDetails}) {
    const navigate = useNavigate();

    const {team_id, team_logo, team_name, description, total_players, matches_played, matches_won, matches_lost} = teamDetails

  return (
    <div className="w-full bg-gray-800 mt-2 mb-5 rounded-lg cursor-pointer hover:opacity-80" onClick={()=> navigate(`/team-profile-detail/${team_id}`)}>
        <div className='flex lg:flex-row flex-col lg:justify-start justify-center items-center p-5 h-full'>
            <div className='flex w-full sm:w-4/5 md:w-2/4 lg:w-2/5'>
                <div className="team_logo overflow-hidden flex justify-center items-center">
                    <img src={team_logo} className="w-20 xl:w-24 rounded-full" alt="team logo" />
                </div>
                <div className="flex flex-col justify-center ml-5 w-full h-full">
                    <h3 className="text-gray-200 font-medium sm:text-lg md:text-xl xl:text-2xl">{team_name}</h3>
                    <p className="text-xs sm:text-sm mt-1 xl:mt-2 text-gray-400 text-ellipsis line-clamp-2 overflow-hidden">{description != '' && description != ' ' ? description : '...'}</p>
                </div>
            </div>
            <div className="w-full sm:4/5 md:w-3/5 flex justify-center lg:justify-end items-center gap-2.5 sm:gap-6 lg:gap-10 mr-2 lg:mt-0 mt-8">
                <div className='flex flex-col justify-center items-center'>
                    <h4 className='font-medium text-white text-gray-200 lg:text-base sm:text-sm text-xs'>Total Players</h4>
                    <p className='text-gray-200'>{total_players < 10 ? '0' + total_players : total_players}</p>
                </div>
                <div className='flex flex-col justify-center items-center '>
                    <h4 className='font-medium text-white text-blue-200 lg:text-base sm:text-sm text-xs'>Matches Played</h4>
                    <p className='text-gray-200'>{matches_played < 10 ? '0' + matches_played : matches_played}</p>
                </div>
                <div className='flex flex-col justify-center items-center '>
                    <h4 className='font-medium text-green-400 lg:text-base sm:text-sm text-xs'>Won</h4>
                    <p className='text-gray-200'>{matches_won < 10 ? '0' + matches_won : matches_won}</p>
                </div>
                <div className='flex flex-col justify-center items-center '>
                    <h4 className='font-medium text-red-400 lg:text-base sm:text-sm text-xs'>Lost</h4>
                    <p className='text-gray-200'>{matches_lost < 10 ? '0' + matches_lost : matches_lost}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TeamCard