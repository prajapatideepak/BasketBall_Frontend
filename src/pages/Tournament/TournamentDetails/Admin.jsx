import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import UploadImageModal from "./UploadImageModal";
import Button from "../../../Component/Button";
import MatchFormModal from "./MatchFormModal";
import CreatePoolModal from "./CreatePoolModal";
import RejectReasonModal from "./RejectReasonModal";
import { useTeamsRequestQuery, useStartTournamentMutation, useEndTournamentMutation, useStartRegistrationMutation, useEndRegistrationMutation } from "../../../services/organizer";
import SmallLoader from '../../../Component/SmallLoader'
import moment from 'moment'

function Admin({tournamentDetails, refetchData}) {
  const navigate = useNavigate();
  const {tournament_id} = useParams();
  const [imageUploadModal, setImageUploadModal] = useState(false);
  const [matchFormModal, setMatchFormModal] = React.useState(false);
  const [createPoolModal, setCreatePoolModal] = React.useState(false);
  const [rejectReasonModal, setRejectReasonModal] = React.useState(false);
  const teamsRequest = useTeamsRequestQuery(tournament_id)
  const [startTournament, {...startTourLoading}] = useStartTournamentMutation();
  const [endTournament, {...endTourLoading}] = useEndTournamentMutation();
  const [startRegistration, {...startRegLoading}] = useStartRegistrationMutation();
  const [endRegistration, {...endRegLoading}] = useEndRegistrationMutation();

  //Disable while loading is pending

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

  const handleApproveRequest = () => {
    Swal.fire({
      title: "Are you sure to approve the request?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Approve",
    }).then((result) => {
      if (result.isConfirmed) {
        toast.success("Team request approved");
      }
    });
  };

  const handleRejectRequest = () => {
    setRejectReasonModal(true);
  };

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
          <div className="mt-2">
            <div className="md:w-40">
              <Button
                margin={false}
                text="Upload Image"
                dataModalTarget="authentication-modal"
                dataModalToggle="authentication-modal"
                onClick={handleImageUpload}
              />
            </div>
          </div>
        </div>
      </div>
      {
        tournamentDetails.status != 3 && tournamentDetails.status != -1 
        ?
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
                    teamsRequest.startTournamentLoading
                    ?
                      <tr>
                        <td className="text-center p-4 whitespace-nowrap" colSpan="6"><SmallLoader /></td>
                      </tr>
                    :
                      teamsRequest.data?.teams.length > 0
                      ?
                        teamsRequest.data?.teams.map((item, index)=>{
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
                                item.age_categories.map((category)=>{
                                  return <span key={index} className="mr-1">{category}{index != item.age_categories.length-1 ? ',' : ''}</span>
                                })
                              }
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {
                                item.gender_type.map((type)=>{
                                  return <span key={index} className="mr-1">{type}{index != item.gender_type.length-1 ? ',' : ''}</span>
                                })
                              }
                            </td>
                            <td className="flex items-center px-6 py-4 whitespace-nowrap space-x-3">
                              <span
                                className="font-medium text-blue-600 dark:text-blue-500 cursor-pointer"
                                onClick={handleApproveRequest}
                              >
                                Approve
                              </span>
                              <span
                                className="font-medium text-red-600 dark:text-red-500 cursor-pointer"
                                onClick={handleRejectRequest}
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
        :
          null
      }
      <CreatePoolModal
        showModal={createPoolModal}
        handleShowModal={setCreatePoolModal}
      />
      <MatchFormModal
        showModal={matchFormModal}
        handleShowModal={setMatchFormModal}
      />
      <RejectReasonModal
        showModal={rejectReasonModal}
        handleShowModal={setRejectReasonModal}
      />
      <UploadImageModal open={imageUploadModal} handleOpen={handleOpen} />
    </div>
  );
}

export default Admin;
