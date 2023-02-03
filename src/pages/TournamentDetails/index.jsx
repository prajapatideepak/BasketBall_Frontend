import { lazy } from 'react'
import Heading from '../../Component/Heading'

const TournamentDetails = () => {
  const Tournamentdetails = {
    starting_date: '11-01-2023',
    ending_date: '22-01-2023',
    tournament_type: 'Knock out',
    tournament_category: 'Only for Boys',
    tournament_level: 'National',
    city_name: 'Ahmedabad',
    about_tournament: '',
    referee_name: 'Shad',
    referee_mobile: '1234567890',
    sponsor_name: 'Sadiq',
    sponsor_mobile: '1234567890',
    age_restriction: 'no',
    age_cutoff: 'Under 21'

  }
  return (
    <>
      <section className="min-h-screen">
        <div className='heading-container flex justify-center items-center h-24 sm:h-32 md:h-48'>
          <div className=''>
            <Heading text={'Tournament Details'} />
          </div>
        </div>
        <div className='mx-auto px-10 py-12 sm:px-20 sm:py-12 md:px-20 md:py-16 lg:px-24 xl:px-28 2xl:px-32'>
          <form action="" >
            {/* -----------------------Tounament_Details---------------------------*/}
            <div className=''>
              <h3 className='text-2xl font-semibold text-[#ee6730]'>Tournament Information:</h3>
            </div>
        
            {/* Starting Date && Ending Date && Tournament Type */}
            <div className="flex flex-col md:flex-row  gap-6 my-7 ">
              <div className="flex space-x-5  w-full ">
                <div className="w-full">
                  <label className="">Starting Date *</label>
                  <input
                    className="w-full outline-blue-200 rounded-lg border-2 border-gray-200 py-3 px-2 my-2 text-gray-400 text-sm"
                    type="date"
                    value={TournamentDetails.starting_date == "" ? "--" : TournamentDetails.starting_date}
                    name="starting_date"
                    id="starting_date"
                   
                  />
                  
                </div>
                <div className="w-full">
                  <label className="">Ending Date *</label>
                  <input
                    className="w-full outline-blue-200 rounded-lg border-2 border-gray-200 py-3 my-2 text-gray-400 px-3 text-sm"
                    placeholder="Enter Tournament name"
                    type="date"
                    value={TournamentDetails.ending_date}
                    name="ending_date"
                    id="ending_date"
                    
                  />
                  
                </div>
              </div>
              <div className="flex-col flex w-full">
                <div className="flex flex-col w-full">
                  <label className="mb-2">Tournament Type *</label>
                  <select name=""
                    className="w-full cursor-pointer rounded-lg bg-white focus:outline-blue-200 border-2 border-gray-200  px-2 py-3 text-sm"
                    id="tournament_type"
                    value={TournamentDetails.tournament_type}
                  >
                    <option value="">--Tournament Type--</option>
                    <option value="League">League</option>
                    <option value="Knock out">Knock out</option>
                    <option value="League / Knock out">League / Knock out</option>
                  </select>
                </div>
                
              </div>
            </div>
            {/* Tournament Category && Tournament Level */}
            <div className="flex flex-col md:flex-row  2 gap-6 my-7 ">
              <div className="flex flex-col w-full">
                <div className="flex flex-col w-full">
                  <label className="mb-2">Tournament Category *</label>
                  <select name=""
                    className="w-full cursor-pointer px-2 rounded-lg bg-white border-2 outline-blue-200 border-gray-200 py-3 text-sm"
                    id="tournament_category"
                    value={TournamentDetails.tournament_category}
                  >
                    <option value="">--Tournament Category--</option>
                    <option value="Only For Girls">Only For Girls</option>
                    <option value="Only For Boys">Only For Boys</option>
                    <option value="For Both (Girls and Boys)">For Both (Girls and Boys)</option>
                  </select>
                </div>
               
              </div>
              <div className="flex flex-col w-full">
                <label className="mb-2">Tournament Level *</label>
                <select name=""
                  className="w-full cursor-pointer px-2 rounded-lg bg-white border-2 outline-blue-200 border-gray-200 py-3 text-sm"
                  id="tournament_level"
                  value={TournamentDetails.tournament_level}
                >
                  <option value="">--Tournament Level--</option>
                  <option value="International">International</option>
                  <option value="National">National</option>
                  <option value="State">State</option>
                  <option value="City">City</option>
                  <option value="Local">Local</option>
                  <option value="Friendly">Friendly</option>
                </select>
               
              </div>
            </div>
            {/* City_name && age_restriction && age_cutoff */}
            <div className="flex flex-col md:flex-row  gap-6 my-7 ">
              <div className="flex flex-col w-full">
                <label className="mb-2">City Name *</label>
                <input
                  className="w-full outline-blue-200 rounded-lg border-2 border-gray-200 py-3 px-3 text-sm"
                  placeholder="Enter City Name"
                  type="text"
                  name="city_name"
                  id="city_name"
                  value={TournamentDetails.city_name == "" ? "--" : TournamentDetails.city_name}
                />
               
              </div>
              <div className="flex space-x-5 items-center  w-full ">
                <div className="w-full flex-col">
                  <label className="">Age Restriction</label>
                  <div className="flex justify-start items-center space-x-7 my-4 ">
                    <div className="flex items-center space-x-1">
                      <input type="radio"
                        className="cursor-pointer"
                        name="age_restriction"
                        id="no"
                        value="no"
                        checked={true}
                       

                      />
                      <label htmlFor="No">No</label>
                    </div>
                    <div className="flex items-center space-x-1">
                      <input type="radio"
                        className='cursor-pointer'
                        name="age_restriction"
                        id="yes"
                        value="yes"
                      
                      />
                      <label htmlFor="No">Yes</label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <label className="mb-2">Age cutoff</label>
                  <select name=""
                    className="w-full cursor-pointer  px-2 rounded-lg bg-white border-2 outline-blue-200 border-gray-200 py-3 text-sm"
                    id="age_cutoff"
                  >
                    
                    <option value="Under 21">Under 21</option>
                    <option value="Under 18">Under 18</option>
                    <option value="Under 16">Under 16</option>
                    <option value="Under 14">Under 14</option>
                  </select>
                </div>
             
              </div>
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
                />
                 </div>
            </div>


            {/* -----------------------Refree_Details---------------------------*/}
            <div className="my-5">
              <div className='py-5'>
                <h3 className='text-2xl font-semibold text-[#ee6730]'>Referee Information:</h3>
              </div>
                <div className="flex flex-col  items-center " >
                  <div className="flex flex-col lg:flex-row items-center w-full gap-6 py-4 ">
                    <div className="flex flex-col w-full">
                      <label className="mb-2">Referee Name *</label>
                      <input
                        className="w-full outline-blue-200 rounded-lg border-2 border-gray-200 py-3 px-3 text-sm"
                        placeholder="Enter Referee Name"
                        type="text"
                        name="referee_name"
                        id="referee_name"
                      />
                       
                    </div>
                    <div className="flex flex-col w-full">
                      <label className="mb-2">Referee Mobile *</label>
                      <input
                        className="w-full  rounded-lg bg-white border-2 px-3 outline-blue-200 border-gray-200 py-3 text-sm"
                        type="text"
                        placeholder="Enter Referee Mobile"
                        name="referee_mobile"
                        id="referee_mobile"
                      />
                    </div>

                  </div>

                </div>
            </div>

            {/* -----------------------Sponsor_Details---------------------------*/}
            <div className="my-5">
              <div className='py-5'>
                <h3 className='text-2xl font-semibold text-[#ee6730]'>Sponsor Information:</h3>
              </div>
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

                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="mb-2">Choose Logo ( PNG, JPG, JPEG )</label>
                    <input
                      className="w-full cursor-pointer rounded-lg bg-white border-2 border-gray-200 py-[9px] px-3 text-sm"
                      type="file"
                      name="sponsor_logo"
                      id="sponsor_logo"
                      accept='.png, .jpg, .jpeg'
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default TournamentDetails
