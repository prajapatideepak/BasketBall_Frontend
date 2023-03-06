import React from "react";
import Heading from "../../../Component/Heading";
import { AiOutlineSearch, AiFillEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getPlayerList, searchPlayers } from "../../../redux/actions/Player";
import { Link } from "react-router-dom";
import image from "../../../../public/CBL_Images/7xm.xyz481259.jpg"
import logo from "../../../../public/CBL_Images/logo4.png"
const PlayerList = () => {
  const { PlayerList } = useSelector((state) => state.playerReducer);
  const [search, setSearch] = React.useState("");
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPlayerList());
  }, []);

  function handleSubmit() {
    dispatch(searchPlayers(search));
  }

  return (
    <div className="flex min-h-screen px-10 2xl:px-32 lg:px-14 py-8">
      <div className="mx-auto w-full">
        <Heading
          className={"text-xl md:text-3xl px-3 sm:px-7 py-1 font-mono  "}
          margin={true}
          text={"Player List"}
        />
        <div className="flex m-20 justify-center ">
          <input
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
              handleSubmit();
            }}
            value={search}
            className=" rounded-lg w-full lg:w-2/3 rounded-r-none  appearance-none border border-gray-400 border-r-0 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:shadow-2xl duration-300 text-base focus:outline-none  "
            name="search"
            placeholder="Search Player"
          />
          <button
            onClick={handleSubmit}
            className="text-2xl rounded-lg border  rounded-l-none border-[#ee6730] border-l-0 bg-[#ee6730] hover:bg-gray-800 group text-white px-2 shadow-2xl "
          >
            <AiOutlineSearch className="group-hover:scale-110 duration-300" />
          </button>
        </div>

        <div className="">
          <div className="flex w-full flex-col items-center px-5 lg:px-8  space-y-6  h-full ">
            {PlayerList?.map((player) => {
              console.log(player)
              return (
                <Link
                  key={player.id}
                  className="w-full  scale-105"
                  to={`/player/${player.id}`}
                >
                  <div className="duration-300 relative justify-end bg-black text-white overflow-hidden shadow-xl cursor-pointer hover:scale-105 w-6/7  md:w-full h-full ">
                    <div className=" flex justify-end items-center ">
                      <img src={logo} alt="" className="w-28 h-28 2xl:w-32 2xl:h-32  opacity-20" />
                    </div>
                    <div className=" flex flex-col sm:flex-row w-full h-full absolute top-0 content-start py-2 ">
                      <div className="bg-gradient-to-b  from-[#e64100]  absolute  md:top-[-32px] md:left-[-20px] w-10 h-10 rotate-[30deg] top-[-15px] left-[-15px] md:h-20 md:w-14 content-start md:rotate-[45deg] flex justify-center items-center">
                        <h1 className="rotate-[-30deg] md:rotate-[315deg] text-xs font-bold md:text-lg mt-1 ml-5 md:ml-6">{player.id}</h1>
                      </div>
                      {/* avtar start */}
                      <div className="text-center sm:w-1/2 items-center justify-center space-x-5 lg:space-x-10 xl:space-x-16 sm:space-x-6 lg:py-6 flex  ">
                        <img
                          src={image}
                          className=" object-cover w-12 h-12 sm:w-14 sm:h-14 lg:w-[70px] lg:h-[70px] xl:w-20 xl:h-20 2xl:w-24  2xl:h-24 rounded-full border-2 sm:border-4 border-slate-700 "
                        />
                        <div className="flex justify-start items-center ">
                          <h1 className="text-gray-600 font-bold text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl uppercase">SF</h1>
                        </div>
                        <div className="flex flex-col justify-start items-start ">
                          <h1 className="text-white font-bold text-base sm:text-lg md:text-xl lg:text-[25px] text-start ">Jordern Jems</h1>
                          <h1 className="text-gray-600 font-bold text-[8px] sm:text-[10px] lg:text-xs xl:text-sm text-start ">Los Angeles Lakers</h1>

                        </div>
                      </div>
                      {/* avtar end */}
                      {/* statiscs start */}
                      <div className="2xl:justify-start py-1 lg:p-2 w-full sm:w-1/2 flex items-center justify-center xl:pl-10   ">
                        <div className="grid xxs:grid-cols-2 xs:grid-cols-4 text-black place-content-center  gap-5 lg:gap-8 xl:gap-12 2xl:gap-20   ">
                          <div className="text-center    ">
                            <h1 className="text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
                             font-bold text-[#ee6730]">
                              50
                            </h1>
                            <span className="text-[8px] sm:text-[10px] md:text-[11px] lg:text-xs text-white font-semibold">
                              Total Match
                            </span>
                          </div>
                          <div className="text-center    ">
                            <h1 className="text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
                             font-bold text-[#ee6730]">
                              40
                            </h1>
                            <span className="text-[8px] sm:text-[10px] md:text-[11px] lg:text-xs text-white font-semibold">
                              Total Won
                            </span>
                          </div>
                          <div className="text-center    ">
                            <h1 className="text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
                             font-bold text-[#ee6730]">
                              10
                            </h1>
                            <span className="text-[8px] sm:text-[10px] md:text-[11px] lg:text-xs text-white font-semibold">
                              Total loss
                            </span>
                          </div>
                          <div className="text-center    ">
                            <h1 className="text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
                             font-bold text-[#ee6730]">
                              250
                            </h1>
                            <span className="text-[8px] sm:text-[10px] md:text-[11px] lg:text-xs text-white font-semibold">
                              Total Score
                            </span>
                          </div>

                        </div>
                      </div>
                      {/* statics end */}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* <div className="table-container w-full flex lg:justify-center overflow-x-auto mt-5 ">
            <table className="whitespace-nowrap md:min-w-[750px] md:w-full xl:w-4/5 mt-2 rounded-md overflow-hidden sm:text-base text-xs xs:text-sm">
              <thead className="bg-gray-700  text-center">
                <tr>
                  <th className="pl-5 border whitespace-nowrap pr-2 py-3 text-sm text-gray-300 uppercase border-gray-700 whitespace-nowrap font-semibold text-left sm:text-base text-xs xs:text-sm">
                    Sr.
                  </th>
                  <th className="pl-5 border whitespace-nowrap pr-2 py-3 text-sm text-gray-300 uppercase border-gray-700 whitespace-nowrap font-semibold text-left sm:text-base text-xs xs:text-sm">
                    Name
                  </th>
                  <th className="border whitespace-nowrap px-2 py-3 text-sm text-gray-300 uppercase border-gray-700 whitespace-nowrap font-semibold text-left sm:text-base text-xs xs:text-sm">
                    Team
                  </th>{" "}
                  <th className="border whitespace-nowrap px-2 py-3 text-sm text-gray-300 uppercase border-gray-700 whitespace-nowrap font-semibold text-left sm:text-base text-xs xs:text-sm">
                    Position
                  </th>{" "}
                  <th className="border whitespace-nowrap px-2 py-3 text-sm text-gray-300 uppercase border-gray-700 whitespace-nowrap font-semibold text-left sm:text-base text-xs xs:text-sm">
                    Jersey Number
                  </th>
                  <th className="border whitespace-nowrap px-2 py-3 text-sm text-gray-300 uppercase border-gray-700 whitespace-nowrap font-semibold text-left sm:text-base text-xs xs:text-sm">
                    Match
                  </th>
                  <th className="border whitespace-nowrap px-2 py-3 text-sm text-gray-300 uppercase border-gray-700 whitespace-nowrap font-semibold text-left sm:text-base text-xs xs:text-sm">
                    Won
                  </th>
                  <th className="border whitespace-nowrap px-2 py-3 text-sm text-gray-300 uppercase border-gray-700 whitespace-nowrap font-semibold text-left sm:text-base text-xs xs:text-sm">
                    lost
                  </th>
                  <th className="border whitespace-nowrap px-2 py-3 text-sm text-gray-300 uppercase border-gray-700 whitespace-nowrap font-semibold text-left sm:text-base text-xs xs:text-sm">
                    Action
                  </th>{" "}
                </tr>
              </thead>
              <tbody className="bg-white">
                {PlayerList.length < 1 ? (
                  <tr className="border-t-2 blur-sm text-left">
                    <th className="pl-5 whitespace-nowrap pr-2 py-4">1</th>
                    <th className="pl-5 whitespace-nowrap pr-2">Deepak</th>
                    <td className="whitespace-nowrap px-2"></td>
                    <td className="whitespace-nowrap px-2"></td>
                    <td className="whitespace-nowrap px-2"></td>
                    <td className="whitespace-nowrap px-2"></td>
                    <td className="whitespace-nowrap px-2"></td>
                    <td className="whitespace-nowrap px-2"></td>
                    <td className="whitespace-nowrap px-2"></td>
                  </tr>
                ) : (
                  PlayerList.map((player, index) => {
                    return (
                      <tr key={player?.id} className="text-center border-t-2 ">
                        <th className="pl-5 whitespace-nowrap pr-2 py-4">
                          {index + 1}
                        </th>
                        <th className="pl-5 whitespace-nowrap pr-2">
                          {player?.basicinfo?.firstName}
                        </th>
                        <td className="whitespace-nowrap px-2">
                          {player?.teamDetails?.team_name}
                        </td>
                        <td className="whitespace-nowrap px-2">
                          {player?.gameinfo?.playerPosition}
                        </td>
                        <td className="whitespace-nowrap px-2">
                          {player?.gameinfo?.JerseyNumber}
                        </td>
                        <td className="whitespace-nowrap px-2">
                          {player?.statics?.totalMatch}
                        </td>
                        <td className="whitespace-nowrap px-2">
                          {player?.statics?.matchWon}
                        </td>
                        <td className="whitespace-nowrap px-2">
                          {player?.statics?.matchLoss}
                        </td>
                        <td className="whitespace-nowrap px-2">
                          <AiFillEye />
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div> */}
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default PlayerList;
