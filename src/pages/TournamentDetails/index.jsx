import { lazy } from 'react'
import Heading from '../../Component/Heading'
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../../Component/Button'


const TournamentDetails = () => {
  const isPublicView = false;
  const params = useParams();
  const navigate = useNavigate();

  const Tournamentdetails = {
    starting_date: '11-01-2023',
    ending_date: '22-01-2023',
    tournament_type: 'Knock out',
    tournament_category: 'Only for Boys',
    tournament_level: 'National',
    city_name: 'Ahmedabad',
    about_tournament: 'Hello',
    referee: [
      { id: 1, referee_name: 'Shad', referee_mobile: "1234567890" },
      { id: 2, referee_name: 'Shad', referee_mobile: "1234567890" }
    ],
    sponsor: [
      { id: 1, sponsor_name: 'Sadikali karadiya', sponsor_logo: '/CBL_Images/basketball_team_logo_2.webp' },
      { id: 2, sponsor_name: 'Deepak Prajapati', sponsor_logo: '/CBL_Images/basketball_team_logo_2.webp' },
      { id: 2, sponsor_name: 'Moin Don', sponsor_logo: '/CBL_Images/basketball_team_logo_2.webp' },

    ],
    sponsor_mobile: '1234567890',
    age_restriction: 'no',
    age_cutoff: 'Under 21',
    price: "150 Dega"

  }
  return (
    <>
      <section className="min-h-screen">
        <div className='heading-container flex justify-center items-center h-24 sm:h-32 md:h-48'>
          <div className=''>
            <Heading margin={true} text={'Tournament Details'} />
          </div>
        </div>
        <div className='mx-auto px-10  sm:px-20 mb-10 md:px-20  lg:px-24 xl:px-28 2xl:px-32'>
          {/* -----------------------Tounament_Details---------------------------*/}
          {/* <div className=''>
              <h3 className='text-2xl font-semibold text-[#ee6730]'>Tournament Information:</h3>
            </div> */}
          {/* Starting Date && Ending Date && Tournament Type */}
          <div className="flex flex-col md:flex-row  gap-6 my-7 ">
            <div className="flex space-x-5  w-full ">
              <div className="w-full">
                <label className="mb-2 text-gray-400">Start Date</label>
                <div className="border-2 border-orange-100 px-2 py-2 my-2 rounded-lg bg-white capitalize font-medium">
                  <p>
                    {Tournamentdetails.starting_date == '' ? '--' : Tournamentdetails.starting_date}
                  </p>
                </div>
              </div>
              <div className="w-full">
                <label className="mb-2 text-gray-400">End Date</label>
                <div className="border-2 border-orange-100 px-2 py-2 my-2 rounded-lg bg-white capitalize font-medium">
                  <p>
                    {Tournamentdetails.ending_date == '' ? '--' : Tournamentdetails.ending_date}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-col flex w-full">
              <label className="mb-2 text-gray-400">
                Tournament Type
              </label>
              <div className="border-2 border-orange-100 px-2 py-2 rounded-lg bg-white capitalize font-medium">
                <p>
                  {Tournamentdetails.tournament_type == '' ? '--' : Tournamentdetails.tournament_type}
                </p>
              </div>
            </div>
          </div>
          {/* Tournament Category && Tournament Level */}
          <div className="flex flex-col md:flex-row  2 gap-6 my-7 ">
            <div className="flex flex-col w-full">
              <label className="mb-2 text-gray-400">
                Tournament Category
              </label>
              <div className="border-2 border-orange-100 px-2 py-2 rounded-lg bg-white capitalize font-medium">
                <p>
                  {Tournamentdetails.tournament_category == '' ? '--' : Tournamentdetails.tournament_category}
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label className="mb-2 text-gray-400">
                Tournament level
              </label>
              <div className="border-2 border-orange-100 px-2 py-2 rounded-lg bg-white capitalize font-medium">
                <p>
                  {Tournamentdetails.tournament_level == '' ? '--' : Tournamentdetails.tournament_level}
                </p>
              </div>
            </div>
          </div>
          {/* City name && Price Money */}
          <div className="flex flex-col md:flex-row  2 gap-6 my-7 ">
            <div className="flex flex-col w-full">
              <label className="mb-2 text-gray-400">
                Price 
              </label>
              <div className="border-2 border-orange-100 px-2 py-2 rounded-lg bg-white capitalize font-medium">
                <p>
                  {Tournamentdetails.price == '' ? '--' : Tournamentdetails.price}
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label className="mb-2 text-gray-400">
                Tournament level
              </label>
              <div className="border-2 border-orange-100 px-2 py-2 rounded-lg bg-white capitalize font-medium">
                <p>
                  {Tournamentdetails.city_name == '' ? '--' : Tournamentdetails.city_name}
                </p>
              </div>
            </div>
          </div>
          {/*  age_restriction && age_cutoff */}
          <div className="flex flex-col md:flex-row  gap-6 my-7 ">
            <div className="flex flex-col md:flex-row  gap-6 lg:space-x-5 items-center  w-full ">
              <div className="w-full flex-col">
                <label className="">Age Restriction</label>
                <div className="flex justify-center mt-2 items-center border-2 border-orange-100 px-2 rounded-lg bg-white py-[9px] space-x-20 ">
                  <div className="flex items-center space-x-1">
                    <input type="radio"
                      className="cursor-pointer"
                      name="age_restriction"
                      id="no"
                    />
                    <label htmlFor="No">No</label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <input type="radio"
                      className='cursor-pointer'
                      name="age_restriction"
                      id="yes"
                      checked
                      value="yes"
                    />
                    <label htmlFor="No">Yes</label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <label className="mb-2 text-gray-400">
                  Tournament level
                </label>
                <div className="border-2 border-orange-100 px-2 py-2 rounded-lg bg-white capitalize font-medium">
                  <p>
                    {Tournamentdetails.age_cutoff == '' ? '--' : Tournamentdetails.age_cutoff}
                  </p>
                </div>
              </div>

            </div>
          </div>
          {/* About Tournament */}
          <div className='flex flex-1'>
            <div className='w-full flex flex-col'>
              <label className="mb-2 text-gray-400">About Team</label>
              <div className={`border-2 border-orange-100 px-2 py-2 capitalize font-medium rounded-lg bg-white ${isPublicView ? 'h-32 lg:h-[328px]' : 'h-32 lg:h-[328px]'} overflow-y-auto`}>
                {Tournamentdetails.about_tournament}
              </div>
            </div>
          </div>


          {/* -----------------------Refree_Details---------------------------*/}
          <div className="my-5">
            <div className='py-5'>
              <h3 className='text-2xl font-semibold text-[#ee6730]'>Referee Information:</h3>
            </div>
            <div className="flex flex-col  items-center " >
              {
                Tournamentdetails.referee.length > 0
                  ?
                  Tournamentdetails.referee.map((item, index) => {
                    return (
                      <div className="flex flex-col lg:flex-row items-center w-full gap-6 py-4 ">
                        <div className="flex flex-col w-full">
                          <label className="mb-2 text-gray-400">
                            Referee Name
                          </label>
                          <div className="border-2 border-orange-100 px-2 py-2 rounded-lg bg-white capitalize font-medium">
                            <p>
                              {item.referee_name == '' ? '--' : item.referee_name}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col w-full">
                          <label className="mb-2 text-gray-400">
                            Referee Mobile
                          </label>
                          <div className="border-2 border-orange-100 px-2 py-2 rounded-lg bg-white capitalize font-medium">
                            <p>
                              {item.referee_mobile == '' ? '--' : item.referee_mobile}
                            </p>
                          </div>
                        </div>

                      </div>
                    )
                  })
                  :
                  <div className="bg-red-100 w-full mt-4 text-center">
                    <h4 className='text-red-700 font-medium p-2'>No Referee Found</h4>
                  </div>
              }


            </div>
          </div>

          {/* -----------------------Sponsor_Details---------------------------*/}
          <div className="my-5">
            <div className='py-5'>
              <h3 className='text-2xl font-semibold text-[#ee6730]'>Sponsor Information:</h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 py-5  items-center">
              {
                Tournamentdetails.sponsor.length > 0
                  ?
                  Tournamentdetails.sponsor.map((item, index) => {
                    return (
                      <div className="flex  flex-col sm:flex-row gap-5 shadow-md shadow-[#ea5a2e29] duration-150 text-[#ea592e] justify-center items-center  px-5 py-4 rounded-lg bg-white capitalize font-medium">
                        <img src={item.sponsor_logo} alt="" className='w-20 shadow-2xl border border-[#ea592e] rounded-full' />
                        <p>
                          {item.sponsor_name == '' ? '--' : item.sponsor_name}

                        </p>
                      </div>
                    )
                  })
                  :
                  <div className="bg-red-100 w-full mt-4 text-center">
                    <h4 className='text-red-700 font-medium p-2'>No Sponsor Found</h4>
                  </div>
              }

            </div>

          </div>


          {/* Clear_Button && Submit_Button */}
          {
            !isPublicView
              ?
              <div className='mt-2 w-full flex justify-center lg:justify-end items-center'>
                {/* <Button text="Edit Team"  /> */}
                <button
                  type="button"
                  onClick={() => { navigate('/tournament-add-edit') }}
                  className="bg-[#ee6730] relative inline-flex items-center justify-center px-10 py-2 overflow-hidden text-white rounded-lg cursor-pointer group mr-3"
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-slate-900 rounded-lg group-hover:w-full group-hover:h-56"></span>
                  <span className="relative">Edit Tournament</span>
                </button>
              </div>
              :
              null
          }
        </div>
      </section>
    </>
  );
};

export default TournamentDetails
