import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Modal } from "../../../Component/Modal";
import Select from "react-select";
import { useCreatePoolsMutation } from "../../../services/organizer";

function CreatePoolModal({ showModal, handleShowModal, refetchData, tournamentDetails }) {
  const {tournament_id} = useParams();
  const [teamsPerGroup, setTeamsPerGroup] = React.useState("");
  const [genderType, setGenderType] = React.useState("");
  const [ageCategory, setAgeCategory] = React.useState("");
  const [error, setError] = useState("");

  const [createPools, {isLoading}] = useCreatePoolsMutation()

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "rgb(75 85 99)",
      borderColor: "rgb(107 114 128)",
      borderRadius: "8px",
      minHeight: "44px",
      height: "44px",
      boxShadow: state.isFocused ? null : null,
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      height: "44px",
      padding: "0 6px",
    }),

    singleValue: (provided) => ({
      ...provided,
      color: "white",
    }),

    input: (provided, state) => ({
      ...provided,
      margin: "0px",
    }),
    indicatorSeparator: (state) => ({
      display: "none",
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: "44px",
    }),
  };

  const handleModalClose = () => {
    setTeamsPerGroup("");
    handleShowModal(false);
    setError("");
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

  const handleGenderType = (data) => {
    setGenderType(data);
  };

  const handleAgeCategory = (data) => {
    setAgeCategory(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (teamsPerGroup == "" || genderType == "" ||
      ageCategory == "") {
      setError("All fields are required");
      return;
    }

    const regex = new RegExp(/^[0-9]+$/);
    if (!regex.test(teamsPerGroup)) {
      setError("Enter only numbers");
      return;
    }

    //api call
    const response = await createPools({
      tournament_id: tournament_id, 
      teams_per_group: teamsPerGroup, 
      gender_type: genderType.value, 
      age_type: ageCategory.value
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
            <div>
                <label
                  htmlFor="gender_type"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Gender Type
                </label>
                <Select
                  className="w-full outline-blue-200"
                  name="gender_type"
                  id="gender_type"
                  value={genderType}
                  onChange={handleGenderType}
                  isSearchable={false}
                  styles={customStyles}
                  options={
                    tournamentDetails.gender_types.map((item) => ({
                      value: item,
                      label: item,
                    }))
                  }
                  
                />
              </div>
              <div>
                <label
                  htmlFor="age_category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Age Category
                </label>
                <Select
                  className="w-full outline-blue-200"
                  name="age_category"
                  id="age_category"
                  value={ageCategory}
                  onChange={handleAgeCategory}
                  isSearchable={false}
                  styles={customStyles}
                  options={
                    tournamentDetails.age_categories.map((item) => ({
                      value: item,
                      label: item,
                    }))
                  }
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
