import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Toaster from '../../../../../Electron/Nasir_sir_classes/src/hooks/showToaster';
import PlayerCard from './PlayerCard'
import './TeamProfileDetail.css'
import { AxiosError } from 'axios';

function TeamProfileDetail() {
    const params = useParams();
    const navigate = useNavigate();

    const [enrolledTournaments, setEntrolledtournaments] = React.useState([
        {
            id: 1234,
            tournament_name: 'Gokuldham Premier League',
            start_date: '12/5/2023',
            end_date: '12/6/2023',
            city: 'Ahmedabad'
        },
        {
            id: 1234,
            tournament_name: 'LJ Cup',
            start_date: '12/5/2023',
            end_date: '12/6/2023',
            city: 'Ahmedabad'
        },
    ])

     const teamDetails = {
        team_id: 1001,
        team_logo: '/CBL_Images/basketball_team_logo_2.webp',
        team_name: 'Mehta Ke Mahaarathi',
        description: 'Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip',
        coach_name: 'coach xyz',
        coach_mobile: '9000000000',
        assistant_coach_name: 'coach abc',
        assistant_coach_mobile: '9989999999',
        total_players: 7,
        players: [
            {id: 1, name:'Sadikali karadiya', position:'point guard', jersey_no: 10},
            {id: 2, name:'Deepak Prajapati', position:'center', jersey_no: 7},
            {id: 1, name:'Sadikali karadiya', position:'point guard', jersey_no: 10},
            {id: 2, name:'Deepak Prajapati', position:'center', jersey_no: 7},
            {id: 1, name:'Sadikali karadiya', position:'point guard', jersey_no: 10},
            {id: 2, name:'Deepak Prajapati', position:'center', jersey_no: 7},
        ],
        captain: 1,
        matches_played: 22,
        matches_won: 18,
        matches_lost: 4
    }

    const handleUnenrollTournament = (tournament_id) => {
        try {
            
        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error( error.response.data.message);
            }
            else {
                toast.error(error.message);
            }
        }
    }

    const navigateToTournamentProfile = (tournament_id) => {
        navigate(`/tournament-profile/${tournament_id}`);
    }

    return (
        <section>
            <div className='mx-auto px-10 py-12 sm:px-20 sm:py-12 md:px-20 md:py-16 lg:px-24 xl:px-28 2xl:px-32 mt-10'>
                <div>
                    <div className="team-logo-container flex justify-center items-center rounded-full">
                        <img src={teamDetails.team_logo} className="rounded-full border-2 shadow-lg w-32"/>
                    </div>
                    <div className=''>
                        <h3 className='text-2xl font-semibold text-[#ee6730] mt-8'>Team Information:</h3>
                    </div>
                    <div className="flex gap-12 mt-8">
                        <div className="flex flex-1 border-r-2 pr-20 gap-6">
                            <div className="left-container flex flex-1 flex-col">
                                <div className="flex flex-col">
                                    <label className="mb-2 text-gray-400">Team Name</label>
                                    <div className="border-2 border-gray-200 px-2 py-2 rounded-lg bg-white">
                                        {teamDetails.team_name}
                                    </div>
                                </div>
                                <div className="flex flex-col mt-5">
                                    <label className="mb-2 text-gray-400">About Team</label>
                                    <div className="border-2 border-gray-200 px-2 py-2 rounded-lg bg-white h-[235px] overflow-y-auto">
                                        {teamDetails.description}
                                    </div>
                                </div>
                            </div>
                            <div className="right-container flex flex-1 flex-col">
                                <div className="flex flex-col">
                                    <label className="mb-2 text-gray-400">Coach Name</label>
                                    <div className="border-2 border-gray-200 px-2 py-2 rounded-lg bg-white capitalize">
                                        {teamDetails.coach_name}
                                    </div>
                                </div>
                                <div className="flex flex-col mt-5">
                                    <label className="mb-2 text-gray-400">Coach Mobile</label>
                                    <div className="border-2 border-gray-200 px-2 py-2 rounded-lg bg-white">
                                        {teamDetails.coach_mobile}
                                    </div>
                                </div>
                                <div className="flex flex-col mt-5">
                                    <label className="mb-2 text-gray-400">Assistant Coach Name</label>
                                    <div className="border-2 border-gray-200 px-2 py-2 rounded-lg bg-white capitalize">
                                        {teamDetails.assistant_coach_name}
                                    </div>
                                </div>
                                <div className="flex flex-col mt-5">
                                    <label className="mb-2 text-gray-400">Assistant Coach Mobile</label>
                                    <div className="border-2 border-gray-200 px-2 py-2 rounded-lg bg-white">
                                        {teamDetails.assistant_coach_mobile}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className='flex flex-col justify-center items-center gap-10'>
                                <div 
                                    className='w-48 flex flex-col justify-center items-center bg-white p-3 rounded-lg hover:bg-[#ee6730] group'
                                    style={{
                                        boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
                                    }}
                                >
                                    <h3 className="text-5xl text-black font-bold group-hover:text-white">{teamDetails.matches_played}</h3>
                                    <p className="text-lg text-gray-700 font-semibold group-hover:text-white">Matches Played</p>
                                </div>
                                <div 
                                    className='w-48 flex flex-col justify-center items-center bg-white p-3 rounded-lg hover:bg-[#ee6730] group'
                                    style={{
                                        boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
                                    }}
                                >
                                    <h3 className="text-5xl text-green-600 font-bold group-hover:text-white">{teamDetails.matches_won}</h3>
                                    <p className="text-lg text-gray-700 font-semibold group-hover:text-white">Matches Won</p>
                                </div>
                                <div 
                                    className='w-48 flex flex-col justify-center items-center bg-white p-3 rounded-lg hover:bg-[#ee6730] group'
                                    style={{
                                        boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
                                    }}
                                >
                                    <h3 className="text-5xl text-red-500 font-bold group-hover:text-white">{teamDetails.matches_lost}</h3>
                                    <p className="text-lg text-gray-700 font-semibold group-hover:text-white">Matches Lost</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className=''>
                        <h3 className='text-2xl font-semibold text-[#ee6730] mt-8'>Players:</h3>
                    </div>
                    <div className="player-container w-full flex justify-center gap-4 sm:gap-16 md:gap-16 mt-10 overflow-x-auto py-5">
                        {
                            teamDetails.players.length > 0
                            ?
                                teamDetails.players.map((item, index)=>{
                                    return(
                                        <PlayerCard
                                            key={index} 
                                            id={item.id}
                                            photo="/CBL_Images/player-default-profile.webp"
                                            name={item.name}
                                            position={item.position}
                                            jersey_no={item.jersey_no}
                                        />
                                    )
                                })
                            :
                                <div className="bg-red-100 w-full mt-4 text-center">
                                    <h4 className='text-red-700 font-medium p-2'>No Players Found</h4>
                                </div>
                        }
                    </div>
                </div>
                <div className='mt-20'>
                    <div>
                        <h3 className='text-2xl font-semibold text-[#ee6730] mt-8'>:</h3>
                    </div>
                </div>
                <div className='mt-20'>
                    <div>
                        <h3 className='text-2xl font-semibold text-[#ee6730] mt-8'>Tournament Enrollment:</h3>
                    </div>
                    <div className="w-full flex justify-center overflow-x-auto mt-5 ">
                        <table className="w-3/4 mt-2 rounded-md overflow-hidden">
                            <thead className='bg-gray-700'>
                                <tr>
                                    <th className="pl-5 border py-3 text-sm text-gray-300 uppercase border-gray-700 whitespace-nowrap font-semibold text-left">
                                        Sr.
                                    </th>
                                    <th className="pl-5 border py-3 text-sm text-gray-300 uppercase border-gray-700 whitespace-nowrap font-semibold text-left">
                                        Tournament Name
                                    </th>
                                    <th className="border py-3 text-sm text-gray-300 uppercase border-gray-700 whitespace-nowrap font-semibold text-left">
                                        Start Date
                                    </th>
                                    <th className="border py-3 text-sm text-gray-300 uppercase border-gray-700 whitespace-nowrap font-semibold text-left">
                                        End Date
                                    </th>
                                    <th className="border py-3 text-sm text-gray-300 uppercase border-gray-700 whitespace-nowrap font-semibold text-left">
                                        City
                                    </th>
                                    <th className="border py-3 text-sm text-gray-300 uppercase border-gray-700 whitespace-nowrap font-semibold text-left">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                            {
                                enrolledTournaments.length > 0 
                                ?
                                enrolledTournaments.map((item, index) =>{
                                    return(
                                    <tr key={index} className="border-t-2 text-left">
                                        <th className="pl-5 py-4">{index+1}</th>
                                        <th className="pl-5">
                                            <span 
                                                className='cursor-pointer hover:text-[#ee6730]'
                                                onClick={()=> navigateToTournamentProfile(item.id)}
                                            >
                                                    {item.tournament_name}
                                            </span>
                                        </th>
                                        <td>{item.start_date}</td>
                                        <td>{item.end_date}</td>
                                        <td>{item.city}</td>
                                        <td>
                                            {/* if tournament started then disable it */}
                                            <button className='bg-red-500 text-white px-2 py-0.5 rounded-md hover:opacity-60' onClick={()=>handleUnenrollTournament(item.id)}>Unenroll</button>
                                        </td>
                                    </tr>
                                    )
                                })
                                : 
                                    <tr>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 font-semibold text-gray-400 text-center" colSpan="6">
                                            Your Team has not enrolled in any tournament
                                        </td>
                                    </tr>
                            }
                            </tbody>
                        </table>
                  </div>
                </div>
            </div>
        </section>
    )
}

export default TeamProfileDetail