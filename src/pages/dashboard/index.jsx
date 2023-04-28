import React from "react";
import MatchLive from "../../Component/Dashboard/matchlive";
import Match_cards from "../../Component/Dashboard/Match_cards";
import { BiChevronRight } from "react-icons/bi"
import { FaPhotoVideo } from "react-icons/fa"
import { GiDiamondTrophy } from "react-icons/gi"
import { ImNewspaper } from "react-icons/im"
import Hilights_Cards from "../../Component/Dashboard/Highlights_cards";
import News_cards from "../../Component/Dashboard/News_cards";
import Tournaments_cards from "../../Component/Dashboard/Tournaments_cards";
import { GiBasketballBall } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom'
import { useGetMatchesQuery } from "../../services/match";
import { useGetAllTournamentsQuery } from "../../services/tournament";
import { useGetAllNewsQuery } from "../../services/news";


const Dashboard = () => {
  const data = useGetMatchesQuery();

  const tournaments = useGetAllTournamentsQuery();
  const [pageNo, setPageNo] = React.useState(1);
  const news = useGetAllNewsQuery({
    pageNo: pageNo - 1,
  });
  const navigate = useNavigate();
  const matchlist = () => {
    navigate(`/match`)
  }
  const tournamentlist = () => {
    navigate(`/tournament`)
  }
  const newslist = () => {
    navigate(`/news`)
  }

  return (
    <div className="min-h-screen ">
      {/* Main Slider for live and upcoming matches */}
      <div className="">
        {/* <img src="/CBL_Images/OFFLINE.png" alt="" srcset="" /> */}
        <MatchLive slides={data?.data?.data} />
      </div>

      {/* Live and Upcoming match   */}
      <div className="mt-5 md:py-5 relative">
        <div className="px-7 md:px-10">
          <div className="flex justify-between items-center xl:pr-8">
            <h1 className="font-bold text-lg md:text-2xl  lg:text-3xl text-black">
              Matches :
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
            data?.data?.data?.length > 0
              ?
              data?.data?.data?.map((match, slideIndex) => {
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
              Tournaments :
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
            tournaments?.data?.all_tournaments?.length > 0
              ?
              tournaments?.data?.all_tournaments?.map((tournament, index) => {
                return (
                  <Tournaments_cards
                    key={index}
                    tournament={tournament}
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
      {/* <div className="relative">
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
      </div> */}

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
            news?.data?.AllNews?.length > 0
              ?
              news?.data?.AllNews?.map((news, index) => {
                return (
                  <News_cards
                    key={index}
                    news={news}
                  />
                )
              })
              :
              <div className='flex justify-center items-center w-full py-5'>
                <ImNewspaper className=" text-2xl sm:text-3xl md:text-4xl text-gray-400 mr-2" />
                <p className='text-xs xs:text-sm sm:text-lg font-medium text-gray-400'>No News Found</p>
              </div>
          }
        </div>

      </div>
    </div>
  );
};



export default Dashboard;
