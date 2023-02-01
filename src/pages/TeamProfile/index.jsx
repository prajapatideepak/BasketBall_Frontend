import React from 'react'
import TeamCard from './TeamCard'

function TeamProfile() {
    const teamDetails = [
        {
            team_id: 1001,
            team_logo: 'CBL_Images/basketball_team_logo_1.webp',
            team_name: 'Mehta Ke Mahaarathi',
            description: 'Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip',
            total_players: 7,
            matches_played: 22,
            matches_won: 18,
            matches_lost: 4
        },
        {
            team_id: 1002,
            team_logo: 'CBL_Images/basketball_team_logo_2.webp',
            team_name: 'Jetha Ke Jabaaz',
            description: '',
            total_players: 8,
            matches_played: 12,
            matches_won: 8,
            matches_lost: 4
        }
    ]
  return (
    <section>
        <div className="mx-auto px-10 py-12 sm:px-20 sm:py-12 md:px-20 md:py-16 lg:px-24 xl:px-28 2xl:px-32">
            <div className='team-profile-heading-container mb-16 w-full flex justify-center items-center mb-10'>
                <h2 className="main-heading text-xl text-white sm:text-2xl md:text-3xl lg:text-5xl font-semibold">Your Teams</h2>
            </div>
            {
                teamDetails.length > 0
                ?
                    teamDetails.map((team, i) =>{
                        return(
                            <TeamCard key={i} teamDetails={team}/>
                        )                        
                    })
                :
                    <h3>No team found</h3>
            }
        </div>
    </section>
  )
}

export default TeamProfile