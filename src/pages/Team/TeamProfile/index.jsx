import React from 'react'
import TeamCard from '../../../Component/TeamCard'
import Heading from '../../../Component/Heading'
import { AiOutlineTeam } from 'react-icons/ai';

function TeamProfile() {
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
    ]
  return (
    <section className='min-h-screen-fit'>
        <div className="mx-auto px-10 py-12 sm:px-20 sm:py-12 md:px-20 md:py-16 lg:px-24 xl:px-28 2xl:px-32">
            <Heading text="Your Teams" />
            {
                teamDetails.length > 0
                ?
                    teamDetails.map((team, i) =>{
                        return(
                            <TeamCard key={i} teamDetails={team}/>
                        )                        
                    })
                :
                    <div className='flex justify-center items-center mt-16 md:mt-24'>
                        <AiOutlineTeam className="text-2xl xs:text-3xl sm:text-5xl text-gray-400 mr-2"/>
                        <p className='text-xs xs:text-sm sm:text-lg font-medium text-gray-400'>No Team Found</p>
                    </div>
            }
        </div>
    </section>
  )
}

export default TeamProfile