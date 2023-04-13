import React from 'react'
import {useNavigate, useParams} from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { useDisqualifyTeamMutation, useRequalifyTeamMutation } from '../../../services/organizer';

function TournamentTeamCard({isOrganizer, teamDetails, index, refetchData}) {
    const navigate = useNavigate();
    const {tournament_id} = useParams()

    const [disqualifyTeam, {...disqualifying}] = useDisqualifyTeamMutation()
    const [requalifyTeam, {...requalifying}] = useRequalifyTeamMutation()

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

    const handleRequalify = () =>{
        Swal.fire({
        title: 'Are you sure to requalify?',
        text: "Team will be requalified again for the tournament",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, requalify'
      }).then(async(result) => {
        if (result.isConfirmed) {
            const response = await requalifyTeam({tournament_id: tournament_id, team_id: team_id})
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
        <div className="w-full relative overflow-hidden bg-gray-800 rounded-lg">
            <div className="bg-gradient-to-b  from-[#e64100]  absolute  md:top-[-40px] md:left-[-25px] w-10 h-10 rotate-[35deg] top-[-15px] left-[-15px] md:h-20 md:w-14 content-start md:rotate-[45deg] flex justify-center items-center">
                <h1 className="rotate-[-35deg] md:rotate-[315deg] text-xs font-medium md:text-base mt-1 ml-5 md:ml-8 text-white">
                    {index}
                </h1>
            </div>
            <div className='flex lg:flex-row flex-col lg:justify-start justify-center items-center py-3 pr-3 pl-5 h-full'>
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
                                isOrganizer
                                ?
                                    is_disqualified
                                    ?
                                        <div className='flex flex-1 justify-end'>
                                            <button disabled={requalifying.isLoading} className={`${requalifying.isLoading? 'opacity-60': ''} px-2 max-h-8 bg-green-700 text-white rounded-md hover:bg-orange-400 text-sm tracking-wide`} onClick={handleRequalify}>{requalifying.isLoading? 'Loading...': 'Requalify'}</button>
                                        </div>
                                    :
                                        <div className='flex flex-1 justify-end'>
                                            <button disabled={disqualifying.isLoading} className={`${disqualifying.isLoading? 'opacity-60': ''} px-2 max-h-8 bg-[#ee6730] text-white rounded-md hover:bg-orange-400 text-sm tracking-wide`} onClick={handleDisqualify}>{disqualifying.isLoading? 'Loading...': 'Disqualify'}</button>
                                        </div>
                                :
                                    is_disqualified
                                    ?
                                        <h3 className='text-red-400 text-sm my-auto rounded-md tracking-tight sm:tracking-wide'>( Disqualified )</h3>
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