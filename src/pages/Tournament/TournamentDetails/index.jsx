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
import { useNavigate, useParams } from "react-router-dom";
import Loader from '../../../component/Loader'
import { useGetTournamentDetailsQuery } from "../../../services/tournament";

function TournamentDetails() {
  const navigate = useNavigate()
  const {tournament_id} = useParams();
  const [currentTab, setCurrentTab] = React.useState(0);
  const [openTeamsModal, setOpenTeamsModal] = React.useState(false);
  const handleOpenTeamsModal = () => setOpenTeamsModal(!openTeamsModal);

  const { data, isLoading, error } = useGetTournamentDetailsQuery(tournament_id)
 
  const is_organizer = true;
  

  const tabs = [
    <Matches matches={data?.tournamentDetails.matches} />,
    <Teams teams={data?.tournamentDetails.tournament_teams} />,
    <Schedule />,
    <Prize prize={data?.tournamentDetails.prize} />,
    <Sponsors sponsors={data?.tournamentDetails.tournament_sponsors} />,
    <Gallery galleryDetails={data?.tournamentDetails.gallery} />,
    <About tournamentdetails={data?.tournamentDetails} />,
    <Admin/>
  ];

  const handleRegisterInTournament = () =>{
    // if(!tournamentdetails.is_registration_open){
    //   return toast.error('Registration closed');
    // }
    // navigate(`/${tournament.tournament_id}/team-register`)
    navigate(`/tournament/team-register`)
  }

  if(isLoading){
    return <Loader />
  }

  return (
    <section className="min-h-screen-fit">
      <div className="mx-auto px-10 py-4 sm:px-20 sm:py-6 md:px-20 md:py-8 lg:px-24 xl:px-28 2xl:px-32 bg-black">
        <div className="flex justify-center items-center">
          <div className="team-logo-container flex justify-center items-center rounded-full">
            <picture></picture>
            <source
              srcSet={data?.tournamentDetails.logo}
              type="image/webp"
            />
            <img
              src={data?.tournamentDetails.logo}
              className="rounded-full border-2 border-gray-500 shadow-lg w-16 h-16 xs:w-20 xs:h-20 sm:w-28 sm:h-28"
            />
          </div>
          <div className="flex flex-col justify-center items-cente ml-3">
            <h1 className="text-lg xs:text-2xl sm:text-3xl text-gray-200 font-semibold py-4">
              {data?.tournamentDetails.tournament_name}
            </h1>
            {data?.tournamentDetails.status == 1 ? (
              <div className="w-full flex justify-center">
                <div className="w-40">
                  <button
                    onClick={handleRegisterInTournament}
                    type="submit"
                    className={`bg-gray-200 relative inline-flex items-center justify-center  px-2 py-1 xs:py-1 sm:px-4 sm:py-1.5 overflow-hidden font-medium tracking-tighter text-white md:rounded-lg sm:rounded-md rounded-sm cursor-pointer group`}
                  >
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#ee6730] rounded-lg group-hover:w-full group-hover:h-56"></span>
                    <span className="relative text-gray-700 text-xs xs:text-sm sm:text-base group-hover:text-white transition-all duration-500 ease-in-out">
                      Register Your Team
                    </span>
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="tab-container bg-[#ee6730] h-[45px] overflow-x-scroll ">
        <div className="w-full h-full flex items-center ">
          <div className=" flex  items-center mx-auto h-full px-2 sm:px-3 md:px-5  lg:space-x-5 text-white text-xs sm:text-sm lg:text-base">
            <h1
              className={`md:w-28 sm:w-24 w-20 flex justify-center items-center  ${
                currentTab == 0 ? "bg-[#F5F5F7] text-[#ee6730]" : ""
              } h-full cursor-pointer`}
              onClick={() => setCurrentTab(0)}
            >
              Matches
            </h1>
            <h1
              className={`md:w-28 sm:w-24 w-20 flex justify-center items-center  ${
                currentTab == 1 ? "bg-[#F5F5F7] text-[#ee6730]" : ""
              } h-full cursor-pointer`}
              onClick={() => setCurrentTab(1)}
            >
              Teams
            </h1>
            <h1
              className={`md:w-28 sm:w-24 w-20 flex justify-center items-center  ${
                currentTab == 2 ? "bg-[#F5F5F7] text-[#ee6730]" : ""
              } h-full cursor-pointer`}
              onClick={() => setCurrentTab(2)}
            >
              Schedule
            </h1>
            <h1
              className={`md:w-28 sm:w-24 w-20 flex justify-center items-center  ${
                currentTab == 3 ? "bg-[#F5F5F7] text-[#ee6730]" : ""
              } h-full cursor-pointer`}
              onClick={() => setCurrentTab(3)}
            >
              Prize
            </h1>
            <h1
              className={`md:w-28 sm:w-24 w-20 flex justify-center items-center  ${
                currentTab == 4 ? "bg-[#F5F5F7] text-[#ee6730]" : ""
              } h-full cursor-pointer`}
              onClick={() => setCurrentTab(4)}
            >
              Sponsors
            </h1>
            <h1
              className={`md:w-28 sm:w-24 w-20 flex justify-center items-center  ${
                currentTab == 5 ? "bg-[#F5F5F7] text-[#ee6730]" : ""
              } h-full cursor-pointer`}
              onClick={() => setCurrentTab(5)}
            >
              Gallery
            </h1>
            <h1
              className={`md:w-28 sm:w-24 w-20 flex justify-center items-center  ${
                currentTab == 6 ? "bg-[#F5F5F7] text-[#ee6730]" : ""
              } h-full cursor-pointer`}
              onClick={() => setCurrentTab(6)}
            >
              About
            </h1>
            {is_organizer ? (
              <h1
                className={`md:w-28 sm:w-24 w-20 flex justify-center items-center font-semibold ${
                  currentTab == 7 ? "bg-[#F5F5F7] text-[#ee6730]" : ""
                } h-full cursor-pointer`}
                onClick={() => setCurrentTab(7)}
              >
                Admin*
              </h1>
            ) : null}
          </div>
        </div>
      </div>
      <div className="mx-auto px-8 py-10 xs:px-10 xs:py-12 sm:px-20 sm:py-12 md:px-20 md:py-16 lg:px-24 xl:px-28 2xl:px-32">
        {
          tabs[currentTab]
        }
      </div>
    </section>
  );
}

export default TournamentDetails;
