import React from 'react'
import {useNavigate} from 'react-router-dom';

function TournamentTeamCard({teamDetails}) {
    const navigate = useNavigate();

    const {team_id, team_logo, team_name, description} = teamDetails

  return (
    <div className="w-full bg-gray-800 rounded-lg cursor-pointer hover:opacity-80" onClick={()=> navigate(`/team/profile-detail/${team_id}`)}>
        <div className='flex lg:flex-row flex-col lg:justify-start justify-center items-center p-3 h-full'>
            <div className='flex w-full'>
                <div className="team_logo overflow-hidden flex justify-center items-center">
                    <img src={team_logo} className="w-20 xl:w-24 rounded-full" alt="team logo" />
                </div>
                <div className="flex flex-col justify-center ml-5 w-full h-full">
                    <h3 className="text-gray-200 font-medium sm:text-lg md:text-xl xl:text-2xl">{team_name}</h3>
                    {
                        description != '' && description != ' ' 
                        ? 
                            <p className="text-xs sm:text-sm mt-1 xl:mt-2 text-gray-400 text-ellipsis line-clamp-2 overflow-hidden">{description}</p>
                        :
                            <p className="text-xs sm:text-sm mt-1 xl:mt-2 text-gray-400 text-ellipsis line-clamp-2 overflow-hidden">.... <br></br>......</p>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default TournamentTeamCard