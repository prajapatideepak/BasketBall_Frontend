import React from 'react'
import moment from "moment";
import {useNavigate, useParams} from 'react-router-dom'
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import SmallLoader from '../../../component/SmallLoader';
import { useTournamentScheduleQuery } from '../../../services/organizer';
import { useUpdateMatchDetailsMutation, useDeleteMatchMutation } from '../../../services/match';
import { useSendScoreboardLinkMutation } from '../../../services/scoreboard';
import ScorerModal from './ScorerModal';

function Schedule({isOrganizer}) {
    const navigate = useNavigate();
    const {tournament_id} = useParams();

    const [schedule, setSchedule] = React.useState([]);
    const [isEdit, setIsEdit] = React.useState(false);
    const [matchAddress, setMatchAddress] = React.useState('');
    const [matchDate, setMatchDate] = React.useState('');
    const [matchTime, setMatchTime] = React.useState('');
    const [editMatchId, setEditMatchId] = React.useState(-1);
    const [showAddScorerModal, setShowAddScorerModal] = React.useState(false)
    const [isViewScorerDetails, setIsViewScorerDetails] = React.useState(false)
    const [scorerDetails, setScorerDetails] = React.useState({})

    const {data, isLoading, refetch } = useTournamentScheduleQuery(tournament_id)
   
    const [updateMatchDetails, {...updatingMatch}] = useUpdateMatchDetailsMutation()
    const [deleteMatch, {...deletingMatch}] = useDeleteMatchMutation()
    const [sendScoreboardLink, {...sendingLink}] = useSendScoreboardLinkMutation()

    const handleEdit = (match_id, start_date, start_time, address) => {
        setIsEdit(true)
        setEditMatchId(match_id)
        setMatchAddress(address)
        setMatchDate(start_date != '' && start_date != null ? moment(start_date).format('YYYY-MM-D') : '')
        setMatchTime(start_time != null ? start_time : '')
    }

    const handleSave = async (match_id) => {
        if(matchAddress == '' || matchDate == '' || matchTime == ''){
            return toast.error('Please fill the fields')
        }

        const response = await updateMatchDetails({tournament_id, match_id, match_date: moment(matchDate).format('YYYY-MM-D'), match_time: matchTime, match_address: matchAddress})

        if(response.error){
            toast.error(response.error.data.message)
        }
        else if(response.data.success){
            refetch()
            toast.success(response.data.message);
            setIsEdit(false)
            setEditMatchId(-1)
            setMatchAddress('')
            setMatchDate('')
            setMatchTime('')
        }
    }
    const handleCancel = () => {
        setIsEdit(false)
        setEditMatchId(-1)
        setMatchAddress('')
        setMatchDate('')
        setMatchTime('')
    }

    const handleMatchDate = (e) => {
        setMatchDate(e.target.value)
    }

    const handleMatchTime = (e) => {
        setMatchTime(e.target.value)
    }

    const handleAddress = (e) => {
        setMatchAddress(e.target.value)
    }

    const handleViewScorer = (match) =>{
        setIsViewScorerDetails(true)
        setEditMatchId(match.id)
        setScorerDetails(match.scorekeeper)
        setShowAddScorerModal(true)
    }

    const handleAddUpdateScorer = (match_id) => {
        setEditMatchId(match_id)
        setShowAddScorerModal(true)
    }

    const handleMatchDelete = async (match_id) => {
        Swal.fire({
            title: "Are you sure to delete the match?",
            text: "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete",
        }).then(async(result) => {
            if (result.isConfirmed) {
                const response = await deleteMatch({match_id, tournament_id})
                 if(response.error){
                    toast.error(response.error.data.message)
                }
                else if(response.data.success){
                    refetch()
                    toast.success(response.data.message);
                }
            }
        });
    }

    const handleSendLink = async (match) => {
        setEditMatchId(match.id)
        const response = await sendScoreboardLink({
            tournament_id: match.tournament_id, 
            match_id: match.id, 
            scorer_email:  match.scorekeeper.email,
            scorer_token: match.scorekeeper.token,
            team_1: match.team_1.team_name, 
            team_2: match.team_2.team_name, 
            match_start_date: moment(match.start_date).format("DD/MM/YYYY"), 
            match_start_time: moment(match.start_time, 'h:mm a').format("h:mm A"), 
            address: match.address
        })

        setEditMatchId(-1)
        
        if(response.error){
            toast.error(response.error.data.message)
        }
        else if(response.data.success){
            refetch()
            toast.success(response.data.message);
        }
    }

    React.useEffect(()=>{
        if(data?.success){
            setSchedule(data.schedule)
        }
    },[data])

    if(isLoading){
        return <SmallLoader/>
    }

    return (
        <div>
            <div>
                {
                    schedule.length > 0
                    ?
                        schedule.map((item, i)=>{
                        return <div key={i} className={`${i != 0 ? 'mt-10': ''}`}>
                                <h3 className='mb-2 text-xs sm:text-base font-medium text-gray-600'>{item.round_name}</h3>
                                <div key={i} className="table-container relative overflow-x-auto shadow-md rounded-md sm:rounded-lg">
                                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                    Sr.
                                                </th>
                                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                    Team 1
                                                </th>
                                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                    
                                                </th>
                                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                    Team 2
                                                </th>
                                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                    Date
                                                </th>
                                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                    Time
                                                </th>
                                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                    Address
                                                </th>
                                                {
                                                    isOrganizer
                                                    ?
                                                        <>
                                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                Scorer
                                                            </th>
                                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                Action
                                                            </th>
                                                        </>
                                                    :
                                                        null
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                item.matches.map((match, idx)=>{
                                                    return <tr key={idx} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                                            {idx+1}
                                                        </th>
                                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            <span className="cursor-pointer hover:text-gray-300" onClick={()=> navigate(`/team/profile-detail/1`)}>{match.team_1.team_name}</span>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            VS
                                                        </td>
                                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            <span className="cursor-pointer hover:text-gray-300" onClick={()=> navigate(`/team/profile-detail/1`)}>{match.team_2.team_name}</span>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            {
                                                                isEdit && editMatchId == match.id
                                                                ?
                                                                    <input type="date" className="bg-gray-400 text-white rounded-sm px-2" 
                                                                    value={moment(matchDate).format('YYYY-MM-DD')}
                                                                    onChange={handleMatchDate} />
                                                                :
                                                                    match.start_date != '' && match.start_date != undefined
                                                                    ?
                                                                        <>
                                                                            {moment(match.start_date).format("DD/MM/YYYY")}
                                                                        </>
                                                                    :
                                                                        "--"
                                                            }
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            {
                                                                isEdit && editMatchId == match.id
                                                                ?
                                                                    <input type="time" className="bg-gray-400 text-white rounded-sm px-2"
                                                                    value={matchTime} onChange={handleMatchTime} />
                                                                :
                                                                    match.start_time != '' && match.start_time != undefined
                                                                    ?
                                                                        <>
                                                                            {moment(match.start_time, 'h:mm a').format("h:mm A")}
                                                                        </>
                                                                    :
                                                                        "--"
                                                            }
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            {
                                                                isEdit && editMatchId == match.id
                                                                ?
                                                                    <input type="text" className='w-full bg-transparent border border-white rounded-sm px-1 text-white' name="match_address" id="" value={matchAddress} onChange={handleAddress} />
                                                                :
                                                                    match.address
                                                            }
                                                        </td>
                                                        {
                                                            isOrganizer
                                                            ?
                                                                <>  
                                                                    {
                                                                        !match.scorekeeper_id
                                                                        ?
                                                                            <td className=" px-6 py-4 whitespace-nowrap space-x-3">
                                                                                <span className="flex items-center">
                                                                                    <button className=" text-blue-500 hover:underline cursor-pointer font-medium" onClick={()=> handleAddUpdateScorer(match.id) }>Add</button>
                                                                                </span>
                                                                            </td>
                                                                        :
                                                                            <td className=" px-6 py-4 whitespace-nowrap space-x-3">
                                                                                <span className="flex items-center">
                                                                                    <button 
                                                                                    disabled={ editMatchId == match.id && sendingLink.isLoading
                                                                                    }
                                                                                    className={` text-blue-500 hover:underline cursor-pointer font-medium`} onClick={()=> handleViewScorer(match)}>View</button>
                                                                                    <button className={`${editMatchId == match.id && sendingLink.isLoading ? 'opacity-60': ''} mx-3 text-orange-300 hover:underline cursor-pointer font-medium`} onClick={()=> handleSendLink(match)}>{editMatchId == match.id && sendingLink.isLoading ? 'sending...' : 'Send Link'}</button>
                                                                                </span>
                                                                            </td>
                                                                    }
                                                                    <td className="flex items-center px-6 py-4 whitespace-nowrap space-x-3">
                                                                        {
                                                                            isEdit && editMatchId == match.id
                                                                            ?
                                                                                <>
                                                                                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={()=>handleSave(match.id)}>{
                                                                                        updatingMatch.isLoading
                                                                                        ?
                                                                                            'Loading..'
                                                                                        :
                                                                                            'Save'
                                                                                    }</button>
                                                                                    <button className="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={handleCancel}>Cancel</button>
                                                                                </>
                                                                            
                                                                            :
                                                                                <>
                                                                                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={()=>handleEdit(match.id, match.start_date, match.start_time, match.address)}>Edit</button>
                                                                                    <button 
                                                                                    disabled={deletingMatch.isLoading}
                                                                                    className={`${deletingMatch.isLoading ? 'opacity-60' : ''} font-medium text-red-600 dark:text-red-500 hover:underline`}
                                                                                    onClick={()=>handleMatchDelete(match.id)}
                                                                                    >Delete</button>
                                                                                </>
                                                                        }
                                                                    </td>
                                                                </>
                                                            :
                                                                null
                                                        }
                                                    </tr>
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                        </div>
                        })
                    : 
                        <div className="w-full text-center mt-12 py-5">
                            <h4 className='text-lg font-medium text-gray-400'>No schedule available</h4>
                        </div>
                }
            </div>
            <ScorerModal 
                showModal={showAddScorerModal} 
                handleShowModal={setShowAddScorerModal} 
                matchId={editMatchId} 
                refetchData={refetch}
                isViewScorerDetails={isViewScorerDetails}
                setIsViewScorerDetails={setIsViewScorerDetails}
                scorerDetails={scorerDetails}
            />
        </div>
    )
}

export default Schedule