import React from 'react'
import TournamentCard from '../../../Component/TournamentCard';
import { GiDiamondTrophy } from 'react-icons/gi';
import Heading from '../../../Component/Heading';

function TournamentsOfOrganizer() {
    const [allTournaments, setAllTournaments] = React.useState([
        {
            tournament_id: 1,
            logo: '/CBL_Images/tournament_logo_1.webp',
            tournament_name: 'Kon Banega Champion',
            start_date: '10/02/2023',
            end_date: '10/13/2023',
            level: 'National',
            city: 'Ahmedabad'
        },
        {
            tournament_id: 1,
            logo: '/CBL_Images/tournament_logo_2.webp',
            tournament_name: 'Youngster League',
            start_date: '11/08/2023',
            end_date: '11/19/2023',
            level: 'National',
            city: 'Mumbai'
        },
    ])

    return (
        <section className="min-h-screen-fit">
            <div className='mx-auto px-10 py-12 sm:px-20 sm:py-12 md:px-20 md:py-16 lg:px-24 xl:px-28 2xl:px-32'>
                <Heading text="Your Tournaments" />
                <div className='flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12 mt-10 sm:mt-12 md:mt-16'>
                    {
                        allTournaments.length > 0
                        ?  
                            allTournaments.map((tournament, index) =>{
                                return(
                                    <TournamentCard key={index} tournament={tournament}/>
                                )
                            })
                        :
                            <div className='flex justify-center items-center mt-16 md:mt-24'>
                                <GiDiamondTrophy className="text-2xl xs:text-3xl sm:text-5xl text-gray-400 mr-2"/>
                                <p className='text-xs xs:text-sm sm:text-lg font-medium text-gray-400'>No Tournament Found</p>
                            </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default TournamentsOfOrganizer