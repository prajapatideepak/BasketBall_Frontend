import React from 'react'
import MatchCard from '../../Component/MatchCard'

function Matches() {
    const [currentTab, setCurrentTab] = React.useState(2);
    const [currentTabMatches, setCurrentTabMatches] = React.useState([])
    const [pastMatches, setPastMatches] = React.useState([])
    const [upcomingMatches, setUpcomingMatches] = React.useState([])
    const [ongoingMatches, setOngoingMatches] = React.useState([])


    const allMatches = [
        {
            match_id: 12,
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
            is_live: 0,
            time: '9:45 AM',
            won_team: 'Jetha Ke Jabaaz',
            date: '12/12/2022'
        },
        {
            match_id: 13,
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
            match_id: 14,
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
            match_id: 15,
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

    React.useEffect(() => {
        if(currentTab == 1){
            setCurrentTabMatches(ongoingMatches);
        }
        else if(currentTab == 2){
            setCurrentTabMatches(upcomingMatches)
        }
        else{
            setCurrentTabMatches(pastMatches)
        }
    },[currentTab])

    React.useEffect(() => {
        let past = []
        let upcoming = []
        let onGoing = []

        allMatches.map((match)=>{
            if(match.is_live){
                onGoing.push(match)
            }
            else if(match.is_successfull == 1){
                past.push(match)
            }
            else if(match.is_successfull == 0){
                upcoming.push(match)
            }
        })

        setCurrentTabMatches(upcoming)
        setPastMatches(past);
        setOngoingMatches(onGoing);
        setUpcomingMatches(upcoming)
    }, []);
    
    return (
        <div>
            {/* <Heading text="Tournaments"/> */}
            <div className='flex justify-center items-center'>
                <div className="w-48 xs:w-72 sm:w-72 md:w-80 lg:w-96 p-1 rounded-full flex justify-around items-center bg-black">
                    <div className={`${currentTab == 1 ? 'bg-[#ee6730]' : ''} hover:bg-[#ee6730] group cursor-pointer w-full text-center p-1 rounded-full`} onClick={()=> setCurrentTab(1)}>
                        <h3 className={`${currentTab == 1 ? 'text-white' : 'text-gray-300'} group-hover:text-white font-semibold text-xs xs:text-sm md:text-base`}>Ongoing</h3>
                    </div>
                    <div className={`${currentTab == 2 ? 'bg-[#ee6730]' : ''} hover:bg-[#ee6730] group cursor-pointer w-full text-center mx-1.5 p-1 rounded-full`} onClick={()=> setCurrentTab(2)}>
                        <h3 className={`${currentTab == 2 ? 'text-white' : 'text-gray-300'} group-hover:text-white font-semibold text-xs xs:text-sm md:text-base`}>Upcoming</h3>
                    </div>
                    <div className={`${currentTab == 3 ? 'bg-[#ee6730]' : ''} hover:bg-[#ee6730] group cursor-pointer w-full text-center p-1 rounded-full`} onClick={()=> setCurrentTab(3)}>
                        <h3 className={`${currentTab == 3 ? 'text-white' : 'text-gray-300'} group-hover:text-white font-semibold text-xs xs:text-sm md:text-base`}>Completed</h3>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12 mt-10 sm:mt-12 md:mt-16">
                {
                    currentTabMatches.length > 0
                    ? 
                        currentTabMatches.map((match, index)=>{
                            return(
                                <MatchCard key={index} match={match} />
                            )
                        })
                    :
                        <div className="w-full text-center mt-12">
                            <h4 className='text-lg font-medium text-gray-400'>No Match Found</h4>
                        </div>
                }
            </div>
        </div>
    )
}

export default Matches