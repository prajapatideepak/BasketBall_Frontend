import React, { useState, useEffect } from 'react'
import Heading from '../../Component/Heading'
import { useFormik } from "formik";
import { AiOutlineTeam, AiOutlineSearch } from 'react-icons/ai';
import * as Yup from "yup";
import { AiFillEye } from "react-icons/ai"
import navigate from 'navigate';


function TeamRegister() {

  const [Teams, setTeam] = React.useState([])
  const [Players, setPlayers] = React.useState("")
  const allteams = [
    {
      team_id: 1001,
      team_logo: '/CBL_Images/basketball_team_logo_1.webp',
      team_name: 'Mehta Ke Mahaarathi',
      description: 'Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip',
      total_players: 7,
      matches_played: 22,
      matches_won: 18,
      matches_lost: 4
    },
    {
      team_id: 1002,
      team_logo: '/CBL_Images/basketball_team_logo_2.webp',
      team_name: 'Jetha Ke Jabaaz',
      description: '',
      total_players: 8,
      matches_played: 12,
      matches_won: 8,
      matches_lost: 4
    },
    {
      team_id: 1001,
      team_logo: '/CBL_Images/basketball_team_logo_1.webp',
      team_name: 'Mehta Ke Mahaarathi',
      description: 'Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip',
      total_players: 7,
      matches_played: 22,
      matches_won: 18,
      matches_lost: 4
    },
    {
      team_id: 1002,
      team_logo: '/CBL_Images/basketball_team_logo_2.webp',
      team_name: 'Jetha Ke Jabaaz',
      description: '',
      total_players: 8,
      matches_played: 12,
      matches_won: 8,
      matches_lost: 4
    },
    {
      team_id: 1001,
      team_logo: '/CBL_Images/basketball_team_logo_1.webp',
      team_name: 'Mehta Ke Mahaarathi',
      description: 'Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip',
      total_players: 7,
      matches_played: 22,
      matches_won: 18,
      matches_lost: 4
    },
    {
      team_id: 1002,
      team_logo: '/CBL_Images/basketball_team_logo_2.webp',
      team_name: 'Jetha Ke Jabaaz',
      description: '',
      total_players: 8,
      matches_played: 12,
      matches_won: 8,
      matches_lost: 4
    },
  ]

  useEffect(() => {
    setTeam(allteams)
  }, []);

  const SelectTeam = (e) => {
    const { id, cheked } = e.target;
    // let AllTeams = Teams.map(team => team.team_id === id ? {...team , isChecked : cheked} : console.log("is_ckecked add nahi hua hai") );
    // // setTeam(team)
    // console.log(AllTeams)
    setPlayers(id)
    console.log(Players, "team_id")
  }


  // ------------ Form Validation ------------
  const initialValues = {
    tournament_category: location?.state?.isEdit
      ? location?.state?.tournament_category
      : "",
    age_cutoff: location?.state?.isEdit
      ? location?.state?.age_cutoff
      : "",
  };

  const validationSchema = Yup.object({
    tournament_category: Yup.string().required("Categoryy is required"),
    age_cutoff: Yup.string().required("Age_Cutoff is required"),
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


  return (
    <section className='min-h-screen'>
      <div className="mx-auto px-10 py-12 sm:px-20 sm:py-12 md:px-20 md:py-10 lg:px-24 xl:px-28 2xl:px-32">
        <Heading text="Champion League" />
        {/* Tournament Category && Age Cutoff */}
        <form action="">
          <div className="flex flex-col md:flex-row gap-6 my-7 ">
            <div className="flex flex-col justify-end items-start w-full">
              <label className="mb-2 px-5 text-2xl text-start font-semibold">Category *</label>
              <div className=" rounded-md  py-2 ">
                <div className="grid grid-cols-3 gap-5 ">
                  <div className="flex bg-white hover:shadow-md px-5 py-2 rounded-md shadow-sm w-full lg:flex-col xl:flex-row  items-center space-x-3">
                    <input type="checkbox"
                      name="tournament_category"
                      id="tournament_category"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="cursor-pointer" />
                    <label htmlFor="Only for girls" className="text-sm ">Only For Girls</label>
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
            <div className="flex flex-col justify-end items-start w-full">
              <label className="mb-2 px-5 text-2xl text-start font-semibold">Age_Cutoff *</label>
              <div className=" rounded-md  py-2 ">
                <div className="grid grid-cols-3 gap-5 ">
                  <div className="flex bg-white hover:shadow-md px-5 py-2 rounded-md shadow-sm w-full lg:flex-col xl:flex-row  items-center space-x-3">
                    <input type="checkbox"
                      name="age_cutoff"
                      id="age_cutoff"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="cursor-pointer" />
                    <label htmlFor="Only for girls" className="text-sm ">Under 14</label>
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
          <div className='py-5 '>
            <h1 className=' font-semibold md:text-2xl px-5'>
              Team List
            </h1>
            <div className='md:px-5 py-2 rounded-md bg-gray-200 shadow-sm my-5  '>
              <ul className='flex md:px-2 2xl:px-10 justify-between py-[10px] border-b-2 border-gray-400 text-black font-medium px-2 '>
                <li className='w-10 text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base '>
                  Select
                </li>
                <li className='w-52 text-start text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base '>Team</li>
                <li className='w-20 text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base '>Total_Players</li>
                <li className='w-32 text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base '>Matches Played</li>
                <li className='w-20 text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base '>Won</li>
                <li className='w-20 text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base '>Loss</li>
                <li className='text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base '>Action</li>
              </ul>
              {
                Players.length > 0 ?
                  <ul
                    className='flex items-center space-x-2 justify-between font-normal md:px-2 2xl:px-10 py-2 rounded-lg cursor-pointer bg-gray-100 my-3'>
                    <li className='w-10 text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base '>
                      <input type="radio"
                        onChange={SelectTeam}
                        // checked={team.isChecked || false}  
                        id={allteams[0].team_id} className='cursor-pointer' />
                    </li>
                    <div className='flex items-center w-52 space-x-3'>

                      <li className=' flex justify-center items-center'>
                        <img src={allteams[0].team_logo} alt="" className='rounded-full border-[3px] border-gray-500 shadow-sm md:w-14' />
                      </li>
                      <li className='text-start font-semibold text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-base '>{allteams[0].team_name}</li>
                    </div>
                    <li className='w-20 text-center  py-1 rounded-md font-semibold text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm '>
                      {allteams[0].total_players < 10 ? '0' + allteams[0].total_players : allteams[0].total_players}
                    </li>
                    <li className='w-28 text-center  py-1 rounded-md font-semibold text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm overflow-hidden'>
                      {allteams[0].matches_played < 10 ? '0' + allteams[0].matches_played : allteams[0].matches_played}
                    </li>
                    <li className='w-20 text-center  py-1 rounded-md font-semibold text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm'>
                      {allteams[0].matches_won < 10 ? '0' + allteams[0].matches_won : allteams[0].matches_won}
                    </li>
                    <li className='w-20 text-center py-1 rounded-md font-semibold text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm'>
                      {allteams[0].matches_lost < 10 ? '0' + allteams[0].matches_lost : allteams[0].matches_lost}
                    </li>
                    <li className='w-10 text-start flex items-center justify-center space-y-2 md:space-y-0 md:space-x-3'>
                      <AiFillEye className='text-[11px] md:text-sm lg:text-xl'
                      // onClick={() => setModel(true)}
                      />
                    </li>
                  </ul>
                  :
                  <div className='overflow-y-auto h-[25rem] overflow-hidden'>
                    {
                      Teams.length > 0
                        ?
                        Teams.map((team, i) => {
                          return (
                            <ul key={i}
                              className='flex items-center space-x-2 justify-between font-normal md:px-2 2xl:px-10 py-2 rounded-lg cursor-pointer hover:bg-gray-100 my-3'>
                              <li className='w-10 text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base '>
                                <input type="radio"
                                  onChange={SelectTeam}
                                  // checked={team.isChecked || false}  
                                  id={team.team_id} className='cursor-pointer' />
                              </li>
                              <div className='flex items-center w-52 space-x-3'>

                                <li className=' flex justify-center items-center'>
                                  <img src={team.team_logo} alt="" className='rounded-full border-[3px] border-gray-500 shadow-sm md:w-14' />
                                </li>
                                <li className='text-start font-semibold text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-base '>{team.team_name}</li>
                              </div>
                              <li className='w-20 text-center bg-gray-400 shadow-sm py-1 rounded-md font-semibold text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm '>
                                {team.total_players < 10 ? '0' + team.total_players : team.total_players}
                              </li>
                              <li className='w-28 text-center bg-blue-300 shadow-sm py-1 rounded-md font-semibold text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm overflow-hidden'>
                                {team.matches_played < 10 ? '0' + team.matches_played : team.matches_played}
                              </li>
                              <li className='w-20 text-center bg-green-300 shadow-sm py-1 rounded-md font-semibold text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm'>
                                {team.matches_won < 10 ? '0' + team.matches_won : team.matches_won}
                              </li>
                              <li className='w-20 text-center bg-red-300 shadow-sm py-1 rounded-md font-semibold text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm'>
                                {team.matches_lost < 10 ? '0' + team.matches_lost : team.matches_lost}
                              </li>
                              <li className='w-10 text-start flex items-center justify-center space-y-2 md:space-y-0 md:space-x-3'>
                                <AiFillEye className='text-[11px] md:text-sm lg:text-xl'
                                // onClick={() => setModel(true)}
                                />
                              </li>
                            </ul>
                          )
                        })
                        :
                        <div className='flex justify-center items-center mt-16 md:mt-24'>
                          <AiOutlineTeam className="text-2xl xs:text-3xl sm:text-5xl text-gray-400 mr-2" />
                          <p className='text-xs xs:text-sm sm:text-lg font-medium text-gray-400'>No Team Found</p>
                        </div>
                    }
                  </div>
              }

            </div>
          </div>

          {/* Particular Team All Players */}
          <div className='py-5 '>
            <h1 className=' font-semibold md:text-2xl px-5'>
              Player List
            </h1>
            <div className='md:px-5 py-2 rounded-md bg-white shadow-md my-5  '>
              <ul className='flex md:px-2 2xl:px-10 justify-between py-[10px] border-b-2 border-gray-400 text-black font-medium px-2 '>
                <li className=' text-center flex  justify-center items-center space-x-2  '>
                  <input type="checkbox" name="" id="" className='cursor-pointer' />
                </li>
                <li className='w-52 text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base '>Player</li>
                <li className='w-20 text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base '>Total_Points</li>
                <li className='w-32 text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base '>Matches Played</li>
                <li className='w-20 text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base '>Won</li>
                <li className='w-20 text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base '>Loss</li>
                <li className='text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base '>Action</li>
              </ul>
              {
                Players.length > 0 ?
                  Teams.map((team, i) => {
                    return (
                      <ul key={i} className='flex items-center space-x-2 justify-between font-normal md:px-2 2xl:px-10 py-2 rounded-lg cursor-pointer hover:bg-gray-100 my-3'>
                        <li className=' text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base '>
                          <input type="checkbox"
                            // checked={team.isChecked || false}  
                            id={team.team_id} className='cursor-pointer' />
                        </li>
                        <div className='flex items-center justify-start w-52 space-x-3'>

                          <li className=' flex justify-center items-center'>
                            <img src={team.team_logo} alt="" className='rounded-full border-[3px] border-gray-500 shadow-sm md:w-14' />
                          </li>
                          <li className='text-start font-semibold text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-base '>{team.team_name}</li>
                        </div>
                        <li className='w-20 text-center bg-yellow-500 shadow-sm py-1 rounded-md font-semibold text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm '>
                          {team.total_players < 10 ? '0' + team.total_players : team.total_players}
                        </li>
                        <li className='w-28 text-center bg-blue-300 shadow-sm py-1 rounded-md font-semibold text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm overflow-hidden'>
                          {team.matches_played < 10 ? '0' + team.matches_played : team.matches_played}
                        </li>
                        <li className='w-20 text-center bg-green-300 shadow-sm py-1 rounded-md font-semibold text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm'>
                          {team.matches_won < 10 ? '0' + team.matches_won : team.matches_won}
                        </li>
                        <li className='w-20 text-center bg-red-300 shadow-sm py-1 rounded-md font-semibold text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm'>
                          {team.matches_lost < 10 ? '0' + team.matches_lost : team.matches_lost}
                        </li>
                        <li className='w-10 text-start flex items-center justify-center space-y-2 md:space-y-0 md:space-x-3'>
                          <AiFillEye className='text-[11px] md:text-sm lg:text-xl'
                          // onClick={() => setModel(true)}
                          />
                        </li>
                      </ul>
                    )
                  })
                  :
                  <div className="bg-red-100 w-full mt-4 text-center">
                    <h4 className='text-red-700 font-medium p-2'>No Players Found</h4>
                  </div>
              }

            </div>
          </div>
          {
            Players.length > 0 ?
              <div className='flex justify-end items-end w-full space-x-5 '>
                <button
                  type="submit"
                  className="bg-slate-900 relative inline-flex items-center justify-center px-6 py-2 overflow-hidden text-white rounded-lg cursor-pointer group"
                  onClick={() => navigate(-1)}
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#ee6730] rounded-lg group-hover:w-full group-hover:h-56"></span>
                  <span className="relative">
                    Cancle
                  </span>
                </button>
                <button
                  type="submit"
                  className="bg-[#ee6730] relative inline-flex items-center justify-center px-6 py-2 overflow-hidden text-white rounded-lg cursor-pointer group"
                  onClick={handleSubmit}
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out  bg-slate-900 rounded-lg group-hover:w-full group-hover:h-56"></span>
                  <span className="relative">
                    SUBMIT
                  </span>
                </button>

              </div>
              :
              ""
          }

        </form>
      </div>
    </section>
  )
}

export default TeamRegister
