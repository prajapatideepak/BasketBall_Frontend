import React from 'react'
import {useNavigate, useParams} from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { useDisqualifyTeamMutation } from '../../../services/organizer';

function TournamentTeamCard({isOrganizer, teamDetails, refetchData}) {
    const navigate = useNavigate();
    const {tournament_id} = useParams()

    const [disqualifyTeam, {isLoading, isError}] = useDisqualifyTeamMutation()

    const {team_id, teams, is_disqualified} = teamDetails

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
      }).then(async(result) => {
        if (result.isConfirmed) {
            const response = await disqualifyTeam({tournament_id: tournament_id, team_id: team_id})
            if(response.error){
                toast.error(response.error.data.message)
            }
            else if(response.data.success){
                refetchData()
                toast.success(response.data.message);
            }
        }
      })
    }

    return (
        <div className="w-full bg-gray-800 rounded-lg">
            <div className='flex lg:flex-row flex-col lg:justify-start justify-center items-center p-3 h-full'>
                <div className='flex w-full'>
                    <div className='flex justify-center items-center'>
                        <div className="team_logo border-2 border-gray-400 rounded-full w-20 h-20 xl:w-24 xl:h-24 overflow-hidden flex justify-center items-center">
                            <img src={!teams.logo ? '/CBL_Images/basketball.png' : teams.logo} className=" cursor-pointer hover:opacity-80" alt="team logo" onClick={handleNavigateToTeamProfile} />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center ml-5 w-full h-full">
                        <div className='flex space-x-4'>
                            <h3 className="text-gray-200 font-medium sm:text-lg md:text-xl xl:text-2xl cursor-pointer hover:opacity-80" onClick={handleNavigateToTeamProfile}>{teams.team_name}</h3>
                            {
                                isOrganizer && is_disqualified
                                ?
                                    <h3 className='text-red-400 text-sm my-auto rounded-md tracking-tight sm:tracking-wide'>( Disqualified )</h3>
                                :
                                    isOrganizer && !is_disqualified
                                    ?
                                        <div className='flex flex-1 justify-end'>
                                            <button disabled={isLoading} className={`${isLoading? 'opacity-60': ''} px-2 max-h-8 bg-[#ee6730] text-white rounded-md hover:bg-orange-400 text-sm tracking-wide`} onClick={handleDisqualify}>{isLoading? 'Loading...': 'Disqualify'}</button>
                                        </div>
                                    :
                                        null
                                
                            }
                        </div>
                        {
                            teams.about_team != '' && teams.about_team != ' ' 
                            ? 
                                <p className="text-xs sm:text-sm mt-1 xl:mt-2 text-gray-400 text-ellipsis line-clamp-2 overflow-hidden">{teams.about_team}</p>
                            :
                                <p className="text-xs sm:text-sm mt-1 xl:mt-2 text-gray-400 text-ellipsis line-clamp-2 overflow-hidden">....</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TournamentTeamCard