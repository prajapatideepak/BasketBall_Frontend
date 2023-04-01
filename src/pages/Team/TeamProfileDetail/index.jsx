import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PlayerCard from "./PlayerCard";
import "./TeamProfileDetail.css";
import { AxiosError } from "axios";
import Button from "../../../Component/Button";
import MatchCard from "../../../Component/MatchCard";
import { useGetTeamDetailQuery } from "../../../services/team";
import Loader from "../../../Component/Loader";

function TeamProfileDetail() {
  const params = useParams();
  const { team_id } = params;
  const navigate = useNavigate();
  const { isLoading, data, isError } = useGetTeamDetailQuery({
    teamId: team_id,
  });

  const isPublicView = true;

  const [currentTab, setCurrentTab] = React.useState(3);
  const [currentTabMatches, setCurrentTabMatches] = React.useState([]);

  let allMatches =
    data?.data && data?.data.team_1_matches && data?.data.team_2_matches
      ? [...data?.data.team_1_matches, ...data?.data.team_2_matches]
      : [];

  const handleUnenrollTournament = (tournament_id) => {
    try {
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message);
      }
    }
  };

  console.log(allMatches);

  const navigateToTournamentProfile = (tournament_id) => {
    navigate(`/tournament-profile/${tournament_id}`);
  };

  React.useEffect(() => {
    handleTabChange();
  }, [currentTab, data]);

  function handleTabChange() {
    setCurrentTabMatches((e) => {
      return allMatches.filter((match) => {
        return match?.status == currentTab;
      });
    });
  }

  return (
    <section className="min-h-screen-fit">
      <div>
        {isLoading && <Loader />}
        {data && (
          <div>
            <div className="mx-auto px-10 py-12 sm:px-20 sm:py-12 md:px-20 md:py-16 lg:px-24 xl:px-28 2xl:px-32">
              <div>
                <div className="team-logo-container flex justify-center items-center rounded-full">
                  <img
                    src={data?.data?.logo}
                    className="rounded-full border-2 object-cover shadow-lg w-20 xs:w-24 sm:w-32 h-20 xs:h-24 sm:h-32 "
                  />
                </div>
                <div className="flex justify-center items-center">
                  <h1 className="text-lg xs:text-2xl sm:text-3xl text-gray-700 font-semibold px-2 py-4">
                    {data?.data?.team_name}
                  </h1>
                </div>
                {/* <div className=''>
                        <h3 className='text-2xl font-semibold text-[#ee6730] mt-8'>Team Information:</h3>
                    </div> */}
                <div className="flex flex-col xl:flex-row gap-12 mt-8">
                  <div className="flex flex-col lg:flex-row flex-1 xl:border-r-2 xl:pr-14 gap-5 lg:gap-12 xl:gap-6">
                    <div className="left-container lg:order-1 order-2 flex flex-1 flex-col">
                      <div className="flex flex-col text-xs xs:text-sm sm:text-base">
                        <label className="mb-2 text-gray-400">Coach Name</label>
                        <div className="border-2 border-orange-100 px-2 py-2 rounded-lg bg-white capitalize font-medium">
                          <p>
                            {data?.data.coach_name == ""
                              ? "--"
                              : data?.data.coach_name}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col text-xs xs:text-sm sm:text-base mt-5">
                        <label className="mb-2 text-gray-400">
                          Assistant Coach Name
                        </label>
                        <div className="border-2 border-orange-100 px-2 py-2 rounded-lg bg-white capitalize font-medium">
                          <p>
                            {data?.data.asst_coach_name == ""
                              ? "--"
                              : data?.data.asst_coach_name}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`flex ${isPublicView
                            ? "flex-col sm:max-lg:flex-row sm:max-lg:gap-4"
                            : "flex-col sm:flex-row gap-4"
                          } text-xs xs:text-sm sm:text-base`}
                      >
                        <div className="flex flex-1 flex-col mt-5">
                          <label className="mb-2 text-gray-400">
                            Coach Mobile
                          </label>
                          <div className="border-2 border-orange-100 px-2 py-2 rounded-lg bg-white font-medium">
                            <p>
                              {data?.data.coach_mobile == ""
                                ? "--"
                                : isPublicView
                                  ? `XXXXXX${data?.data.coach_mobile.slice(5, 9)}`
                                  : data?.data.coach_mobile}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col text-xs xs:text-sm sm:text-base mt-5">
                          <label className="mb-2 text-gray-400">
                            Assistant Coach Mobile
                          </label>
                          <div className="border-2 border-orange-100 px-2 py-2 rounded-lg bg-white font-medium">
                            <p>
                              {data?.data.asst_coach_mobile == ""
                                ? "--"
                                : isPublicView
                                  ? `XXXXXX${data?.data.asst_coach_mobile.slice(
                                    5,
                                    9
                                  )}`
                                  : data?.data.asst_coach_mobile}
                            </p>
                          </div>
                        </div>
                      </div>
                      {!isPublicView ? (
                        <div className="mt-2 w-full flex justify-center lg:justify-end items-center">
                          <div className="w-full sm:w-2/4 lg:w-full">
                            <Button text="Edit Team" onClick={handleEdit} />
                          </div>
                        </div>
                      ) : null}
                    </div>
                    <div className="right-container lg:order-2 order-1 flex flex-1 flex-col">
                      <div className="flex flex-col text-xs xs:text-sm sm:text-base">
                        <label className="mb-2 text-gray-400">About Team</label>
                        <div
                          className={`border-2 border-orange-100 px-2 py-2 rounded-lg bg-white ${isPublicView
                              ? "h-32 lg:h-[328px]"
                              : "h-32 lg:h-[328px]"
                            } overflow-y-auto`}
                        >
                          {data?.data.about_team}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center xs:mt-8 sm:mt-10">
                    <div className="flex flex-row flex-wrap xl:flex-col justify-center items-center gap-6 lg:gap-10">
                      <div
                        className="w-40 md:w-44 lg:w-48 flex flex-col justify-center items-center bg-white p-3 rounded-lg hover:bg-[#ee6730] group"
                        style={{
                          boxShadow:
                            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                        }}
                      >
                        <h3 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold group-hover:text-white">
                          {data?.data.matches_played}
                        </h3>
                        <p className="md:text-lg sm:text-base text-sm text-gray-700 font-semibold group-hover:text-white mt-2 xl:mt-0">
                          Matches Played
                        </p>
                      </div>
                      <div
                        className="w-40 md:w-44 lg:w-48 flex flex-col justify-center items-center bg-white p-3 rounded-lg hover:bg-[#ee6730] group"
                        style={{
                          boxShadow:
                            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                        }}
                      >
                        <h3 className="text-3xl sm:text-4xl md:text-5xl text-green-600 font-bold group-hover:text-white">
                          {data?.data.matches_won}
                        </h3>
                        <p className="md:text-lg sm:text-base text-sm text-gray-700 font-semibold group-hover:text-white mt-2 xl:mt-0">
                          Matches Won
                        </p>
                      </div>
                      <div
                        className="w-40 md:w-44 lg:w-48 flex flex-col justify-center items-center bg-white p-3 rounded-lg hover:bg-[#ee6730] group"
                        style={{
                          boxShadow:
                            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                        }}
                      >
                        <h3 className="text-3xl sm:text-4xl md:text-5xl text-red-500 font-bold group-hover:text-white">
                          {data?.data.matches_lost}
                        </h3>
                        <p className="md:text-lg sm:text-base text-sm text-gray-700 font-semibold group-hover:text-white mt-2 xl:mt-0">
                          Matches Lost
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto px-10 py-12 sm:px-20 sm:py-12 md:px-20 md:py-16 lg:px-24 xl:px-28 2xl:px-32 xs:mt-12 md:mt-20 w-full bg-black ">
              <div className="">
                <div className="">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#ee6730]">
                    Players:
                  </h3>
                </div>
                <div className="player-container w-full flex flex-nowrap gap-8 sm:gap-16 md:gap-20 mt-10 overflow-x-auto py-5">
                  {data?.data.team_players.length > 0 ? (
                    data?.data.team_players.map((item) => {
                      return (
                        <PlayerCard
                          key={item.id}
                          id={item.player_id}
                          photo={item.players.photo}
                          name={item.players.first_name}
                          position={item.playing_position}
                          age={12}
                          jersey_no={item.players.jersey_no}
                        />
                      );
                    })
                  ) : (
                    <div className="bg-red-100 w-full mt-4 text-center">
                      <h4 className="text-red-700 font-medium p-2">
                        No Players Found
                      </h4>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="mx-auto px-10 py-12 sm:px-20 sm:py-12 md:px-20 md:py-16 lg:px-24 xl:px-28 2xl:px-32">
              <div className="mt-8 md:mt-16">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#ee6730] mt-8">
                    Tournament Enrollment:
                  </h3>
                </div>
                <div className="table-container w-full flex lg:justify-center overflow-x-auto mt-5 ">
                  <table className="whitespace-nowrap md:min-w-[750px] md:w-full xl:w-3/4 mt-2 rounded-md overflow-hidden sm:text-base text-xs xs:text-sm">
                    <thead className="bg-gray-700">
                      <tr>
                        <th className="pl-5 border whitespace-nowrap pr-2 py-3 text-sm text-gray-300 uppercase border-gray-700 whitespace-nowrap font-semibold text-left sm:text-base text-xs xs:text-sm">
                          Sr.
                        </th>
                        <th className="pl-5 border whitespace-nowrap pr-2 py-3 text-sm text-gray-300 uppercase border-gray-700 whitespace-nowrap font-semibold text-left sm:text-base text-xs xs:text-sm">
                          Tournament Name
                        </th>
                        <th className="border whitespace-nowrap px-2 py-3 text-sm text-gray-300 uppercase border-gray-700 whitespace-nowrap font-semibold text-left sm:text-base text-xs xs:text-sm">
                          Start Date
                        </th>
                        <th className="border whitespace-nowrap px-2 py-3 text-sm text-gray-300 uppercase border-gray-700 whitespace-nowrap font-semibold text-left sm:text-base text-xs xs:text-sm">
                          End Date
                        </th>
                        <th className="border whitespace-nowrap px-2 py-3 text-sm text-gray-300 uppercase border-gray-700 whitespace-nowrap font-semibold text-left sm:text-base text-xs xs:text-sm">
                          City
                        </th>
                        {!isPublicView ? (
                          <th className="border whitespace-nowrap px-2 py-3 text-sm text-gray-300 uppercase border-gray-700 whitespace-nowrap font-semibold text-left sm:text-base text-xs xs:text-sm">
                            Action
                          </th>
                        ) : null}
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {data?.data.tournament_teams.length > 0 ? (
                        data?.data.tournament_teams.map((item, index) => {
                          let { tournaments } = item;
                          return (
                            <tr
                              key={tournaments.id}
                              className="border-t-2 text-left"
                            >
                              <th className="pl-5 whitespace-nowrap pr-2 py-4">
                                {index + 1}
                              </th>
                              <th className="pl-5 whitespace-nowrap pr-2">
                                <span
                                  className="cursor-pointer hover:text-[#ee6730]"
                                  onClick={() =>
                                    navigateToTournamentProfile(tournaments.id)
                                  }
                                >
                                  {tournaments.tournament_name}
                                </span>
                              </th>
                              <td className="whitespace-nowrap px-2">
                                {new Date(tournaments.start_date).inString()}
                              </td>
                              <td className="whitespace-nowrap px-2">
                                {new Date(tournaments.end_date).inString()}
                              </td>
                              <td className="whitespace-nowrap px-2">
                                {tournaments.address}
                              </td>
                              {!isPublicView ? (
                                <td className="whitespace-nowrap px-2">
                                  {/* if tournament started then disable it */}
                                  <button
                                    className="bg-red-500 text-white px-2 py-0.5 rounded-md hover:opacity-60"
                                    onClick={() =>
                                      handleUnenrollTournament(tournaments.id)
                                    }
                                  >
                                    Unenroll
                                  </button>
                                </td>
                              ) : null}
                            </tr>
                          );
                        })
                      ) : (
                        <tr>
                          <td
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 font-semibold text-gray-400 text-center"
                            colSpan="6"
                          >
                            Your Team has not enrolled in any tournament
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-20 md:mt-32">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#ee6730] mt-8">
                    Matches:
                  </h3>
                </div>
                <div>
                  <div className="flex justify-center items-center mt-8 md:mt-3">
                    <div className="w-48 xs:w-52 md:w-64 flex justify-around items-center bg-black p-1 rounded-full">
                      <div
                        className={`${currentTab == 3 ? "bg-[#ee6730]" : ""
                          } hover:bg-[#ee6730] group cursor-pointer w-full text-center p-1 rounded-full mr-1.5`}
                        onClick={() => setCurrentTab(3)}
                      >
                        <h3
                          className={`${currentTab == 3 ? "text-white" : "text-gray-300"
                            } group-hover:text-white text-xs xs:text-sm sm:text-base font-semibold`}
                        >
                          Past
                        </h3>
                      </div>
                      <div
                        className={`${currentTab == 1 ? "bg-[#ee6730]" : ""
                          } hover:bg-[#ee6730] group cursor-pointer w-full text-center p-1 rounded-full`}
                        onClick={() => setCurrentTab(1)}
                      >
                        <h3
                          className={`${currentTab == 1 ? "text-white" : "text-gray-300"
                            } group-hover:text-white text-xs xs:text-sm sm:text-base font-semibold`}
                        >
                          Upcoming
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="matches-container">
                    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12 mt-10 sm:mt-12 md:mt-16">
                      {currentTabMatches.length > 0 ? (
                        currentTabMatches.map((match, index) => {
                          return <MatchCard key={index} match={match} />;
                        })
                      ) : (
                        <div className="w-full text-center mt-12">
                          <h4 className="text-lg font-medium text-gray-400">
                            No Match Found
                          </h4>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default TeamProfileDetail;
