import moment from 'moment'

const About = ({isOrganizer, tournamentDetails}) => {
  return (
    <>
      <section className="">
        <div className=''>
          {/* -----------------------Tounament_Details---------------------------*/}
          <div className=''>
              <h3 className='text-2xl font-semibold text-[#ee6730]'>Tournament Information:</h3>
            </div>
          {/* Starting Date && Ending Date && Tournament Type */}
          <div className="flex flex-col md:flex-row  gap-6 my-7 ">
            <div className="flex sm:space-x-5  w-full sm:flex-row flex-col">
              <div className="w-full sm:mb-0 mb-5">
                <label className="mb-2 text-xs xs:text-sm md:text-base text-gray-400">Start Date</label>
                <div className="border-2 border-orange-100 px-2 py-2 my-2 rounded-lg bg-white capitalize font-medium text-xs xs:text-sm md:text-base">
                  <p>
                    {moment(tournamentDetails.start_date).format("D MMM YYYY")}
                  </p>
                </div>
              </div>
              <div className="w-full">
                <label className="mb-2 text-gray-400 text-xs xs:text-sm md:text-base">End Date</label>
                <div className="border-2 border-orange-100 px-2 py-2 my-2 rounded-lg bg-white capitalize font-medium text-xs xs:text-sm md:text-base">
                  <p>
                    {moment(tournamentDetails.end_date).format("D MMM YYYY")}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-col flex w-full">
              <label className="mb-2 text-gray-400 text-xs xs:text-sm md:text-base">
                City
              </label>
              <div className="border-2 border-orange-100 px-2 py-2 rounded-lg bg-white capitalize font-medium text-xs xs:text-sm md:text-base">
                <p>
                  {tournamentDetails.address}
                </p>
              </div>
            </div>
          </div>
          {/* Tournament Category && Tournament Level */}
          <div className="flex flex-col md:flex-row  2 gap-6 my-7 ">
            <div className="flex flex-col w-full">
              <label className="mb-2 text-gray-400 text-xs xs:text-sm md:text-base">
                Category
              </label>
              <div className="border-2 border-orange-100 px-2 py-2 rounded-lg bg-white capitalize font-medium text-xs xs:text-sm md:text-base">
                {
                  tournamentDetails.gender_types.map((item, index)=>{
                    return <span key={index} className="mr-1">{item}{index != tournamentDetails.gender_types.length-1 ? ',' : ''}</span>;
                  })
                }
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label className="mb-2 text-gray-400 text-xs xs:text-sm md:text-base">
                Level
              </label>
              <div className="border-2 border-orange-100 px-2 py-2 rounded-lg bg-white capitalize font-medium text-xs xs:text-sm md:text-base">
                <p>
                  {tournamentDetails.level == '' ? '--' : tournamentDetails.level}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row  2 gap-6 my-7 ">
            <div className="flex space-x-5  w-full ">
              <div className="flex flex-col w-full">
                <label className="mb-2 text-gray-400 text-xs xs:text-sm md:text-base">
                  Age Cut-off
                </label>
                <div className="border-2 border-orange-100 px-2 py-2 rounded-lg bg-white capitalize font-medium text-xs xs:text-sm md:text-base">
                  {
                    tournamentDetails.age_categories.map((item, index)=>{
                      return <span key={index} className="mr-1">{item}{index != tournamentDetails.age_categories.length-1 ? ',' : ''}</span>;
                    })
                  }
                </div>
              </div>
            </div>
          </div>
          {/* About Tournament */}
          <div className='flex flex-1'>
            <div className='w-full flex flex-col'>
              <label className="mb-2 text-gray-400 text-xs xs:text-sm md:text-base">About Tournament</label>
              <div className={`border-2 border-orange-100 px-2 py-2 capitalize font-medium rounded-lg bg-white overflow-y-auto text-xs xs:text-sm md:text-base`}>
                {tournamentDetails.about == '' || !tournamentDetails.about ? '--' : tournamentDetails.about}
              </div>
            </div>
          </div>


          {/* -----------------------Refree_Details---------------------------*/}
          <div className="my-5">
            <div className='py-5'>
              <h3 className='text-lg xs:text-xl sm:text-2xl font-semibold text-[#ee6730]'>Referee Information:</h3>
            </div>
            <div className="flex flex-col  items-center " >
              {
                tournamentDetails.tournament_referees.length > 0
                  ?
                  tournamentDetails.tournament_referees.map((item, index) => {
                    return (
                      <div key={index} className="flex flex-col lg:flex-row items-center w-full gap-6 py-4 ">
                        <div className="flex flex-col w-full">
                          <label className="mb-2 text-gray-400 text-xs xs:text-sm md:text-base">
                            Referee Name
                          </label>
                          <div className="border-2 border-orange-100 px-2 py-2 rounded-lg bg-white capitalize font-medium text-xs xs:text-sm md:text-base">
                            <p>
                              {item.name == '' ? '--' : item.name}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col w-full">
                          <label className="mb-2 text-gray-400 text-xs xs:text-sm md:text-base">
                            Referee Mobile
                          </label>
                          <div className="border-2 border-orange-100 px-2 py-2 rounded-lg bg-white capitalize font-medium text-xs xs:text-sm md:text-base">
                            <p>
                              {
                                item.mobile == '' 
                                ? 
                                  '--' 
                                : 
                                  isOrganizer 
                                  ?
                                    item.mobile
                                  :
                                    `XXXXXX${item.mobile.slice(5,9)}`
                                }
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col w-full">
                          <label className="mb-2 text-gray-400 text-xs xs:text-sm md:text-base">
                            Referee Type
                          </label>
                          <div className="border-2 border-orange-100 px-2 py-2 rounded-lg bg-white capitalize font-medium text-xs xs:text-sm md:text-base">
                            <p>
                              {item.type == '' ? '--' : item.type}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  })
                  :
                  <div className="bg-red-100 w-full mt-4 text-center">
                    <h4 className='text-red-700 font-medium p-2 text-xs xs:text-sm md:text-base'>No Referees Found</h4>
                  </div>
              }

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About
