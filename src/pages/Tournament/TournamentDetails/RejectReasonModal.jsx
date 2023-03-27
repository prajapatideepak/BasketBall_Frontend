import React, { useState } from "react";
import { toast } from "react-toastify";
import { Modal } from "../../../Component/Modal";

function RejectReasonModal({ showModal, handleShowModal }) {
  const [reason, setReason] = React.useState("");
  const [error, setError] = useState("");

  const handleModalClose = () => {
    setReason("");
    handleShowModal(false);
    setError("");
  };

  const handleRejectReason = (e) => {
    const regex = new RegExp(/^[a-zA-Z]+$/);
    if (!regex.test(e.target.value)) {
      setError("Enter only characters");
    } else {
      setError("");
    }

    setReason(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (reason == "") {
      setError("Field is required");
      return;
    }

    const regex = new RegExp(/^[a-zA-Z]+$/);
    if (!regex.test(reason)) {
      setError("Enter only characters");
      return;
    } 

    //api call
    handleModalClose(false);
  };

  return (
    <Modal open={showModal} onClose={handleModalClose}>
      <Modal.Description className="inline-block w-full max-w-md p-6 my-8 text-left align-middle transition-all transform bg-gray-700 shadow-xl rounded-lg ">
        <Modal.Title
          as="h3"
          className="mb-4 text-xl font-medium text-gray-900 dark:text-white"
        >
          Team Reject
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
                Reject Reason
              </label>
              <input
                type="text"
                name="total_groups"
                id="total_groups"
                value={reason}
                className="w-full border border-[#6B7280] outline-none focus:border-blue-500 text-white px-2 py-2  rounded-md"
                style={{
                  backgroundColor: "rgb(75 85 99)",
                }}
                onChange={handleRejectReason}
                placeholder="Enter a reason of rejection"
              />
            </div>
            <div className="mt-5 text-right">
              <button
                type="button"
                onClick={handleSubmit}
                className="w-28 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
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

export default RejectReasonModal;
