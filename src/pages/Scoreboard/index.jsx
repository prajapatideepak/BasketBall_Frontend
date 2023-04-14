import React, {useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { AiOutlineUndo } from 'react-icons/ai'
import { Tooltip } from 'react-tooltip'
import PointButton from './PointButton';
import FoulButton from './FoulButton';
import TeamPlayersTable from './TeamPlayersTable';
import PlayersListModal from './PlayersListModal'
import Loader from '../../Component/Loader'
import _ from 'lodash';
import { useIsAuthScorekeeperQuery, useStartMatchMutation, useEndMatchMutation, useAddTeamFoulMutation, useChangeQuarterMutation, useUndoScoreMutation } from '../../services/scoreboard';
import { useGetMatchScoreQuery } from '../../services/match';

function index() {
    const {match_id, token} = useParams()
    const navigate = useNavigate();

    const [playersModal, setPlayersModal] = useState(false)
    const [matchDetails, setMatchDetails] = useState({})
    const [isMatchStarted, setIsMatchStarted] = useState(false)
    const [playersList, setPlayersList] = useState([])
    const [pointType, setPointType] = useState('')
    const [pointTeamId, setPointTeamId] = useState(-1)
    const [isPlayerFoul, setIsPlayerFoul] = useState(false)
    const [disableBtns, setDisableBtns] = useState(true)

    const {data, isLoading, isError, error, refetch} = useGetMatchScoreQuery(match_id)
    const isAuthScorekeeper = useIsAuthScorekeeperQuery({match_id, token});
    const [startMatch, {...startingMatch}] = useStartMatchMutation();
    const [endMatch, {...endingMatch}] = useEndMatchMutation();
    const [addTeamFoul, {...addingTeamFoul}] = useAddTeamFoulMutation()
    const [changeQuarter, {...changingQuarter}] = useChangeQuarterMutation()
    const [undoScore, {...undoingScore}] = useUndoScoreMutation()

    const enableAllButtons = ()=>{
        setTimeout(()=>{
            setDisableBtns(false)
        }, 3000)
    }

    const handleMatchStart = () =>{
        Swal.fire({
            title: 'Are you sure to start the match?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Start'
        }).then(async(result) => {
            if (result.isConfirmed) {
                setDisableBtns(true)
                const response = await startMatch({match_id, token})
                if(response.error){
                    toast.error(response.error.data.message)
                }
                else if(response.data.success){
                    refetch()
                    toast.success(response.data.message);
                }
                enableAllButtons()
            }
        })
    }

    const handleMatchEnd = () =>{
        Swal.fire({
            title: 'Are you sure to end the match?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, End'
        }).then(async(result) => {
            if (result.isConfirmed) {
                const response = await endMatch({match_id, token})
                if(response.error){
                    toast.error(response.error.data.message)
                }
                else if(response.data.success){
                    refetch()
                    toast.success(response.data.message);
                }
            }
        })
    }

    const handleQuarterChange = () =>{
        Swal.fire({
            title: 'Are you sure to change the quarter?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Change'
        }).then(async(result) => {
            if (result.isConfirmed) {
                setDisableBtns(true)

                const response = await changeQuarter({match_id, token})
                if(response.error){
                    toast.error(response.error.data.message)
                }
                else if(response.data.success){
                    refetch()
                    toast.success(response.data.message);
                }

                enableAllButtons()
            }
        })
    }

    const handleTeam1Point = (point_type) =>{
        setIsPlayerFoul(false)
        setPlayersList(matchDetails.team_1_players)
        setPointTeamId(matchDetails.data.team_1_id)
        setPointType(point_type)
        setPlayersModal(true)
    }

    const handleTeam2Point = (point_type) =>{
        setIsPlayerFoul(false)
        setPlayersList(matchDetails.team_2_players)
        setPointTeamId(matchDetails.data.team_2_id)
        setPointType(point_type)
        setPlayersModal(true)
    }

    const handleTeam1Foul = () =>{
        Swal.fire({
            title: 'Are you sure to give foul?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then(async(result) => {
            if (result.isConfirmed) {
                setDisableBtns(true)

                const response = await addTeamFoul({match_id, token, team_id: matchDetails.data.team_1_id})
                if(response.error){
                    toast.error(response.error.data.message)
                }
                else if(response.data.success){
                    refetch()
                    toast.success(response.data.message);
                }

                enableAllButtons()
            }
        })
    }

    const handleTeam2Foul = () =>{
        Swal.fire({
            title: 'Are to sure give foul?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then(async(result) => {
            if (result.isConfirmed) {
                setDisableBtns(true)

                const response = await addTeamFoul({match_id, token, team_id: matchDetails.data.team_2_id})
                if(response.error){
                    toast.error(response.error.data.message)
                }
                else if(response.data.success){
                    refetch()
                    toast.success(response.data.message);
                }

                enableAllButtons()
            }
        })
    }

    const handleTeam1PlayerFoul = () =>{
        setPlayersList(matchDetails.team_1_players)
        setIsPlayerFoul(true)
        setPlayersModal(true)
    }

    const handleTeam2PlayerFoul = () =>{
        setPlayersList(matchDetails.team_2_players)
        setIsPlayerFoul(true)
        setPlayersModal(true)
    }

    const handleUndoPoint = () =>{
        Swal.fire({
            title: 'Are you sure to undo last point?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, undo'
        }).then(async(result) => {
            if (result.isConfirmed) {
                setDisableBtns(true)

                const response = await undoScore({match_id, token})
                if(response.error){
                    toast.error(response.error.data.message)
                }
                else if(response.data.success){
                    refetch()
                    toast.success(response.data.message);
                }

                enableAllButtons()
            }
        })
    }

    React.useEffect(() => {
        if(isAuthScorekeeper.isError){
             toast.error(isAuthScorekeeper.error.data.message)
                navigate('/')
        }
    },[isAuthScorekeeper?.isError])

    React.useEffect(() => {
        if(data?.success){
            setMatchDetails(data.match_data)
            setIsMatchStarted(data.match_data.data.status == 2)
        }

        if(isError){
            toast.error(error.data.message)
        }
    },[data])

    React.useEffect(() => {
        if(data?.success){
            setDisableBtns(data.match_data.data.status != 2)
        }
    },[data?.match_data?.data?.status])

    if(isLoading){
        return <Loader />
    }
    
    return (
        <section>
            <div className='flex flex-col justify-center items-center bg-black sticky top-0 pt-2 z-10' style={{boxShadow:'0px 5px 15px gray'}}>
                <div className='flex justify-center items-center space-x-4 mb-2'>
                    <img src="/CBL_Images/logo.png" alt="" className='md:w-16 sm:w-12 w-10' />
                    <h1 className='text-white font-semibold md:text-xl sm:text-lg text-base'>Corporate Basketball League</h1>
                </div>
                <div className='w-full bg-[#ee6730] text-center'>
                    <h4 className='text-white md:text-base text-sm'>Scoreboard</h4>
                </div>
            </div>
            <div className='mx-auto px-10 py-4 sm:px-20 sm:py-6 md:px-20 md:py-8 lg:px-24 xl:px-28 2xl:px-32'>
                <div className="border border-gray-300">
                    <div className='flex justify-end py-6 md:px-10 px-2'>
                        {
                            isMatchStarted
                            ?
                                <button 
                                disabled={disableBtns}
                                className={`${disableBtns ? 'opacity-60': ''} bg-red-500 lg:text-base sm:text-sm text-xs text-white rounded-md hover:opacity-70 px-2 py-1`}
                                onClick={handleMatchEnd}>
                                    End Match
                                </button>
                            :
                                matchDetails?.data?.status != -1 && matchDetails?.data?.status != 3
                                ?
                                    <button 
                                    disabled={startingMatch.isLoading}
                                    className={`${startingMatch.isLoading ? 'opacity-60' : ''} bg-green-500 lg:text-base sm:text-sm text-xs text-white rounded-md hover:opacity-70 px-2 py-1`} 
                                    onClick={handleMatchStart}>
                                        {startingMatch.isLoading ? 'Loading...' : "Start Match"}
                                    </button>
                                : 
                                    null
                        }
                    </div>
                    <div className='p-10 bg-black'>
                        <div className="flex lg:flex-row flex-col justify-between items-center">
                            <div className="w-full lg:block hidden bg-white py-3 pl-3 pr-16" style={{clipPath: "polygon(0 0%, 100% 0%, 80% 100%, 0% 100%)"}}>
                                <h5 className='xl:text-3xl text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#ee6730] to-gray-700'>{matchDetails?.data?.team_1?.team_name}</h5>
                            </div>
                            <div className='flex w-full lg:justify-center justify-between items-center '>
                                <div className='lg:hidden'>
                                    <h3 className='sm:text-2xl text-lg font-medium text-gray-100'>{matchDetails?.data?.team_1?.team_name}</h3>
                                </div>
                                <div className='flex sm:flex-row flex-col justify-center items-center lg:text-5xl md:text-4xl sm:text-3xl text-xl font-medium text-[#ee6730] tracking-wider lg:space-x-5 sm:space-x-3 space-x-0 lg:px-0 px-4'>
                                    <h5>
                                        {
                                            matchDetails?.live_quarter 
                                            ?
                                                matchDetails?.live_quarter?.team_1_points
                                            :
                                                null
                                        }
                                    </h5>
                                    <span className='md:text-2xl sm:text-xl text-xs text-gray-300'>VS</span>
                                    <h5>
                                        {
                                            matchDetails?.live_quarter
                                            ?
                                                matchDetails?.live_quarter?.team_2_points
                                            :
                                                null
                                        }
                                    </h5>
                                </div>
                                 <div className='lg:hidden '>
                                    <h3 className='sm:text-2xl text-lg font-medium text-gray-100 text-end'>{matchDetails?.data?.team_2?.team_name}</h3>
                                </div>
                            </div>
                            <div className="w-full lg:block hidden text-end bg-white py-3 pr-3 pl-16" style={{clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 20% 100%)"}}>
                                <h5 className='xl:text-3xl text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-[#ee6730]'>{matchDetails?.data?.team_2?.team_name}</h5>
                            </div>
                        </div>
                        <div className="flex justify-between items-center py-2">
                            <div className='flex space-x-1'>
                                {
                                    _.times(5, (i)=>(
                                        <div key={i} className={`md:w-3 md:h-3 w-2 h-2 bg-green-500 rounded-full ${i+1 <= matchDetails?.team_1_total_won? 'bg-green-500': 'bg-gray-500'}`}></div>
                                    ))
                                }
                            </div>
                            <div className='flex flex-row-reverse '>
                                {
                                    _.times(5, (i)=>(
                                        <div key={i} className={`md:w-3 md:h-3 w-2 h-2 ml-1 bg-green-500 rounded-full ${i+1 <= matchDetails?.team_2_total_won? 'bg-green-500': 'bg-gray-500'}`}></div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="flex justify-center items-center space-x-2 pt-8">
                            <div className={`
                                flex justify-center items-center lg:w-12 lg:h-12 md:w-11 md:h-11 sm:w-10 sm:h-10 w-9 h-9 lg:text-base sm:text-sm text-xs 
                                text-white p-3 rounded-full 
                                ${isMatchStarted ? 
                                    matchDetails?.all_quarters[0]?.status == 1
                                    ?
                                        'bg-[#ee6730]' 
                                    :
                                        matchDetails?.all_quarters[0]?.status == 2
                                        ?
                                            'bg-blue-600'
                                        :
                                            'bg-gray-600'
                                : 
                                    'bg-gray-600'} 
                            `}>Q1</div>
                            <div className={`flex justify-center items-center lg:w-12 lg:h-12 md:w-11 md:h-11 sm:w-10 sm:h-10 w-9 h-9 lg:text-base sm:text-sm text-xs 
                                ${isMatchStarted ? 
                                    matchDetails?.all_quarters[1]?.status == 1
                                    ?
                                        'bg-[#ee6730]' 
                                    :
                                        matchDetails?.all_quarters[1]?.status == 2
                                        ?
                                            'bg-blue-600'
                                        :
                                            'bg-gray-600'
                                : 
                                    'bg-gray-600'} 
                                text-white p-3 rounded-full 
                                `}>Q2</div>
                            <div className={`flex justify-center items-center lg:w-12 lg:h-12 md:w-11 md:h-11 sm:w-10 sm:h-10 w-9 h-9 lg:text-base sm:text-sm text-xs 
                                ${isMatchStarted ? 
                                    matchDetails?.all_quarters[2]?.status == 1
                                    ?
                                        'bg-[#ee6730]' 
                                    :
                                        matchDetails?.all_quarters[2]?.status == 2
                                        ?
                                            'bg-blue-600'
                                        :
                                            'bg-gray-600'
                                : 
                                    'bg-gray-600'} 
                             text-white p-3 rounded-full `}>Q3</div>
                            <div className={`flex justify-center items-center lg:w-12 lg:h-12 md:w-11 md:h-11 sm:w-10 sm:h-10 w-9 h-9 lg:text-base sm:text-sm text-xs 
                                ${isMatchStarted ? 
                                    matchDetails?.all_quarters[3]?.status == 1
                                    ?
                                        'bg-[#ee6730]' 
                                    :
                                        matchDetails?.all_quarters[3]?.status == 2
                                        ?
                                            'bg-blue-600'
                                        :
                                            'bg-gray-600'
                                : 
                                    'bg-gray-600'} 
                            text-white p-3 rounded-full`}>Q4</div>
                            <div className={`flex justify-center items-center lg:w-12 lg:h-12 md:w-11 md:h-11 sm:w-10 sm:h-10 w-9 h-9 lg:text-base sm:text-sm text-xs
                                ${isMatchStarted ? 
                                    matchDetails?.all_quarters[4]?.status == 1
                                    ?
                                        'bg-[#ee6730]' 
                                    :
                                        matchDetails?.all_quarters[4]?.status == 2
                                        ?
                                            'bg-blue-600'
                                        :
                                            'bg-gray-600'
                                : 
                                    'bg-gray-600'} 
                             text-white p-3 rounded-full `}>Ext</div>
                        </div>
                    </div>
                    <div className='text-center p-6'>
                        <button 
                        disabled={changingQuarter.isLoading || disableBtns}
                        className={`${changingQuarter.isLoading || disableBtns? "opacity-60" : ""} bg-blue-600 px-2 py-2 rounded-md hover:opacity-70 text-white lg:text-base sm:text-sm text-xs`} 
                        onClick={handleQuarterChange}
                        >
                            {changingQuarter.isLoading ? "Loading..." : "Change Quarter"}
                        </button>
                    </div>
                    <div className='flex lg:flex-row flex-col lg:justify-between justify-center items-center lg:space-y-0 space-y-4 pt-2 pb-6 px-10'>
                        <div className="flex flex-2 flex-col">
                            <div className='sm:pb-1'>
                                <p className='text-gray-400 lg:block hidden'>Points</p>
                                <p className='text-lg font-semibold pb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-[#ee6730] text-center lg:hidden block'>{matchDetails?.data?.team_1?.team_name}</p>
                            </div>
                            <div className='flex lg:flex-col md:flex-row flex-col lg:space-x-0 space-x-5'>
                                <div className="flex space-x-2 lg:mt-0 sm:mt-3 mt-1">
                                    <PointButton text="Free Shot" disabled={disableBtns} onClick={()=>handleTeam1Point("free shot")} />
                                    <PointButton text="In 3-point" disabled={disableBtns} onClick={()=>handleTeam1Point("in 3 point")} />
                                    <PointButton text="Out 3-point" disabled={disableBtns} onClick={()=>handleTeam1Point("out 3 point")} />
                                </div>
                                <div className="flex flex-col mt-3 ">
                                    <div className='pb-1 lg:block hidden'>
                                        <p className='text-gray-400 lg:text-start text-center'>Fouls</p>
                                    </div>
                                    <div className="flex space-x-2 lg:justify-start justify-center">
                                        <FoulButton text="Team Foul"  disabled={disableBtns} onClick={handleTeam1Foul}/>
                                        <FoulButton text="Player Foul" disabled={disableBtns} onClick={handleTeam1PlayerFoul} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 justify-center mx-2">
                            <button 
                                className={`${disableBtns? 'opacity-60' : ''} lg:w-10 lg:h-10 sm:w-9 sm:h-9 w-8 h-8 flex justify-center items-center rounded-full bg-blue-900 hover:opacity-70 group text-white`}  data-tooltip-id="undo_btn" 
                                disabled={disableBtns} onClick={handleUndoPoint}
                            >
                                <AiOutlineUndo className='text-3xl group-hover:rotate-[360deg] transition-all duration-500'/>
                            </button>
                            <Tooltip id="undo_btn" variant="dark" content="Undo last point" place='bottom' delayShow={500} />
                        </div>
                        <div className="flex flex-2 flex-col">
                            <div className='sm:pb-1 text-end'>
                                <p className='text-gray-400 lg:block hidden'>Points</p>
                                <p className='text-lg font-semibold pb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-[#ee6730] text-center lg:hidden block'>{matchDetails?.data?.team_2?.team_name}</p>
                            </div>
                            <div className='flex lg:flex-col md:flex-row flex-col lg:space-x-0 space-x-5'>
                                <div className="flex space-x-2 lg:mt-0 sm:mt-3 mt-1">
                                    <PointButton text="Free Shot" disabled={disableBtns} onClick={()=>handleTeam2Point("free shot")} />
                                    <PointButton text="In 3-point" disabled={disableBtns} onClick={()=>handleTeam2Point("in 3 point")} />
                                    <PointButton text="Out 3-point" disabled={disableBtns} onClick={()=>handleTeam2Point("out 3 point")} />
                                </div>
                                <div className="flex flex-col mt-3 ">
                                    <div className='pb-1 lg:block hidden'>
                                        <p className='text-gray-400 lg:text-end text-center'>Fouls</p>
                                    </div>
                                    <div className="flex space-x-2 lg:justify-end justify-center">
                                        <FoulButton text="Team Foul"  disabled={disableBtns} onClick={handleTeam2Foul} />
                                        <FoulButton text="Player Foul" disabled={disableBtns} onClick={handleTeam2PlayerFoul} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='sm:px-10 px-2 py-10'>
                        <div>
                            <div className='flex justify-center mb-2 space-x-1'>
                                <span className='text-red-400 md:text-base sm:text-sm xs:text-xs font-semibold'>*Note:</span>
                                <p className='text-gray-400 md:text-base sm:text-sm xs:text-xs font-semibold'>Numbers with red colour indicate team fouls</p>
                            </div>
                            <div className='overflow-x-auto'>
                                <table className='ml-auto mr-auto shadow-md'>
                                    <thead className='bg-gray-600 sm:text-base text-sm'>
                                        <tr>
                                            <th className='px-10 py-2 text-gray-100 text-left'>Team Name</th>
                                            <th className='px-10 py-2 text-gray-100 text-left'>Q1</th>
                                            <th className='px-10 py-2 text-gray-100 text-left'>Q2</th>
                                            <th className='px-10 py-2 text-gray-100 text-left'>Q3</th>
                                            <th className='px-10 py-2 text-gray-100 text-left'>Q4</th>
                                            <th className='px-10 py-2 text-gray-100 text-left'>Extra</th>
                                            <th className='px-10 py-2 text-gray-100 text-left'>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody className='sm:text-base text-sm'>
                                        <tr className='team_1 border-b border-b-gray-300'>
                                            <td className='px-10 py-2 text-gray-600 sm:font-semibold font-medium text-left whitespace-nowrap'>{matchDetails?.data?.team_1?.team_name}</td>
                                            {
                                                _.times(5, (i)=>(
                                                    <td key={i} className='pl-10 py-2 text-gray-600 text-left'>
                                                        {
                                                            matchDetails?.all_quarters?.length > i
                                                            ?
                                                                <>
                                                                    <span>
                                                                        {
                                                                            matchDetails?.all_quarters[i].team_1_points
                                                                        } 
                                                                    / </span>
                                                                    <span className='text-red-500'>
                                                                        {
                                                                            matchDetails?.all_quarters[i].team_1_fouls
                                                                        } 
                                                                    </span>
                                                                </>
                                                            :
                                                                "-"
                                                        }
                                                    </td>
                                                ))
                                            }
                                            <td className='pl-10 py-2 text-gray-600 sm:font-semibold font-medium text-left'>
                                                {
                                                    matchDetails?.all_quarters?.length > 0
                                                    ?
                                                        matchDetails?.team_1_total_points
                                                    :
                                                        "-"
                                                }
                                            </td>
                                        </tr>
                                        <tr className='team_2 '>
                                            <td className='pl-10 py-2 text-gray-600 sm:font-semibold font-medium text-left'>{matchDetails?.data?.team_2?.team_name}</td>
                                            
                                            {
                                                 _.times(5, (i)=>(
                                                    <td key={i} className='pl-10 py-2 text-gray-600 text-left'>
                                                        {
                                                            matchDetails?.all_quarters?.length > i
                                                            ?
                                                                <>
                                                                    <span>
                                                                        {
                                                                            matchDetails?.all_quarters[i].team_2_points
                                                                        } 
                                                                    / </span>
                                                                    <span className='text-red-500'>
                                                                        {
                                                                            matchDetails?.all_quarters[i].team_2_fouls
                                                                        } 
                                                                    </span>
                                                                </>
                                                            :
                                                                "-"
                                                        }
                                                    </td>
                                                ))
                                            }
                                            
                                            <td className='pl-10 py-2 text-gray-600 sm:font-semibold font-medium text-left'>
                                                {
                                                    matchDetails?.all_quarters?.length > 0
                                                    ?
                                                        matchDetails?.team_2_total_points
                                                    :
                                                        "-"
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className='flex xl:flex-row flex-col lg:justify-around justify-center xl:items-end items-center xl:space-x-4 space-y-4 sm:px-10 px-2 py-10'>
                        <div className='w-full flex flex-col'>
                            <div>
                                <p className='text-gray-400 font-semibold sm:text-base text-sm'>{matchDetails?.data?.team_1?.team_name}</p>
                            </div>
                            <div className="overflow-x-auto">
                                <TeamPlayersTable team_players={matchDetails?.team_1_players}/>
                            </div>
                        </div>
                        <div className='w-full flex flex-col'>
                            <div>
                                <p className='text-gray-400 font-semibold sm:text-base text-sm'>{matchDetails?.data?.team_2?.team_name}</p>
                            </div>
                            <div className="overflow-x-auto">
                                <TeamPlayersTable team_players={matchDetails?.team_2_players}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PlayersListModal showModal={playersModal} handleShowModal={setPlayersModal}  players={playersList} isPlayerFoul={isPlayerFoul} pointType={pointType} pointTeamId={pointTeamId} refetchData={refetch} setDisableBtns={setDisableBtns} enableAllButtons={enableAllButtons} />
        </section>
    )
}

export default index