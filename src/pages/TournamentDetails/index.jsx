import React from "react";
import Matches from "./Matches";
import Teams from "./Teams";
import Schedule from "./Schedule";
import Prize from "./Prize";
import Sponsors from "./Sponsors";
import Gallery from "./Gallery";
import About from "./About";
import Admin from './Admin';
import "./TournamentDetails.css";
import TeamsModal from "./TeamsModal";
import { toast } from "react-toastify";
import navigate from "navigate";

function TournamentDetails() {
  const [currentTab, setCurrentTab] = React.useState(0);
  const [openTeamsModal, setOpenTeamsModal] = React.useState(false);
  const handleOpenTeamsModal = () => setOpenTeamsModal(!openTeamsModal);

  const is_organizer = true;
  
  const tournamentdetails = {
    is_registration_open: false,
    status: 1,
    starting_date: "11-01-2023",
    ending_date: "22-01-2023",
    tournament_type: "Knock out",
    tournament_category: "Only for Boys",
    tournament_level: "National",
    city_name: "Ahmedabad",
    about_tournament: "Hello",
    referee: [
      { id: 1, referee_name: "Shad", referee_mobile: "1234567890" },
      { id: 2, referee_name: "Asd", referee_mobile: "1234567890" },
    ],
    sponsors: [
      {
        sponsor_name: "Wellbenix",
        sponsor_logo: "https://wellbenix.com/assets/img/wellbenix-logo.png",
      },
      {
        sponsor_name: "Lok Jagruti Kendra",
        sponsor_logo: "/CBL_Images/tournament_logo_2.webp",
      },
    ],
    sponsor_mobile: "1234567890",
    age_restriction: 1,
    age_cutoff: "Under 21",
    prize: "Winner team will get Rs 1 Core",
  };

  const tabs = [
    <Matches />,
    <Teams />,
    <Schedule />,
    <Prize prize={tournamentdetails.prize} />,
    <Sponsors sponsors={tournamentdetails.sponsors} />,
    <Gallery />,
    <About tournamentdetails={tournamentdetails} />,
    <Admin/>
  ];

  const handleRegisterInTournament = () =>{
    // if(!tournamentdetails.is_registration_open){
    //   return toast.error('Registration closed');
    // }
    navigate("/team-register")
  }

  return (
    <section className="min-h-screen-fit">
      <div className="mx-auto px-10 py-4 sm:px-20 sm:py-6 md:px-20 md:py-8 lg:px-24 xl:px-28 2xl:px-32 bg-black">
        <div className="flex justify-center items-center">
          <div className="team-logo-container flex justify-center items-center rounded-full">
            <picture></picture>
            <source
              srcSet="/CBL_Images/tournament_logo_1.webp"
              type="image/webp"
            />
            <img
              src="/CBL_Images/tournament_logo_1.webp"
              className="rounded-full border-2 border-gray-500 shadow-lg w-16 xs:w-20 sm:w-28"
            />
          </div>
          <div className="flex flex-col justify-center items-cente ml-3">
            <h1 className="text-lg xs:text-2xl sm:text-3xl text-gray-200 font-semibold py-4">
              Champion League
            </h1>
            {
              tournamentdetails.status == 1
              ?
                <div className="w-full flex justify-center">
                  <div className="w-40">
                    <button
                      onClick={handleRegisterInTournament}
                      type="submit"
                      className={`bg-gray-200 relative inline-flex items-center justify-center w-full px-4 py-1 xs:py-1 sm:px-4 sm:py-1.5 overflow-hidden font-medium tracking-tighter text-white rounded-lg cursor-pointer group`}
                    >
                      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#ee6730] rounded-lg group-hover:w-full group-hover:h-56"></span>
                      <span className="relative text-gray-700 text-xs xs:text-sm sm:text-base group-hover:text-white transition-all duration-500 ease-in-out">
                        Register Your Team
                      </span>
                    </button>
                  </div>
                </div>
              :
                null
            }
          </div>
        </div>
      </div>
      <div className="tab-container bg-[#ee6730] h-[45px] overflow-x-scroll ">
        <div className="w-full  h-full flex justify-center items-center  px-5  space-x-5 text-white text-xs sm:text-sm lg:text-base">
          <h1
            className={`w-28 flex justify-center items-center  ${
              currentTab == 0 ? "bg-[#F5F5F7] text-[#ee6730]" : ""
            } h-full cursor-pointer`}
            onClick={() => setCurrentTab(0)}
          >
            Matches
          </h1>
          <h1
            className={`w-28 flex justify-center items-center  ${
              currentTab == 1 ? "bg-[#F5F5F7] text-[#ee6730]" : ""
            } h-full cursor-pointer`}
            onClick={() => setCurrentTab(1)}
          >
            Teams
          </h1>
          <h1
            className={`w-28 flex justify-center items-center  ${
              currentTab == 2 ? "bg-[#F5F5F7] text-[#ee6730]" : ""
            } h-full cursor-pointer`}
            onClick={() => setCurrentTab(2)}
          >
            Schedule
          </h1>
          <h1
            className={`w-28 flex justify-center items-center  ${
              currentTab == 3 ? "bg-[#F5F5F7] text-[#ee6730]" : ""
            } h-full cursor-pointer`}
            onClick={() => setCurrentTab(3)}
          >
            Prize
          </h1>
          <h1
            className={`w-28 flex justify-center items-center  ${
              currentTab == 4 ? "bg-[#F5F5F7] text-[#ee6730]" : ""
            } h-full cursor-pointer`}
            onClick={() => setCurrentTab(4)}
          >
            Sponsors
          </h1>
          <h1
            className={`w-28 flex justify-center items-center  ${
              currentTab == 5 ? "bg-[#F5F5F7] text-[#ee6730]" : ""
            } h-full cursor-pointer`}
            onClick={() => setCurrentTab(5)}
          >
            Gallery
          </h1>
          <h1
            className={`w-28 flex justify-center items-center  ${
              currentTab == 6 ? "bg-[#F5F5F7] text-[#ee6730]" : ""
            } h-full cursor-pointer`}
            onClick={() => setCurrentTab(6)}
          >
            About
          </h1>
          {
            is_organizer
            ?
              <h1
                className={`w-28 flex justify-center items-center font-semibold ${
                  currentTab == 7 ? "bg-[#F5F5F7] text-[#ee6730]" : ""
                } h-full cursor-pointer`}
                onClick={() => setCurrentTab(7)}
              >
                Admin*
              </h1>
            :
              null
          }
        </div>
      </div>
      <div className="mx-auto px-8 py-10 xs:px-10 xs:py-12 sm:px-20 sm:py-12 md:px-20 md:py-16 lg:px-24 xl:px-28 2xl:px-32">
        {tabs[currentTab]}
      </div>

    </section>
  );
}

export default TournamentDetails;
