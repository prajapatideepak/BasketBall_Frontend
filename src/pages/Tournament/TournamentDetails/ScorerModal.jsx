import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Modal } from "../../../Component/Modal";
import { useUpdateMatchScorerMutation } from "../../../services/match";

function ScorerModal({ showModal, handleShowModal, matchId, refetchData, isViewScorerDetails, setIsViewScorerDetails, scorerDetails }) {
  const {tournament_id} = useParams();
  const [scorerName, setScorerName] = React.useState("");
  const [scorerEmail, setScorerEmail] = React.useState("");
  const [scorerMobile, setScorerMobile] = React.useState("");
  const [isEdit, setIsEdit] = React.useState(false);
  const [error, setError] = useState("");

  const [updateMatchScorer, {isLoading}] = useUpdateMatchScorerMutation()

  const handleModalClose = () => {  
    handleShowModal(false);
    setTimeout(() => {
      setIsEdit(false)
      setIsViewScorerDetails(false)
      setScorerName("");
      setScorerEmail("");
      setScorerMobile("");
      setError("");
    }, 1000)
  };

  const handleNameChange = (e) => {
    const regex = new RegExp(/^[a-zA-Z ]+$/);
    if (!regex.test(e.target.value)) {
      setError("Enter only characters in name");
    }
    else if(e.target.value.length < 3){
      setError("Name must be at least 3 characters long")
    }
    else{
      setError('')
    }
    
    setScorerName(e.target.value);
  };

  const handleEmailChange = (e) => {
    const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    if (!regex.test(e.target.value)) {
      setError("Enter valid email");
    }
    else{
      setError('')
    }
    
    setScorerEmail(e.target.value);
  };

  const handleMobileChange = (e) => {
    const regex = new RegExp(/^[0-9]{10}$/);
    if (!regex.test(e.target.value)) {
      setError("Enter valid mobile number");
    }
    else{
      setError('')
    }
    
    setScorerMobile(e.target.value);
  };

  const handleEditScorer = () => {
    setIsEdit(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (scorerName == "" || scorerEmail == "" ||
      scorerMobile == "") {
      setError("All fields are required");
      return;
    }

    const nameRegex = new RegExp(/^[a-zA-Z ]+$/);
    const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    const mobileRegex = new RegExp(/^[0-9]{10}$/);

    if (!nameRegex.test(scorerName)) {
      setError("Enter only characters");
      return;
    }
    else if(scorerName.length < 3){
      setError("Name must be at least 3 characters long")
    }
    
    if (!emailRegex.test(scorerEmail)) {
      setError("Enter valid email");
      return;
    }

    if (!mobileRegex.test(scorerMobile)) {
      setError("Enter valid mobile number");
      return;
    }

    //api call
    const response = await updateMatchScorer({
      tournament_id, 
      match_id: matchId,
      scorer_name: scorerName,
      scorer_email: scorerEmail,
      scorer_mobile: scorerMobile
    });
    
    if(response.error){
      toast.error(response.error.data.message)
    }
    else if(response.data.success){
      refetchData()
      toast.success(response.data.message);
      handleModalClose(false);
    }
  };

  React.useEffect(() => {
    if(scorerDetails?.name){
      setScorerName(scorerDetails.name)
      setScorerEmail(scorerDetails.email)
      setScorerMobile(scorerDetails.mobile)
    }
  },[scorerDetails])

  return (
    <Modal open={showModal} onClose={handleModalClose}>
      <Modal.Description className="inline-block w-full max-w-md p-6 my-8 text-left align-middle transition-all transform bg-gray-700 shadow-xl rounded-lg ">
        <Modal.Title
          as="h3"
          className="mb-4 text-xl font-medium text-gray-900 dark:text-white"
        >
          Match Scorer
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
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                name=""
                id=""
                value={scorerName}
                disabled={isViewScorerDetails}
                className="w-full border border-[#6B7280] outline-none focus:border-blue-500 text-white px-2 py-2  rounded-md"
                style={{
                  backgroundColor: "rgb(75 85 99)",
                }}
                onChange={handleNameChange}
                placeholder="Enter scorer name"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name=""
                id=""
                value={scorerEmail}
                disabled={isViewScorerDetails && !isEdit}
                className="w-full border border-[#6B7280] outline-none focus:border-blue-500 text-white px-2 py-2  rounded-md"
                style={{
                  backgroundColor: "rgb(75 85 99)",
                }}
                onChange={handleEmailChange}
                placeholder="Enter scorer email"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Mobile
              </label>
              <input
                type="text"
                name=""
                id=""
                value={scorerMobile}
                disabled={isViewScorerDetails}
                className="w-full border border-[#6B7280] outline-none focus:border-blue-500 text-white px-2 py-2  rounded-md"
                style={{
                  backgroundColor: "rgb(75 85 99)",
                }}
                onChange={handleMobileChange}
                placeholder="Enter scorer mobile"
              />
            </div>
            {
              isViewScorerDetails
              ?
                isEdit
                ?
                  <div className="text-center">
                    <button
                      type="button"
                      onClick={()=>{setIsEdit(false); handleModalClose()}}
                      className={`w-28 text-white bg-red-600 hover:opacity-60 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mt-4 mr-4 px-5 py-2 text-center dark:bg-red-600 dark:hover:opacity-60 dark:focus:ring-blue-800`}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isLoading}
                      className={`${isLoading ? 'opacity-60' : ''} w-28 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                    >
                      {isLoading? "Loading..." : 'Submit'}
                    </button>
                  </div>
                :
                  <div className="mt-5 text-right">
                    <button
                      type="button"
                      onClick={handleEditScorer}
                      className={`w-28 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                    >
                      Edit
                    </button>
                  </div>
              :
                <>
                  <div className="mt-5 text-right">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isLoading}
                      className={`${isLoading ? 'opacity-60' : ''} w-28 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                    >
                      {isLoading? "Loading..." : 'Submit'}
                    </button>
                  </div>
                  {error != "" ? (
                    <div className="text-center">
                      <small className="text-red-500">{error}</small>
                    </div>
                  ) : null}
                </>
            }
          </div>
        </Modal.Description>
      </Modal.Description>
    </Modal>
  );
}

export default ScorerModal;
