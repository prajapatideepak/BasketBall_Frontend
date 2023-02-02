import React from "react";

export default function PlayerProfile() {
  const [currentTab, setCurrentTab] = React.useState(2);

  const player = {
    basicinfo: {
      img: "/CBL_Images/player-default-profile.webp",
      firstName: "Deepak",
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
    <div className="flex min-h-screen  ">
      <div className="flex">
        <div className="w-2/3 flex flex-col items-center  mx-auto   p-4">
          <img
            className="mx-auto lg:w-1/3  shadow rounded-full"
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
            <p className="text-center text-gray-600 text-sm lg:w-1/3 mx-auto">
              {player.gameinfo.Experience}
            </p>
          </div>
        </div>
        {/* for up */}
        <div className="flex-1">
          <div>
            <span>Last Game</span>
            <span>Next Game</span>
          </div>
        </div>
      </div>
    </div>
  );
}
