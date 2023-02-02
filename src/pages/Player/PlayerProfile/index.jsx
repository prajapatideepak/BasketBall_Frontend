import React from "react";

export default function PlayerProfile() {
  const player = {
    basicinfo: {
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
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto reprehenderit mollitia quibusdam consequuntur amet. Tempora aspernatur accusantium ipsam adipisci voluptatibus.",
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
    <div className="justify-center items-center min-h-screen">
      <div>
        <h1 className="text-3xl font-semibold ">
          {player.basicinfo.firstName} {player.basicinfo.lastName}{" "}
        </h1>
      </div>
    </div>
  );
}
