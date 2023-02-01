import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PlayerCard from "./PlayerCard";
import "./TeamProfileDetail.css";
import { AxiosError } from "axios";
import Button from "../../Component/Button";
import MatchCard from "./MatchCard";

function TeamProfileDetail() {
  const params = useParams();
  const navigate = useNavigate();

  const [enrolledTournaments, setEntrolledtournaments] = React.useState([
    {
      id: 1234,
      tournament_name: "Gokuldham Premier League",
      start_date: "12/5/2023",
      end_date: "12/6/2023",
      city: "Ahmedabad",
    },
    {
      id: 1234,
      tournament_name: "LJ Cup",
      start_date: "12/5/2023",
      end_date: "12/6/2023",
      city: "Ahmedabad",
    },
  ]);

  const [currentTab, setCurrentTab] = React.useState(2);
  const [currentTabMatches, setCurrentTabMatches] = React.useState([]);
  const [pastMatches, setPastMatches] = React.useState([]);
  const [upcomingMatches, setUpcomingMatches] = React.useState([]);

  const teamDetails = {
    team_id: 1001,
    team_logo: "/CBL_Images/basketball_team_logo_2.webp",
    team_name: "Mehta Ke Mahaarathi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip",
    coach_name: "Mohammadshad Mohammadsajid Rajput",
    coach_mobile: "9000000000",
    assistant_coach_name: "coach abc",
    assistant_coach_mobile: "9989999999",
    total_players: 7,
    players: [
      {
        id: 1,
        name: "Sadikali karadiya",
        position: "point guard",
        jersey_no: 10,
      },
      { id: 2, name: "Deepak Prajapati", position: "center", jersey_no: 11 },
      {
        id: 1,
        name: "Sadikali karadiya",
        position: "point guard",
        jersey_no: 12,
      },
      { id: 2, name: "Deepak Prajapati", position: "center", jersey_no: 13 },
      {
        id: 1,
        name: "Sadikali karadiya",
        position: "point guard",
        jersey_no: 14,
      },
      { id: 2, name: "Deepak Prajapati", position: "center", jersey_no: 15 },
    ],
    captain: 1,
    matches_played: 22,
    matches_won: 18,
    matches_lost: 4,
  };

  const allMatches = [
    {
      match_id: 12,
      tournament_name: "Gokuldham Premier League",
      team_1_logo: "/CBL_Images/basketball_team_logo_2.webp",
      team_2_logo: "/CBL_Images/basketball_team_logo_1.webp",
      team_1_name: "Mehta Ke Maharathi",
      team_2_name: "Jetha Ke Jabaaz",
      team_1_score: 24,
      team_2_score: 22,
      duration: 45,
      address: "Amber tower, Sarkhej, Ahmedabad 380055",
      isSuccessfull: 1,
      date: "12/12/2022",
    },
    {
      match_id: 13,
      tournament_name: "Gokuldham Premier League",
      team_1_logo: "/CBL_Images/basketball_team_logo_2.webp",
      team_2_logo: "/CBL_Images/basketball_team_logo_1.webp",
      team_1_name: "Mehta Ke Maharathi",
      team_2_name: "Jetha Ke Jabaaz",
      team_1_score: 24,
      team_2_score: 22,
      duration: 45,
      address: "Amber tower, Sarkhej, Ahmedabad 380055",
      isSuccessfull: 0,
      date: "12/12/2022",
    },
    {
      match_id: 14,
      tournament_name: "Gokuldham Premier League",
      team_1_logo: "/CBL_Images/basketball_team_logo_2.webp",
      team_2_logo: "/CBL_Images/basketball_team_logo_1.webp",
      team_1_name: "Mehta Ke Maharathi",
      team_2_name: "Jetha Ke Jabaaz",
      team_1_score: 24,
      team_2_score: 22,
      duration: 45,
      address: "Amber tower, Sarkhej, Ahmedabad 380055",
      isSuccessfull: 0,
      date: "12/12/2022",
    },
    {
      match_id: 15,
      tournament_name: "Gokuldham Premier League",
      team_1_logo: "/CBL_Images/basketball_team_logo_2.webp",
      team_2_logo: "/CBL_Images/basketball_team_logo_1.webp",
      team_1_name: "Mehta Ke Maharathi",
      team_2_name: "Jetha Ke Jabaaz",
      team_1_score: 24,
      team_2_score: 22,
      duration: 45,
      address: "Amber tower, Sarkhej, Ahmedabad 380055",
      isSuccessfull: 0,
      date: "12/12/2022",
    },
  ];

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

  const navigateToTournamentProfile = (tournament_id) => {
    navigate(`/tournament-profile/${tournament_id}`);
  };

  React.useEffect(() => {
    if (currentTab == 1) {
      setCurrentTabMatches(pastMatches);
    } else {
      setCurrentTabMatches(upcomingMatches);
    }
  }, [currentTab]);

  React.useEffect(() => {
    let past = [];
    let upcoming = [];
    allMatches.map((match) => {
      if (match.isSuccessfull == 1) {
        past.push(match);
      } else if (match.isSuccessfull == 0) {
        upcoming.push(match);
      }
    });

    setCurrentTabMatches(upcoming);
    setPastMatches(past);
    setUpcomingMatches(upcoming);
  }, []);

  return (
    <section>
      <div className="mx-auto px-10  sm:px-20 md:px-20 lg:px-24 xl:px-28 2xl:px-32 py-20 md:py-20">
        <div>
          <div className="team-logo-container flex justify-center items-center rounded-full">
            <img
              src={teamDetails.team_logo}
              className="rounded-full border-2 shadow-lg w-24 sm:w-32"
            />
          </div>
          <div className="flex justify-center items-center">
            <h1 className="text-2xl sm:text-3xl text-gray-700 font-semibold px-2 py-4">
              {teamDetails.team_name}
            </h1>
          </div>
          {/* <div className=''>
                        <h3 className='text-2xl font-semibold text-[#ee6730] mt-8'>Team Information:</h3>
                    </div> */}
          <div className="flex flex-col xl:flex-row gap-12 mt-8">
            <div className="flex flex-col lg:flex-row flex-1 xl:border-r-2 xl:pr-14 gap-5 lg:gap-12 xl:gap-6">
              <div className="left-container lg:order-1 order-2 flex flex-1 flex-col">
                <div className="flex flex-col">
                  <label className="mb-2 text-gray-400">Coach Name</label>
                  <div className="border-2 border-orange-100 px-2 py-2 rounded-lg bg-white capitalize font-medium">
                    <p>
                      {teamDetails.coach_name == ""
                        ? "--"
                        : teamDetails.coach_name}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col mt-5">
                  <label className="mb-2 text-gray-400">
                    Assistant Coach Name
                  </label>
                  <div className="border-2 border-orange-100 px-2 py-2 rounded-lg bg-white capitalize font-medium">
                    <p>
                      {teamDetails.assistant_coach_name == ""
                        ? "--"
                        : teamDetails.assistant_coach_name}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex flex-1 flex-col mt-5">
                    <label className="mb-2 text-gray-400">Coach Mobile</label>
                    <div className="border-2 border-orange-100 px-2 py-2 rounded-lg bg-white font-medium">
                      <p>
                        {teamDetails.coach_mobile == ""
                          ? "--"
                          : teamDetails.coach_mobile}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col mt-5">
                    <label className="mb-2 text-gray-400">
                      Assistant Coach Mobile
                    </label>
                    <div className="border-2 border-orange-100 px-2 py-2 rounded-lg bg-white font-medium">
                      <p>
                        {teamDetails.assistant_coach_mobile == ""
                          ? "--"
                          : teamDetails.assistant_coach_mobile}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-2 w-full flex justify-center lg:justify-end items-center">
                  <div className="w-full sm:w-2/4 lg:w-full">
                    <Button
                      text="Edit Team"
                      onClick={() => {
                        navigate("/team-add-edit");
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="right-container lg:order-2 order-1 flex flex-1 flex-col">
                <div className="flex flex-col">
                  <label className="mb-2 text-gray-400">About Team</label>
                  <div className="border-2 border-orange-100 px-2 py-2 rounded-lg bg-white h-32 lg:h-[328px] overflow-y-auto">
                    {teamDetails.description}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex flex-row flex-wrap xl:flex-col justify-center items-center gap-6 lg:gap-10">
                <div
                  className="w-40 md:w-44 lg:w-48 flex flex-col justify-center items-center bg-white p-3 rounded-lg hover:bg-[#ee6730] group"
                  style={{
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                  }}
                >
                  <h3 className="text-4xl md:text-5xl text-black font-bold group-hover:text-white">
                    {teamDetails.matches_played}
                  </h3>
                  <p className="md:text-lg text-gray-700 font-semibold group-hover:text-white mt-2 xl:mt-0">
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
                  <h3 className="text-4xl md:text-5xl text-green-600 font-bold group-hover:text-white">
                    {teamDetails.matches_won}
                  </h3>
                  <p className="md:text-lg text-gray-700 font-semibold group-hover:text-white mt-2 xl:mt-0">
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
                  <h3 className="text-4xl md:text-5xl text-red-500 font-bold group-hover:text-white">
                    {teamDetails.matches_lost}
                  </h3>
                  <p className="md:text-lg text-gray-700 font-semibold group-hover:text-white mt-2 xl:mt-0">
                    Matches Lost
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto px-10 py-12 sm:px-20 sm:py-12 md:px-20 md:py-16 lg:px-24 xl:px-28 2xl:px-32 mt-20 md:mt-20 w-full bg-black ">
        <div className="">
          <div className="">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#ee6730]">
              Players:
            </h3>
          </div>
          <div className="player-container w-full flex flex-nowrap gap-8 sm:gap-16 md:gap-20 mt-10 overflow-x-auto py-5">
            {teamDetails.players.length > 0 ? (
              teamDetails.players.map((item, index) => {
                return (
                  <PlayerCard
                    key={index}
                    id={item.id}
                    photo="/CBL_Images/player-default-profile.webp"
                    name={item.name}
                    position={item.position}
                    jersey_no={item.jersey_no}
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
          <div className="w-full flex lg:justify-center overflow-x-auto mt-5 ">
            <table className="min-w-[750px] lg:w-full xl:w-3/4 mt-2 rounded-md overflow-x-auto sm:text-base text-sm">
              <thead className="bg-gray-700">
                <tr>
                  <th className="pl-5 border whitespace-nowrap pr-2 py-3 text-sm text-gray-300 uppercase border-gray-700 whitespace-nowrap font-semibold text-left">
                    Sr.
                  </th>
                  <th className="pl-5 border whitespace-nowrap pr-2 py-3 text-sm text-gray-300 uppercase border-gray-700 whitespace-nowrap font-semibold text-left">
                    Tournament Name
                  </th>
                  <th className="border whitespace-nowrap px-2 py-3 text-sm text-gray-300 uppercase border-gray-700 whitespace-nowrap font-semibold text-left">
                    Start Date
                  </th>
                  <th className="border whitespace-nowrap px-2 py-3 text-sm text-gray-300 uppercase border-gray-700 whitespace-nowrap font-semibold text-left">
                    End Date
                  </th>
                  <th className="border whitespace-nowrap px-2 py-3 text-sm text-gray-300 uppercase border-gray-700 whitespace-nowrap font-semibold text-left">
                    City
                  </th>
                  <th className="border whitespace-nowrap px-2 py-3 text-sm text-gray-300 uppercase border-gray-700 whitespace-nowrap font-semibold text-left">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {enrolledTournaments.length > 0 ? (
                  enrolledTournaments.map((item, index) => {
                    return (
                      <tr key={index} className="border-t-2 text-left">
                        <th className="pl-5 whitespace-nowrap pr-2 py-4">
                          {index + 1}
                        </th>
                        <th className="pl-5 whitespace-nowrap pr-2">
                          <span
                            className="cursor-pointer hover:text-[#ee6730]"
                            onClick={() => navigateToTournamentProfile(item.id)}
                          >
                            {item.tournament_name}
                          </span>
                        </th>
                        <td className="whitespace-nowrap px-2">
                          {item.start_date}
                        </td>
                        <td className="whitespace-nowrap px-2">
                          {item.end_date}
                        </td>
                        <td className="whitespace-nowrap px-2">{item.city}</td>
                        <td className="whitespace-nowrap px-2">
                          {/* if tournament started then disable it */}
                          <button
                            className="bg-red-500 text-white px-2 py-0.5 rounded-md hover:opacity-60"
                            onClick={() => handleUnenrollTournament(item.id)}
                          >
                            Unenroll
                          </button>
                        </td>
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
              <div className="w-2/3 sm:w-2/4 lg:w-1/4 flex justify-around items-center">
                <div
                  className={`${
                    currentTab == 1 ? "bg-[#ee6730]" : "bg-orange-100"
                  } hover:bg-[#ee6730] group cursor-pointer w-full text-center p-1`}
                  onClick={() => setCurrentTab(1)}
                >
                  <h3
                    className={`${
                      currentTab == 1 ? "text-white" : "text-gray-400"
                    } group-hover:text-white font-semibold`}
                  >
                    Past
                  </h3>
                </div>
                <div
                  className={`${
                    currentTab == 2 ? "bg-[#ee6730]" : "bg-orange-100"
                  } hover:bg-[#ee6730] group cursor-pointer w-full text-center p-1`}
                  onClick={() => setCurrentTab(2)}
                >
                  <h3
                    className={`${
                      currentTab == 2 ? "text-white" : "text-gray-400"
                    } group-hover:text-white font-semibold`}
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
                  <div className="w-full text-center mt-12 bg-red-200">
                    <h4 className="text-lg font-medium text-red-700">
                      No matches found
                    </h4>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamProfileDetail;
