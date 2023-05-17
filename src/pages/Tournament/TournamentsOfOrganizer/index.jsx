import React from 'react'
import { useNavigate } from 'react-router-dom';
import TournamentCard from '../../../Component/TournamentCard';
import { GiDiamondTrophy } from 'react-icons/gi';
import { MdDelete } from 'react-icons/md';
import Heading from '../../../Component/Heading';
import { useTournamentsOfOrganizerQuery } from '../../../services/organizer';
import { useDeleteTournamentDetailsMutation } from '../../../services/tournament';
import SmallLoader from '../../../component/SmallLoader';
import { toast } from 'react-toastify';

function TournamentsOfOrganizer() {
    const navigate = useNavigate()

    const [currentTab, setCurrentTab] = React.useState(1);
    const [upcomingTournaments, setUpcomingTournaments] = React.useState([]);
    const [ongoingTournaments, setOngoingTournaments] = React.useState([]);
    const [pastTournaments, setPastTournaments] = React.useState([]);
    const [pendingOrRejectedTournaments, setPendingOrRejectedTournaments] = React.useState([]);
    const [currentTabTournaments, setCurrentTabTournaments] = React.useState([]);

    const { data, isLoading, isError, error, refetch } = useTournamentsOfOrganizerQuery();
    const [deleteTournamentDetails, { ...deletingTournament }] = useDeleteTournamentDetailsMutation()

    const handleUnenrollTournament = async (tournament_id) => {
        const response = await deleteTournamentDetails(tournament_id);
        if (response.error) {
            toast.error(response.error.data.message);
        }
        else if (response.data.success) {
            refetch();
            toast.success(response.data.message)
        }
    }

    React.useEffect(() => {
        if (data?.success) {
            const upcoming = [];
            const ongoing = [];
            const past = [];
            const pendingOrRejected = [];

            data?.tournaments.map((tournament) => {
                if (tournament.status == 1) {
                    upcoming.push(tournament);
                } else if (tournament.status == 2) {
                    ongoing.push(tournament);
                } else if (tournament.status == 3) {
                    past.push(tournament);
                } else {
                    pendingOrRejected.push(tournament);
                }
            });

            setUpcomingTournaments(upcoming);
            setOngoingTournaments(ongoing);
            setPastTournaments(past);
            setPendingOrRejectedTournaments(pendingOrRejected)
        }

        if (isError) {
            toast.error(error.data.message)
            navigate(-1)
        }

    }, [data])

    React.useEffect(() => {
        if (currentTab == 1) {
            setCurrentTabTournaments(ongoingTournaments);
        } else if (currentTab == 2) {
            setCurrentTabTournaments(upcomingTournaments);
        } else {
            setCurrentTabTournaments(pastTournaments);
        }
    }, [currentTab]);

    return (
        <section className="min-h-screen-fit">
            <div className='mx-auto px-10  sm:px-20  md:px-20 lg:px-24 xl:px-28 2xl:px-32'>
                <div className="xs:py-10 py-10 xl:py-14">
                    <h1 className="xs:text-3xl sm:text-3xl md:text-4xl text-center font-bold  italic uppercase text-[#ee6730] ">All Tournaments</h1>
                </div>
                {
                    pendingOrRejectedTournaments.length > 0
                        ?
                        <div className="flex justify-center items-center mb-14">
                            {/* <div className='w-full flex flex-col justify-center items-center'>
                                <h3 className='text-gray-600 font-medium'>Approval Pending</h3>
                                <div className='w-full flex flex-wrap flex-col justify-center items-center py-4'>
                                    {
                                        approvalPendingTournaments.map((tournament, index) =>{
                                            return (
                                                <div 
                                                key={index} 
                                                className="w-52 h-20 flex items-center bg-gray-200 rounded-lg p-2 shadow-md cursor-pointer hover:opacity-80"
                                                onClick={()=> navigate(`/tournament/${tournament.id}`)}
                                                >
                                                    <div className='w-16 h-16 border border-gray-400 rounded-full overflow-hidden'>
                                                        <img src={tournament.logo} className="w-full h-full object-cover" alt="" />
                                                    </div>
                                                    <div className='text-center flex-1'>
                                                        <p className={`${tournament.tournament_name.length > 28 ? 'text-base' : 'text-lg'} font-medium text-gray-600`}>{tournament.tournament_name}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div> */}

                            <div className="table-container w-full flex lg:justify-center overflow-x-auto">
                                <table className="whitespace-nowrap w-full lg:w-3/5 mt-2 rounded-md overflow-hidden text-xs xs:text-sm">
                                    <thead className="bg-gray-200">
                                        <tr>
                                            <th className="pl-5 pr-2 py-1.5 text-gray-500 uppercase whitespace-nowrap font-semibold text-left  text-xs">
                                                Sr.
                                            </th>
                                            <th className="px-2 py-1.5 text-gray-500 uppercase whitespace-nowrap font-semibold text-left text-xs">
                                                Tournament Name
                                            </th>
                                            <th className="px-2 py-1.5 text-gray-500 uppercase whitespace-nowrap font-semibold text-left text-xs">
                                                Status
                                            </th>
                                            <th className=" px-2 py-1.5 text-gray-500 uppercase whitespace-nowrap font-semibold text-left text-xs">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-black sm:text-base xs:text-sm text-xs">
                                        {
                                            pendingOrRejectedTournaments.map((tournament, index) => {
                                                return (
                                                    <tr key={index} className="border-t-4 text-left">
                                                        <th className="pl-5 font-medium text-gray-200 whitespace-nowrap pr-2 py-2 ">
                                                            {index + 1}
                                                        </th>
                                                        <td className="px-2 whitespace-nowrap pr-2 text-gray-200">
                                                            <span
                                                                className="cursor-pointer hover:text-[#ee6730] font-medium"
                                                                onClick={() => navigate(`/tournament/${tournament.id}`)}
                                                            >
                                                                {tournament.tournament_name}
                                                            </span>
                                                        </td>
                                                        <td className="whitespace-nowrap px-2 text-sm font-medium">
                                                            {
                                                                tournament.status == -1
                                                                    ?
                                                                    <span className="text-red-500">
                                                                        Rejected
                                                                    </span>
                                                                    :
                                                                    tournament.status == 0
                                                                        ?
                                                                        <span className="text-gray-300">
                                                                            Pending
                                                                        </span>
                                                                        :
                                                                        null
                                                            }
                                                        </td>
                                                        <td className="whitespace-nowrap px-2">
                                                            {
                                                                deletingTournament.isLoading
                                                                    ?
                                                                    <span className='text-sm text-gray-300'>Loading...</span>
                                                                    :
                                                                    <MdDelete className="text-xl text-red-500 cursor-pointer rounded-md hover:opacity-80"
                                                                        onClick={() =>
                                                                            handleUnenrollTournament(tournament.id)
                                                                        } />
                                                            }
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        :
                        null
                }
                <div className="flex justify-center items-center">
                    <div className="w-48 xs:w-72 sm:w-72 md:w-80 p-1 rounded-full flex justify-around items-center bg-black">
                        <div
                            className={`${currentTab == 1 ? "bg-[#ee6730]" : ""
                                } group cursor-pointer w-full text-center p-1 rounded-full`}
                            onClick={() => setCurrentTab(1)}
                        >
                            <h3
                                className={`${currentTab == 1 ? "text-white" : "text-gray-300"
                                    } group-hover:text-white font-semibold text-xs xs:text-sm md:text-base`}
                            >
                                Ongoing
                            </h3>
                        </div>
                        <div
                            className={`${currentTab == 2 ? "bg-[#ee6730]" : ""
                                } group cursor-pointer w-full text-center mx-1.5 p-1 rounded-full`}
                            onClick={() => setCurrentTab(2)}
                        >
                            <h3
                                className={`${currentTab == 2 ? "text-white" : "text-gray-300"
                                    } group-hover:text-white font-semibold text-xs xs:text-sm md:text-base`}
                            >
                                Upcoming
                            </h3>
                        </div>
                        <div
                            className={`${currentTab == 3 ? "bg-[#ee6730]" : ""
                                } group cursor-pointer w-full text-center p-1 rounded-full`}
                            onClick={() => setCurrentTab(3)}
                        >
                            <h3
                                className={`${currentTab == 3 ? "text-white" : "text-gray-300"
                                    } group-hover:text-white font-semibold text-xs xs:text-sm md:text-base`}
                            >
                                Past
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12 mt-10 sm:mt-12 md:mt-16'>
                    {
                        isLoading
                            ?
                            <SmallLoader />
                            :
                            currentTabTournaments.length > 0
                                ?
                                currentTabTournaments.map((tournament, index) => {
                                    return (
                                        <TournamentCard key={index} tournament={tournament} />
                                    )
                                })
                                :
                                <div className='flex justify-center items-center mt-16 md:mt-24'>
                                    <GiDiamondTrophy className="text-2xl xs:text-3xl sm:text-5xl text-gray-400 mr-2" />
                                    <p className='text-xs xs:text-sm sm:text-lg font-medium text-gray-400'>No Tournament Found</p>
                                </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default TournamentsOfOrganizer