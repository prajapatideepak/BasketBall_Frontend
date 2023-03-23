import React from 'react'
import { toast } from "react-toastify";

function TeamsModal({openTeamsModal, handleOpenTeamsModal}) {
    const [error, setError] = React.useState('');

    const [teams, setTeams] = React.useState([
        {
            team_id: 1,
            team_name: 'Mehta Ke Maharathi',
            checked: false
        },
        {
            team_id: 2,
            team_name: 'Jetha Ke Jabaaz',
            checked: false
        },
    ])

    const resetModal = () => {
        setError('')
        setTeams(
            teams.map((team) =>{
                return{
                    ...team,
                    checked: false
                }
            })
        )
    }

    const handleTeamSelect = (e, team_id) => {
        setTeams(
            teams.map((team) =>{
                return{
                    ...team,
                    checked: team.team_id == team_id ? e.target.checked : team.checked
                }
            })
        )
    }

    const handleModalClose = () => {
        resetModal()
        handleOpenTeamsModal()
    }

    const handleSubmit = () => {
        let isTeamSelected = false;

        teams.map((team) =>{
            if(team.checked){
                isTeamSelected = true;
                return;
            }
        })

        if(!isTeamSelected){
            setError('Please select team')
            return;
        }
        resetModal()
        handleOpenTeamsModal()
        toast.success('Registration successfull')
    }

    return (
        <div id="teams-modal" tabIndex="-1" aria-hidden="true" className={`${openTeamsModal ? '' : 'hidden'} fixed grid place-items-center top-auto bottom-auto left-0 right-0 z-[9999] w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full bg-white`} style={{backgroundColor: "rgba(1, 1, 1, 0.7)"}}>
            <div className="relative w-full h-full mx-auto max-w-md md:h-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="teams-modal" onClick={handleModalClose}>
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="px-6 py-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Select Your Team</h3>
                        <div>
                            <table className="text-left mx-auto">
                                <thead className="text-gray-400">
                                    <tr>
                                       <th>#</th> 
                                       <th className="px-6">Team Name</th> 
                                    </tr>
                                </thead>
                                <tbody className="text-gray-400">
                                    {
                                        teams.map((team, index) => {
                                            return(
                                                <tr key={index}>
                                                    <td>
                                                        <input type="checkbox" checked={team.checked} name="inputCheck" id="inputCheck" onChange={(e)=> handleTeamSelect(e, team.team_id)} />
                                                    </td>
                                                    <td className="px-6 text-orange-400">{team.team_name}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className='mt-5 text-right'>
                            <button type="button" onClick={handleSubmit} className="w-28 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                            { 
                                error != '' 
                                ?   
                                    <div className="text-center">
                                        <small className="text-red-500">{error}</small>
                                    </div>
                                :
                                    null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default TeamsModal