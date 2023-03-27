import React from "react";
import TournamentCard from "../../../Component/TournamentCard";
import SmallLoader from "../../../Component/SmallLoader";
import { GiDiamondTrophy } from "react-icons/gi";
import Heading from "../../../Component/Heading";
import { useGetAllTournamentsQuery } from "../../../services/tournament";

function TournamentsList() {
  const [currentTab, setCurrentTab] = React.useState(1);
  const [upcomingTournaments, setUpcomingTournaments] = React.useState([]);
  const [ongoingTournaments, setOngoingTournaments] = React.useState([]);
  const [pastTournaments, setPastTournaments] = React.useState([]);
  const [currentTabTournaments, setCurrentTabTournaments] = React.useState([]);
  const { data, isLoading, isError, error } = useGetAllTournamentsQuery();

  React.useEffect(() => {
    const upcoming = [];
    const ongoing = [];
    const past = [];
    data?.all_tournaments.map((tournament) => {
        if(tournament.status == 1){
            upcoming.push(tournament)
        }
        else if(tournament.status == 2){
            ongoing.push(tournament)
        }
        else{
            past.push(tournament)
        }
    });

    setUpcomingTournaments(upcoming)
    setOngoingTournaments(ongoing)
    setPastTournaments(past)
  }, [data]);

  React.useEffect(() => {
    if (currentTab == 1) {
      setCurrentTabTournaments(ongoingTournaments);
    } else if (currentTab == 2) {
      setCurrentTabTournaments(upcomingTournaments);
    } else {
      setCurrentTabTournaments(pastTournaments);
    }
  }, [currentTab]);

  return (
    <section className="min-h-screen-fit">
      <div className="mx-auto px-10 py-12 sm:px-20 sm:py-12 md:px-20 md:py-16 lg:px-24 xl:px-28 2xl:px-32">
        <Heading text="Tournaments" />
        <div className="flex justify-center items-center">
          <div className="w-48 xs:w-72 sm:w-72 md:w-80 p-1 rounded-full flex justify-around items-center bg-black">
            <div
              className={`${
                currentTab == 1 ? "bg-[#ee6730]" : ""
              } hover:bg-[#ee6730] group cursor-pointer w-full text-center p-1 rounded-full`}
              onClick={() => setCurrentTab(1)}
            >
              <h3
                className={`${
                  currentTab == 1 ? "text-white" : "text-gray-300"
                } group-hover:text-white font-semibold text-xs xs:text-sm md:text-base`}
              >
                Ongoing
              </h3>
            </div>
            <div
              className={`${
                currentTab == 2 ? "bg-[#ee6730]" : ""
              } hover:bg-[#ee6730] group cursor-pointer w-full text-center mx-1.5 p-1 rounded-full`}
              onClick={() => setCurrentTab(2)}
            >
              <h3
                className={`${
                  currentTab == 2 ? "text-white" : "text-gray-300"
                } group-hover:text-white font-semibold text-xs xs:text-sm md:text-base`}
              >
                Upcoming
              </h3>
            </div>
            <div
              className={`${
                currentTab == 3 ? "bg-[#ee6730]" : ""
              } hover:bg-[#ee6730] group cursor-pointer w-full text-center p-1 rounded-full`}
              onClick={() => setCurrentTab(3)}
            >
              <h3
                className={`${
                  currentTab == 3 ? "text-white" : "text-gray-300"
                } group-hover:text-white font-semibold text-xs xs:text-sm md:text-base`}
              >
                Past
              </h3>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12 mt-10 sm:mt-12 md:mt-16">
          {isLoading ? (
            <SmallLoader />
          ) : currentTabTournaments.length > 0 ? (
            currentTabTournaments.map((tournament, index) => {
              return <TournamentCard key={index} tournament={tournament} />;
            })
          ) : (
            <div className="flex justify-center items-center mt-16 md:mt-24">
              <GiDiamondTrophy className="text-2xl xs:text-3xl sm:text-5xl text-gray-400 mr-2" />
              <p className="text-xs xs:text-sm sm:text-lg font-medium text-gray-400">
                No Tournament Found
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default TournamentsList;
