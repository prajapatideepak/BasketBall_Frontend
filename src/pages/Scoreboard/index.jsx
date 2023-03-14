import React from 'react'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { AiOutlineUndo } from 'react-icons/ai'
import { Tooltip } from 'react-tooltip'
import PointButton from './PointButton';
import FoulButton from './FoulButton';

function index() {
    const {match_id, token} = useParams()
    const isMatchStarted = true

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

    return (
        <section>
            <div className='flex flex-col justify-center items-center bg-black sticky top-0 pt-2 z-10' style={{boxShadow:'0px 5px 15px gray'}}>
                <div className='flex justify-center items-center space-x-4 mb-2'>
                    <img src="/CBL_Images/logo.png" alt="" className='w-16' />
                    <h1 className='text-white font-semibold text-xl'>Corporate Basketball League</h1>
                </div>
                <div className='w-full bg-[#ee6730] text-center'>
                    <h4 className='text-white'>Scoreboard</h4>
                </div>
            </div>
            <div className='mx-auto px-10 py-4 sm:px-20 sm:py-6 md:px-20 md:py-8 lg:px-24 xl:px-28 2xl:px-32'>
                <div className="border border-gray-300">
                    <div className='flex justify-end py-6 px-10'>
                        <button className="bg-green-500 text-white rounded-md hover:opacity-70 px-2 py-1" onClick={handleMatchStart}>Start Match</button>
                        {/* <button className="bg-red-500 text-white rounded-md hover:opacity-70 px-2 py-1" onClick={handleMatchEnd}>End Match</button> */}
                    </div>
                    <div className='p-10 bg-black'>
                        <div className="flex justify-between items-center">
                            <div className="w-full bg-white py-3 pl-3 pr-16" style={{clipPath: "polygon(0 0%, 100% 0%, 80% 100%, 0% 100%)"}}>
                                <h5 className='text-3xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#ee6730] to-gray-700'>Mehta ke Maharathi</h5>
                            </div>
                            <div className='flex justify-center items-center space-x-5 text-5xl font-medium text-[#ee6730] tracking-wider'>
                                <h5>10</h5>
                                <span className='text-2xl text-gray-300'>VS</span>
                                <h5>09</h5>
                            </div>
                            <div className="w-full text-end bg-white py-3 pr-3 pl-16" style={{clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 20% 100%)"}}>
                                <h5 className='text-3xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-[#ee6730]'>Jetha ke Jabaaz</h5>
                            </div>
                        </div>
                        <div className="flex justify-between items-center py-2">
                            <div className='flex space-x-1'>
                                <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                                <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                                <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                                <div className='w-3 h-3 bg-gray-500 rounded-full'></div>
                                <div className='w-3 h-3 bg-gray-500 rounded-full'></div>
                            </div>
                            <div className='flex space-x-1'>
                                <div className='w-3 h-3 bg-gray-500 rounded-full'></div>
                                <div className='w-3 h-3 bg-gray-500 rounded-full'></div>
                                <div className='w-3 h-3 bg-gray-500 rounded-full'></div>
                                <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                                <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center space-x-2 pt-8">
                            <button className={`w-12 h-12 ${isMatchStarted ? 'bg-[#ee6730]' : 'bg-gray-600'} text-white p-3 rounded-full`} disabled={isMatchStarted ? false : true}>Q1</button>
                            <button className={`w-12 h-12 ${isMatchStarted ? 'bg-[#ee6730]' : 'bg-gray-600'} text-white p-3 rounded-full`} disabled={isMatchStarted ? false : true}>Q2</button>
                            <button className={`w-12 h-12 ${isMatchStarted ? 'bg-[#ee6730]' : 'bg-gray-600'} text-white p-3 rounded-full`} disabled={isMatchStarted ? false : true}>Q3</button>
                            <button className={`w-12 h-12 ${isMatchStarted ? 'bg-[#ee6730]' : 'bg-gray-600'} text-white p-3 rounded-full`} disabled={isMatchStarted ? false : true}>Q4</button>
                            <button className={`w-12 h-12 ${isMatchStarted ? 'bg-[#ee6730]' : 'bg-gray-600'} text-white p-3 rounded-full`} disabled={isMatchStarted ? false : true}>Ext</button>
                        </div>
                    </div>
                    <div className='text-center p-6'>
                        <button className='bg-blue-600 px-2 py-2 rounded-md hover:opacity-70 text-white'>Change Quarter</button>
                    </div>
                    <div className='flex justify-between items-end pt-2 pb-6 px-10'>
                        <div className="flex flex-2 flex-col">
                            <div className='pb-1'>
                                <p className='text-gray-400'>Points</p>
                            </div>
                            <div className="flex space-x-2">
                                <PointButton text="Free Shot"/>
                                <PointButton text="In 3-point"/>
                                <PointButton text="Out 3-point"/>
                            </div>
                        </div>
                        <div className="flex flex-1 justify-center">
                            <button className="w-10 h-10 flex justify-center items-center rounded-full bg-blue-900 hover:opacity-70 group text-white"  data-tooltip-id="undo_btn" >
                                <AiOutlineUndo className='text-3xl group-hover:rotate-[360deg] transition-all duration-500'/>
                            </button>
                            <Tooltip id="undo_btn" variant="dark" content="Undo last point" place='bottom' delayShow={500} />
                        </div>
                        <div className="flex flex-2 flex-col">
                            <div className='pb-1 text-end'>
                                <p className='text-gray-400'>Points</p>
                            </div>
                            <div className="flex space-x-2">
                                <PointButton text="Free Shot"/>
                                <PointButton text="In 3-point"/>
                                <PointButton text="Out 3-point"/>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center pb-6 px-10'>
                        <div className="flex flex-2 flex-col">
                            <div className='pb-1'>
                                <p className='text-gray-400'>Fouls</p>
                            </div>
                            <div className="flex space-x-2">
                                <FoulButton text="Team Foul"/>
                                <FoulButton text="Player Foul"/>
                            </div>
                        </div>
                        <div className="flex flex-2 flex-col">
                            <div className='pb-1 text-end'>
                                <p className='text-gray-400'>Fouls</p>
                            </div>
                            <div className="flex space-x-2">
                                <FoulButton text="Team Foul"/>
                                <FoulButton text="Player Foul"/>
                            </div>
                        </div>
                    </div>
                    <div className='px-10 py-10'>
                        <div className='overflow-x-auto'>
                            <div className='flex justify-center mb-2 space-x-1'>
                                <span className='text-red-400 font-semibold'>*Note:</span>
                                <p className='text-gray-400 font-semibold'>Numbers with red colour indicate team fouls</p>
                            </div>
                            <table className='ml-auto mr-auto shadow-md'>
                                <thead className='bg-gray-600'>
                                    <th className='pl-10 py-2 text-gray-100 text-left'>Team Name</th>
                                    <th className='px-10 py-2 text-gray-100 text-left'>Q1</th>
                                    <th className='px-10 py-2 text-gray-100 text-left'>Q2</th>
                                    <th className='px-10 py-2 text-gray-100 text-left'>Q3</th>
                                    <th className='px-10 py-2 text-gray-100 text-left'>Q4</th>
                                    <th className='px-10 py-2 text-gray-100 text-left'>Extra</th>
                                    <th className='px-10 py-2 text-gray-100 text-left'>Total</th>
                                </thead>
                                <tbody>
                                    <tr className='team_1 border-b border-b-gray-300'>
                                        <td className='pl-10 py-2 text-gray-600 font-semibold text-left whitespace-nowrap'>Mehta ke Maharathi</td>
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
                                        <td className='pl-10 py-2 text-gray-600 font-semibold text-left'>43</td>
                                    </tr>
                                    <tr className='team_2 '>
                                        <td className='pl-10 py-2 text-gray-600 font-semibold text-left'>Jetha ke Jabaaz</td>
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
                                        <td className='pl-10 py-2 text-gray-600 font-semibold text-left'>48</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='flex justify-around px-10 py-10'>
                        <div className="w-[550px] table-container overflow-x-auto shadow-md">
                            <div>
                                <p className='text-gray-400 font-semibold'>Mehta ke Maharathi</p>
                            </div>
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                            #
                                        </th>
                                        <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                            Players
                                        </th>
                                        <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                            Points
                                        </th>
                                        <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                            Fouls
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th className="px-6 py-4 whitespace-nowrap">1</th>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Sadikali shabbirali Karadiya</td>
                                        <td className="px-6 py-4 whitespace-nowrap">45</td>
                                        <td className="px-6 py-4 whitespace-nowrap">08</td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th className="px-6 py-4 whitespace-nowrap">2</th>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">MohammadShad MohammadSajid Rajput</td>
                                        <td className="px-6 py-4 whitespace-nowrap">45</td>
                                        <td className="px-6 py-4 whitespace-nowrap">08</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="w-[550px] table-container overflow-x-auto shadow-md">
                            <div>
                                <p className='text-gray-400 font-semibold'>Jetha ke Jabaaz</p>
                            </div>
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                            #
                                        </th>
                                        <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                            Players
                                        </th>
                                        <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                            Points
                                        </th>
                                        <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                            Fouls
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th className="px-6 py-4 whitespace-nowrap">1</th>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Moinuddin Chudiwal</td>
                                        <td className="px-6 py-4 whitespace-nowrap">45</td>
                                        <td className="px-6 py-4 whitespace-nowrap">08</td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th className="px-6 py-4 whitespace-nowrap">2</th>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Deepak Prajapati</td>
                                        <td className="px-6 py-4 whitespace-nowrap">45</td>
                                        <td className="px-6 py-4 whitespace-nowrap">08</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default index