import React from "react";
import MatchLive from "../../Component/Dashboard/matchlive";
import Match_cards from "../../Component/Dashboard/Match_cards";
import { BiChevronRight } from "react-icons/bi"

const Dashboard = () => {
  const slides = [
    {
      id: 1,
      url: '../../CBL_Images/background4.webp',
      Tournament: "Gokuldham Premier League",
      Fisrt_Team: "MEHTA KE MAHAARATHI",
      Secound_Team: "JETHA KE JABAAZ",
      is_live: 1,
    },
    {
      id: 2,
      url: '../../CBL_Images/background3.webp',
      Tournament: "Gokuldham Premier League",
      Fisrt_Team: "MEHTA KE MAHAARATHI",
      Secound_Team: "JETHA KE JABAAZ",
      is_live: 0,
    },
    {
      id: 3,
      url: '../../CBL_Images/background2.webp',
      Tournament: "FIBA Americas Championship",
      Fisrt_Team: "Dallas Mavericks",
      Secound_Team: "Denver Nuggets",
      is_live: 1,
    },
    {
      id: 4,
      url: '../../CBL_Images/background1.webp',
      Tournament: "Gokuldham Premier League",
      Fisrt_Team: "MEHTA KE MAHAARATHI",
      Secound_Team: "JETHA KE JABAAZ",
      is_live: 0,
    },
  ];

  const matches = [
    {
      id: 1,
      day: "Fri",
      date: "1 Feb",
      is_live : 0,
      time: "23:00PM GMT+5:30",
      first_team: "Real Madrid",
      secound_team: "Rajasthan Royals",
      F_logo: "../../../CBL_Images/logo1.png",
      s_logo: "../../../CBL_Images/logo2.png",
      tournament:"CBL Legue",
      location:"Ahmedabad",
      tournament_logo:"../../CBL_Images/logo5.png"
    },
    {
      id: 2,
      day: "Fri",
      date: "1 Feb",
      is_live : 1,
      time: "23:00PM GMT+5:30",
      first_team: "Mehta ke mahati",
      secound_team: "Real Madrid",
      F_logo: "../../../CBL_Images/logo3.png",
      s_logo: "../../../CBL_Images/logo4.png",
      tournament:"NBA National",
      location:"Mumbai",
      tournament_logo:"../../CBL_Images/logo5.png"
    },
    {
      id: 3,
      day: "Fri",
      date: "1 Feb",
      is_live : 0,
      time: "23:00PM GMT+5:30",
      first_team: "Royal Chalengers",
      secound_team: "Chennai Superking",
      F_logo: "../../../CBL_Images/logo5.png",
      s_logo: "../../../CBL_Images/logo1.png",
      tournament:"LJ Cup",
      location:"Delhi",
      tournament_logo:"../../CBL_Images/logo5.png"
    },
    {
      id: 4,
      day: "Fri",
      date: "1 Feb",
      is_live : 0,
      time: "23:00PM GMT+5:30",
      first_team: "Mumbai Indians",
      secound_team: "Delhi Daredevils",
      F_logo: "../../../CBL_Images/logo2.png",
      s_logo: "../../../CBL_Images/logo3.png",
      tournament:"Basketball legue",
      location:"Kolkata",
      tournament_logo:"./../CBL_Images/logo5.png"
    },
  ]


  return (
    <div className="min-h-screen px-24 ">

      <MatchLive slides={slides} />

      <div className="  py-10 ">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-3xl text-black">
            Leagues on Courtside :
          </h1>
          <p className="flex items-center text-[13px] font-semibold cursor-pointer hover:underline">
            Discover More
            <BiChevronRight className="text-xl mt-1" />
          </p>
        </div>
        <div className="bg-black h-[1px] w-full   bg-gradient-to-l from-slate-50">
        </div>
        <div className="player-container w-full flex px-[18px] flex-nowrap gap-8 sm:gap-16 md:gap-20 my-5  overflow-x-auto py-10">
          {
            matches.length > 0
              ?
              matches.map((item, index) => {
                return (
                  <Match_cards 
                  key={index}
                  id={item.id}
                  day={item.day}
                  date={item.date}
                  is_live={item.is_live}
                  time={item.time}
                  first_team={item.first_team}
                  secound_team={item.secound_team}
                  F_logo={item.F_logo}
                  s_logo={item.s_logo}
                  tournament={item.tournament}
                  location={item.location}
                  tournament_logo={item.tournament_logo}
                  />
                )
              })
              :
              <div className="bg-red-100 w-full mt-4 text-center">
                <h4 className='text-red-700 font-medium p-2'>No Matches Found</h4>
              </div>
          }
        </div>
      </div>
    </div>
  );
};



export default Dashboard;
