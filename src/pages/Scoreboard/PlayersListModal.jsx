import React from 'react'
import { toast } from 'react-toastify'
import { Modal } from '../../Component/Modal'
import { useParams } from 'react-router-dom';
import { useAddTeamPointMutation, useAddPlayerFoulMutation } from '../../services/scoreboard';

function PlayersListModal({showModal, handleShowModal, players, isPlayerFoul, pointType, pointTeamId, refetchData, setDisableBtns, enableAllButtons}) {
    const {match_id, token} = useParams()

    const [selectedPlayerId, setSelectedPlayerId] = React.useState(-1)

    const [addTeamPoint, {...addingTeamPoint}] = useAddTeamPointMutation()
    const [addPlayerFoul, {...addingPlayerFoul}] = useAddPlayerFoulMutation()

    const handleModalClose = () => {
        handleShowModal(false)
        setSelectedPlayerId(-1)
    }

    const handlePlayerSelect = (player_id) => {
        setSelectedPlayerId(player_id)
    }

    const handleSubmit = async() =>{

        if(selectedPlayerId == -1){
            return toast.error('Please select player')
        }

        let response = null;

        setDisableBtns(true)

        if(isPlayerFoul){
            response = await addPlayerFoul({match_id, token, player_id: selectedPlayerId})
        }
        else{
            response = await addTeamPoint({match_id, token, team_id: pointTeamId, player_id: selectedPlayerId, point_type: pointType})
        }
        
        enableAllButtons()

        if(response.error){
            toast.error(response.error.data.message)
        }
        else if(response.data.success){
            refetchData()
            toast.success(response.data.message);
            setSelectedPlayerId(-1)
            handleShowModal(false)
        }
    }
  return (
        <Modal
          open={showModal}
          onClose={()=> {handleShowModal(false); setSelectedPlayerId(-1)}}
        >
            <Modal.Description className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-700 shadow-xl rounded-lg ">
                <Modal.Title
                as="h3"
                className="mb-4 sm:text-xl text-lg font-medium text-gray-900 dark:text-white"
                >
                Select Player
                </Modal.Title>
                <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="image-modal" onClick={handleModalClose}>
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Close modal</span>
                </button>
            
                <Modal.Description>
                    <div className="px-4 py-4 overflow-x-auto">
                        <div>
                            <table className="text-left w-full">
                                <thead className='bg-[#ee6730] text-white sm:text-base text-sm '>
                                    <tr>
                                        <th className='sm:px-6 px-4 py-2 whitespace-nowrap'>#</th>
                                        <th className='sm:px-6 px-2 py-2 whitespace-nowrap'>Sr.</th>
                                        <th className='sm:px-6 px-2 py-2 whitespace-nowrap'>Player Name</th>
                                        <th className='sm:px-6 px-2 py-2 whitespace-nowrap'>Jersey</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-400 sm:text-base text-sm">
                                    {
                                        players.map((item, index) => {
                                            return(
                                                <tr key={index} 
                                                className={`${(index+1)%2 == 0 ? 'bg-gray-600' : ''} cursor-pointer group`} 
                                                onClick={()=>handlePlayerSelect(item.players.id)}
                                                >
                                                    <td className='sm:px-6 px-4 py-2 whitespace-nowrap'>
                                                        <input type="radio" name="player"
                                                        value={item.players.id}
                                                        checked={selectedPlayerId == item.players.id}
                                                        className="cursor-pointer"
                                                        onChange={()=>handlePlayerSelect(item.players.id)}
                                                            />
                                                    </td>
                                                    <td className='sm:px-6 px-2 py-2 whitespace-nowrap'>
                                                        {index + 1}
                                                    </td>
                                                    <td className="flex sm:px-6 px-2 py-2 whitespace-nowrap text-white space-x-2 group-hover:text-blue-400">
                                                        <p className="capitalize">{item.players.first_name}</p>
                                                        <p className="ml-1 capitalize">{item.players.middle_name}</p>
                                                        <p className="ml-1 capitalize">{item.players.last_name}</p>
                                                    </td>
                                                    <td className='sm:px-6 px-2 py-2 whitespace-nowrap'>
                                                        {item.players.jersey_no}
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Modal.Description>
                <div>
                    <div className='mt-8 text-right'>
                        <button 
                        type="button" 
                        onClick={handleSubmit} 
                        disabled={addingTeamPoint.isLoading || addingPlayerFoul.isLoading}
                        className={`${addingTeamPoint.isLoading || addingPlayerFoul.isLoading ?'opacity-60' : ''} sm:w-28 w-20 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 sm:py-2 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
                            {addingTeamPoint.isLoading || addingPlayerFoul.isLoading ? 'Loading...' : 'Submit'}
                        </button>
                    </div>
                </div>
            </Modal.Description>
        </Modal>
    )
}

export default PlayersListModal