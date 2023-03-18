import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { AiOutlineUndo } from 'react-icons/ai'
import { Tooltip } from 'react-tooltip'
import PointButton from './PointButton';
import FoulButton from './FoulButton';
import TeamPlayersTable from './TeamPlayersTable';
import PlayersListModal from './PlayersListModal'

function index() {
    const {match_id, token} = useParams()
    const [playersModal, setPlayersModal] = useState(false)
    const isMatchStarted = false

    const handleMatchStart = () =>{
        Swal.fire({
            title: 'Are you sure to start the match?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Start'
        }).then((result) => {
            if (result.isConfirmed) {
                toast.success('Match started successfully')
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
        }).then((result) => {
            if (result.isConfirmed) {
                toast.success('Match ended successfully')
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
        }).then((result) => {
            if (result.isConfirmed) {
                toast.success('New quarter started')
            }
        })
    }

    const handleTeamPoint = () =>{
        setPlayersModal(true)
    }

    const handleTeamFoul = () =>{

    }

    const handlePlayerFoul = () =>{

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
        }).then((result) => {
            if (result.isConfirmed) {
                toast.success('Last point reverted')
            }
        })
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
                        <button className="bg-green-500 lg:text-base sm:text-sm text-xs text-white rounded-md hover:opacity-70 px-2 py-1" onClick={handleMatchStart}>Start Match</button>
                        {/* <button className="bg-red-500 lg:text-base sm:text-sm text-xs text-white rounded-md hover:opacity-70 px-2 py-1" onClick={handleMatchEnd}>End Match</button> */}
                    </div>
                    <div className='p-10 bg-black'>
                        <div className="flex lg:flex-row flex-col justify-between items-center">
                            <div className="w-full lg:block hidden bg-white py-3 pl-3 pr-16" style={{clipPath: "polygon(0 0%, 100% 0%, 80% 100%, 0% 100%)"}}>
                                <h5 className='xl:text-3xl text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#ee6730] to-gray-700'>Mehta ke Maharathi</h5>
                            </div>
                            <div className='flex w-full lg:justify-center justify-between items-center '>
                                <div className='lg:hidden'>
                                    <h3 className='sm:text-2xl text-lg font-medium text-gray-100'>Mehta ke Maharathi</h3>
                                </div>
                                <div className='flex sm:flex-row flex-col justify-center items-center lg:text-5xl md:text-4xl sm:text-3xl text-xl font-medium text-[#ee6730] tracking-wider lg:space-x-5 sm:space-x-3 space-x-0 lg:px-0 px-4'>
                                    <h5>10</h5>
                                    <span className='md:text-2xl sm:text-xl text-xs text-gray-300'>VS</span>
                                    <h5>09</h5>
                                </div>
                                 <div className='lg:hidden '>
                                    <h3 className='sm:text-2xl text-lg font-medium text-gray-100 text-end'>Jetha ke Jabaaz</h3>
                                </div>
                            </div>
                            <div className="w-full lg:block hidden text-end bg-white py-3 pr-3 pl-16" style={{clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 20% 100%)"}}>
                                <h5 className='xl:text-3xl text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-[#ee6730]'>Jetha ke Jabaaz</h5>
                            </div>
                        </div>
                        <div className="flex justify-between items-center py-2">
                            <div className='flex space-x-1'>
                                <div className='md:w-3 md:h-3 w-2 h-2 bg-green-500 rounded-full'></div>
                                <div className='md:w-3 md:h-3 w-2 h-2 bg-green-500 rounded-full'></div>
                                <div className='md:w-3 md:h-3 w-2 h-2 bg-green-500 rounded-full'></div>
                                <div className='md:w-3 md:h-3 w-2 h-2 bg-gray-500 rounded-full'></div>
                                <div className='md:w-3 md:h-3 w-2 h-2 bg-gray-500 rounded-full'></div>
                            </div>
                            <div className='flex space-x-1'>
                                <div className='md:w-3 md:h-3 w-2 h-2 bg-gray-500 rounded-full'></div>
                                <div className='md:w-3 md:h-3 w-2 h-2 bg-gray-500 rounded-full'></div>
                                <div className='md:w-3 md:h-3 w-2 h-2 bg-gray-500 rounded-full'></div>
                                <div className='md:w-3 md:h-3 w-2 h-2 bg-green-500 rounded-full'></div>
                                <div className='md:w-3 md:h-3 w-2 h-2 bg-green-500 rounded-full'></div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center space-x-2 pt-8">
                            <div className={`flex justify-center items-center lg:w-12 lg:h-12 md:w-11 md:h-11 sm:w-10 sm:h-10 w-9 h-9 lg:text-base sm:text-sm text-xs ${isMatchStarted ? 'bg-[#ee6730]' : 'bg-gray-600'} text-white p-3 rounded-full`}>Q1</div>
                            <div className={`flex justify-center items-center lg:w-12 lg:h-12 md:w-11 md:h-11 sm:w-10 sm:h-10 w-9 h-9 lg:text-base sm:text-sm text-xs ${isMatchStarted ? 'bg-[#ee6730]' : 'bg-gray-600'} text-white p-3 rounded-full border-2 border-green-500`}>Q2</div>
                            <div className={`flex justify-center items-center lg:w-12 lg:h-12 md:w-11 md:h-11 sm:w-10 sm:h-10 w-9 h-9 lg:text-base sm:text-sm text-xs ${isMatchStarted ? 'bg-blue-600' : 'bg-gray-600'} text-white p-3 rounded-full`}>Q3</div>
                            <div className={`flex justify-center items-center lg:w-12 lg:h-12 md:w-11 md:h-11 sm:w-10 sm:h-10 w-9 h-9 lg:text-base sm:text-sm text-xs ${isMatchStarted ? 'bg-[#ee6730]' : 'bg-gray-600'} text-white p-3 rounded-full`}>Q4</div>
                            <div className={`flex justify-center items-center lg:w-12 lg:h-12 md:w-11 md:h-11 sm:w-10 sm:h-10 w-9 h-9 lg:text-base sm:text-sm text-xs ${isMatchStarted ? 'bg-[#ee6730]' : 'bg-gray-600'} text-white p-3 rounded-full`}>Ext</div>
                        </div>
                    </div>
                    <div className='text-center p-6'>
                        <button className='bg-blue-600 px-2 py-2 rounded-md hover:opacity-70 text-white lg:text-base sm:text-sm text-xs' onClick={handleQuarterChange}>Change Quarter</button>
                    </div>
                    <div className='flex lg:flex-row flex-col lg:justify-between justify-center items-center lg:space-y-0 space-y-4 pt-2 pb-6 px-10'>
                        <div className="flex flex-2 flex-col">
                            <div className='sm:pb-1'>
                                <p className='text-gray-400 lg:block hidden'>Points</p>
                                <p className='text-lg font-semibold pb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-[#ee6730] text-center lg:hidden block'>Mehta ke Maharathi</p>
                            </div>
                            <div className='flex lg:flex-col md:flex-row flex-col lg:space-x-0 space-x-5'>
                                <div className="flex space-x-2 lg:mt-0 sm:mt-3 mt-1">
                                    <PointButton text="Free Shot" handleShowModal={setPlayersModal}/>
                                    <PointButton text="In 3-point" handleShowModal={setPlayersModal}/>
                                    <PointButton text="Out 3-point" handleShowModal={setPlayersModal}/>
                                </div>
                                <div className="flex flex-col mt-3 ">
                                    <div className='pb-1 lg:block hidden'>
                                        <p className='text-gray-400 lg:text-start text-center'>Fouls</p>
                                    </div>
                                    <div className="flex space-x-2 lg:justify-start justify-center">
                                        <FoulButton text="Team Foul"/>
                                        <FoulButton text="Player Foul" handleShowModal={setPlayersModal}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 justify-center mx-2">
                            <button 
                                className="lg:w-10 lg:h-10 sm:w-9 sm:h-9 w-8 h-8 flex justify-center items-center rounded-full bg-blue-900 hover:opacity-70 group text-white"  data-tooltip-id="undo_btn" 
                                onClick={handleUndoPoint}
                            >
                                <AiOutlineUndo className='text-3xl group-hover:rotate-[360deg] transition-all duration-500'/>
                            </button>
                            <Tooltip id="undo_btn" variant="dark" content="Undo last point" place='bottom' delayShow={500} />
                        </div>
                        <div className="flex flex-2 flex-col">
                            <div className='sm:pb-1 text-end'>
                                <p className='text-gray-400 lg:block hidden'>Points</p>
                                <p className='text-lg font-semibold pb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-[#ee6730] text-center lg:hidden block'>Jetha ke Jabaaz</p>
                            </div>
                            <div className='flex lg:flex-col md:flex-row flex-col lg:space-x-0 space-x-5'>
                                <div className="flex space-x-2 lg:mt-0 sm:mt-3 mt-1">
                                    <PointButton text="Free Shot" handleShowModal={setPlayersModal}/>
                                    <PointButton text="In 3-point" handleShowModal={setPlayersModal}/>
                                    <PointButton text="Out 3-point" handleShowModal={setPlayersModal}/>
                                </div>
                                <div className="flex flex-col mt-3 ">
                                    <div className='pb-1 lg:block hidden'>
                                        <p className='text-gray-400 lg:text-end text-center'>Fouls</p>
                                    </div>
                                    <div className="flex space-x-2 lg:justify-end justify-center">
                                        <FoulButton text="Team Foul"/>
                                        <FoulButton text="Player Foul" handleShowModal={setPlayersModal}/>
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
                                            <td className='px-10 py-2 text-gray-600 sm:font-semibold font-medium text-left whitespace-nowrap'>Mehta ke Maharathi</td>
                                            <td className='pl-10 py-2 text-gray-600 text-left'>
                                                <span>23 / </span>
                                                <span className='text-red-500'>0</span>
                                            </td>
                                            <td className='pl-10 py-2 text-gray-600 text-left'>
                                                <span>10 / </span>
                                                <span className='text-red-500'>1</span>
                                            </td>
                                            <td className='pl-10 py-2 text-gray-600 text-left'>
                                                <span>15 / </span>
                                                <span className='text-red-500'>0</span>
                                            </td>
                                            <td className='pl-10 py-2 text-gray-600 text-left'>
                                                <span>07 / </span>
                                                <span className='text-red-500'>5</span>
                                            </td>
                                            <td className='pl-10 py-2 text-gray-600 text-left'>
                                                <span>-</span>
                                                <span className='text-red-500'></span>
                                            </td>
                                            <td className='pl-10 py-2 text-gray-600 sm:font-semibold font-medium text-left'>43</td>
                                        </tr>
                                        <tr className='team_2 '>
                                            <td className='pl-10 py-2 text-gray-600 sm:font-semibold font-medium text-left'>Jetha ke Jabaaz</td>
                                            <td className='pl-10 py-2 text-gray-600 text-left'>
                                                <span>22 / </span>
                                                <span className='text-red-500'>3</span>
                                            </td>
                                            <td className='pl-10 py-2 text-gray-600 text-left'>
                                                <span>14 / </span>
                                                <span className='text-red-500'>5</span>
                                            </td>
                                            <td className='pl-10 py-2 text-gray-600 text-left'>
                                                <span>13 / </span>
                                                <span className='text-red-500'>2</span>
                                            </td>
                                            <td className='pl-10 py-2 text-gray-600 text-left'>
                                                <span>09 / </span>
                                                <span className='text-red-500'>0</span>
                                            </td>
                                            <td className='pl-10 py-2 text-gray-600 text-left'>
                                                <span>-</span>
                                                <span className='text-red-500'></span>
                                            </td>
                                            <td className='pl-10 py-2 text-gray-600 sm:font-semibold font-medium text-left'>48</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className='flex xl:flex-row flex-col lg:justify-around justify-center xl:items-end items-center xl:space-x-4 space-y-4 sm:px-10 px-2 py-10'>
                        <div className='w-full flex flex-col'>
                            <div>
                                <p className='text-gray-400 font-semibold sm:text-base text-sm'>Mehta ke Maharathi</p>
                            </div>
                            <div className="overflow-x-auto">
                                <TeamPlayersTable />
                            </div>
                        </div>
                        <div className='w-full flex flex-col'>
                            <div>
                                <p className='text-gray-400 font-semibold sm:text-base text-sm'>Jetha ke Jabaaz</p>
                            </div>
                            <div className="overflow-x-auto">
                                <TeamPlayersTable />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PlayersListModal showModal={playersModal} handleShowModal={setPlayersModal} />
        </section>
    )
}

export default index