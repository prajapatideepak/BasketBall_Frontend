import React from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";
import TournamentTeamCard from "./TournamentTeamCard";

function Teams({teams}) {
  const teamDetails = [
    {
      team_id: 1001,
      team_logo: "/CBL_Images/basketball_team_logo_1.webp",
      team_name: "Mehta Ke Mahaarathi",
      description:
        "Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip",
      total_players: 7,
      matches_played: 22,
      matches_won: 18,
      matches_lost: 4,
      is_disqualified: 0,
    },
    {
      team_id: 1002,
      team_logo: "/CBL_Images/basketball_team_logo_2.webp",
      team_name: "Jetha Ke Jabaaz",
      description: "",
      total_players: 8,
      matches_played: 12,
      matches_won: 8,
      matches_lost: 4,
      is_disqualified: 1,
    },
  ];
  return (
    <div>
      <div className="mb-5">
        <div className="flex  justify-center">
          <div className="flex items-center space-x-3 border shadow-md py-2 px-3">
            <span className="flex items-center space-x-1 border-r-2 px-2">
              <h3 className="sm:flex hidden text-base lg:text-lg text-gray-700">Filter</h3>
              <FaFilter className="text-[#ee6730]" />
            </span>
            <div className="flex justify-center items-center md:flex-row flex-col space-y-1 md:space-y-0 md:space-x-2">
              <label htmlFor="" className="text-sm text-gray-500">
                Age Category
              </label>
              <select
                name=""
                id=""
                className="bg-gray-100 outline-none w-24 px-2 py-1 border text-sm lg:text-base"
              >
                <option value="">All</option>
                <option value="">Under 19</option>
                <option value="">Under 25</option>
              </select>
            </div>
            <div className="flex justify-center items-center md:flex-row flex-col space-y-1 md:space-y-0 md:space-x-2">
              <label htmlFor="" className="text-sm text-gray-500">
                Gender Type
              </label>
              <select
                name=""
                id=""
                className="bg-gray-100 outline-none w-24 px-2 py-1 border text-sm lg:text-base"
              >
                <option value="">All</option>
                <option value="">Boys</option>
                <option value="">Girls</option>
                <option value="">Men</option>
                <option value="">Women</option>
                <option value="">Mixed</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {teams.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mt-10">
          {teams.map((team, i) => {
            return <TournamentTeamCard key={i} teamDetails={team} />;
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center mt-16 md:mt-24">
          <AiOutlineTeam className="text-2xl xs:text-3xl sm:text-5xl text-gray-400 mr-2" />
          <p className="text-xs xs:text-sm sm:text-lg font-medium text-gray-400">
            No Team Found
          </p>
        </div>
      )}
    </div>
  );
}

export default Teams;
