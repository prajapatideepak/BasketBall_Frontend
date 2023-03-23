import React, { useState, useEffect } from 'react'
import Heading from '../../../Component/Heading'
import { useFormik } from "formik";
import { AiOutlineTeam, AiOutlineSearch } from 'react-icons/ai';
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';

function TeamRegister() {
  const navigate = useNavigate()
  const [Teams, setTeam] = React.useState([])
  const [TeamPlayers, setTeamPlayers] = React.useState([])
  const allteams = [
    {
      team_id: 1001,
      team_logo: '/CBL_Images/basketball_team_logo_1.webp',
      team_name: 'Mehta Ke Mahaarathi',
      players: [
        { id: 1, name: 'Sadikali karadiya', position: 'point guard', age: 24, jersey_no: 10 },
        { id: 2, name: 'Deepak Prajapati', position: 'center', age: 26, jersey_no: 11 },
        { id: 1, name: 'Sadikali karadiya', position: 'point guard', age: 25, jersey_no: 12 },
        { id: 2, name: 'Deepak Prajapati', position: 'center', age: 22, jersey_no: 13 },
        { id: 1, name: 'Sadikali karadiya', position: 'point guard', age: 22, jersey_no: 14 },
        { id: 2, name: 'Deepak Prajapati', position: 'center', age: 23, jersey_no: 15 },
      ],
    },
    {
      team_id: 1002,
      team_logo: '/CBL_Images/basketball_team_logo_1.webp',
      team_name: 'Mehta Ke Mahaarathi',
      players: [
        { id: 1, name: 'Sadikali karadiya', position: 'point guard', age: 24, jersey_no: 10 },
        { id: 2, name: 'Deepak Prajapati', position: 'center', age: 26, jersey_no: 11 },
        { id: 1, name: 'Sadikali karadiya', position: 'point guard', age: 25, jersey_no: 12 },
        { id: 2, name: 'Deepak Prajapati', position: 'center', age: 22, jersey_no: 13 },
        { id: 1, name: 'Sadikali karadiya', position: 'point guard', age: 22, jersey_no: 14 },
        { id: 2, name: 'Deepak Prajapati', position: 'center', age: 23, jersey_no: 15 },
      ],
    },
    {
      team_id: 1003,
      team_logo: '/CBL_Images/basketball_team_logo_1.webp',
      team_name: 'Mehta Ke Mahaarathi',
      players: [
        { id: 1, name: 'Sadikali karadiya', position: 'point guard', age: 24, jersey_no: 10 },
        { id: 2, name: 'Deepak Prajapati', position: 'center', age: 26, jersey_no: 11 },
        { id: 1, name: 'Sadikali karadiya', position: 'point guard', age: 25, jersey_no: 12 },
        { id: 2, name: 'Deepak Prajapati', position: 'center', age: 22, jersey_no: 13 },
        { id: 1, name: 'Sadikali karadiya', position: 'point guard', age: 22, jersey_no: 14 },
        { id: 2, name: 'Deepak Prajapati', position: 'center', age: 23, jersey_no: 15 },
      ],
    },
  ]

  useEffect(() => {
    setTeam(allteams)
  }, []);

  const handleSelectTeam = (e) => {
    const id = e.target.id
    const checked = e.target.checked
    let AllTeams = Teams.map(team => team.team_id == id ? { ...team, isChecked: checked } : team);
    let SelectedTeam = AllTeams.filter(AllTeams => {
      return AllTeams.isChecked == true
    })
    setTeam(AllTeams)
    setTeamPlayers(SelectedTeam[0].players)
  }

  const handleSelectPlayer = (e) => {
    const name = e.target.name
    const value = e.target.value
    const checked = e.target.checked
    if (name === "AllSelect") {
      let AllPlayers = TeamPlayers.map((player) => {
        return { ...player, isChecked: checked }
      });
      setTeamPlayers(AllPlayers)
    } else {
      let AllPlayers = TeamPlayers.map(player => player.id == value ? { ...TeamPlayers, isChecked: checked } : player);
      setTeamPlayers(AllPlayers)
      console.log(AllPlayers)
    }
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
      alert("Hello")
      // ---------------- Confirmation for update -----------------------
      // Swal.fire({
      //   title: "Are you sure?",
      //   text: "You won't be create Tournament!!",
      //   icon: "warning",
      //   showCancelButton: true,
      //   confirmButtonColor: "#3085d6",
      //   cancelButtonColor: "#d33",
      //   confirmButtonText: "Yes, Create it!",
      // }).then((result) => {
      //   if (result.isConfirmed) {
      //     const response = "Create";
      //     if (response) {
      //       navigate("/tournaments");
      //       toast.success("Tournament Create Successfully!");
      //     } else {
      //       toast.error("Something went wrong");
      //     }
      //   }
      // });
    },
  });


  return (
    <section className='min-h-screen'>
      <div className="mx-auto px-10 py-12 sm:px-20 sm:py-12 md:px-20 md:py-10 lg:px-24 xl:px-28 2xl:px-32">
        <Heading text="Champion League" margin={true} />
        {/* Tournament Category && Age Cutoff */}
        <form action="" onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row md:flex-col xl:flex-row items-center  sm:space-y-5 xl:space-y-0 py-5 xl:mt-10">
            <div className="flex flex-col justify-start sm:justify-center md:items-start px-2 items-start sm:items-center  rounded-md w-full">
              <label className="mb-2 text-lg md:text-xl lg:text-2xl text-start font-semibold">Category *</label>
              <div className="grid grid-rows md:grid-flow-row lg:grid-cols-3 gap-5 py-2 ">
                {
                  Teams.map((team, index) => {
                    return (
                      <div className="flex bg-gray-200 hover:shadow-md px-5  py-2 rounded-md shadow-sm w-full flex-row  items-center space-x-3">
                        <input type="checkbox"
                          name="tournament_category"
                          id="tournament_category"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="cursor-pointer" />
                        <label htmlFor="Only for girls" className="text-sm ">Only For Girls</label>
                      </div>
                    )
                  })
                }
              </div>
              {
                errors.tournament_category && touched.tournament_category
                  ?
                  <small className='text-red-600 mt-2'>{errors.tournament_category}</small>
                  :
                  null
              }
            </div>
            <div className="flex flex-col justify-start sm:justify-center px-2 items-start sm:items-center md:items-start rounded-md w-full">
              <label className="mb-2 text-lg md:text-xl lg:text-2xl text-start font-semibold">Age_Cutoff *</label>
              <div className=" rounded-md ">
                <div className="grid grid-rows md:grid-flow-row lg:grid-cols-3 gap-5 py-2 ">
                  {
                    Teams.map((team, index) => {
                      return (
                        <div className="flex bg-gray-200 hover:shadow-md px-5 py-2 rounded-md shadow-sm w-full items-center space-x-3">
                          <input type="checkbox"
                            name="age_cutoff"
                            id="age_cutoff"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="cursor-pointer" />
                          <label htmlFor="Only for girls" className="text-sm ">Under 14</label>
                        </div>
                      )
                    })
                  }
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
          <div className='py-5 w-full'>
            <h1 className='font-semibold text-lg md:text-xl lg:text-2xl '>
              Team List
            </h1>
            <div className=' py-2 rounded-md  '>
              <div className='overflow-x-auto space-x-10 overflow-hidden flex items-center md:px-5' >
                {
                  Teams.length > 0
                    ?
                    Teams.map((team, index) => {
                      return (
                        <div key={index}
                          id={team.team_id}
                          onClick={handleSelectTeam}
                          className='flex items-center space-x-5 xl:space-x-2 justify-start font-normal px-5  w-full py-5 lg:py-6 rounded-lg cursor-pointer bg-white hover:scale-105 duration-300 shadow-md my-3'>
                          {/* <div className='text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base '>
                            <input type="radio"
                              checked={team.isChecked || false}
                              value={team.team_id}
                              className='cursor-pointer' />
                          </div> */}
                          <div className='w-16 lg:w-20 flex justify-center items-center'>
                            <img src={team.team_logo} alt="" className='rounded-full border-[3px] border-gray-500 shadow-sm md:w-14' />
                          </div>
                          <p className='text-start font-semibold text-sm md:text-base  2xl:text-[17px] '>{team.team_name}</p>
                        </div>
                      )
                    })
                    :
                    <div className='flex justify-center items-center mt-16 md:mt-24'>
                      <AiOutlineTeam className="text-2xl xs:text-3xl sm:text-5xl text-gray-400 mr-2" />
                      <p className='text-xs xs:text-sm sm:text-lg font-medium text-gray-400'>No Team Found</p>
                    </div>
                }
              </div>
            </div>
          </div>
          <div className='w-full'>
            <h1 className=' font-semibold text-lg md:text-2xl'>
              Player List
            </h1>
            <div className='md:px-5 py-2 rounded-md my-5 px-2 '>
              <ul className='flex md:px-2 2xl:px-10 justify-between bg-gray-300 py-[10px]  rounded-md text-black font-medium '>
                {
                  TeamPlayers.length > 0 ?
                    <li className='w-20 text-center flex justify-center items-center space-x-2  '>
                      <p className='hidden lg:block'>All</p>
                      <input type="checkbox" name="AllSelect" id="" className='cursor-pointer' onChange={handleSelectPlayer} />
                    </li>
                    :
                    null
                }
                <li className='w-10 text-center text-xs  sm:text-[9.5px] md:text-[12px] lg:text-base 2xl:text-lg '>Sr.No</li>
                <li className='w-32 text-center text-xs  sm:text-[9.5px] md:text-[12px] lg:text-base 2xl:text-lg '>Name</li>
                <li className='w-10 text-center text-xs  sm:text-[9.5px] md:text-[12px] lg:text-base 2xl:text-lg '>Age</li>
                <li className='w-32 text-center text-xs  sm:text-[9.5px] md:text-[12px] lg:text-base 2xl:text-lg '>Captain</li>
              </ul>
              <div className='overflow-y-auto  overflow-hidden'>
                {
                  TeamPlayers.length > 0 ?
                    TeamPlayers.map((player, i) => {
                      return (
                        <ul key={i} className='flex px-1 items-center space-x-2 justify-between font-normal md:px-2 2xl:px-10 py-2 md:py-5 bg-white shadow-md rounded-lg cursor-pointer hover:bg-gray-100 my-3'>
                          <li className='w-20 text-center flex justify-center items-center  text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base '>
                            <input type="checkbox"
                              checked={player.isChecked == true ? true : false}
                              onChange={handleSelectPlayer}
                              value={player.id}
                              className='cursor-pointer' />
                          </li>
                          <li className='w-10 text-center flex items-center justify-center text-xs lg:text-sm xl:text-base'>
                            {i + 1}
                          </li>
                          <li className='w-32 text-center flex items-center justify-center text-xs lg:text-sm xl:text-base'>
                            {player.name}
                          </li>
                          <li className='w-10 text-center flex items-center justify-center text-xs lg:text-sm xl:text-base'>
                            {player.age}
                          </li>
                          <li className='w-32 text-center flex items-center justify-center text-xs lg:text-sm xl:text-base'>
                            {player.name}
                          </li>
                        </ul>
                      )
                    })
                    :
                    <div className="bg-red-100 w-full mt-4 text-center rounded-md">
                      <h4 className='text-red-700 text-xs lg:text-base  font-medium p-2'>No Players Found</h4>
                    </div>
                }

              </div>
            </div>
          </div>
          {
            TeamPlayers.length > 0 ?
              <div className='flex justify-center md:justify-end md:items-end w-full space-x-5 py-3 md:py-3 '>
                <button
                  type="submit"
                  className="bg-slate-900 relative inline-flex items-center justify-center md:px-6 py-2 px-4  overflow-hidden text-white rounded-lg cursor-pointer group"
                  onClick={() => navigate(-1)}
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#ee6730] rounded-lg group-hover:w-full group-hover:h-56"></span>
                  <span className="relative text-sm xl:text-base">
                    Cancle
                  </span>
                </button>
                <button
                  type="submit"
                  className="bg-[#ee6730] relative inline-flex items-center justify-center md:px-6 py-2 px-4  overflow-hidden text-white rounded-lg cursor-pointer group"
                  onClick={handleSubmit}
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out  bg-slate-900 rounded-lg group-hover:w-full group-hover:h-56"></span>
                  <span className="relative text-sm xl:text-base">
                    SUBMIT
                  </span>
                </button>


              </div>
              :
              null
          }
        </form>
      </div>
    </section>
  )
}

export default TeamRegister
