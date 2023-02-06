import React from 'react'
import Matches from './Matches'
import Teams from './Teams'
import Schedule from './Schedule'
import Prize from './Prize'
import Sponsors from './Sponsors'
import Gallery from './Gallery'
import About from './About'
import './TournamentDetails.css'

function TournamentDetails() {
  const [currentTab, setCurrentTab] = React.useState(0);

  const sponsors = [
    {
      sponsor_name: 'Wellbenix',
      sponsor_logo: 'https://wellbenix.com/assets/img/wellbenix-logo.png',
    },
    {
      sponsor_name: 'Lok Jagruti Kendra',
      sponsor_logo: '/CBL_Images/tournament_logo_2.webp',
    },
  ];

  const tabs = [<Matches />, <Teams/>, <Schedule/>, <Prize/>, <Sponsors sponsors={sponsors}/>, <Gallery/>, <About />]

  return (
    <section className="min-h-screen-fit">
      <div className='mx-auto px-10 py-4 sm:px-20 sm:py-6 md:px-20 md:py-8 lg:px-24 xl:px-28 2xl:px-32 bg-black'>
        <div className="flex justify-center items-center">
          <div className="team-logo-container flex justify-center items-center rounded-full">
            <picture>
            </picture>
              <source srcSet="/CBL_Images/tournament_logo_1.webp" type='image/webp' />
              <img src="/CBL_Images/tournament_logo_1.webp" className="rounded-full border-2 border-gray-500 shadow-lg w-16 xs:w-20 sm:w-28"/>
          </div>
          <div className="flex justify-center items-center">
              <h1 className="text-lg xs:text-2xl sm:text-3xl text-gray-200 font-semibold px-2 py-4">Champion League</h1>
          </div>
        </div>
      </div>
      <div className="tab-container flex justify-center items-center bg-[#ee6730] h-[45px] overflow-x-auto">
        <div className='flex justify-center items-center px-5 whitespace-nowrap text-white h-full text-xs sm:text-sm lg:text-base'>
          <span className={`w-28 flex justify-center items-center ${currentTab == 0 ? 'bg-[#F5F5F7] text-[#ee6730]' : ''} h-full cursor-pointer`} onClick={()=> setCurrentTab(0)}>Matches</span>
          <span className={`w-28 flex justify-center items-center ${currentTab == 1 ? 'bg-[#F5F5F7] text-[#ee6730]' : ''} h-full cursor-pointer`} onClick={()=> setCurrentTab(1)}>Teams</span>
          <span className={`w-28 flex justify-center items-center ${currentTab == 2 ? 'bg-[#F5F5F7] text-[#ee6730]' : ''} h-full cursor-pointer`} onClick={()=> setCurrentTab(2)}>Schedule</span>
          <span className={`w-28 flex justify-center items-center ${currentTab == 3 ? 'bg-[#F5F5F7] text-[#ee6730]' : ''} h-full cursor-pointer`} onClick={()=> setCurrentTab(3)}>Prize</span>
          <span className={`w-28 flex justify-center items-center ${currentTab == 4 ? 'bg-[#F5F5F7] text-[#ee6730]' : ''} h-full cursor-pointer`} onClick={()=> setCurrentTab(4)}>Sponsors</span>
          <span className={`w-28 flex justify-center items-center ${currentTab == 5 ? 'bg-[#F5F5F7] text-[#ee6730]' : ''} h-full cursor-pointer`} onClick={()=> setCurrentTab(5)}>Gallery</span>
          <span className={`w-28 flex justify-center items-center ${currentTab == 6 ? 'bg-[#F5F5F7] text-[#ee6730]' : ''} h-full cursor-pointer`} onClick={()=> setCurrentTab(6)}>About</span>
        </div>
      </div>
      <div className='mx-auto px-10 py-12 sm:px-20 sm:py-12 md:px-20 md:py-16 lg:px-24 xl:px-28 2xl:px-32'>
        {
          tabs[currentTab]
        }
      </div>
    </section>
  )
}

export default TournamentDetails