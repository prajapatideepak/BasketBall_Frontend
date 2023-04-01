import React from "react";
import Heading from "../../../Component/Heading";
import { AiOutlineSearch } from "react-icons/ai";
import { GiBasketballJersey } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useGetAllPlayersQuery } from '../../../services/player';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Loader from "../../../Component/Loader";



const PlayerList = () => {
  const [search, setSearch] = React.useState("");
  const [pageNo, setPageNo] = React.useState(1);
  const rojki = useGetAllPlayersQuery({ pageNo: pageNo - 1, search });
  const { isLoading, data } = rojki;
  const PlayerList = [
    {
      id: 1,
      status: true,
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
      teamDetails: [
        {
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
          captain: 1,
          matches_played: 22,
          matches_won: 18,
          matches_lost: 4,
        },
      ],
    },
    {
      id: 2,
      status: true,
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
      teamDetails: [
        {
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
          captain: 1,
          matches_played: 22,
          matches_won: 18,
          matches_lost: 4,
        },
      ],
    },
  ];

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
                <div className="flex w-full flex-col items-center px-5 lg:px-8  space-y-6 h-full py-3 sm:py-5 xl:py-10 ">
                  {data?.all_players && data?.all_players.length > 0 ? (
                    PlayerList.map((player, index) => {
                      return (
                        <Link
                          key={player.id}
                          className="w-full  scale-105"
                          to={`/player/${player.id}`}
                        >
                          <div className="duration-300 relative justify-end bg-black rounded-lg text-white overflow-hidden shadow-xl cursor-pointer hover:scale-[1.03] w-6/7  md:w-full h-full ">
                            <div className=" flex justify-end items-center ">
                              <img
                                src={player.teamDetails[0].team_logo}
                                alt=""
                                className="w-28 h-28 opacity-20"
                              />
                            </div>
                            <div className=" flex flex-col sm:flex-row w-full h-full absolute top-0 content-start py-2 ">
                              <div className="bg-gradient-to-b  from-[#e64100]  absolute  md:top-[-32px] md:left-[-20px] w-10 h-10 rotate-[30deg] top-[-15px] left-[-15px] md:h-20 md:w-14 content-start md:rotate-[45deg] flex justify-center items-center">
                                <h1 className="rotate-[-30deg] md:rotate-[315deg] text-xs font-bold md:text-lg mt-1 ml-5 md:ml-6">
                                  {index + 1}
                                </h1>
                              </div>
                              {/* avtar start */}
                              <div className="text-center sm:w-1/2 items-center justify-center space-x-5 lg:space-x-10 xl:space-x-16 sm:space-x-6 lg:py-6 flex  ">
                                <img
                                  src={player.basicinfo.img}
                                  className=" object-cover w-12 h-12 sm:w-14 sm:h-14 lg:w-[70px] lg:h-[70px] xl:w-20 xl:h-20 2xl:w-[85px]  2xl:h-[85px] rounded-full border-2 sm:border-4 border-slate-700 "
                                />
                                <div className="flex justify-start items-center ">
                                  <h1 className="text-gray-600 font-bold text-sm sm:text-base  lg:text-lg xl:text-xl uppercase">
                                    {player.gameinfo.playerPosition}
                                  </h1>
                                </div>
                                <div className="flex flex-col justify-start items-start ">
                                  <h1 className="text-white font-bold text-base sm:text-lg md:text-xl lg:text-[25px] text-start ">
                                    {player.basicinfo.firstName}
                                  </h1>
                                  <h1 className="text-gray-600 font-bold text-[8px] sm:text-[10px] lg:text-xs xl:text-sm text-start ">
                                    {player.teamDetails[0].team_name}
                                  </h1>
                                </div>
                              </div>
                              {/* avtar end */}
                              {/* statiscs start */}
                              <div className="2xl:justify-start py-1 lg:p-2 w-full sm:w-1/2 flex items-center justify-center xl:pl-10   ">
                                <div className="grid xxs:grid-cols-2 xs:grid-cols-4 text-black place-content-center md:gap-1 lg:gap-5 xl:gap-12 2xl:gap-16   ">
                                  <div className="text-center    ">
                                    <h1
                                      className="text-sm sm:text-lg md:text-2xl lg:text-3xl 
                             font-bold text-[#ee6730]"
                                    >
                                      {player.statics.totalMatch}
                                    </h1>
                                    <span className="text-[8px] sm:text-[9px] md:text-[11px] lg:text-xs xl:text-base text-white font-semibold">
                                      Matches Played
                                    </span>
                                  </div>
                                  <div className="text-center    ">
                                    <h1
                                      className="text-sm sm:text-lg md:text-2xl lg:text-3xl 
                             font-bold text-[#ee6730]"
                                    >
                                      {player.statics.matchWon}
                                    </h1>
                                    <span className="text-[8px] sm:text-[9px] md:text-[11px] lg:text-xs xl:text-base text-white font-semibold">
                                      Won
                                    </span>
                                  </div>
                                  <div className="text-center    ">
                                    <h1
                                      className="text-sm sm:text-lg md:text-2xl lg:text-3xl 
                             font-bold text-[#ee6730]"
                                    >
                                      {player.statics.matchLoss}
                                    </h1>
                                    <span className="text-[8px] sm:text-[9px] md:text-[11px] lg:text-xs xl:text-base text-white font-semibold">
                                      lost
                                    </span>
                                  </div>
                                  <div className="text-center    ">
                                    <h1
                                      className="text-sm sm:text-lg md:text-2xl lg:text-3xl
                             font-bold text-[#ee6730]"
                                    >
                                      {player.statics.totalScore}
                                    </h1>
                                    <span className="text-[8px] sm:text-[9px] md:text-[11px] lg:text-xs xl:text-base text-white font-semibold">
                                      Total Points
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
                    disabled={data?.all_players?.length < 10}
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
