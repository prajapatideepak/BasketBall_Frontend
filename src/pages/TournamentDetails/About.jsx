import { lazy } from 'react'
import Heading from '../../Component/Heading'
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../../Component/Button'


const About = ({Tournamentdetails}) => {
  const isPublicView = false;
  const params = useParams();
  const navigate = useNavigate();

  return (
    <>
      <section className="">
        <div className=''>
          {/* -----------------------Tounament_Details---------------------------*/}
          {/* <div className=''>
              <h3 className='text-2xl font-semibold text-[#ee6730]'>Tournament Information:</h3>
            </div> */}
          {/* Starting Date && Ending Date && Tournament Type */}
          <div className="flex flex-col md:flex-row  gap-6 my-7 ">
            <div className="flex sm:space-x-5  w-full sm:flex-row flex-col">
              <div className="w-full sm:mb-0 mb-5">
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
                City
              </label>
              <div className="border-2 border-orange-100 px-2 py-2 rounded-lg bg-white capitalize font-medium">
                <p>
                  {Tournamentdetails.city_name == '' ? '--' : Tournamentdetails.city_name}
                </p>
              </div>
            </div>
          </div>
          {/* Tournament Category && Tournament Level */}
          <div className="flex flex-col md:flex-row  2 gap-6 my-7 ">
            <div className="flex flex-col w-full">
              <label className="mb-2 text-gray-400">
                Category
              </label>
              <div className="border-2 border-orange-100 px-2 py-2 rounded-lg bg-white capitalize font-medium">
                <p>
                  {Tournamentdetails.tournament_category == '' ? '--' : Tournamentdetails.tournament_category}
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label className="mb-2 text-gray-400">
                Level
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
            <div className="flex space-x-5  w-full ">
              <div className="flex flex-col w-full">
                <label className="mb-2 text-gray-400">
                  Type
                </label>
                <div className="border-2 border-orange-100 px-2 py-2 rounded-lg bg-white capitalize font-medium">
                  <p>
                    {Tournamentdetails.tournament_type == '' ? '--' : Tournamentdetails.tournament_type}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full sm:space-x-5 sm:flex-row flex-col ">
              <div className="w-full flex-col sm:mb-0 mb-5">
                <label className="mb-2 text-gray-400">Age Restriction</label>
                <div className="flex justify-center mt-2 items-center border-2 border-orange-100 px-2 rounded-lg bg-white py-[9px] space-x-20 ">
                  <div className="flex items-center space-x-1">
                    <input type="radio"
                      disabled={true}
                      checked={Tournamentdetails.age_restriction == 1 ? true : false}
                      name="age_restriction"
                      id="yes"
                      value="yes"
                    />
                    <label htmlFor="yes">Yes</label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <input type="radio"
                      disabled={true}
                      checked={Tournamentdetails.age_restriction == 0 ? true : false}
                      name="age_restriction"
                      id="no"
                    />
                    <label htmlFor="no">No</label>
                  </div>
                </div>
              </div>
              {
                Tournamentdetails.age_restriction
                ?
                  <div className="flex flex-col w-full">
                    <label className="mb-2 text-gray-400">
                      Age Cut-off
                    </label>
                    <div className="border-2 border-orange-100 px-2 py-2 rounded-lg bg-white capitalize font-medium">
                      <p>
                        {Tournamentdetails.age_cutoff == '' ? '--' : Tournamentdetails.age_cutoff}
                      </p>
                    </div>
                  </div>
                :
                  null
              }
            </div>
          </div>
          {/* About Tournament */}
          <div className='flex flex-1'>
            <div className='w-full flex flex-col'>
              <label className="mb-2 text-gray-400">About Tournament</label>
              <div className={`border-2 border-orange-100 px-2 py-2 capitalize font-medium rounded-lg bg-white overflow-y-auto`}>
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
                      <div key={index} className="flex flex-col lg:flex-row items-center w-full gap-6 py-4 ">
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

export default About
