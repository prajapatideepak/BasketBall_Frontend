import React from 'react'
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

function TournamentTeamCard({teamDetails}) {
    const navigate = useNavigate();

    const is_team_organizer = true;

    const {team_id, team_logo, team_name, description, is_disqualified} = teamDetails

    const handleNavigateToTeamProfile = () =>{
        navigate(`/team/profile-detail/${team_id}`)
    }

    const handleDisqualify = () =>{
        Swal.fire({
        title: 'Are you sure to disqualify?',
        text: "Team will be disqualified from the tournament",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, disqualify'
      }).then((result) => {
        if (result.isConfirmed) {
            toast.success('Team is disqualified')
        }
      })
    }

    return (
        <div className="w-full bg-gray-800 rounded-lg">
            <div className='flex lg:flex-row flex-col lg:justify-start justify-center items-center p-3 h-full'>
                <div className='flex w-full'>
                    <div className="team_logo overflow-hidden flex justify-center items-center">
                        <img src={team_logo} className="w-20 xl:w-24 rounded-full cursor-pointer hover:opacity-80" alt="team logo" onClick={handleNavigateToTeamProfile} />
                    </div>
                    <div className="flex flex-col justify-center ml-5 w-full h-full">
                        <div className='flex space-x-4'>
                            <h3 className="text-gray-200 font-medium sm:text-lg md:text-xl xl:text-2xl cursor-pointer hover:opacity-80" onClick={handleNavigateToTeamProfile}>{team_name}</h3>
                            {
                                is_team_organizer && is_disqualified
                                ?
                                    <h3 className='text-red-400 text-sm my-auto rounded-md tracking-tight sm:tracking-wide'>( Disqualified )</h3>
                                :
                                    is_team_organizer && !is_disqualified
                                    ?
                                        <div className='flex flex-1 justify-end'>
                                            <button className='px-2 max-h-8 bg-[#ee6730] text-white rounded-md hover:bg-orange-400 text-sm tracking-wide' onClick={handleDisqualify}>Disqualify</button>
                                        </div>
                                    :
                                        null
                                
                            }
                        </div>
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