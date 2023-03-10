import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { FaUserPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";
import Heading from "../../Component/Heading";

function Tournamentregistration() {
  // const location = useLocation();
  const [refereelist, setRefereelist] = React.useState([{ Referee: "" }]);
  const [sponsorlist, setsponsorlist] = React.useState([{ Sponsor: "" }]);
  const [isDisabled, setIsDisabled] = React.useState(true);
  const navigate = useNavigate();

  // ------------ Refree  ------------
  const handleaddreferee = () => {
    setRefereelist([...refereelist, { Referee: "" }]);
  };

  const handleremove = (index) => {
    const list = [...refereelist];
    list.splice(index, 1);
    setRefereelist(list);
  };

  // ------------ Sponsor -------------------
  const handleaddsponsor = () => {
    setsponsorlist([...sponsorlist, { Sponsor: "" }]);
  };

  const handleremovesponsor = (index) => {
    const list = [...sponsorlist];
    list.splice(index, 1);
    setsponsorlist(list);
  };

  // ------------ Form Validation ------------
  const initialValues = {
    tournament_name: location?.state?.isEdit
      ? location?.state?.tournament_name
      : "",
    tournament_logo: location?.state?.isEdit
      ? location?.state?.tournament_logo
      : "",
    starting_date: location?.state?.isEdit
      ? location?.state?.starting_date
      : "",
    ending_date: location?.state?.isEdit ? location?.state?.ending_date : "",
    tournament_type: location?.state?.isEdit
      ? location?.state?.tournament_type
      : "",
    tournament_category: location?.state?.isEdit
      ? location?.state?.tournament_category
      : "",
    tournament_level: location?.state?.isEdit
      ? location?.state?.tournament_level
      : "",
    city_name: location?.state?.isEdit ? location?.state?.city_name : "",
    about_tournament: location?.state?.isEdit
      ? location?.state?.about_tournament
      : "",
    referee_name: location?.state?.isEdit ? location?.state?.referee_name : "",
    referee_mobile: location?.state?.isEdit
      ? location?.state?.referee_mobile
      : "",
    sponsor_name: location?.state?.isEdit ? location?.state?.sponsor_name : "",
    sponsor_mobile: location?.state?.isEdit
      ? location?.state?.sponsor_mobile
      : "",
    age_restriction: location?.state?.isEdit
      ? location?.state?.age_restriction
      : "no",
    age_cutoff: location?.state?.isEdit
      ? location?.state?.age_cutoff
      : "Under 21",
    prize: location?.state?.isEdit ? location?.state?.prize : "",
  };

  const validationSchema = Yup.object({
    tournament_name: Yup.string()
      .matches(/^[a-zA-Z]+$/, "Please enter only characters")
      .min(2, "Team name must be at least 2 characters")
      .max(25, "Team name should not be more than 25 characters")
      .required("Name is required"),
    city_name: Yup.string()
      .matches(/^[a-zA-Z]+$/, "Please enter only characters")
      .required("City name is required"),
    tournament_type: Yup.string().required("Tournament Type is required"),
    tournament_category: Yup.string().required(
      "Tournament Category is required"
    ),
    tournament_level: Yup.string().required("Tournament Level is required"),
    referee_name: Yup.string()
      .matches(/^[a-zA-Z]+$/, "Please enter only characters")
      .min(2, "Coach name must be at least 2 characters")
      .max(25, "Coach name should not be more than 25 characters"),
    referee_mobile: Yup.string()
      .matches(/^[0-9]+$/, "Please enter only numbers")
      .min(10, "Mobile number should be at least 10 digits")
      .max(10, "Mobile number should be at least 10 digits"),
    sponsor_name: Yup.string()
      .matches(/^[a-zA-Z]+$/, "Please enter only characters")
      .min(2, "Sponsor name must be at least 2 characters")
      .max(25, "Sponsor name should not be more than 25 characters"),
  });

  const {
    values,
    errors,
    touched,
    isSubmitting,
    resetForm,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    validationSchema,
    initialValues,
    onSubmit: (data) => {
      console.log(data);
      // ---------------- Confirmation for update -----------------------
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be create Tournament!!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Create it!",
      }).then((result) => {
        if (result.isConfirmed) {
          const response = "Create";
          if (response) {
            navigate("/tournaments");
            toast.success("Tournament Create Successfully!");
          } else {
            toast.error("Something went wrong");
          }
        }
      });
    },
  });

  const handledate = (e) => {
    const gettodatevalue = e.target.value;
    setIsDisabled(false);
    console.log(gettodatevalue, "gettodatevalue");
  };

  return (
    <>
      <section className="min-h-screen">
        <div className='heading-container flex justify-center items-center h-24 sm:h-32 md:h-48'>
          <div className=''>
            <Heading margin={true} text={location?.state?.isEdit ? 'Edit Tournament' : 'Tournament Registration'} />
          </div>
        </div>
        <div className='mx-auto px-10 mb-10 sm:px-20  md:px-20 md:py-0 lg:px-24 xl:px-28 2xl:px-32'>
          <form action="" onSubmit={handleSubmit}>
            {/* -----------------------Tounament_Details---------------------------*/}
            <div className=''>
              <h3 className='text-2xl font-semibold text-[#ee6730]'>Tournament Information:</h3>
            </div>
            {/* Team Name && Choose Logo */}
            <div className="flex flex-col md:flex-row  gap-6 my-7 ">
              <div className="flex flex-col w-full">
                <label className="mb-2">Tournament Name *</label>
                <input
                  className="w-full outline-blue-200 rounded-lg border-2 border-gray-200 py-3 px-3 text-sm"
                  placeholder="Enter Tournament Name"
                  type="text"
                  name="tournament_name"
                  id="tournament_name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {
                  errors.tournament_name && touched.tournament_name
                    ?
                    <small className='text-red-600 mt-2'>{errors.tournament_name}</small>
                    :
                    null
                }
              </div>
              <div className="flex flex-col w-full">
                <label className="mb-2">Choose Logo ( PNG, JPG, JPEG )</label>
                <input
                  className="w-full cursor-pointer rounded-lg bg-white border-2 border-gray-200 px-3 py-[9px] text-sm"
                  type="file"
                  name="tournament_logo"
                  id="tournament_logo"
                  accept='.png, .jpg, .jpeg'
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* Starting Date && Ending Date && Tournament Type */}
            <div className="flex flex-col md:flex-row  gap-6 my-7 ">
              <div className="flex space-x-5  w-full ">
                <div className="w-full">
                  <label className="">Starting Date *</label>
                  <input
                    className="w-full outline-blue-200 rounded-lg border-2 border-gray-200 py-3 px-2 my-2 text-gray-400 text-sm"
                    type="date"
                    name="starting_date"
                    id="starting_date"
                    onChange={handledate}
                    onBlur={handleBlur}
                  />
                  {
                    errors.starting_date && touched.starting_date
                      ?
                      <small className='text-red-600 mt-2'>{errors.starting_date}</small>
                      :
                      null
                  }
                </div>
                <div className="w-full">
                  <label className="">Ending Date *</label>
                  <input
                    className="w-full outline-blue-200 rounded-lg border-2 border-gray-200 py-3 my-2 text-gray-400 px-3 text-sm"
                    placeholder="Enter Tournament name"
                    type="date"
                    disabled={isDisabled}
                    name="ending_date"
                    id="ending_date"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {
                    errors.ending_date && touched.ending_date
                      ?
                      <small className='text-red-600 mt-2'>{errors.ending_date}</small>
                      :
                      null
                  }
                </div>
              </div>
              <div className="flex flex-col w-full">
                <div className="flex flex-col w-full">
                  <label className="mb-2">Tournament Category *</label>
                  <select name=""
                    className="w-full cursor-pointer px-2 rounded-lg bg-white border-2 outline-blue-200 border-gray-200 py-3 text-sm"
                    id="tournament_category"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">--Tournament Category--</option>
                    <option value="Only For Girls">Only For Girls</option>
                    <option value="Only For Boys">Only For Boys</option>
                    <option value="Only For Men">Only For Men</option>
                    <option value="Only For Women">Only For Women</option>
                    <option value="Mixed">Mixed</option>

                  </select>
                </div>
                {
                  errors.tournament_category && touched.tournament_category
                    ?
                    <small className='text-red-600 mt-2'>{errors.tournament_category}</small>
                    :
                    null
                }
              </div>
            </div>
            {/* Tournament Category && Tournament Level */}
            <div className="flex flex-col md:flex-row  2 gap-6 my-7 ">
              <div className="flex flex-col w-full">
                <label className="mb-2">Tournament Level *</label>
                <select name=""
                  className="w-full cursor-pointer px-2 rounded-lg bg-white border-2 outline-blue-200 border-gray-200 py-3 text-sm"
                  id="tournament_level"
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">--Tournament Level--</option>
                  <option value="International">International</option>
                  <option value="National">National</option>
                  <option value="State">State</option>
                  <option value="City">City</option>
                  <option value="Local">Local</option>
                  <option value="Friendly">Friendly</option>
                </select>
                {
                  errors.tournament_level && touched.tournament_level
                    ?
                    <small className='text-red-600 mt-2'>{errors.tournament_level}</small>
                    :
                    null
                }
              </div>
              <div className="flex space-x-5 items-center  w-full ">
                <div className="flex flex-col w-full">
                  <label className="mb-2">Age cutoff</label>
                  <select name=""
                    className="w-full cursor-pointer  px-2 rounded-lg bg-white border-2 outline-blue-200 border-gray-200 py-3 text-sm"
                    id="age_cutoff"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="Under 14">Under 14</option>
                    <option value="Under 16">Under 16</option>
                    <option value="Under 17">Under 17</option>
                    <option value="Under 19">Under 19</option>
                    <option value="Under 21">Under 21</option>
                    <option value="Under 25">Under 25</option>
                    <option value="Under 27">Under 27</option>
                  </select>
                </div>
              </div>
            </div>
            {/* City name && Prize Money */}
            <div className="flex flex-col md:flex-row  2 gap-6 my-7 ">
              <div className="flex flex-col w-full">
                <label className="mb-2">Prize</label>
                <input
                  className="w-full outline-blue-200 rounded-lg border-2 border-gray-200 py-3 px-3 text-sm"
                  placeholder="Enter Prize"
                  type="text"
                  name="prize"
                  id="prize"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {
                  errors.prize && touched.prize
                    ?
                    <small className='text-red-600 mt-2'>{errors.prize}</small>
                    :
                    null
                }
              </div>
              <div className="flex flex-col w-full">
                <label className="mb-2">City Name *</label>
                <input
                  className="w-full outline-blue-200 rounded-lg border-2 border-gray-200 py-3 px-3 text-sm"
                  placeholder="Enter City Name"
                  type="text"
                  name="city_name"
                  id="city_name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {
                  errors.city_name && touched.city_name
                    ?
                    <small className='text-red-600 mt-2'>{errors.city_name}</small>
                    :
                    null
                }
              </div>
            </div>
            {/*  age_restriction && age_cutoff */}
            <div className="flex flex-col md:flex-row  gap-6 my-7 ">

            </div>
            {/* About Tournament */}
            <div className='flex flex-1'>
              <div className='w-full flex flex-col'>
                <label className="mb-2">About Tournament</label>
                <textarea
                  className="w-full outline-blue-200 text-sm rounded-lg px-4 py-3 border-2 border-gray-200"
                  name="about_tournament"
                  placeholder='Write something about tournament'
                  rows="6"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>


            {/* -----------------------Refree_Details---------------------------*/}
            <div className="my-5">
              <div className="py-5">
                <h3 className="text-2xl font-semibold text-[#ee6730]">
                  Referee Information:
                </h3>
              </div>
              {refereelist.map((singlereferee, index) => (
                <div key={index} className="flex flex-col  items-center ">
                  <div className="flex flex-col lg:flex-row items-center w-full gap-6 py-4 ">
                    <div className="flex flex-col w-full">
                      <label className="mb-2">Referee Name *</label>
                      <input
                        className="w-full outline-blue-200 rounded-lg border-2 border-gray-200 py-3 px-3 text-sm"
                        placeholder="Enter Referee Name"
                        type="text"
                        name="referee_name"
                        id="referee_name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.referee_name && touched.referee_name ? (
                        <small className="text-red-600 mt-2">
                          {errors.referee_name}
                        </small>
                      ) : null}
                    </div>
                    <div className="flex flex-col w-full">
                      <label className="mb-2">Referee Mobile *</label>
                      <input
                        className="w-full  rounded-lg bg-white border-2 px-3 outline-blue-200 border-gray-200 py-3 text-sm"
                        type="text"
                        placeholder="Enter Referee Mobile"
                        name="referee_mobile"
                        id="referee_mobile"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.referee_mobile && touched.referee_mobile ? (
                        <small className="text-red-600 mt-2">
                          {errors.referee_mobile}
                        </small>
                      ) : null}
                    </div>
                    {refereelist.length > 1 && (
                      <div
                        onClick={() => handleremove(index)}
                        className=" lg:mt-8  bg-red-500 hover:bg-red-600 text-xs  cursor-pointer rounded-lg px-2 py-2 text-white"
                      >
                        <MdDelete className="text-xl text-white" />
                      </div>
                    )}
                  </div>
                  {refereelist.length - 1 === index && (
                    <div
                      className="flex justify-center items-center lg:justify-end lg:items-end w-full"
                      onClick={handleaddreferee}>
                        <div
                          className="bg-green-600 border-2 hover:border-green-600 hover:text-green-600 relative inline-flex items-center justify-center px-3 py-2 overflow-hidden text-white
                                                     rounded-lg cursor-pointer group"
                        >
                          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-lg group-hover:w-full group-hover:h-56"></span>
                          <span className="relative flex items-center space-x-2 ">
                            <FaUserPlus className="text-xl" />
                            <h1 className="text-sm">Add Referee</h1>
                          </span>
                        </div>
                    </div>
              )}
            </div>
              ))}
        </div>

        {/* -----------------------Sponsor_Details---------------------------*/}
        <div className="my-5">
          <div className="py-5">
            <h3 className="text-2xl font-semibold text-[#ee6730]">
              Sponsor Information:
            </h3>
          </div>
          {sponsorlist.map((singlesponsor, index) => (
            <div className="flex flex-col  items-center">
              <div className="flex flex-col lg:flex-row items-center w-full gap-7 py-4">
                {/* Sponsor_Name && Sponsor_Logo */}
                <div className="flex flex-col w-full">
                  <label className="mb-2">Sponsor Name *</label>
                  <input
                    className="w-full outline-blue-200 rounded-lg border-2 border-gray-200 py-3 px-3 text-sm"
                    placeholder="Enter Tournament Name"
                    type="text"
                    name="sponsor_name"
                    id="sponsor_name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.sponsor_name && touched.sponsor_name ? (
                    <small className="text-red-600 mt-2">
                      {errors.sponsor_name}
                    </small>
                  ) : null}
                </div>
                <div className="flex flex-col w-full">
                  <label className="mb-2">
                    Choose Logo ( PNG, JPG, JPEG )
                  </label>
                  <input
                    className="w-full cursor-pointer rounded-lg bg-white border-2 border-gray-200 py-[9px] px-3 text-sm"
                    type="file"
                    name="sponsor_logo"
                    id="sponsor_logo"
                    accept=".png, .jpg, .jpeg"
                    onChange={handleChange}
                  />
                </div>
                {sponsorlist.length > 1 && (
                  <div
                    onClick={() => handleremovesponsor(index)}
                    className=" lg:mt-8  bg-red-500 hover:bg-red-600 text-xs  cursor-pointer rounded-lg px-2 py-2 text-white"
                  >
                    <MdDelete className="text-xl text-white" />
                  </div>
                )}
              </div>
              {sponsorlist.length - 1 === index && (
                <div
                  className="flex justify-center items-center lg:justify-end lg:items-end w-full"
                  onClick={handleaddsponsor}
                >
                  <div
                    className="bg-green-600 border-2 hover:border-green-600 hover:text-green-600 relative inline-flex items-center justify-center px-3 py-2 overflow-hidden text-white
                                                     rounded-lg cursor-pointer group"
                  >
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-lg group-hover:w-full group-hover:h-56"></span>
                    <span className="relative flex items-center space-x-2 ">
                      <FaUserPlus className="text-xl" />
                      <h1 className="text-sm">Add Sponsor</h1>
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Clear_Button && Submit_Button */}
        <div className="w-full flex justify-end mt-5 sm:mt-10">
          {location?.state?.isEdit ? (
            <button
              type="button"
              className="bg-[#ee6730] relative inline-flex items-center justify-center px-7 py-2 overflow-hidden text-white rounded-lg cursor-pointer group mr-3"
              onClick={() => navigate(-1)}
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-slate-900 rounded-lg group-hover:w-full group-hover:h-56"></span>
              <span className="relative">Cancel</span>
            </button>
          ) : (
            <button
              type="reset"
              className="bg-[#ee6730] relative inline-flex items-center justify-center px-8 py-2 overflow-hidden text-white rounded-lg cursor-pointer group mr-3"
              onClick={() => {
                resetForm();
                setSelectedPlayers([]);
              }}
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-slate-900 rounded-lg group-hover:w-full group-hover:h-56"></span>
              <span className="relative">Clear</span>
            </button>
          )}
          <button
            type="submit"
            className="bg-slate-900 relative inline-flex items-center justify-center px-6 py-2 overflow-hidden text-white rounded-lg cursor-pointer group"
            onClick={handleSubmit}
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#ee6730] rounded-lg group-hover:w-full group-hover:h-56"></span>
            <span className="relative">
              {location?.state?.isEdit ? "UPDATE" : "SUBMIT"}
            </span>
          </button>
        </div>
      </form>
    </div>
      </section>
    </>
  );
}

export default Tournamentregistration;
