import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { FaUserPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import moment from 'moment'
import Select from "react-select";
import { useNavigate, useLocation } from "react-router-dom";
import Heading from "../../../Component/Heading";
import { TournamentInfoSchema } from "../../../models/TournamentInfoModel";
import { useRegisterTournamentMutation, useUpdateTournamentDetailsMutation } from "../../../services/tournament";

function TournamentAddEdit() {
  const location = useLocation();
  const [refereelist, setRefereelist] = React.useState([{ Referee: "" }]);
  const [sponsorlist, setsponsorlist] = React.useState([{ name: "", logo: "" }]);
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const navigate = useNavigate();

  const [registerTournament] = useRegisterTournamentMutation();
  const [updateTournamentDetails] = useUpdateTournamentDetailsMutation();

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
    values.referees.push({ name: '', mobile: '' })
  };

  const handleremove = (index) => {
    const list = [...refereelist];
    list.splice(index, 1);
    setRefereelist(list);
  };

  // ------------ Sponsor -------------------
  const handleaddsponsor = (index) => {
    setsponsorlist([...sponsorlist, { Sponsor: "" }]);
    values.sponsors.push({ name: '', logo: '' })
  };

  const handleremovesponsor = (index) => {
    errors?.sponsors?.splice(index, 1)
    values?.sponsors?.splice(index, 1)
    const list = [...sponsorlist];
    list.splice(index, 1);
    setsponsorlist(list);
  };

  // ------------ Form Validation ------------
  const addTournamentValues = {
    tournament_name: "",
    tournament_logo: "",
    starting_date: "",
    ending_date: "",
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
      opan_for_all: false,
    },
    tournament_level: "",
    city_name: "",
    about_tournament: "",
    referees: [
      {
        name: "",
        mobile: "",
        referee_category: ""
      },
    ],
    sponsors: [
      {
        name: "",
        logo: ""
      }
    ],
    winner_prize: "",
    runner_prize: "",
  };

  const editTournamentValues = {
    tournament_name: location?.state?.tournamentDetails.tournament_name,
    tournament_logo: "",
    starting_date: location?.state?.tournamentDetails.start_date ? moment(location?.state?.tournamentDetails.start_date).format("YYYY-MM-DD") : '',
    ending_date: location?.state?.tournamentDetails.end_date ? moment(location?.state?.tournamentDetails.end_date).format("YYYY-MM-DD") : '',
    tournament_category: {
      boys: location?.state?.tournamentDetails.gender_types?.includes('boys'),
      girls: location?.state?.tournamentDetails.gender_types?.includes('girls'),
      men: location?.state?.tournamentDetails.gender_types?.includes('men'),
      women: location?.state?.tournamentDetails.gender_types?.includes('women'),
      mixed: location?.state?.tournamentDetails.gender_types?.includes('mixed'),
    },
    age_cutoff: {
      under_14: location?.state?.tournamentDetails.age_categories?.includes('under 14'),
      under_16: location?.state?.tournamentDetails.age_categories?.includes('under 16'),
      under_17: location?.state?.tournamentDetails.age_categories?.includes('under 17'),
      under_19: location?.state?.tournamentDetails.age_categories?.includes('under 19'),
      under_21: location?.state?.tournamentDetails.age_categories?.includes('under 21'),
      under_25: location?.state?.tournamentDetails.age_categories?.includes('under 25'),
      opan_for_all: location?.state?.tournamentDetails.age_categories?.includes('opan_for_all'),
    },
    tournament_level: location?.state?.tournamentDetails.level,
    city_name: location?.state?.tournamentDetails.address,
    about_tournament: location?.state?.tournamentDetails.about == null ? '' : location?.state?.tournamentDetails.about,
    referees:
      location?.state?.tournamentDetails.tournament_referees.length > 0
        ?
        location?.state?.tournamentDetails.tournament_referees?.map((referee) => {
          return {
            name: referee.name,
            mobile: referee.mobile,
            referee_category: referee.referee_category
          }
        })
        :
        [
          {
            name: '',
            mobile: '',
            referee_category: ''
          }
        ]
    ,
    sponsors:
      location?.state?.tournamentDetails.tournament_sponsors.length > 0
        ?
        location?.state?.tournamentDetails.tournament_sponsors?.map((sponsor) => {
          return {
            name: sponsor.title,
            logo: sponsor.logo
          }
        })
        :
        [
          {
            name: '',
            logo: ''
          }
        ]
    ,
    winner_prize: location?.state?.tournamentDetails.winner_prize == null ? '' : location?.state?.tournamentDetails.winner_prize,
    runner_prize: location?.state?.tournamentDetails.runner_prize == null ? '' : location?.state?.tournamentDetails.runner_prize,
  };

  const initialValues = location?.state?.isEdit ? editTournamentValues : addTournamentValues

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
    validationSchema: TournamentInfoSchema(location?.state?.isEdit),
    initialValues,
    onSubmit: async (data) => {
      console.log(data)
      //tournament_category
      const gender_types = [];
      for (const key in data.tournament_category) {
        if (data.tournament_category[key] == true) {
          gender_types.push(key);
        }
      }

      //age cut-off
      const age_categories = [];
      for (const key in data.age_cutoff) {
        if (data.age_cutoff[key] == true) {
          age_categories.push(
            `${key.split('_')[0]} ${key.split('_')[1]}`
          );
        }
      }

      const formdata = new FormData();
      formdata.append('logo', data.tournament_logo)
      formdata.append('tournament_name', data.tournament_name)
      formdata.append('start_date', data.starting_date)
      formdata.append('end_date', data.ending_date)
      formdata.append('address', data.city_name)
      formdata.append('gender_types', JSON.stringify(gender_types))
      formdata.append('age_categories', JSON.stringify(age_categories))
      formdata.append('level', data.tournament_level)
      formdata.append('prize', data.prize)
      formdata.append('about', data.about_tournament)
      formdata.append('referees', JSON.stringify(data.referees))
      formdata.append('sponsors', JSON.stringify(data.sponsors))
      for (let i = 0; i < data.sponsors.length; i++) {
        formdata.append(`sponsors_logo${i}`, data.sponsors[i].logo)
      }

      setIsSubmitting(true);
      let response = null

      if (location?.state?.isEdit) {
        formdata.append('old_url', location?.state?.tournamentDetails.logo)
        response = await updateTournamentDetails({ tournament_id: location?.state?.tournamentDetails.id, formData: formdata })
      }
      else {
        response = await registerTournament(formdata)
      }

      setIsSubmitting(false);
      if (response.error) {
        toast.error(response.error.data.message);
      }
      else if (response.data.success) {
        toast.success(response.data.message)
        if (location?.state?.isEdit) {
          navigate(`/tournament/${location?.state?.tournamentDetails.id}`)
        }
        else {
          navigate('/tournament/organizer')
        }
      }
    },
  });

  React.useEffect(() => {
    if (location?.state?.isEdit) {
      const referees = location?.state?.tournamentDetails.tournament_referees?.map((referee) => {
        return {
          Referee: ""
        }
      })
      setRefereelist(referees.length > 0 ? referees : refereelist);

      const sponsors = location?.state?.tournamentDetails.tournament_sponsors?.map((sponsor) => {
        return {
          name: sponsor.title,
          logo: sponsor.logo
        }
      })
      setsponsorlist(sponsors.length > 0 ? sponsors : sponsorlist);
    }
  }, [])

  return (
    <>
      <section className="px-10 lg:px-16 py-5 min-h-screen">
        <div className='heading-container flex  flex-col justify-center items-center h-24 sm:h-32 md:h-36'>
          <div className=" flex justify-center items-center">
            <div>
              <h1 className=" items-end  text-center text-lg font-semibold sm:text-2xl lg:text-3xl">
                {location?.state?.isEdit ? "Tournament Edit" : "Tournament Registration"}
              </h1>
            </div>
            <img src={"/icons/tournament_icon.png"} className="w-20" />
          </div>
          {
            location?.state?.isEdit
              ?
              null
              :
              <p className="text-center text-gray-700 text-sm md:text-base italic pb-5">
                The court is set, the teams are ready, let the games begin!
              </p>
          }
        </div>
        <div className='mx-auto px-5 sm:px-10 py-10 lg:px-10 shadow-xl rounded-md'>
          <form action="" onSubmit={handleSubmit} encType="multipart/form-data">
            {/* -----------------------Tounament_Details---------------------------*/}
            <div className=''>
              <h3 className='text-xl sm:text-2xl font-semibold text-[#ee6730]'>Tournament Information:</h3>
            </div>
            {/* Tournament Name && Choose Logo */}
            <div className="flex flex-col md:flex-row  gap-6 my-7 ">
              <div className="flex flex-col w-full">
                <label className="mb-2">Tournament Name *</label>
                <input
                  className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
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
                    <small className='text-sm font-semibold text-red-600 px-1'>{errors.tournament_name}</small>
                    :
                    null
                }
              </div>
              <div className="flex flex-col w-full">
                <label className="mb-2">Choose Logo ( PNG, JPG, JPEG ) (size &lt; 1MB)</label>
                <input
                  className="rounded-lg border-transparent appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
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
              <div className="flex flex-col sm:flex-row sm:space-x-5 w-full ">
                <div className="w-full">
                  <label className="">Start Date *</label>
                  <input
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 mt-2 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
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
                      <small className='text-sm font-semibold text-red-600 px-1'>{errors.starting_date}</small>
                      :
                      null
                  }
                </div>
                <div className="w-full">
                  <label className="">End Date *</label>
                  <input
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 mt-2 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
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
                      <small className='text-sm font-semibold text-red-600 px-1'>{errors.ending_date}</small>
                      :
                      null
                  }
                </div>
              </div>
              <div className="flex flex-col w-full">
                <label className="mb-2">City Name *</label>
                <input
                  className="rounded-lg border-transparent appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
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
                    <small className='text-sm font-semibold text-red-600 px-1'>{errors.city_name}</small>
                    :
                    null
                }
              </div>
            </div>
            {/* Tournament Category && Age Cutoff */}
            <div className="flex flex-col md:flex-row  2 gap-6 my-7 ">
              <div className="flex flex-col w-full">
                <label className="mb-2">Tournament Category *</label>
                <div className="shadow-sm rounded-md px-6 py-3 bg-white">
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
                          checked={values.tournament_category.men} className="cursor-pointer" />
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
                    <small className='text-sm font-semibold text-red-600 px-1'>{errors.tournament_category}</small>
                    :
                    null
                }
              </div>
              <div className="flex flex-col w-full ">
                <label className="mb-2">Age Cut-Off *</label>
                <div className="flex flex-col w-full shadow-sm rounded-md py-3 px-6 md:px-5 bg-white">
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
                          name="age_cutoff.opan_for_all"
                          id="age_cutoff"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          checked={values.age_cutoff.opan_for_all}
                          className="cursor-pointer" />
                        <label htmlFor="opan_for_all" className="text-sm">Open For All</label>
                      </div>
                    </div>
                  </div>
                </div>
                {
                  errors.age_cutoff && touched.age_cutoff
                    ?
                    <small className='text-sm font-semibold text-red-600 px-1'>{errors.age_cutoff}</small>
                    :
                    null
                }
              </div>
            </div>
            {/* Tournament Level && Prize */}
            <div className="flex flex-col md:flex-row  gap-6 my-7 ">
              <div className="flex space-x-5  w-full ">
                <div className="flex flex-col w-full">
                  <label className="mb-2">Level *</label>
                  <Select
                    className="rounded-lg border-transparent appearance-none border border-gray-300 w-full outline-none bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                    name="tournament_level"
                    id="tournament_level"
                    onChange={(e) => setFieldValue('tournament_level', e.value)}
                    onBlur={handleBlur}
                    isSearchable={false}
                    styles={customStyles}
                    defaultValue={
                      location?.state?.isEdit
                        ?
                        {
                          value: location?.state?.tournamentDetails.level,
                          label: location?.state?.tournamentDetails.level.charAt(0).toUpperCase() + location?.state?.tournamentDetails.level.slice(1)
                        }
                        :
                        null
                    }
                    options={[
                      { value: "international", label: "International" },
                      { value: "national", label: "National" },
                      { value: "state", label: "State" },
                      { value: "Distric", label: "Distric" },
                      { value: "Other", label: "Other" },
                    ]}
                  />
                  {
                    errors.tournament_level && touched.tournament_level
                      ?
                      <small className='text-sm font-semibold text-red-600 px-1'>{errors.tournament_level}</small>
                      :
                      null
                  }
                </div>
                {/* <div className="flex flex-col w-full">
                  <label className="mb-2">Prize</label>
                  <input
                    className="rounded-lg border-transparent appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
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
                      <small className='text-sm font-semibold text-red-600 px-1'>{errors.prize}</small>
                      :
                      null
                  }
                </div> */}
                <div className="flex flex-col sm:flex-row sm:space-x-5 w-full ">
                  <div className="w-full">
                    <label className="">Winner Price</label>
                    <input
                      className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 mt-2 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                      placeholder="Enter Runner Price"
                      type="text"
                      name="wenner_price"
                      id="wenner_price"
                      value={values.winner_prize}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {
                      errors.winner_prize && touched.winner_prize
                        ?
                        <small className='text-sm font-semibold text-red-600 px-1'>{errors.winner_prize}</small>
                        :
                        null
                    }
                  </div>
                  <div className="w-full">
                    <label className="">Runner Price</label>
                    <input
                      className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 mt-2 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                      placeholder="Enter Runner Price"
                      type="text"
                      name="runner_price"
                      id="runner_price"
                      value={values.runner_prize}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {
                      errors.runner_prize && touched.runner_prize
                        ?
                        <small className='text-sm font-semibold text-red-600 px-1'>{errors.runner_prize}</small>
                        :
                        null
                    }
                  </div>
                </div>
              </div>
            </div>
            {/* About Tournament */}
            <div className='flex w-full'>
              <div className='w-full flex flex-col'>
                <label className="mb-2">About Tournament</label>
                <textarea
                  className="rounded-lg border-transparent flex-1  appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
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
                <h3 className="text-xl sm:text-2xl font-semibold text-[#ee6730]">
                  Referee Information:
                </h3>
              </div>
              {refereelist.map((singlereferee, index) => (
                <div key={index} className="flex flex-col  items-center ">
                  <div className="flex flex-col lg:flex-row items-center w-full gap-6 py-4 ">
                    <div className="flex flex-col w-full">
                      <label className="mb-2">Referee Name</label>
                      <input
                        className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-3 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                        placeholder="Enter Referee Name"
                        type="text"
                        name={`referees.${index}.name`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values?.referees[index].name}
                      />
                      {touched.referees && touched.referees[index] && errors.referees && errors.referees[index] ? (
                        <small className="text-sm font-semibold text-red-600 px-1">
                          {errors.referees[index]?.name}
                        </small>
                      ) : null}
                    </div>
                    <div className="flex flex-col w-full">
                      <label className="mb-2">Referee Mobile</label>
                      <input
                        className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-3 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                        type="text"
                        placeholder="Enter Referee Mobile"
                        name={`referees.${index}.mobile`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values?.referees[index]?.mobile}
                      />

                      {touched.referees && touched.referees[index] && errors.referees && errors.referees[index] ? (
                        <small className="text-sm font-semibold text-red-600 px-1">
                          {errors.referees[index]?.mobile}
                        </small>
                      ) : null}
                    </div>
                    <div className="flex flex-col w-full">
                      <label className="mb-2">Referee Category</label>
                      <select name="referee_category"
                        className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-3 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                        id="">
                        <option value="">Select Referee Category</option>
                        <option value="BFI">BFI</option>
                        <option value="FIBA">FIBA</option>
                        <option value="State Referee">State Referee</option>
                        <option value="Local Referee">Local Referee</option>
                      </select>
                      {touched.referees && touched.referees[index] && errors.referees && errors.referees[index] ? (
                        <small className="text-sm font-semibold text-red-600 px-1">
                          {errors.referees[index]?.referee_category}
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
                <h3 className="text-xl sm:text-2xl font-semibold text-[#ee6730]">
                  Sponsor Information:
                </h3>
              </div>
              {sponsorlist.map((sponsor, index) => (
                <div key={index} className="flex flex-col  items-center">
                  <div className="flex flex-col lg:flex-row items-center w-full gap-7 py-4">
                    {/* Sponsor_Name && Sponsor_Logo */}
                    <div className="flex flex-col w-full">
                      <label className="mb-2">Sponsor Name</label>
                      <input
                        className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-3 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                        placeholder="Enter Sponsor Name"
                        type="text"
                        name={`sponsors.${index}.name`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values?.sponsors[index]?.name}
                      />
                      {touched.sponsors && touched.sponsors[index] && errors.sponsors && errors.sponsors[index] ? (
                        <small className="text-sm font-semibold text-red-600 px-1">
                          {errors.sponsors[index]?.name}
                        </small>
                      ) : null}
                    </div>
                    <div className="flex flex-col w-full">
                      <label className="mb-2">
                        Choose Logo <span className="text-sm text-gray-400">( png, jpg, jpeg )</span>
                      </label>
                      <div className="flex items-center">
                        <input
                          className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                          type="file"
                          name={`sponsors.${index}.logo`}
                          accept=".png, .jpg, .jpeg"
                          onChange={(e) => {
                            setFieldValue(`sponsors.${index}.logo`, e.target.files[0] ? e.target.files[0] : sponsor.logo);
                          }}
                          onBlur={handleBlur}
                        />
                        {
                          values.sponsors[index].logo != '' || sponsor.logo != ''
                            ?
                            <div className="w-12 h-12  rounded-full overflow-hidden mx-3">
                              <img
                                src={
                                  values.sponsors[index].logo != ''
                                    ?
                                    !values.sponsors[index].logo.name && !values.sponsors[index].logo.size
                                      ?
                                      values.sponsors[index].logo
                                      :
                                      URL.createObjectURL(values.sponsors[index].logo)
                                    :
                                    sponsor.logo
                                }
                                className="w-full h-full" alt="" />
                            </div>
                            :
                            <div className="w-12 h-12 rounded-full border mx-3">

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
                        <small className="text-sm font-semibold text-red-600 px-1">
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
                        onClick={() => handleaddsponsor(index)}
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
                className={`bg-slate-900 ${isSubmitting ? 'opacity-60' : ''} relative inline-flex items-center justify-center px-6 py-2 overflow-hidden text-white rounded-lg cursor-pointer group`}
                onClick={handleSubmit}
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#ee6730] rounded-lg group-hover:w-full group-hover:h-56"></span>
                <span className="relative">
                  {
                    isSubmitting
                      ?
                      'Loading...'
                      :
                      location?.state?.isEdit
                        ?
                        'UPDATE'
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
