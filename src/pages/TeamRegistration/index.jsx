import React from 'react'
import {ImSearch} from 'react-icons/im'
import {BiEdit} from 'react-icons/bi'
import { toast } from "react-toastify";
import * as Yup from 'yup';
import { useFormik } from 'formik'

function TeamRegistration() {
  const initialValues={
    team_name:'',
    team_logo:'',
    about_team:'',
    coach_name: '',
    coach_mobile: '',
    assistant_coach_name: '',
    assistant_coach_mobile: ''
  }

  const validationSchema = Yup.object({
    team_name: Yup.string().matches(/^[a-zA-Z]+$/, "Please enter only characters").min(2, "Team name must be at least 2 characters").max(25,"Team name should not be more than 25 characters").required("Name is required"),
    coach_name: Yup.string().matches(/^[a-zA-Z]+$/, "Please enter only characters").min(2, "Coach name must be at least 2 characters").max(25,"Coach name should not be more than 25 characters"),
    coach_mobile: Yup.string().matches(/^[0-9]+$/, "Please enter only numbers").min(10, "Mobile number should be at least 10 digits").max(10, "Mobile number should be at least 10 digits"),
    assistant_coach_name: Yup.string().matches(/^[a-zA-Z]+$/, "Please enter only characters").min(2, "Asst. Coach name must be at least 2 characters").max(25,"Asst. Coach name should not be more than 25 characters"),
    assistant_coach_mobile: Yup.string().matches(/^[0-9]+$/, "Please enter only numbers").min(10, "Mobile number should be at least 10 digits").max(10, "Mobile number should be at least 10 digits"),
  })


  const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
      validationSchema,
      initialValues,
      onSubmit : (e, data) => {
        e.preventDefault();

        //Cant select more than 12 players
        if(selectedPlayers.length < 5){
          toast.error("Please select atleast 5 players")
          return;
        }

        try{

        }
        catch(err){
          console.log(err)
        }
      }
  })

  const [searchedPlayers, setSearchedPlayers] = React.useState([
    {id:1, name:'Sadikali karadiya', position:'Forward', isEditable: false},
    {id: 2, name:'Moin', position:'Center', isEditable: false}])
  const [searchValue, setSearchValue] = React.useState('');
  const [selectedPlayers, setSelectedPlayers] = React.useState([])

  const handlePlayerSearch = (e) =>{
    setSearchValue(e.target.value)
  }

  const handleSearchPlayerClick = (player_id)=>{
    //Cant select more than 12 players
    if(selectedPlayers.length == 1){
      toast.error("Can't select more than 12 players")
      return;
    }

    //If player already selected
    let isFound = false;
    selectedPlayers.map((item)=>{
      if(item.id == player_id) isFound = true
    })

    if(isFound){
      toast.error('Player already seleted')
      return;
    }
    
    setSearchValue('')
    const selected = searchedPlayers.filter((item)=>{
      return item.id == player_id 
    })

    setSelectedPlayers((prevData)=>{
      return [
        ...prevData,
        ...selected
      ]
    })
  }

  const handleEditPosition = (player_id)=>{
    setSelectedPlayers(
      selectedPlayers.map(item =>{
        return {
          ...item,
          isEditable: item.id == player_id
        }
      })
    )
  }

  const handleSavePosition = (player_id)=>{
    setSelectedPlayers(
      selectedPlayers.map(item =>{
        return {
          ...item,
          isEditable: false
        }
      })
    )
  }

  return (
    <section>
        <div className='heading-container flex justify-center items-center h-24 sm:h-32 md:h-48 bg-black'>
            <span className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
                Team Registration
            </span>
        </div>
        <div className='mx-auto px-10 py-12 sm:px-20 sm:py-12 md:px-20 md:py-16 lg:px-24 xl:px-28 2xl:px-32'>
          <form action="" onSubmit={handleSubmit}>
            <div className=''>
              <h3 className='text-2xl font-semibold text-[#ee6730]'>Team Information:</h3>
            </div>
            <div className="flex md:flex-row flex-col gap-6 my-7">
              <div className='flex flex-1 flex-col'>
                <div className="flex flex-col">
                  <label className="mb-2">Team Name *</label>
                  <input
                    className="w-full outline-blue-200 rounded-lg border-2 border-gray-200 p-2 sm:p-3 text-sm"
                    placeholder="Enter team name"
                    type="text"
                    name="team_name"
                    id="team_name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {
                    errors.team_name && touched.team_name 
                    ? 
                        <small className='text-red-600 mt-2'>{errors.team_name}</small>
                    : 
                        null
                  }
                </div>
                <div className="flex flex-col mt-5">
                  <label className="mb-2">Choose Logo</label>
                  <input
                    className="w-full cursor-pointer rounded-lg bg-white border-2 border-gray-200 p-1 sm:p-2 text-sm"
                    type="file"
                    name="team_logo"
                    id="team_logo"
                    accept='.png, .jpg, .jpeg'
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='flex flex-1'>
                <div className='w-full flex flex-col'>
                  <label className="mb-2">About Team</label>
                  <textarea 
                    className="w-full outline-blue-200 text-sm rounded-lg px-4 py-3 border-2 border-gray-200" 
                    name="about_team" 
                    placeholder='Write something about your team' 
                    rows="6" 
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className='mt-10 sm:mt-20'>
              <h3 className='text-2xl font-semibold text-[#ee6730]'>Coach Information:</h3>
            </div>
            <div className='coach-container w-full flex flex-col lg:flex-row gap-6 my-7'>
              <div className='coach-1-container flex flex-1 flex-col sm:flex-row gap-6'>
                <div className='coach-1-name flex flex-1 flex-col'>
                  <label className="mb-2">Coach Name</label>
                  <input
                    className="w-full outline-blue-200 rounded-lg border-2 border-gray-200 p-2 sm:p-3 text-sm"
                    placeholder="Enter coach name"
                    type="text"
                    name="coach_name"
                    id="coach_name"
                    onChange={handleChange}
                  />
                  {
                    errors.coach_name && touched.coach_name 
                    ? 
                        <small className='text-red-600 mt-2'>{errors.coach_name}</small>
                    : 
                        null
                  }
                </div>
                <div className='coach-1-mobile flex flex-1 flex-col'>
                  <label className="mb-2">Coach Mobile</label>
                  <input
                    className="w-full outline-blue-200 rounded-lg border-2 border-gray-200 p-2 sm:p-3 text-sm"
                    placeholder="Enter coach mobile no."
                    type="text"
                    name="coach_mobile"
                    id="coach_mobile"
                    onChange={handleChange}
                  />
                  {
                    errors.coach_mobile && touched.coach_mobile 
                    ? 
                        <small className='text-red-600 mt-2'>{errors.coach_mobile}</small>
                    : 
                        null
                  }
                </div>
              </div>
              <div className='coach-2-container flex flex-1 flex-col sm:flex-row gap-6'>
                <div className='coach-2-name flex flex-1 flex-col'>
                  <label className="mb-2">Assistant Coach Name</label>
                  <input
                    className="w-full outline-blue-200 rounded-lg border-2 border-gray-200 p-2 sm:p-3 text-sm"
                    placeholder="Enter asst. coach name"
                    type="text"
                    name="assistant_coach_name"
                    id="assistant_coach_name"
                    onChange={handleChange}
                  />
                  {
                    errors.assistant_coach_name && touched.assistant_coach_name 
                    ? 
                        <small className='text-red-600 mt-2'>{errors.assistant_coach_name}</small>
                    : 
                        null
                  }
                </div>
                <div className='coach-2-mobile flex flex-1 flex-col'>
                  <label className="mb-2">Assistant Coach Mobile</label>
                  <input
                    className="w-full outline-blue-200 rounded-lg border-2 border-gray-200 p-2 sm:p-3 text-sm"
                    placeholder="Enter asst. coach mobile no."
                    type="text"
                    name="assistant_coach_mobile"
                    id="assistant_coach_mobile"
                    onChange={handleChange}
                  />
                  {
                    errors.assistant_coach_mobile && touched.assistant_coach_mobile 
                    ? 
                        <small className='text-red-600 mt-2'>{errors.assistant_coach_mobile}</small>
                    : 
                        null
                  }
                </div>
              </div>
            </div>
            <div className='mt-10 sm:mt-20'>
              <h3 className='text-2xl font-semibold text-[#ee6730]'>Player Selection:</h3>
            </div>
            <div className='player-selection w-full flex flex-col xl:flex-row gap-6'>
              <div className='player-search-input-container flex flex-1 flex-col mt-4'>
                <div className="player-input border-2 flex w-full mt-5 rounded-lg border-2 border-gray-200 bg-white flex justify-center items-center outline-blue-200">
                  <span className="text-xl ml-4 text-gray-500"><ImSearch/></span>
                  <input type="text" 
                    className='w-full p-2 sm:p-3 rounded-lg text-sm outline-none' placeholder='Search player by mobile no.' 
                    value={searchValue}
                    onChange={handlePlayerSearch}
                    onFocus={()=> document.querySelector('.player-input').classList.add("border-blue-200")} 
                    onBlur={()=> document.querySelector('.player-input').classList.remove("border-blue-200")} 
                  />
                </div>
                {
                  searchValue != ''
                  ?
                    <div className={`players-search-list-container w-full mt-2 bg-white px-4 py-4 border-2 rounded-lg`}>
                      <table className="items-center bg-transparent w-full border-collapse ">
                        <thead>
                          <tr>
                            <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              Name
                            </th>
                            <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              Position
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                        {
                          searchedPlayers.length > 0 
                          ?
                            searchedPlayers.map((player, index) =>{
                              return(
                                <tr key={index} className="cursor-pointer" onClick={()=> handleSearchPlayerClick(player.id)}>
                                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-gray-700 capitalize">
                                    {player.name}
                                  </th>
                                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 capitalize">
                                    {player.position}
                                  </td>
                                </tr>
                              )
                            })
                          : 
                          <tr>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 font-semibold text-red-500" colSpan="2">
                              No player found
                            </td>
                          </tr>
                        }
                        {/* <Select 
                        className="w-2/4" 
                        options={[
                          {value: 'point_guard', label: 'Point Guard'},
                          {value: 'shooting_guard', label: 'Shooting Guard'},
                          {value: 'center', label: 'Center'},
                          {value: 'power_forward', label: 'Power Forward'},
                          {value: 'shooting_forward', label: 'Shooting Forward'},
                        ]} /> */}
                        </tbody>
                      </table>
                    </div>
                  :
                    null
                }
              </div>
              <div className="players-list-container flex flex-1 lg:mt-0 mt-5">
                  <div className="players-list w-full">
                    <h4 className="text-lg font-semibold text-center text-gray-700">Selected Players</h4>
                    <table className="items-center bg-transparent w-full border-collapse mt-2">
                      <thead>
                        <tr>
                          <th className="pl-6 bg-gray-50 text-gray-500 border border-solid border-gray-100 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Name
                          </th>
                          <th className="bg-gray-50 text-gray-500 border border-solid border-gray-100 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Position
                          </th>
                          <th className="bg-gray-50 text-gray-500 border border-solid border-gray-100 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                      {
                        selectedPlayers.length > 0 
                        ?
                          selectedPlayers.map((player, index) =>{
                            return(
                              <tr key={index}>
                                <th className="border-t-0 px-6 border-l-0 border-r-0 text-sm whitespace-nowrap pl-6 py-4 text-left text-gray-700 capitalize">
                                  {player.name}
                                </th>
                                <td>
                                  <select name="" id="" className='sm:px-1 py-1 rounded-md outline-blue-200 text-sm' disabled={!player.isEditable}>
                                    <option value="point_guard">Point Guard</option>
                                    <option value="shooting_guard">Shooting Guard</option>
                                    <option value="center">Center</option>
                                    <option value="power_forward">Power Forward</option>
                                    <option value="shooting_forward">Shooting Forward</option>
                                  </select>
                                </td>
                                <td>
                                  {
                                    player.isEditable
                                    ?
                                      <button className="px-2 py-0.5 text-white text-sm rounded-md bg-green-600" onClick={()=>handleSavePosition(player.id)}>Save</button>
                                    :
                                      <BiEdit className="cursor-pointer text-xl text-blue-500" onClick={()=>handleEditPosition(player.id)} />
                                  }
                                </td>
                              </tr>
                            )
                          })
                        : 
                        <tr>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 font-semibold text-red-500" colSpan="2">
                            No players selected
                          </td>
                        </tr>
                      }
                      </tbody>
                    </table>
                  </div>
              </div>
            </div>
            <div className="w-full flex justify-end mt-5 sm:mt-10">
              <button type="submit" className="bg-[#ee6730] rounded-md text-white px-6 py-1.5" onClick={handleSubmit}>Submit</button>
            </div>
          </form>
        </div>
    </section>
  )
}

export default TeamRegistration