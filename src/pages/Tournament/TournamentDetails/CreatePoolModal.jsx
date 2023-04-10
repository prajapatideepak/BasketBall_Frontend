import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Modal } from "../../../Component/Modal";
import { useCreatePoolsMutation } from "../../../services/organizer";

function CreatePoolModal({ showModal, handleShowModal, refetchData }) {
  const {tournament_id} = useParams();
  const [totalGroups, setTotalGroups] = React.useState("");
  const [teamsPerGroup, setTeamsPerGroup] = React.useState("");
  const [error, setError] = useState("");

  const [createPools, {isLoading}] = useCreatePoolsMutation()

  const handleModalClose = () => {
    setTotalGroups("");
    setTeamsPerGroup("");
    handleShowModal(false);
    setError("");
  };

  const handleTotalGroup = (e) => {
    const regex = new RegExp(/^[0-9]+$/);
    if (!regex.test(e.target.value)) {
      setError("Enter only numbers");
    }
    else{
      setError('')
    }
    
    setTotalGroups(e.target.value);
  };

  const handleTeamsPerGroup = (e) => {
    const regex = new RegExp(/^[0-9]+$/);
    if (!regex.test(e.target.value)) {
      setError("Enter only numbers");
    }
    else{
      setError('')
    }
    
    setTeamsPerGroup(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (totalGroups == "" || teamsPerGroup == "") {
      setError("All fields are required");
      return;
    }

    const regex = new RegExp(/^[0-9]+$/);
    if (!regex.test(totalGroups)) {
      setError("Enter only numbers");
      return
    }
    else if (!regex.test(teamsPerGroup)) {
      setError("Enter only numbers");
      return;
    }

    //api call
    const response = await createPools({tournament_id: tournament_id, total_groups: totalGroups, teams_per_group: teamsPerGroup});
    if(response.error){
      toast.error(response.error.data.message)
    }
    else if(response.data.success){
      refetchData()
      toast.success(response.data.message);
      handleModalClose(false);
    }
  };

  return (
    <Modal open={showModal} onClose={handleModalClose}>
      <Modal.Description className="inline-block w-full max-w-md p-6 my-8 text-left align-middle transition-all transform bg-gray-700 shadow-xl rounded-lg ">
        <Modal.Title
          as="h3"
          className="mb-4 text-xl font-medium text-gray-900 dark:text-white"
        >
          Create Team Pools
        </Modal.Title>
        <button
          type="button"
          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-hide="match-formation-modal"
          onClick={handleModalClose}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close modal</span>
        </button>

        <Modal.Description>
          <div className="px-4 py-4 space-y-6">
            <div>
              <label
                htmlFor="total_groups"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Total groups
              </label>
              <input
                type="text"
                name="total_groups"
                id="total_groups"
                value={totalGroups}
                className="w-full border border-[#6B7280] outline-none focus:border-blue-500 text-white px-2 py-2  rounded-md"
                style={{
                  backgroundColor: "rgb(75 85 99)",
                }}
                onChange={handleTotalGroup}
                placeholder="Enter no. of groups to be formed"
              />
            </div>
            <div>
              <label
                htmlFor="teams_per_group"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Teams per group
              </label>
              <input
                type="text"
                name="teams_per_group"
                id="teams_per_group"
                value={teamsPerGroup}
                className="w-full border border-[#6B7280] outline-none focus:border-blue-500 text-white px-2 py-2  rounded-md"
                style={{
                  backgroundColor: "rgb(75 85 99)",
                }}
                onChange={handleTeamsPerGroup}
                placeholder="Enter no. of teams per group"
              />
            </div>
            <div className="mt-5 text-right">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-28 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {isLoading? "Loading..." : 'Submit'}
              </button>
            </div>
            {error != "" ? (
              <div className="text-center">
                <small className="text-red-500">{error}</small>
              </div>
            ) : null}
          </div>
        </Modal.Description>
      </Modal.Description>
    </Modal>
  );
}

export default CreatePoolModal;
