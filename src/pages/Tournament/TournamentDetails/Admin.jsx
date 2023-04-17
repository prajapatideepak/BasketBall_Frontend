import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import UploadImageModal from "./UploadImageModal";
import Button from "../../../Component/Button";
import MatchFormModal from "./MatchFormModal";
import CreatePoolModal from "./CreatePoolModal";
import RejectReasonModal from "./RejectReasonModal";
import { 
  useTeamsRequestQuery, 
  useAcceptTeamRequestMutation,
  useStartTournamentMutation, 
  useEndTournamentMutation, 
  useStartRegistrationMutation, 
  useEndRegistrationMutation 
} from "../../../services/organizer";
import SmallLoader from '../../../Component/SmallLoader'
import moment from 'moment'

function Admin({tournamentDetails, refetchData, teams}) {
  const navigate = useNavigate();
  const {tournament_id} = useParams();

  const [imageUploadModal, setImageUploadModal] = useState(false);
  const [matchFormModal, setMatchFormModal] = React.useState(false);
  const [createPoolModal, setCreatePoolModal] = React.useState(false);
  const [rejectReasonModal, setRejectReasonModal] = React.useState(false);
  const [rejectTeamId, setRejectTeamId] = React.useState('');
  const [acceptTeamId, setAcceptTeamId] = React.useState('');
  const [disqualifiedTeams, setDisqualifiedTeams] = React.useState(0)
  const [requests, setRequests] = React.useState([])

  const teamsRequest = useTeamsRequestQuery(tournament_id)
  const [acceptTeamRequest, {...approveLoading}] = useAcceptTeamRequestMutation();
  const [startTournament, {...startTourLoading}] = useStartTournamentMutation();
  const [endTournament, {...endTourLoading}] = useEndTournamentMutation();
  const [startRegistration, {...startRegLoading}] = useStartRegistrationMutation();
  const [endRegistration, {...endRegLoading}] = useEndRegistrationMutation();

  const handleImageUpload = () => {
    setImageUploadModal(true);
  };

  const handleOpen = () => setImageUploadModal(!imageUploadModal);

  const handleStartTournament = () => {
    Swal.fire({
      title: "Are you sure to start the tournament?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async(result) => {
      if (result.isConfirmed) {
        const response = await startTournament(tournament_id)

        if(response.error){
          toast.error(response.error.data.message)
        }
        else if(response.data.success){
          refetchData()
          toast.success(response.data.message);
        }
      }
    });
  };

  const handleEndTournament = () => {
    Swal.fire({
      title: "Are you sure to end the tournament?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async(result) => {
        const response = await endTournament(tournament_id)

        if(response.error){
          toast.error(response.error.data.message)
        }
        else if(response.data.success){
          refetchData()
          toast.success(response.data.message);
        }
    });
  };
  const handleStartRegistration = () => {
    Swal.fire({
      title: "Are you sure to start the registration?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async(result) => {
      if (result.isConfirmed) {
        const response = await startRegistration(tournament_id)

        if(response.error){
          toast.error(response.error.data.message)
        }
        else if(response.data.success){
          refetchData()
          toast.success(response.data.message);
        }
      }
    });
  };
  const handleCloseRegistration = () => {
    Swal.fire({
      title: "Are you sure to close the registration?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async(result) => {
      if (result.isConfirmed) {
        if (result.isConfirmed) {
          const response = await endRegistration(tournament_id)

          if(response.error){
            toast.error(response.error.data.message)
          }
          else if(response.data.success){
            refetchData()
            toast.success(response.data.message);
          }
        }
      }
    });
  };

  const handleApproveRequest = (team_id) => {
    Swal.fire({
      title: "Are you sure to approve the request?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Approve",
    }).then(async(result) => {
      if (result.isConfirmed) {
        setAcceptTeamId(team_id);
        if (result.isConfirmed) {
          const response = await acceptTeamRequest({tournament_id: tournament_id, team_id: team_id})

          if(response.error){
            toast.error(response.error.data.message)
          }
          else if(response.data.success){
            teamsRequest.refetch()
            refetchData()
            toast.success(response.data.message);
          }
        }
      }
    });
  };

  const handleRejectRequest = (team_id) => {
    setRejectTeamId(team_id)
    setRejectReasonModal(true);
  };

  React.useEffect(()=>{
    let count = 0;
    teams.map((item)=>{
      if(item.is_disqualified){
        count++;
      }
    })
    setDisqualifiedTeams(count)
  },[teams]);

  React.useEffect(()=>{
    if(teamsRequest.data?.success){
      setRequests(teamsRequest?.data?.teams)
    }
  },[teamsRequest.data])

  return (
    <div>
      <div className="flex flex-col">
        <h3 className="text-lg text-gray-600 font-semibold">Actions</h3>
        <div className="flex items-center flex-wrap mt-3">
          {
            tournamentDetails.status != 3 && tournamentDetails.status != -1 
            ?
              <>
                {
                  tournamentDetails.status == 1
                  ?
                    <div className="mr-4 mt-2">
                      <div className="md:w-48">
                        <Button
                          margin={false}
                          isDisabled={startTourLoading.isLoading}
                          text={`${startTourLoading.isLoading ? 'Loading...' : 'Start Tournament'}`}
                          onClick={handleStartTournament}
                        />
                      </div>
                    </div>
                  :
                    <div className="mr-4 mt-2">
                      <div className="md:w-48">
                        <Button
                          margin={false}
                          isDisabled={endTourLoading.isLoading}
                          text={`${endTourLoading.isLoading ? 'Loading...' : 'End Tournament'}`}
                          onClick={handleEndTournament}
                        />
                      </div>
                    </div>
                }
                {
                  tournamentDetails.status == 1
                  ?
                    tournamentDetails.is_registration_open
                    ?
                      <div className="mr-4 mt-2">
                        <div className="md:w-48">
                          <Button
                            margin={false}
                            isDisabled={endRegLoading.isLoading}
                            text={`${endRegLoading.isLoading ? 'Loading...' : 'Close Registration'}`}
                            onClick={handleCloseRegistration}
                          />
                        </div>
                      </div>
                    :
                      <div className="mr-4 mt-2">
                        <div className="md:w-48">
                          <Button
                            margin={false}
                            isDisabled={startRegLoading.isLoading}
                            text={`${startRegLoading.isLoading ? 'Loading...' : 'Start Registration'}`}
                            onClick={handleStartRegistration}
                          />
                        </div>
                      </div>
                  :
                    null
                }
                
                <div className="mr-4 mt-2">
                  <div className="md:w-40">
                    <Button
                      margin={false}
                      text="Form Matches"
                      onClick={() => setMatchFormModal(true)}
                    />
                  </div>
                </div>
                <div className="mr-4 mt-2">
                  <div className="md:w-40">
                    <Button
                      margin={false}
                      text="Create Pools"
                      onClick={() => setCreatePoolModal(true)}
                    />
                  </div>
                </div>
              </>
            :
              null
          }
          <div className="mt-2 mr-4">
            <div className="md:w-56">
              <Button
                margin={false}
                text="Upload Gallery Image"
                dataModalTarget="authentication-modal"
                dataModalToggle="authentication-modal"
                onClick={handleImageUpload}
              />
            </div>
          </div>
          <div className='mt-2'>
            <button
              type="button"
              onClick={() => { 
                navigate('/tournament/add-edit', {
                  state: {
                    isEdit: true,
                    tournamentDetails
                  }
                }) 
              }}
              disabled={!tournamentDetails.is_details_editable}
              className="bg-[#ee6730] relative inline-flex items-center justify-center w-full px-4 py-2 xs:py-2.5 sm:px-8 sm:py-2.5 overflow-hidden text-white rounded-lg cursor-pointer group mr-3"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-slate-900 rounded-lg group-hover:w-full group-hover:h-56"></span>
              <span className="relative text-xs xs:text-sm md:text-base">Edit Tournament</span>
            </button>
          </div>
        </div>
      </div>
      {
        tournamentDetails.status != 3 && tournamentDetails.status != -1 
        ?
          <>
            {/* <div className="mt-10 flex flex-wrap sm:justify-start justify-center space-y-2 space-x-0 xs:space-y-0 xs:space-x-1 sm:space-x-6 sm:space-y-0">
              <div className="flex flex-col justify-center items-center w-36 h-20 md:w-40 md:h-24 rounded-md shadow-lg">
                <h3 className="text-xs sm:text-base md:text-lg font-semibold mt-1">Total Teams</h3>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-500 mt-1">{teams.length}</h3>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-36 h-20 md:w-40 md:h-24 rounded-md shadow-lg">
                <h3 className="text-xs sm:text-base md:text-lg text-green-700 font-semibold mt-1">Playing</h3>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-500 mt-1">{teams.length - disqualifiedTeams}</h3>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-36 h-20 md:w-40 md:h-24 rounded-md shadow-lg ml-3">
                <h3 className="text-xs sm:text-base md:text-lg text-red-600 font-semibold mt-1">Disqualified</h3>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-500 mt-1">{disqualifiedTeams}</h3>
                </div>
              </div>
            </div> */}
            <div className="mt-10">
              <h3 className="text-lg text-gray-600 font-semibold">Teams Requests</h3>
              <div className="table-container relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Sr.
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Team
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Age category
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Gender type
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      teamsRequest.isLoading
                      ?
                        <tr>
                          <td className="text-center p-4 whitespace-nowrap" colSpan="6"><SmallLoader /></td>
                        </tr>
                      :
                        requests?.length > 0
                        ?
                          requests.map((item, index)=>{
                            return<tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                              <th
                                scope="row"
                                className="px-6 py-4 font-medium whitespace-nowrap"
                              >
                                {index + 1}
                              </th>
                              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <span
                                  className="cursor-pointer hover:text-gray-300"
                                  onClick={() => navigate(`/team/profile-detail/1`)}
                                >
                                  {item.teams.team_name}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">{moment(item.created_at).format("D MMM YYYY")}</td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {
                                  item.age_categories.map((category, index)=>{
                                    return <span key={index} className="mr-1 capitalize">{category}{index != item.age_categories.length-1 ? ',' : ''}</span>
                                  })
                                }
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {
                                  item.gender_type.map((type, index)=>{
                                    return <span key={index} className="mr-1 capitalize">{type}{index != item.gender_type.length-1 ? ',' : ''}</span>
                                  })
                                }
                              </td>
                              <td className="flex items-center px-6 py-4 whitespace-nowrap space-x-3">
                                <span
                                  className={`${approveLoading.isLoading && item.teams.id ? 'opacity-70': ''} font-medium text-blue-600 dark:text-blue-500 cursor-pointer`}
                                  onClick={()=>handleApproveRequest(item.teams.id)}
                                >
                                  {approveLoading.isLoading && item.teams.id == acceptTeamId ? 'Loading...' : 'Approve'}
                                </span>
                                <span
                                  className="font-medium text-red-600 dark:text-red-500 cursor-pointer"
                                  onClick={()=>handleRejectRequest(item.teams.id)}
                                >
                                  Reject
                                </span>
                              </td>
                            </tr>
                          })
                        :
                          <tr>
                            <td
                              className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 font-semibold text-red-500 text-center"
                              colSpan="6"
                            >
                              No Requests
                            </td>
                          </tr>
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </>
        :
          null
      }
      <CreatePoolModal
        showModal={createPoolModal}
        handleShowModal={setCreatePoolModal}
        refetchData={refetchData}
        tournamentDetails={tournamentDetails}
      />
      <MatchFormModal
        showModal={matchFormModal}
        handleShowModal={setMatchFormModal}
        refetchData={refetchData}
        tournamentDetails={tournamentDetails}
      />
      <RejectReasonModal
        showModal={rejectReasonModal}
        setRejectTeamId={setRejectTeamId}
        rejectTeamId={rejectTeamId}
        handleShowModal={setRejectReasonModal}
        refetchData={teamsRequest.refetch}
      />
      <UploadImageModal open={imageUploadModal} handleOpen={handleOpen} />
    </div>
  );
}

export default Admin;
