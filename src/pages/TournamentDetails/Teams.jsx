import React from 'react'
import { AiOutlineTeam } from 'react-icons/ai';
import TournamentTeamCard from './TournamentTeamCard';

function Teams() {
  const teamDetails = [
    {
      team_id: 1001,
      team_logo: '/CBL_Images/basketball_team_logo_1.webp',
      team_name: 'Mehta Ke Mahaarathi',
      description: 'Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip',
      total_players: 7,
      matches_played: 22,
      matches_won: 18,
      matches_lost: 4
    },
    {
      team_id: 1002,
      team_logo: '/CBL_Images/basketball_team_logo_2.webp',
      team_name: 'Jetha Ke Jabaaz',
      description: '',
      total_players: 8,
      matches_played: 12,
      matches_won: 8,
      matches_lost: 4
    }
  ];
  return (
    <div>
      {
        teamDetails.length > 0
        ?
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6'>
            {
              teamDetails.map((team, i) =>{
                return(
                  <TournamentTeamCard key={i} teamDetails={team}/>
                )                        
              })
            }
          </div>
        :
          <div className='flex justify-center items-center mt-16 md:mt-24'>
              <AiOutlineTeam className="text-2xl xs:text-3xl sm:text-5xl text-gray-400 mr-2"/>
              <p className='text-xs xs:text-sm sm:text-lg font-medium text-gray-400'>No Team Found</p>
          </div>
      }
    </div>
  )
}

export default Teams