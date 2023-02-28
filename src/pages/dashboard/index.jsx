import React from "react";
import MatchLive from "../../Component/Dashboard/matchlive";
import Match_cards from "../../Component/Dashboard/Match_cards";
import { BiChevronRight } from "react-icons/bi"
import Hilights_Cards from "../../Component/Dashboard/Highlights_cards";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import News_cards from "../../Component/Dashboard/News_cards";
import Tournaments_cards from "../../Component/Dashboard/Tournaments_cards";
import { GiBasketballBall } from 'react-icons/gi';



const Dashboard = () => {
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

  const Highlights = [
    {
      id: 1,
      photo: "../../CBL_Images/news1.webp",
      first_team: "Real Madrid",
      secound_team: "Rajasthan Royals",
      F_logo: "../../../CBL_Images/logo1.png",
      s_logo: "../../../CBL_Images/logo2.png",
      tournament_logo: "../../CBL_Images/logo2.png"
    },
    {
      id: 2,
      photo: "../../CBL_Images/DSCF9679.webp",
      first_team: "Real Madrid",
      secound_team: "Rajasthan Royals",
      F_logo: "../../../CBL_Images/logo3.png",
      s_logo: "../../../CBL_Images/logo4.png",
      tournament_logo: "../../CBL_Images/logo2.png"
    },
    {
      id: 3,
      photo: "../../CBL_Images/FWCAQ_Luanda_358.webp",
      first_team: "Real Madrid",
      secound_team: "Rajasthan Royals",
      F_logo: "../../../CBL_Images/logo2.png",
      s_logo: "../../../CBL_Images/logo1.png",
      tournament_logo: "../../CBL_Images/logo2.png"
    },
    {
      id: 4,
      photo: "../../CBL_Images/MHS_0071.webp",
      first_team: "Real Madrid",
      secound_team: "Rajasthan Royals",
      F_logo: "../../../CBL_Images/logo1.png",
      s_logo: "../../../CBL_Images/logo2.png",
      tournament_logo: "../../CBL_Images/logo2.png"
    },
    {
      id: 5,
      photo: "../../CBL_Images/CV-Cond.webp",
      first_team: "Real Madrid",
      secound_team: "Rajasthan Royals",
      F_logo: "../../../CBL_Images/logo1.png",
      s_logo: "../../../CBL_Images/logo2.png",
      tournament_logo: "../../CBL_Images/logo2.png"
    },
    {
      id: 6,
      photo: "../../CBL_Images/DYLANBURNS_20230226_0830.webp",
      first_team: "Real Madrid",
      secound_team: "Rajasthan Royals",
      F_logo: "../../../CBL_Images/logo1.png",
      s_logo: "../../../CBL_Images/logo2.png",
      tournament_logo: "../../CBL_Images/logo2.png"
    },
  ]

  const News = [
    {
      id: 1,
      photo: "../../CBL_Images/sd_11zon.webp",
      heading: "Wellbenix created web for basketball",
      title1: "CBL",
      title2: "CVL",
      title3: "Ayursattva",
      date: "10/MARCH/2023"
    },
    {
      id: 2,
      photo: "../../CBL_Images/high4.jfif",
      heading: "Wellbenix created web for basketball",
      title1: "CBL",
      title2: "CVL",
      title3: "Ayursattva",
      date: "10/FEB/2023"
    },
    {
      id: 3,
      photo: "../../CBL_Images/news1.jpg",
      heading: "Wellbenix created web for basketball",
      title1: "CBL",
      title2: "CVL",
      title3: "Ayursattva",
      date: "10/APRIL/2023"
    },
  ]

  const tournament = [
    {
      tournament_id: 1,
      logo: "../../CBL_Images/logo3.png"
    },
    {
      tournament_id: 2,
      logo: "../../CBL_Images/logo5.png"
    },
    {
      tournament_id: 3,
      logo: "../../CBL_Images/logo2.png"
    },
    {
      tournament_id: 4,
      logo: "../../CBL_Images/logo.png"
    },
  ]

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? Tournament.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === Tournament.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 8;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="min-h-screen ">
      {/* Main Slider for live and upcoming matches */}
      <div className="bg-black">
        <MatchLive slides={SliderData} />
      </div>

      {/* Live and Upcoming match   */}
      <div className="mt-5 md:py-5">
        <div className="px-7 md:px-10">
          <div className="flex justify-between items-center xl:pr-8">
            <h1 className="font-bold text-lg md:text-2xl  lg:text-3xl text-black">
              Leagues on Courtside :
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
        <div className=" w-full flex justify-start px-6 xl:px-10 items-center gap-5  overflow-hidden pt-10 pb-10 lg:py-8">
          {
            match.length > 0
              ?
              match.map((match, index) => {
                return (
                  <Match_cards key={index} match={match} />
                )
              })
              :
              <div className='flex justify-center items-center mt-16 md:mt-24'>
                <GiBasketballBall className="text-2xl xs:text-3xl sm:text-5xl text-gray-400 mr-2" />
                <p className='text-xs xs:text-sm sm:text-lg font-medium text-gray-400'>No Matches Found</p>
              </div>
          }
          {/* Left Arrow  */}
          <div className='hidden group-hover:block  absolute top-[50%] -translate-x-0 translate-y-[-50%] left-0 text-2xl h-1/2 mt-6  justify-center items-center p-2 bg-black/20 duration-300 hover:bg-black text-white cursor-pointer'>
            <FaChevronLeft
              onClick={prevSlide}
              size={30} />
          </div>
          {/* Right Arrow  */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 text-2xl h-1/2 mt-6  justify-center items-center p-2 bg-black/20 duration-300 hover:bg-black text-white cursor-pointer'>
            <FaChevronRight
              onClick={nextSlide}
              size={30} />
          </div>
        </div>
      </div>

      {/* Tournaments  */}
      <div className="py-5">
        <div className="px-7 md:px-10">
          <div className="flex justify-between items-center xl:pr-8">
            <h1 className="font-bold text-lg md:text-2xl  lg:text-3xl text-black">
              Tournament :
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
        <div className="w-full flex justify-start px-6 xl:px-10 items-center gap-5  overflow-hidden pt-10 pb-10 lg:py-8">
          {
            tournament.length > 0
              ?
              tournament.map((tournament, index) => {
                return (
                  <Tournaments_cards
                    key={index}
                    tournament={tournament}
                  />
                )
              })
              :
              <div className="bg-red-100 w-full mt-4 text-center">
                <h4 className='text-red-700 font-medium p-2'>No Tournament Found</h4>
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
        <div className="w-full flex justify-start px-5 xl:px-10 items-center gap-5  overflow-hidden pt-10 pb-10 lg:py-8">
          {
            Highlights.length > 0
              ?
              Highlights.map((item, index) => {
                return (
                  <Hilights_Cards
                    key={index}
                    id={item.id}
                    photo={item.photo}
                    first_team={item.first_team}
                    secound_team={item.secound_team}
                    F_logo={item.F_logo}
                    s_logo={item.s_logo}
                    tournament_logo={item.tournament_logo}
                  />
                )
              })
              :
              <div className="bg-red-100 w-full mt-4 text-center">
                <h4 className='text-red-700 font-medium p-2'>No Highlights Found</h4>
              </div>
          }
        </div>
      </div>

      {/* News previus matches  */}
      <div className=" pb-5 ">
        <div className="px-7 md:px-10">
          <div className="flex justify-between items-center xl:pr-8">
            <h1 className="font-bold text-lg md:text-2xl  lg:text-3xl text-black">
              News :
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
        <div className=" w-full  flex justify-start px-5 xl:px-10 items-center gap-5  overflow-hidden py-8">
          {
            News.length > 0
              ?
              News.map((item, index) => {
                return (
                  <News_cards
                    key={index}
                    id={item.id}
                    photo={item.photo}
                    heading={item.heading}
                    title1={item.title1}
                    title2={item.title2}
                    title3={item.title3}
                    date={item.date}
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
