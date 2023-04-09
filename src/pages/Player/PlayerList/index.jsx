import React from "react";
import Heading from "../../../Component/Heading";
import { AiOutlineSearch } from "react-icons/ai";
import { GiBasketballJersey } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useGetAllPlayersQuery } from '../../../services/player';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Loader from "../../../Component/Loader";



const PlayerList = () => {
  const defaultImage = "/CBL_Images/60111-removebg-preview.png";
  const [search, setSearch] = React.useState("");
  const [pageNo, setPageNo] = React.useState(1);
  const { isLoading, data } = useGetAllPlayersQuery({
    pageNo: pageNo - 1,
    search,
  });
  const itemsPerPage = 2;
  return (
    <section className="min-h-screen-fit">
      <div>
        {isLoading && <Loader />}
        {data && (
          <div>
            <div className="flex min-h-screen px-10 2xl:px-32 lg:px-14 py-8">
              <div className="mx-auto w-full">
                <Heading
                  className={"text-xl md:text-3xl px-3 sm:px-7 py-1"}
                  text={"All Players"}
                />
                <div className="flex m-5  justify-center ">
                  <input
                    type="text"
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                    value={search}
                    className=" rounded-lg w-full lg:w-2/3 rounded-r-none  appearance-none border border-gray-400 border-r-0 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:shadow-2xl duration-300 text-base focus:outline-none  "
                    name="search"
                    placeholder="Search Player"
                  />
                  <button className="text-2xl rounded-lg border rounded-l-none border-[#ee6730] border-l-0 bg-[#ee6730]  hover:bg-gray-800 group text-white px-2 shadow-2xl ">
                    <AiOutlineSearch className="group-hover:scale-110 duration-300" />
                  </button>
                </div>
                <div className="flex w-full flex-col items-center lg:px-8  space-y-6 py-3 sm:py-0 ">
                  {data?.data && data?.data?.length > 0 ? (
                    data?.data.map((player, index) => {
                      return (
                        <Link
                          key={player.id}
                          className="w-full  scale-105"
                          to={`/player/profile-detail/${player.id}`}
                        >
                          <div className="duration-300 relative justify-end bg-black rounded-lg text-white overflow-hidden shadow-xl cursor-pointer hover:scale-[1.03] w-6/7  md:w-full h-full ">
                            <div className=" flex justify-end items-center ">
                              <img
                                src={player.team_players[0]?.teams?.logo}
                                alt=""
                                className="w-28 h-28 opacity-20"
                              />
                            </div>
                            <div className=" flex flex-col  px-5 sm:px-8 lg:px-12  sm:flex-row w-full h-full absolute top-0 content-start py-2 ">
                              <div className="bg-gradient-to-b  from-[#e64100]  absolute  md:top-[-32px] md:left-[-20px] w-10 h-10 rotate-[30deg] top-[-15px] left-[-15px] md:h-20 md:w-14 content-start md:rotate-[45deg] flex justify-center items-center">
                                <h1 className="rotate-[-30deg] md:rotate-[315deg] text-xs font-bold md:text-lg mt-1 ml-5 md:ml-6">
                                  {(index+1) + ((pageNo-1)*10)}
                                </h1>
                              </div>
                              {/* avtar start */}
                              <div className="text-center sm:w-[65%]   w-full items-center justify-start  lg:py-6 flex  ">
                                <div className="w-1/3 lg:w-40 ">
                                  <img
                                    src={player?.photo}
                                    className=" object-cover w-20 h-20 rounded-full border-2 sm:border-4 border-slate-700 "
                                  />
                                </div>
                                <div className="flex justify-center items-center w-1/2">
                                  <h1 className="text-gray-600 font-bold xs:text-xs sm:text-xs lg:text-base uppercase">
                                    {player?.playing_position ? player?.playing_position : "...."}
                                  </h1>
                                </div>
                                <div className="flex flex-col w-full justify-start">
                                  <h1 className="text-white font-bold text-base sm:text-lg md:text-xl lg:text-[24px] text-start ">
                                    {player?.first_name}
                                  </h1>
                                  <h1 className="text-gray-600 font-bold text-[8px] sm:text-[10px] lg:text-xs xl:text-sm text-start ">
                                    {player?.team_players[0]?.teams?.team_name ? player?.team_players[0]?.teams?.team_name : "...."}
                                  </h1>
                                </div>
                              </div>
                              {/* avtar end */}
                              {/* statiscs start */}
                              <div className="2xl:justify-end py-1 g:p-2 w-full sm:w-[35%] flex items-center justify-center  ">
                                <div className="flex justify-between w-full ">
                                  <div className="text-center    ">
                                    <h1
                                      className="text-sm sm:text-lg md:text-2xl  lg:text-3xl 
                             font-bold text-white"
                                    >
                                      {player?.player_statistics[0]?.matches_played ? player?.player_statistics[0]?.matches_played : "0"}
                                    </h1>
                                    <span className="text-[8px] sm:text-[9px] md:text-[11px] lg:text-xs xl:text-base text-white font-semibold">
                                      Total
                                    </span>
                                  </div>
                                  <div className="text-center    ">
                                    <h1
                                      className="text-sm sm:text-lg md:text-2xl lg:text-3xl 
                             font-bold text-green-600"
                                    >
                                      {player?.player_statistics[0]?.matches_won ? player?.player_statistics[0]?.matches_won : "0"}
                                    </h1>
                                    <span className="text-[8px] sm:text-[9px] md:text-[11px] lg:text-xs xl:text-base text-white font-semibold">
                                      Won
                                    </span>
                                  </div>
                                  <div className="text-center    ">
                                    <h1
                                      className="text-sm sm:text-lg md:text-2xl lg:text-3xl 
                             font-bold text-red-600"
                                    >
                                      {player?.player_statistics[0]?.matches_lost ? player?.player_statistics[0]?.matches_lost : "0"}
                                    </h1>
                                    <span className="text-[8px] sm:text-[9px] md:text-[11px] lg:text-xs xl:text-base text-white font-semibold">
                                      lost
                                    </span>
                                  </div>
                                  <div className="text-center    ">
                                    <h1
                                      className="text-sm sm:text-lg md:text-2xl lg:text-3xl
                             font-bold text-green-600"
                                    >
                                      {player?.player_statistics[0]?.points ? player?.player_statistics[0]?.points : "0"}
                                    </h1>
                                    <span className="text-[8px] sm:text-[9px] md:text-[11px] lg:text-xs xl:text-base text-white font-semibold">
                                      Points
                                    </span>
                                  </div>
                                </div>
                              </div>
                              {/* statics end */}
                            </div>
                          </div>
                        </Link>
                      );
                    })
                  ) : (
                    <div className="flex justify-center items-center mt-16 md:mt-24">
                      {!isLoading && (
                        <GiBasketballJersey className="text-2xl xs:text-3xl sm:text-5xl text-gray-400 mr-2" />
                      )}
                      <p className="text-xs xs:text-sm sm:text-lg font-medium text-gray-400">
                        {isLoading ? <div>Loading .....</div> : "Player Not Found"}
                      </p>
                    </div>
                  )}

                </div>
                <div className="flex  justify-center items-center text-gray-400 py-5 space-x-2 mt-5 text-sm">
                  <button
                    onClick={(e) => {
                      setPageNo(() => pageNo - 1);
                    }}
                    disabled={pageNo == 1}
                    className="cursor-pointer disabled:cursor-default disabled:opacity-30 p-2 border rounded border-gray-400"
                  >
                    <IoIosArrowBack />
                  </button>
                  <div className="cursor-pointer px-4 py-1  border rounded bg-[#ee6730] text-base text-white shadow-xl">
                    {" "}
                    {pageNo}
                  </div>
                  <button
                    onClick={(e) => {
                      setPageNo(() => pageNo + 1);
                    }}
                    disabled={data?.data?.length < 10}
                    className="cursor-pointer disabled:opacity-30 disabled:cursor-default p-2 border rounded border-gray-400"
                  >
                    {" "}
                    <IoIosArrowForward />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>

  );
};

export default PlayerList;
