import React from 'react'
import moment from "moment";
import {useNavigate, useParams} from 'react-router-dom'
import Loader from '../../../component/Loader';
import { useTournamentScheduleQuery } from '../../../services/organizer';

function Schedule({isOrganizer}) {
    const navigate = useNavigate();
    const {tournament_id} = useParams();

    const [schedule, setSchedule] = React.useState([]);

    const {data, isLoading } = useTournamentScheduleQuery(tournament_id)

    React.useEffect(()=>{
        if(data?.success){
            setSchedule(data.schedule)
        }
    },[data])

    if(isLoading){
        return <Loader/>
    }

    return (
        <div>
            <div>
                {
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
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Action
                                            </th>
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
                                                        <span className="cursor-pointer hover:text-gray-300" onClick={()=> navigate(`/team/profile-detail/1`)}>{match.team_1.team_name}</span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {
                                                            match.start_date != '' && match.start_date != undefined
                                                            ?
                                                                <>
                                                                    {moment(match.start_date).format("MM/DD/YYYY")}
                                                                </>
                                                            :
                                                                "--"
                                                        }
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {
                                                           match.start_time != '' && match.start_time != undefined
                                                            ?
                                                                <>
                                                                    {moment(match.start_time).format("h:mm a")}
                                                                </>
                                                            :
                                                                "--"
                                                        }
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                    {match.address}
                                                    {/* <input type="text" className='w-full bg-transparent' disabled={true} name="match_address" id="" value="Sardar Patel Court, Sarkhej, Ahmedabad" /> */}
                                                    </td>
                                                    <td className="flex items-center px-6 py-4 whitespace-nowrap space-x-3">
                                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                                        <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                                                    </td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                       </div>
                    })
                }
            </div>
        </div>
    )
}

export default Schedule