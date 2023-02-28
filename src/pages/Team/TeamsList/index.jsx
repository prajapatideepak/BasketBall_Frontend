import React, {useState, useEffect} from 'react'
import TeamCard from '../../../Component/TeamCard'
import Heading from '../../../Component/Heading'
import Paginate from '../../../Component/Pagination';
import { AiOutlineTeam, AiOutlineSearch } from 'react-icons/ai';

function TeamsList() {
    const [paginationData, setPaginationData] = React.useState([]);
    const [search, setSearch] = React.useState("");

    const [allTeams, setAllTeams] = React.useState([
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
        },
    ]);

    function handleSubmit() {
        // dispatch(searchPlayers(search));
    }

    return (
        <section className='min-h-screen'>
            <div className="mx-auto px-10 py-12 sm:px-20 sm:py-12 md:px-20 md:py-16 lg:px-24 xl:px-28 2xl:px-32">
                <Heading text="All Teams" />
                <div className="flex m-5  justify-center ">
                    <input
                        type="text"
                        onChange={(e) => {
                        setSearch(e.target.value);
                        handleSubmit();
                        }}
                        value={search}
                        className=" rounded-lg w-full lg:w-2/3 rounded-r-none  appearance-none border border-gray-400 border-r-0 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:shadow-2xl duration-300 text-base focus:outline-none  "
                        name="search"
                        placeholder="Search Team"
                    />
                    <button
                        onClick={handleSubmit}
                        className="text-2xl rounded-lg border rounded-l-none border-[#ee6730] border-l-0 bg-[#ee6730]  hover:bg-gray-800 group text-white px-2 shadow-2xl "
                    >
                        <AiOutlineSearch className='group-hover:scale-110 duration-300' />
                    </button>
                </div>
                {
                    paginationData.length > 0
                    ?
                        paginationData.map((team, i) =>{
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
                
                <Paginate data={allTeams} setPaginationData={setPaginationData} />
            </div>
        </section>
    )
}

export default TeamsList