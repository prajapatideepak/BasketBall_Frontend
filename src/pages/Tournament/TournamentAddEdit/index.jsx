import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { FaUserPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import Select from "react-select";
import { useNavigate, useLocation } from "react-router-dom";
import Heading from "../../../Component/Heading";
import { TournamentInfoSchema } from "../../../models/TournamentInfoModel"; 
import { useRegisterTournamentMutation } from "../../../services/tournament";

function TournamentAddEdit() {
  // const location = useLocation();
  const [refereelist, setRefereelist] = React.useState([{ Referee: "" }]);
  const [sponsorlist, setsponsorlist] = React.useState([{ Sponsor: "" }]);
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const navigate = useNavigate();

  const [registerTournament] = useRegisterTournamentMutation();

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: 'white',
      borderWidth: '2px',
      borderColor: "#e5e7eb",
      borderRadius: "8px",
      minHeight: "48px",
      height: "48px",
      cursor: 'pointer',
      boxShadow: state.isFocused ? null : null,
      '&:hover': {
        borderColor: '#bfdbfe', 
      },
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      height: "48px",
      padding: "0 6px",
    }),

    singleValue: (provided) => ({
      ...provided,
      color: "black",
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
      height: "48px",
    }),
  };

  // ------------ Refree  ------------
  const handleaddreferee = () => {
    setRefereelist([...refereelist, { Referee: "" }]);
    values.referees.push({name: '', mobile: ''})
  };

  const handleremove = (index) => {
    const list = [...refereelist];
    list.splice(index, 1);
    setRefereelist(list);
  };

  // ------------ Sponsor -------------------
  const handleaddsponsor = (index) => {
    setsponsorlist([...sponsorlist, { Sponsor: "" }]);
    values.sponsors.push({name: '', logo: ''})
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
    tournament_category: {
      boys: false,
      girls: false,
      men: false,
      women: false,
      mixed: false,
    },
    age_cutoff: {
      under_14: false,
      under_16: false,
      under_17: false,
      under_19: false,
      under_21: false,
      under_25: false,
      under_27: false,
    },
    tournament_level: location?.state?.isEdit
      ? location?.state?.tournament_level
      : "",
    city_name: location?.state?.isEdit ? location?.state?.city_name : "",
    about_tournament: location?.state?.isEdit
      ? location?.state?.about_tournament
      : "",
    referees: [
      { 
        name: location?.state?.isEdit ? location?.state?.referee_name : "",
        mobile: location?.state?.isEdit ? location?.state?.referee_mobile : ""
      },
    ],
    sponsors: [
      { 
        name: location?.state?.isEdit ? location?.state?.sponsor_name : "",
        logo: location?.state?.isEdit ? location?.state?.sponsor_logo : ""
      }
    ],
    prize: location?.state?.isEdit ? location?.state?.prize : "",
  };

  const {
    values,
    errors,
    touched,
    setFieldValue,
    resetForm,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    validationSchema: TournamentInfoSchema,
    initialValues,
    onSubmit: async (data) => {

      //tournament_category
      const gender_types = [];
      for (const key in data.tournament_category) {
        if(data.tournament_category[key] == true){
          gender_types.push(key);
        }
      }

      //age cut-off
      const age_categories = [];
      for (const key in data.age_cutoff) {
        if(data.age_cutoff[key] == true){
          age_categories.push(key);
        }
      }

      const formdata  = new FormData();

      formdata.append('logo', data.tournament_logo)
      formdata.append('tournament_name', data.tournament_name)
      formdata.append('start_date', data.starting_date)
      formdata.append('end_date',data.ending_date)
      formdata.append('address', data.city_name)
      formdata.append('gender_types', JSON.stringify(gender_types))
      formdata.append('age_categories', JSON.stringify(age_categories))
      formdata.append('level', data.tournament_level)
      formdata.append('prize', data.prize)
      formdata.append('about', data.about_tournament)
      formdata.append('referees', JSON.stringify(data.referees))
      formdata.append('sponsors', JSON.stringify(data.sponsors))
      for(let i = 0; i < data.sponsors.length; i++){
        formdata.append(`sponsors_logo${i}`, data.sponsors[i].logo)
      }
      
      setIsSubmitting(true);
      const register = await registerTournament(formdata)
      setIsSubmitting(false);
      if(register.error){
        toast.error(register.error.data.message);
      }
      else if(register.data.success){
        toast.success(register.data.message)
      }
      //navigate to page where tournaments of organizers are shown
    },
  });

  return (
    <>
      <section className="min-h-screen">
        <div className='heading-container flex justify-center items-center h-24 sm:h-32 md:h-36'>
          <div className=''>
            <Heading margin={true} text={location?.state?.isEdit ? 'Edit Tournament' : 'Tournament Registration'} />
          </div>
        </div>
        <div className='mx-auto px-5 sm:px-10 py-10 lg:px-14 xl:px-28 2xl:px-32'>
          <form action="" onSubmit={handleSubmit} encType="multipart/form-data">
            {/* -----------------------Tounament_Details---------------------------*/}
            <div className=''>
              <h3 className='text-2xl font-semibold text-[#ee6730]'>Tournament Information:</h3>
            </div>
            {/* Tournament Name && Choose Logo */}
            <div className="flex flex-col md:flex-row  gap-6 my-7 ">
              <div className="flex flex-col w-full">
                <label className="mb-2">Tournament Name *</label>
                <input
                  className="w-full outline-blue-200 rounded-lg border-2 border-gray-200 py-3 px-3 text-sm"
                  placeholder="Enter Tournament Name"
                  type="text"
                  name="tournament_name"
                  id="tournament_name"
                  value={values.tournament_name}
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
                  onChange={(e) => {
                    setFieldValue("tournament_logo", e.target.files[0]); 
                  }}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            {/* Starting Date && Ending Date && City Name */}
            <div className="flex flex-col md:flex-row  gap-6 my-7 ">
              <div className="flex space-x-5  w-full ">
                <div className="w-full">
                  <label className="">Start Date *</label>
                  <input
                    className="w-full outline-blue-200 rounded-lg border-2 border-gray-200 py-3 px-2 my-2 text-gray-400 text-sm"
                    type="date"
                    name="starting_date"
                    id="starting_date"
                    value={values.starting_date}
                    onChange={handleChange}
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
                  <label className="">End Date *</label>
                  <input
                    className="w-full outline-blue-200 rounded-lg border-2 border-gray-200 py-3 my-2 text-gray-400 px-3 text-sm"
                    placeholder="Enter Tournament name"
                    type="date"
                    name="ending_date"
                    id="ending_date"
                    value={values.ending_date}
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
                <label className="mb-2">City Name *</label>
                <input
                  className="w-full outline-blue-200 rounded-lg border-2 border-gray-200 py-3 px-3 text-sm"
                  placeholder="Enter City Name"
                  type="text"
                  name="city_name"
                  id="city_name"
                  value={values.city_name}
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
            {/* Tournament Category && Age Cutoff */}
            <div className="flex flex-col md:flex-row  2 gap-6 my-7 ">
              <div className="flex flex-col w-full">
                <label className="mb-2">Tournament Category *</label>
                <div className=" border-2 border-gray-200 rounded-md px-6 py-3 bg-white">
                  <div className="space-y-2 sm:space-y-6 md:space-y-2 lg:space-y-8">
                    <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row xl:items-center justify-start space-y-2 md:space-x-0 sm:space-x-12 lg:space-y-0 lg:space-x-7 xl:space-x-10">
                      <div className="flex  lg:flex-col xl:flex-row  items-center space-x-3">
                        <input type="checkbox"
                          name="tournament_category.girls"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          checked={values.tournament_category.girls}
                          className="cursor-pointer" />
                        <label htmlFor="girls" className="text-sm">Girls</label>
                      </div>
                      <div className="flex  lg:flex-col xl:flex-row items-center space-x-3">
                        <input type="checkbox"
                          name="tournament_category.boys"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          checked={values.tournament_category.boys}
                          className="cursor-pointer " />
                        <label htmlFor="boys" className="text-sm ">Boys</label>
                      </div>
                      <div className="flex lg:flex-col xl:flex-row  items-center space-x-3">
                        <input type="checkbox"
                          name="tournament_category.men"
                          onChange={handleChange}
                          onBlur={handleBlur} 
                          checked={values.tournament_category.men}                         className="cursor-pointer" />
                        <label htmlFor="" className="text-sm ">Men</label>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row xl:items-center justify-start space-y-2 md:space-x-0 sm:space-x-7 lg:space-x-5 lg:space-y-0 xl:space-x-[1.2rem]">
                      <div className="flex lg:flex-col xl:flex-row  items-center space-x-3">
                        <input type="checkbox"
                          name="tournament_category.women"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          checked={values.tournament_category.women}
                          className="cursor-pointer " />
                        <label htmlFor="" className="text-sm ">Women</label>
                      </div>
                      <div className="flex lg:flex-col xl:flex-row  items-center space-x-3">
                        <input type="checkbox"
                          name="tournament_category.mixed"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          checked={values.tournament_category.mixed}
                          className="cursor-pointer" />
                        <label htmlFor="" className="text-sm ">Mixed</label>
                      </div>
                    </div>
                  </div>
                </div>
                {
                  errors.tournament_category && touched.tournament_category
                    ?
                    <small className='text-red-600 mt-2'>{errors.tournament_category}</small>
                    :
                    null
                }
              </div>
              <div className="flex flex-col w-full ">
                <label className="mb-2">Age Cut-Off *</label>
                <div className="flex flex-col w-full border-2 rounded-md py-3 px-6 md:px-5 bg-white">
                  <div className="space-y-2 sm:space-y-6">
                    <div className="flex flex-col sm:flex-row md:items-center space-y-2 sm:space-x-10">
                      <div className="flex md:flex-col xl:flex-row items-center space-x-3">
                        <input type="checkbox"
                          name="age_cutoff.under_14"
                          id="age_cutoff"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          checked={values.age_cutoff.under_14}
                          className="cursor-pointer" />
                        <label htmlFor="Under 14" className="text-sm">Under 14</label>
                      </div>
                      <div className="flex md:flex-col xl:flex-row items-center space-x-3">
                        <input type="checkbox"
                          name="age_cutoff.under_16"
                          id="age_cutoff"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          checked={values.age_cutoff.under_16}
                          className="cursor-pointer " />
                        <label htmlFor="Under 16" className="text-sm">under 16</label>
                      </div>
                      <div className="flex md:flex-col xl:flex-row items-center space-x-3">
                        <input type="checkbox"
                          name="age_cutoff.under_17"
                          id="age_cutoff"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          checked={values.age_cutoff.under_17}
                          className="cursor-pointer" />
                        <label htmlFor="Under 17" className="text-sm">Under 17</label>
                      </div>
                      <div className="flex md:flex-col xl:flex-row items-center space-x-3">
                        <input type="checkbox"
                          name="age_cutoff.under_19"
                          id="age_cutoff"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          checked={values.age_cutoff.under_19}
                          className="cursor-pointer " />
                        <label htmlFor="Under 19" className="text-sm">Under 19</label>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 md:items-center sm:space-x-[2.45rem]">
                      <div className="flex md:flex-col xl:flex-row items-center space-x-3">
                        <input type="checkbox" 
                          name="age_cutoff.under_21"
                          id="age_cutoff"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          checked={values.age_cutoff.under_21}
                        className="cursor-pointer" />
                        <label htmlFor="Under 21" className="text-sm">Under 21</label>
                      </div>
                      <div className="flex md:flex-col xl:flex-row items-center space-x-3">
                        <input type="checkbox"
                          name="age_cutoff.under_25"
                          id="age_cutoff"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          checked={values.age_cutoff.under_25}
                          className="cursor-pointer" />
                        <label htmlFor="Under 25" className="text-sm">Under 25</label>
                      </div>
                      <div className="flex md:flex-col xl:flex-row items-center space-x-3">
                        <input type="checkbox"
                          name="age_cutoff.under_27"
                          id="age_cutoff"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          checked={values.age_cutoff.under_27}
                          className="cursor-pointer" />
                        <label htmlFor="Under 27" className="text-sm">Under 27</label>
                      </div>
                    </div>
                  </div>
                </div>
                {
                  errors.age_cutoff && touched.age_cutoff
                    ?
                    <small className='text-red-600 mt-2'>{errors.age_cutoff}</small>
                    :
                    null
                }
              </div>
            </div>
            {/* Tournament Level && Prize */}
            <div className="flex flex-col md:flex-row  gap-6 my-7 ">
              <div className="flex space-x-5  w-full ">
                <div className="flex flex-col w-full">
                  <label className="mb-2">Tournament Level *</label>
                   <Select
                      className="w-full outline-blue-200"
                      name="tournament_level"
                      id="tournament_level"
                      onChange={(e)=> setFieldValue('tournament_level', e.value)}
                      onBlur={handleBlur}
                      isSearchable={false}
                      styles={customStyles}
                      options={[
                        { value: "international", label: "International" },
                        { value: "national", label: "National" },
                        { value: "state", label: "State" },
                        { value: "Local", label: "Local" },
                        { value: "friendly", label: "Friendly" },
                      ]}
                    />
                  {
                    errors.tournament_level && touched.tournament_level
                      ?
                      <small className='text-red-600 mt-2'>{errors.tournament_level}</small>
                      :
                      null
                  }
                </div>
                <div className="flex flex-col w-full">
                  <label className="mb-2">Prize</label>
                  <input
                    className="w-full outline-blue-200 rounded-lg border-2 border-gray-200 py-3 px-3 text-sm"
                    placeholder="Enter Prize Money"
                    type="text"
                    name="prize"
                    id="prize"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.prize}
                  />
                  {
                    errors.prize && touched.prize
                      ?
                      <small className='text-red-600 mt-2'>{errors.prize}</small>
                      :
                      null
                  }
                </div>


              </div>
            </div>
            {/* About Tournament */}
            <div className='flex w-full'>
              <div className='w-full flex flex-col'>
                <label className="mb-2">About Tournament</label>
                <textarea
                  className="w-full outline-blue-200 text-sm rounded-lg px-4 py-3 border-2 border-gray-200"
                  name="about_tournament"
                  placeholder='Write something about tournament'
                  rows="6"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.about_tournament}
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
                        name={`referees.${index}.name`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values?.referees[index].name}
                      />
                      {touched.referees && touched.referees[index] && errors.referees && errors.referees[index] ? (
                        <small className="text-red-600 mt-2">
                          {errors.referees[index]?.name}
                        </small>
                      ) : null}
                    </div>
                    <div className="flex flex-col w-full">
                      <label className="mb-2">Referee Mobile *</label>
                      <input
                        className="w-full  rounded-lg bg-white border-2 px-3 outline-blue-200 border-gray-200 py-3 text-sm"
                        type="text"
                        placeholder="Enter Referee Mobile"
                        name={`referees.${index}.mobile`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values?.referees[index]?.mobile}
                      />

                      {touched.referees && touched.referees[index] && errors.referees && errors.referees[index] ? (
                        <small className="text-red-600 mt-2">
                          {errors.referees[index]?.mobile}
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
                      >
                      <div
                        className="bg-green-600 border-2 hover:border-green-600 hover:text-green-600 relative inline-flex items-center justify-center px-3 py-2 overflow-hidden text-white
                        rounded-lg cursor-pointer group"
                        onClick={handleaddreferee}
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
                <div key={index} className="flex flex-col  items-center">
                  <div className="flex flex-col lg:flex-row items-center w-full gap-7 py-4">
                    {/* Sponsor_Name && Sponsor_Logo */}
                    <div className="flex flex-col w-full">
                      <label className="mb-2">Sponsor Name *</label>
                      <input
                        className="w-full outline-blue-200 rounded-lg border-2 border-gray-200 py-3 px-3 text-sm"
                        placeholder="Enter Sponsor Name"
                        type="text"
                        name={`sponsors.${index}.name`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values?.sponsors[index]?.name}
                      />
                      {touched.sponsors && touched.sponsors[index] && errors.sponsors && errors.sponsors[index] ? (
                        <small className="text-red-600 mt-2">
                          {errors.sponsors[index]?.name}
                        </small>
                      ) : null}
                    </div>
                    <div className="flex flex-col w-full">
                      <label className="mb-2">
                        Choose Logo * <span className="text-sm text-gray-400">( png, jpg, jpeg )</span>
                      </label>
                      <div className="flex items-center">
                        <input
                          className="w-full h-12 cursor-pointer rounded-lg bg-white border-2 border-gray-200 py-[9px] px-3 text-sm"
                          type="file"
                          name={`sponsors.${index}.logo`}
                          accept=".png, .jpg, .jpeg"
                          onChange={(e) => {
                            setFieldValue(`sponsors.${index}.logo`, e.target.files[0]); 
                          }}
                          onBlur={handleBlur}
                        />
                        {
                          values.sponsors[index].logo != ''
                          ?
                            <img src={URL.createObjectURL(values.sponsors[index].logo)} className="w-12 h-12 rounded-full mx-3" alt="" />
                          :
                            <div className="w-[55px] h-12 rounded-full border mx-3">

                            </div>
                        }  
                        {sponsorlist.length > 1 && (
                          <div
                            onClick={() => handleremovesponsor(index)}
                            className="  bg-red-500 hover:bg-red-600 text-xs  cursor-pointer rounded-lg px-2 py-2 text-white"
                          >
                            <MdDelete className="text-xl text-white" />
                          </div>
                        )}
                      </div>
                      {touched.sponsors && touched.sponsors[index] && errors.sponsors && errors.sponsors[index] ? (
                        <small className="text-red-600 mt-2">
                          {errors.sponsors[index]?.logo}
                        </small>
                      ) : null}
                    </div>
                    
                  </div>
                  {sponsorlist.length - 1 === index && (
                    <div
                      className="flex justify-center items-center lg:justify-end lg:items-end w-full"
                    >
                      <div
                        className="bg-green-600 border-2 hover:border-green-600 hover:text-green-600 relative inline-flex items-center justify-center px-3 py-2 overflow-hidden text-white rounded-lg cursor-pointer group"
                        onClick={()=> handleaddsponsor(index)}
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
              {
                location?.state?.isEdit ? 
                  <button
                    type="button"
                    className="bg-[#ee6730] relative inline-flex items-center justify-center px-7 py-2 overflow-hidden text-white rounded-lg cursor-pointer group mr-3"
                    onClick={() => navigate(-1)}
                  >
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-slate-900 rounded-lg group-hover:w-full group-hover:h-56"></span>
                    <span className="relative">Cancel</span>
                  </button>
                : 
               
                  !isSubmitting
                    ?
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
                    :
                      null
               
              }
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-slate-900 ${isSubmitting? 'opacity-60' : ''} relative inline-flex items-center justify-center px-6 py-2 overflow-hidden text-white rounded-lg cursor-pointer group`}
                onClick={handleSubmit}
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#ee6730] rounded-lg group-hover:w-full group-hover:h-56"></span>
                <span className="relative">
                  {
                    location?.state?.isEdit 
                    ? 
                      "UPDATE" 
                    : 
                      isSubmitting
                      ?
                        'Loading...'
                      :
                        "SUBMIT"
                  }
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default TournamentAddEdit;
