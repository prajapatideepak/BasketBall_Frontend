import React from "react";
import Heading from "../../../Component/Heading";
import MatchCard from "../../TeamProfileDetail/MatchCard";

export default function PlayerProfile() {
  const [currentTab, setCurrentTab] = React.useState(2);
  const match = {
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
  };
  const player = {
    basicinfo: {
      img: "/CBL_Images/player-default-profile.webp",
      firstName: "Deepak",
      email: "wellbenix@gmail.com",
      lastName: "Prajapati",
      dateofbirth: new Date(),
      gender: "m",
      pincode: "382340",
    },
    gameinfo: {
      height: "168",
      weight: "200",
      playerPosition: "Center",
      JerseyNumber: "69",
      Experience:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ur amet. Tempora aspernatur accusantium ipsam adipisci voluptatibus.",
    },
    statics: {
      totalMatch: 100,
      matchWon: 100,
      matchLoss: 0,
      totalScore: 320,
    },
    teamDetails: {
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
    },
  };

  return (
    <div className="mx-auto px-10 py-10 sm:px-20 sm:py-12 md:px-20 md:py-12 lg:px-24 xl:px-28 2xl:px-32 min-h-screen  ">
      {/* <div className="w-1/3"></div> */}
      <div className="flex flex-col lg:flex-row space-y-5 ">
        <div className="lg:w-1/2 flex flex-col items-center  mx-auto   ">
          <img
            className="mx-auto lg:w-2/3  shadow rounded-full"
            src={player.basicinfo.img}
          />

          <div className="p-2 ">
            <h1 className="text-3xl text-center text-gray-900">
              {player.basicinfo.firstName} {player.basicinfo.lastName}
            </h1>
            <div className="flex items-center justify-center">
              <span className="px-2    text-xs italic bg-orange-600 font-semibold text-white rounded-lg ">
                {player.teamDetails.team_name}{" "}
              </span>
              <span>-</span>
              <span className="px-2  text-xs italic bg-gray-800 font-semibold text-white rounded-lg ">
                {player.gameinfo.playerPosition}
              </span>
            </div>
            <p className="text-center text-gray-600 text-sm lg:w-1/2 mx-auto">
              {player.gameinfo.Experience}
            </p>
          </div>
        </div>
        {/* for up */}

        <div className="flex-1    ">
          <div className="mx-auto text-center">
            <div className="flex justify-center ">
              <Heading
                text={"Player Information"}
                className="text-2xl text-center  "
              />
            </div>
            {/*  */}
            <div className="text-left pt-4 ">
              <h2 className="text-xl py-2">Basic Information</h2>

              <div className="flex flex-wrap p-2  gap-2 lg:gap-3">
                <div className="bg-white px-2 py-1 rounded-lg border-2 border-orange-100 shadow-xl">
                  <span className="">Height -</span>
                  <span className="text-sm font-semibold">
                    {player.gameinfo.height}cm
                  </span>
                </div>
                <div className="bg-white px-2 py-1 rounded-lg border-2 border-orange-100 shadow-xl">
                  <span className="">Weight -</span>
                  <span className="text-sm font-semibold">
                    {player.gameinfo.weight}KG
                  </span>
                </div>

                <div className="bg-white px-2 py-1 rounded-lg border-2 border-orange-100 shadow-xl">
                  <span className="">Date of birth - </span>
                  <span className="text-sm font-semibold">
                    {player.basicinfo.dateofbirth.inString()}
                  </span>
                </div>

                <div className="bg-white px-2 py-1 rounded-lg border-2 border-orange-100 shadow-xl">
                  <span className="">From - </span>
                  <span className="text-sm font-semibold">
                    Ahmedabad , Gujarat
                  </span>
                </div>
              </div>
            </div>

            {/* contat */}
            <divss className="text-left ">
              <h2 className="text-xl py-2">Game Information</h2>

              <div className="flex flex-wrap p-2  gap-3">
                <div className="bg-white px-2 py-1 rounded-lg border-2 border-orange-100 shadow-xl">
                  <span className="">Jersey Number -</span>
                  <span className="text-sm font-semibold   px-4">
                    {player.gameinfo.JerseyNumber}
                  </span>
                </div>
                <div className="bg-white px-2 py-1 rounded-lg border-2 border-orange-100 shadow-xl">
                  <span className="">Game Position - </span>
                  <span className="text-sm font-semibold">
                    {player.gameinfo.playerPosition}
                  </span>
                </div>
              </div>
            </divss>
            {/* for contact infor */}
            <div className="text-left ">
              <h2 className="text-xl py-2">Contact Information</h2>

              <div className="flex flex-wrap p-2  gap-3">
                <div className="bg-white px-2 py-1 rounded-lg border-2 border-orange-100 shadow-xl">
                  <span className="">Email - </span>
                  <span className="text-sm font-semibold">
                    {player.basicinfo.email}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="left-0 rounded-2xl right-0 bg-black mx-0 text-white">
        {/* <h1 className="py-1 text-center font-bold">Player statistics</h1> */}
        <div className="grid grid-cols-2 lg:grid-cols-4  gap-3 lg:gap-5 p-2 mt-5 ">
          <div className="text-center  p-2 ">
            <h1 className="text-2xl font-bold">{player.statics.totalMatch}</h1>
            <span className="text-lg text-gray-200">Total Match</span>
          </div>
          <div className="text-center  p-2 ">
            <h1 className="text-2xl text-green-600 font-bold">
              {player.statics.matchWon}
            </h1>
            <span className="text-lg text-gray-200">Match Won</span>
          </div>
          <div className="text-center  p-2 text-red-600 ">
            <h1 className="text-2xl  font-bold">{player.statics.matchLoss}</h1>
            <span className="text-lg text-gray-200">Match loss</span>
          </div>
          <div className="text-center  p-2 text-green-600 ">
            <h1 className="text-2xl  font-bold">{player.statics.totalScore}</h1>
            <span className="text-lg text-gray-200">Total Score</span>
          </div>
        </div>
      </div>
      {/* <divs className="w-1/3 py-4">
        <div className="px-1 w-2/3 mx-auto  py-1 text-white  flex  text-center justify-center items-center mt-2 rounded-full space-x-2 bg-black">
          <span className="   bg-[#ee6730]  rounded-full  w-1/2 py-2 text-sm shadow-2xl">
            Last Game
          </span>
          <span className=" bg-black  rounded-full  w-1/2 py-2 text-sm shadow-2xl">
            Next Game
          </span>
        </div>
        <div className=" px-4 py-2">
          <MatchCard match={match} />
        </div>
      </divs> */}
    </div>
  );
}
