import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import UploadImageModal from "./UploadImageModal";
import Button from "../../../Component/Button";
import MatchFormModal from "./MatchFormModal";
import CreatePoolModal from "./CreatePoolModal";
import RejectReasonModal from "./RejectReasonModal";

function Admin() {
  const navigate = useNavigate();
  const [imageUploadModal, setImageUploadModal] = useState(false);
  const [matchFormModal, setMatchFormModal] = React.useState(false);
  const [createPoolModal, setCreatePoolModal] = React.useState(false);
  const [rejectReasonModal, setRejectReasonModal] = React.useState(false);

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
    }).then((result) => {
      if (result.isConfirmed) {
        toast.success("Tournament started successfully");
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
    }).then((result) => {
      if (result.isConfirmed) {
        toast.success("Tournament ended successfully");
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
    }).then((result) => {
      if (result.isConfirmed) {
        toast.success("Registration started successfully");
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
    }).then((result) => {
      if (result.isConfirmed) {
        toast.success("Registration closed successfully");
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
          <div className="mr-4 mt-2">
            <div className="md:w-48">
              <Button
                margin={false}
                text="Start Tournament"
                onClick={handleStartTournament}
              />
            </div>
          </div>
          <div className="mr-4 mt-2">
            <div className="md:w-48">
              <Button
                margin={false}
                text="End Tournament"
                onClick={handleEndTournament}
              />
            </div>
          </div>
          <div className="mr-4 mt-2">
            <div className="md:w-48">
              <Button
                margin={false}
                text="Start Registration"
                onClick={handleStartRegistration}
              />
            </div>
          </div>
          <div className="mr-4 mt-2">
            <div className="md:w-48">
              <Button
                margin={false}
                text="Close Registration"
                onClick={handleCloseRegistration}
              />
            </div>
          </div>
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
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  1
                </th>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <span
                    className="cursor-pointer hover:text-gray-300"
                    onClick={() => navigate(`/team/profile-detail/1`)}
                  >
                    Mehta Ke Mahaarathi{" "}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">02/03/2023</td>
                <td className="px-6 py-4 whitespace-nowrap">Under 19</td>
                <td className="px-6 py-4 whitespace-nowrap">Boys</td>
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
            </tbody>
          </table>
        </div>
      </div>
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
