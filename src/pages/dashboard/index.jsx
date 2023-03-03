import React from "react";
import MatchLive from "../../Component/Dashboard/matchlive";
import Match_cards from "../../Component/Dashboard/Match_cards";
import { BiChevronRight } from "react-icons/bi"
import { FaPhotoVideo } from "react-icons/fa"
import { GiDiamondTrophy } from "react-icons/gi"
import { BsFillCameraReelsFill } from "react-icons/bs"
import Hilights_Cards from "../../Component/Dashboard/Highlights_cards";
import News_cards from "../../Component/Dashboard/News_cards";
import Tournaments_cards from "../../Component/Dashboard/Tournaments_cards";
import { GiBasketballBall } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate();
  const matchlist = () => {
    navigate(`/match`)
  }
  const tournamentlist = () => {
    navigate(`/tournaments`)
  }
  const newslist = () => {
    navigate(`/news`)
  }
  const SliderData = [
    {
      id: 1,
      is_live: 0,
      url: '../../CBL_Images/background4.webp',
      Tournament: "Basketball World Cup",
      Fisrt_Team: "Orlando Magic",
      Secound_Team: "Acapella With Capela",
      Fisrt_Team_logo: "../../CBL_Images/logo1.png",
      Secount_Team_logo: "../../CBL_Images/logo2.png",
      time: "5:30PM",
      date: "25Feb",
      day: "Fri"
    },
    {
      id: 2,
      url: '../../CBL_Images/background3.webp',
      Tournament: "CBL Legue",
      Fisrt_Team: "The Stags",
      Secound_Team: "Free Throw Fancies",
      is_live: 1,
      Fisrt_Team_logo: "../../CBL_Images/logo3.png",
      Secount_Team_logo: "../../CBL_Images/logo4.png",
      time: "5:30PM",
      date: "01Feb",
      day: "Mun"
    },
    {
      id: 3,
      url: '../../CBL_Images/background2.webp',
      Tournament: "FIBA Americas Championship",
      Fisrt_Team: "Dallas Mavericks",
      Secound_Team: "Denver Nuggets",
      is_live: 2,
      Fisrt_Team_logo: "../../CBL_Images/logo5.png",
      Secount_Team_logo: "../../CBL_Images/logo6.png",
      time: "5:30PM",
      date: "08Jan",
      day: "Mun"
    },
  ];

  const match = [
    {
      match_id: 1,
      day: "Mun",
      date: "27 Feb",
      is_live: 0,
      time: "11:30AM GMT+5:30",
      first_team: "Real Madrid",
      secound_team: "Rajasthan Royals",
      F_logo: "../../../CBL_Images/logo1.png",
      s_logo: "../../../CBL_Images/logo2.png",
      team_1_score: 0,
      team_2_score: 0,
      won_team: '',
      tournament: "CBL Legue",
    },
    {
      match_id: 2,
      day: "Fri",
      date: "1 Feb",
      is_live: 1,
      time: "23:00PM GMT+5:30",
      first_team: "Mehta ke mahati",
      secound_team: "Real Madrid",
      F_logo: "../../../CBL_Images/logo3.png",
      s_logo: "../../../CBL_Images/logo4.png",
      tournament: "NBA National",
      team_1_score: 0,
      team_2_score: 0,
      won_team: '',
    },
    {
      match_id: 3,
      day: "Fri",
      date: "24 Feb",
      is_live: 2,
      time: "23:00PM GMT+5:30",
      first_team: "Royal Chalengers",
      secound_team: "Chennai Superking",
      F_logo: "../../../CBL_Images/logo5.png",
      s_logo: "../../../CBL_Images/logo1.png",
      team_1_score: 45,
      team_2_score: 22,
      won_team: 'Chennai Superking',
      tournament: "LJ Cup",
    },
    {
      match_id: 4,
      day: "Fri",
      date: "25 Feb",
      is_live: 2,
      time: "23:00PM GMT+5:30",
      first_team: "Mumbai Indians",
      secound_team: "Delhi Daredevils",
      F_logo: "../../../CBL_Images/logo2.png",
      s_logo: "../../../CBL_Images/logo3.png",
      tournament: "Basketball legue",
      team_1_score: 38,
      team_2_score: 22,
      won_team: 'Mumbai Indians',
    },
    {
      match_id: 5,
      day: "Tue",
      date: "28 Feb",
      is_live: 2,
      time: "23:00PM GMT+5:30",
      first_team: "Kolkata Indians",
      secound_team: "Mumbai Daredevils",
      F_logo: "../../../CBL_Images/indiana-pacers-logo.png",
      s_logo: "../../../CBL_Images/logo3.png",
      tournament: "Basketball legue",
      team_1_score: 98,
      team_2_score: 22,
      won_team: 'Kolkata Indians',
    },
  ]

  const highlights = [
    {
      id: 1,
      photo: "../../CBL_Images/news1.webp",
      first_team: "Real Madrid",
      secound_team: "Rajasthan Royals",
      F_logo: "../../../CBL_Images/logo1.png",
      s_logo: "../../../CBL_Images/logo2.png",
      tournament: "CBL legue"
    },
    {
      id: 2,
      photo: "../../CBL_Images/news1.webp",
      first_team: "Kolkata Fighters",
      secound_team: "Chennai super ",
      F_logo: "../../../CBL_Images/logo1.png",
      s_logo: "../../../CBL_Images/logo2.png",
      tournament: "NBA National legue"
    },

  ]

  const News = [
    {
      id: 1,
      title: "Wellbenix created amazing web application for basketball",
      priority: 2,
      tags: "CBL, wellebnix , work",
      date: "22/3/21",
      image: "/CBL_Images/7xm.xyz928823.webp",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione porro dolor aspernatur esse assumenda, nisi dolorum labore eos repellendus, alias tenetur. Iure placeat eveniet necessitatibus similique ducimus cumque veritatis. Vero.",
    },
    {
      id: 2,
      title: "Wellbenix created amazing web application for basketball",
      priority: 2,
      tags: "CBL, wellebnix , work",
      date: "22/3/21",
      image: "/CBL_Images/7xm.xyz641706.jpg",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione porro dolor aspernatur esse assumenda, nisi dolorum labore eos repellendus, alias tenetur. Iure placeat eveniet necessitatibus similique ducimus cumque veritatis. Vero.",
    },
    {
      id: 3,
      title: "Wellbenix created amazing web application for basketball",
      priority: 2,
      tags: "CBL, wellebnix , work",
      date: "22/3/21",
      image: "/CBL_Images/7xm.xyz928823.webp",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione porro dolor aspernatur esse assumenda, nisi dolorum labore eos repellendus, alias tenetur. Iure placeat eveniet necessitatibus similique ducimus cumque veritatis. Vero.",
    },
    {
      id: 4,
      title: "Wellbenix created amazing web application for basketball",
      priority: 2,
      tags: "CBL, wellebnix , work",
      date: "22/3/21",
      image: "/CBL_Images/7xm.xyz928823.webp",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione porro dolor aspernatur esse assumenda, nisi dolorum labore eos repellendus, alias tenetur. Iure placeat eveniet necessitatibus similique ducimus cumque veritatis. Vero.",
    },
  ]

  const tournament = [
    {
      tournament_id: 1,
      name: "CBL Legue",
      location: "Mumbai",
      start_date: "10 Jan 2023",
      end_date: "20 jan 2023",
      logo: "../../CBL_Images/logo3.png",
      is_live: "1"
    },
    {
      tournament_id: 2,
      name: "NBA National",
      location: "Delhi",
      start_date: "20 Feb 2023",
      end_date: "30 Feb 2023",
      logo: "../../CBL_Images/logo5.png",
      is_live: "1"
    },
    {
      tournament_id: 3,
      name: "Lj Cup",
      location: "Kolkata",
      start_date: "1 Mar 2023",
      end_date: "10 Mar 2023",
      logo: "../../CBL_Images/logo2.png",
      is_live: "0"
    },
    {
      tournament_id: 4,
      name: "Basketball legue",
      location: "Ahmedabad",
      start_date: "11 Mar 2023",
      end_date: "20 Mar 2023",
      logo: "../../CBL_Images/logo.png",
      is_live: "0"
    },
    {
      tournament_id: 1,
      name: "CBL Legue",
      location: "Mumbai",
      start_date: "10 Jan 2023",
      end_date: "20 jan 2023",
      logo: "../../CBL_Images/logo3.png",
      is_live: "1"
    },
  ]



  return (
    <div className="min-h-screen ">
      {/* Main Slider for live and upcoming matches */}
      <div className="bg-black">
        <MatchLive slides={SliderData} />
      </div>

      {/* Live and Upcoming match   */}
      <div className="mt-5 md:py-5 relative">
        <div className="px-7 md:px-10">
          <div className="flex justify-between items-center xl:pr-8">
            <h1 className="font-bold text-lg md:text-2xl  lg:text-3xl text-black">
              Leagues on Courtside :
            </h1>
            <div className="flex items-center text-[13px] font-semibold cursor-pointer hover:underline " onClick={matchlist}>
              <p className="hidden sm:block sm:text-[10px] lg:text-[11px]">Discover More</p>
              <BiChevronRight className="text-base mt-1 sm:mt-0 lg:text-lg  xl:mt-1" />
            </div>
          </div>
          <div className="bg-black h-[5px] w-32 my-1 relative top-[7px] left-2">
          </div>
          <div className="bg-gray-700 h-[1px] w-full my-1 bg-gradient-to-l from-slate-50">
          </div>
        </div>
        <div id="match" className=" w-full flex justify-start px-6 xl:px-14 items-center gap-5 xl:gap-3 scroll-smooth  overflow-x-auto scrollbar-hide pt-10 pb-10 lg:py-8">
          {
            match.length > 0
              ?
              match.map((match, slideIndex) => {
                return (
                  <Match_cards key={slideIndex} match={match} />
                )
              })
              :
              <div className='flex justify-center items-center w-full py-5'>
                <GiBasketballBall className=" text-2xl sm:text-3xl md:text-4xl text-gray-400 mr-2" />
                <p className='text-xs xs:text-sm sm:text-lg font-medium text-gray-400'>No Matches Found</p>
              </div>
          }
        </div>
      </div>

      {/* Tournaments  */}
      <div className="py-5 relative">
        <div className="px-7 md:px-10">
          <div className="flex justify-between items-center xl:pr-8">
            <h1 className="font-bold text-lg md:text-2xl  lg:text-3xl text-black">
              Tournament :
            </h1>
            <div className="flex items-center text-[13px] font-semibold cursor-pointer hover:underline " onClick={tournamentlist}>
              <p className="hidden sm:block sm:text-[10px] lg:text-[11px]">Discover More</p>
              <BiChevronRight className="text-base mt-1 sm:mt-0 lg:text-lg  xl:mt-1" />

            </div>
          </div>
          <div className="bg-black h-[5px] w-32 my-1 relative top-[7px] left-2">
          </div>
          <div className="bg-gray-700 h-[1px] w-full my-1 bg-gradient-to-l from-slate-50">
          </div>
        </div>
        <div id="tournament" className="w-full flex justify-start px-6 xl:px-14 items-center gap-5 xl:gap-3  scroll-smooth  overflow-x-auto scrollbar-hide pt-10 pb-10 lg:py-8">
          {
            tournament.length > 0
              ?
              tournament.map((tournament, index) => {
                return (
                  <Tournaments_cards
                    key={tournament.index}
                    tournament_id={tournament.tournament_id}
                    name={tournament.name}
                    logo={tournament.logo}
                    location={tournament.location}
                    start_date={tournament.start_date}
                    end_date={tournament.end_date}
                    is_live={tournament.is_live}
                  />
                )
              })
              :
              <div className='flex justify-center items-center w-full py-5'>
                <GiDiamondTrophy className=" text-2xl sm:text-3xl md:text-4xl text-gray-400 mr-2" />
                <p className='text-xs xs:text-sm sm:text-lg font-medium text-gray-400'>No Tournament Found</p>
              </div>
          }
        </div>
      </div>

      {/* Highlights previus matches  */}
      <div className="relative">
        <div className="px-7 md:px-10">
          <div className="flex justify-between items-center xl:pr-8">
            <h1 className="font-bold text-lg md:text-2xl  lg:text-3xl text-black">
              Highlights :
            </h1>
            <div className="flex items-center text-[13px] font-semibold cursor-pointer hover:underline ">
              <p className="hidden sm:block sm:text-[10px] lg:text-[11px]">Discover More</p>
              <BiChevronRight className="text-base mt-1 sm:mt-0 lg:text-lg  xl:mt-1" />
            </div>
          </div>
          <div className="bg-black h-[5px] w-32 my-1 relative top-[7px] left-2">
          </div>
          <div className="bg-gray-700 h-[1px] w-full my-1 bg-gradient-to-l from-slate-50">
          </div>
        </div>
        <div id="highlights" className="w-full flex justify-start px-6 xl:px-14 items-center gap-5   scroll-smooth  overflow-x-auto scrollbar-hide pt-10 pb-10 lg:py-8">
          {
            highlights.length > 0
              ?
              highlights.map((highlights, index) => {
                return (
                  <Hilights_Cards
                    key={index}
                    highlights={highlights}
                  />
                )
              })
              :
              <div className='flex justify-center items-center w-full py-5'>
                <FaPhotoVideo className=" text-2xl sm:text-3xl md:text-4xl text-gray-400 mr-2" />
                <p className='text-xs xs:text-sm sm:text-lg font-medium text-gray-400'>No Highlights Found</p>
              </div>
          }
        </div>
      </div>

      {/* News previus matches  */}
      <div className=" pb-5 relative ">
        <div className="px-7 md:px-10">
          <div className="flex justify-between items-center xl:pr-8">
            <h1 className="font-bold text-lg md:text-2xl  lg:text-3xl text-black">
              News :
            </h1>
            <div className="flex items-center text-[13px] font-semibold cursor-pointer hover:underline " onClick={newslist}>
              <p className="hidden sm:block sm:text-[10px] lg:text-[11px]">Discover More</p>
              <BiChevronRight className="text-base mt-1 sm:mt-0 lg:text-lg  xl:mt-1" />
            </div>
          </div>
          <div className="bg-black h-[5px] w-32 my-1 relative top-[7px] left-2">
          </div>
          <div className="bg-gray-700 h-[1px] w-full my-1 bg-gradient-to-l from-slate-50">
          </div>
        </div>
        <div id="news" className=" w-full  flex justify-start px-6 xl:px-14 items-center gap-5   scroll-smooth  overflow-x-auto scrollbar-hide py-8">
          {
            News.length > 0
              ?
              News.map((news, index) => {
                return (
                  <News_cards
                    key={index}
                    news={news}
                  />
                )
              })
              :
              <div className='flex justify-center items-center w-full py-5'>
                <BsFillCameraReelsFill className=" text-2xl sm:text-3xl md:text-4xl text-gray-400 mr-2" />
                <p className='text-xs xs:text-sm sm:text-lg font-medium text-gray-400'>No News Found</p>
              </div>
          }
        </div>

      </div>
    </div>
  );
};



export default Dashboard;
