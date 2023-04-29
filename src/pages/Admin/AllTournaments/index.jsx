import React, {useState} from 'react'
import { useTournamentsRequestQuery, useApproveTournamentMutation, useRejectTournamentMutation } from '../../../services/admin'
import { toast } from "react-toastify";
import Loader from '../../../Component/Loader'
import moment from 'moment'

function AllTournaments() {
  const [tournamentsRequest, setTournamentsRequest] = useState([])
  const [tournamentId, setTournamentId] = useState(null)
  
  const {data, isLoading, isError, error} = useTournamentsRequestQuery()
  const [approveTournament, {...approving}] = useApproveTournamentMutation()
  const [rejectTournament, {...rejecting}] = useRejectTournamentMutation()

  const handleApprove = async (tournament_id) => {
    setTournamentId(tournament_id)
    const response = await approveTournament(tournament_id)
    if(response.error){
      toast.error(response.error.data.message)
    }
    else if(response.data.success){
      toast.success(response.data.message);
    }
    setTournamentId(null)
  }

  const handleReject = async (tournament_id) => {
    setTournamentId(tournament_id)
    const response = await rejectTournament(tournament_id)
    if(response.error){
      toast.error(response.error.data.message)
    }
    else if(response.data.success){
      toast.success(response.data.message);
    }
    setTournamentId(null)
  }

  React.useEffect(() => {
    if(data?.success){
      setTournamentsRequest(data.tournaments)
    }
  },[data])
  
  if(isLoading){
    return <Loader />
  }

  return (
    <div className="px-1 md:px-12 py-4 ">
      <div className="py-3 overflow-x-auto">
        <table className="mx-auto" style={{ borderCollapse: 'separate', borderSpacing: '0 10px'}}>
          <thead>
              <tr className="md:px-2 2xl:px-10 bg-gray-300 md:rounded-lg shadow-sm text-black text-left px-2 ">
                <th className="whitespace-nowrap px-4 py-2">
                  <span className="text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base ">
                    Sr.
                  </span>
                </th>
                <th className="whitespace-nowrap px-4">
                  <span className="text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base ">
                    Tournament Name
                  </span>
                </th>
                <th className="whitespace-nowrap px-4">
                  <span className="text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base ">
                    Start Date
                  </span>
                </th>
                <th className="whitespace-nowrap px-4">
                  <span className="text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base ">
                    End Date
                  </span>
                </th>
                <th className="whitespace-nowrap px-4">
                  <span className="text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base ">
                    Level
                  </span>
                </th>
                <th className="whitespace-nowrap px-4">
                  <span className="text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base ">
                    Prize
                  </span>
                </th>
                <th className="whitespace-nowrap px-4">
                  <span className="text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base ">
                    Age Cutoff
                  </span>
                </th>
                <th className="whitespace-nowrap px-4">
                  <span className="text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base ">
                    Gender Type
                  </span>
                </th>
                <th className="whitespace-nowrap px-4">
                  <span className="text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base ">
                    Address
                  </span>
                </th>
                <th className="whitespace-nowrap px-4">
                  <span className="text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base ">
                    Action
                  </span>
                </th>
              </tr>
          </thead>
          <tbody>
            {tournamentsRequest.length > 0 ? (
              tournamentsRequest.map((tournament_details, index) => {
                return (
                  <tr
                    key={index}
                    className="tournament_details space-x-2 px-4 text-left rounded-lg cursor-pointer hover:bg-gray-100 bg-white shadow-sm mt-2 "
                  >
                    <th className="text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm  whitespace-nowrap py-4 px-4">
                      {index+1}
                    </th>
                    <td className=" text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm whitespace-nowrap px-4">
                      {tournament_details.tournament_name}
                    </td>
                    <td className=" text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm whitespace-nowrap px-4">
                      {moment(tournament_details.start_date).format("DD / MM / YY")}
                    </td>
                    <td className=" text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm whitespace-nowrap px-4">
                      {moment(tournament_details.end_date).format("DD / MM / YY")}
                    </td>
                    <td className=" text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm whitespace-nowrap capitalize px-4">
                      {tournament_details.level}
                    </td>
                    <td className=" text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm whitespace-nowrap px-4">
                      {tournament_details.prize}
                    </td>
                    <td className=" text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm whitespace-nowrap px-4 capitalize">
                      {
                        tournament_details.age_categories.map((item, index)=>{
                          return <span key={index} className="mr-1">{item}{index != tournament_details.age_categories.length-1 ? ',' : ''}</span>;
                        })
                      }
                    </td>
                    <td className="text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm whitespace-nowrap px-4 capitalize">
                      {
                        tournament_details.gender_types.map((item, index)=>{
                          return <span key={index} className="mr-1">{item}{index != tournament_details.gender_types.length-1 ? ',' : ''}</span>;
                        })
                      }
                    </td>
                    <td className="text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm whitespace-nowrap px-4">
                      {tournament_details.address}
                    </td>
                    <td className="whitespace-nowrap px-4">
                      <span className="flex items-center justify-center space-x-2 ">
                        <button 
                        disabled={approving.isLoading}
                        className={`${approving.isLoading && tournament_details.id == tournamentId ? 'opacity-60' : ''} w-20 text-sm px-2 py-1 hover:opacity-60 text-white bg-green-700 rounded-md`} onClick={()=> handleApprove(tournament_details.id)}>
                          {
                            approving.isLoading && tournament_details.id == tournamentId 
                            ? 
                              'Loading...' 
                            : 
                              'Approve'
                          }
                        </button>
                        <button 
                        disabled={approving.isLoading}
                        className={`${approving.isLoading && tournament_details.id == tournamentId ? 'opacity-60' : ''} w-20 text-sm px-2 py-1 hover:opacity-60 text-white bg-red-700 rounded-md`} onClick={()=> handleReject(tournament_details.id)}>
                          {
                            rejecting.isLoading && tournament_details.id == tournamentId 
                            ? 
                              'Loading...' 
                            : 
                              'Reject'
                          }
                        </button>
                      </span>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr
                className="font-normal rounded-lg cursor-pointer hover:bg-gray-100 bg-white shadow-sm"
              >
                <td colSpan={10} className="md:px-2 2xl:px-10 py-2 text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm text-center whitespace-nowrap text-gray-400 font-medium">
                  No tournament request found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllTournaments