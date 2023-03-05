import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { GiBasketballBall } from 'react-icons/gi';
import Heading from '../../Component/Heading';
import MatchesCrad from '../../Component/Matches cards';

function MatchList() {
    const params = useParams();
    const navigate = useNavigate();
    const isPublicView = false;
    const [currentTab, setCurrentTab] = React.useState(1);
    const [currentTabMatches, setCurrentTabMatches] = React.useState([])

    const upcomingmatches = [

        {
            match_id: 1,
            tournament_name: 'Gokuldham Premier League',
            team_1_logo: '/CBL_Images/basketball_team_logo_2.webp',
            team_2_logo: '/CBL_Images/basketball_team_logo_1.webp',
            team_1_name: 'Mehta Ke Maharathi',
            team_2_name: 'Jetha Ke Jabaaz',
            team_1_score: 24,
            team_2_score: 22,
            duration: 45,
            address: 'Amber tower, Sarkhej, Ahmedabad 380055',
            is_successfull: 0,
            is_live: 0,
            time: '9:45 AM',
            won_team: '',
            date: '12/12/2022'
        },
        {
            match_id: 2,
            tournament_name: 'Gokuldham Premier League',
            team_1_logo: '/CBL_Images/basketball_team_logo_2.webp',
            team_2_logo: '/CBL_Images/basketball_team_logo_1.webp',
            team_1_name: 'Mehta Ke Maharathi',
            team_2_name: 'Jetha Ke Jabaaz',
            team_1_score: 24,
            team_2_score: 22,
            duration: 45,
            address: 'Amber tower, Sarkhej, Ahmedabad 380055',
            is_successfull: 0,
            is_live: 0,
            time: '9:45 AM',
            won_team: '',
            date: '12/12/2022'
        },
    ]

    const ongoingmatches = [
        {
            match_id: 1,
            tournament_name: 'Gokuldham Premier League',
            team_1_logo: '/CBL_Images/basketball_team_logo_2.webp',
            team_2_logo: '/CBL_Images/basketball_team_logo_1.webp',
            team_1_name: 'Mehta Ke Maharathi',
            team_2_name: 'Jetha Ke Jabaaz',
            team_1_score: 24,
            team_2_score: 22,
            duration: 45,
            address: 'Amber tower, Sarkhej, Ahmedabad 380055',
            is_successfull: 0,
            is_live: 1,
            time: '9:45 AM',
            won_team: '',
            date: '12/12/2022'
        },
        {
            match_id: 2,
            tournament_name: 'Gokuldham Premier League',
            team_1_logo: '/CBL_Images/basketball_team_logo_2.webp',
            team_2_logo: '/CBL_Images/basketball_team_logo_1.webp',
            team_1_name: 'Mehta Ke Maharathi',
            team_2_name: 'Jetha Ke Jabaaz',
            team_1_score: 24,
            team_2_score: 22,
            won_team: '',
            duration: 45,
            address: 'Amber tower, Sarkhej, Ahmedabad 380055',
            is_successfull: 0,
            is_live: 1,
            time: '9:45 AM',
            date: '12/12/2022'
        },
    ]

    const pastmatches = [
        {
            match_id: 1,
            tournament_name: 'Gokuldham Premier League',
            team_1_logo: '/CBL_Images/basketball_team_logo_2.webp',
            team_2_logo: '/CBL_Images/basketball_team_logo_1.webp',
            team_1_name: 'Mehta Ke Maharathi',
            team_2_name: 'Jetha Ke Jabaaz',
            team_1_score: 24,
            team_2_score: 22,
            duration: 45,
            address: 'Amber tower, Sarkhej, Ahmedabad 380055',
            is_successfull: 1,
            is_live: 2,
            time: '9:45 AM',
            won_team: 'Jetha Ke Jabaaz',
            date: '12/12/2022'
        },
    ]



    //Match classification is done from backend

    React.useEffect(() => {
        if (currentTab == 1) {
            setCurrentTabMatches(ongoingmatches);
        }
        else if (currentTab == 2) {
            setCurrentTabMatches(upcomingmatches);
        }
        else {
            setCurrentTabMatches(pastmatches)
        }
    }, [currentTab])

    return (
        <section className='min-h-screen-fit'>
            <div className='mx-auto px-10 py-12 sm:px-20 sm:py-12 md:px-20 md:py-16 lg:px-24 xl:px-28 2xl:px-32'>
                <Heading text="Matches" />
                <div className='flex justify-center items-center'>
                    <div className="xs:w-4/5 sm:w-2/4 lg:w-1/3 p-1 rounded-full flex justify-around items-center bg-black">
                        <div className={`${currentTab == 1 ? 'bg-[#ee6730]' : ''} hover:bg-[#ee6730] group cursor-pointer w-full text-center p-1 rounded-full`} onClick={() => setCurrentTab(1)}>
                            <h3 className={`${currentTab == 1 ? 'text-white' : 'text-gray-300'} group-hover:text-white font-semibold text-xs xs:text-sm md:text-base`}>Ongoing</h3>
                        </div>
                        <div className={`${currentTab == 2 ? 'bg-[#ee6730]' : ''} hover:bg-[#ee6730] group cursor-pointer w-full text-center mx-1.5 p-1 rounded-full`} onClick={() => setCurrentTab(2)}>
                            <h3 className={`${currentTab == 2 ? 'text-white' : 'text-gray-300'} group-hover:text-white font-semibold text-xs xs:text-sm md:text-base`}>Upcoming</h3>
                        </div>
                        <div className={`${currentTab == 3 ? 'bg-[#ee6730]' : ''} hover:bg-[#ee6730] group cursor-pointer w-full text-center p-1 rounded-full`} onClick={() => setCurrentTab(3)}>
                            <h3 className={`${currentTab == 3 ? 'text-white' : 'text-gray-300'} group-hover:text-white font-semibold text-xs xs:text-sm md:text-base`}>Past</h3>
                        </div>
                    </div>
                </div>
                <div className="matches-container">
                    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12 mt-10 sm:mt-12 md:mt-16">
                        {
                            currentTabMatches.length > 0
                                ?
                                currentTabMatches.map((match, index) => {
                                    return (
                                        <MatchesCrad key={index} match={match} />
                                    )
                                })
                                :
                                <div className='flex justify-center items-center mt-16 md:mt-24'>
                                    <GiBasketballBall className="text-2xl xs:text-3xl sm:text-5xl text-gray-400 mr-2" />
                                    <p className='text-xs xs:text-sm sm:text-lg font-medium text-gray-400'>No Matches Found</p>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MatchList