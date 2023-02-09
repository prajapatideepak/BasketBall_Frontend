import React from "react";
import Heading from "../../../Component/Heading";
import { AiOutlineSearch, AiFillEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getPlayerList } from "../../../redux/actions/Player";
import PlayerAvtar from "../PlayerAvtar";
const PlayerList = () => {
  const { PlayerList } = useSelector((state) => state.playerReducer);
  const dispatch = useDispatch();

  console.log(PlayerList);

  React.useEffect(() => {
    dispatch(getPlayerList());
  }, []);

  return (
    <div className="flex min-h-screen px-2 lg:px-16  py-8">
      <div className="mx-auto w-full">
        <Heading
          className={"text-3xl px-4  "}
          margin={true}
          text={"Player List"}
        />
        <div className="flex m-5  justify-center ">
          <input
            type="text"
            className=" rounded-lg w-full lg:w-2/3 rounded-r-none  appearance-none border border-gray-400 border-r-0 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:shadow-2xl duration-300 text-base focus:outline-none  "
            name="search"
            placeholder="Search Player"
          />
          <button className="text-2xl rounded-lg border  rounded-l-none border-gray-400 border-l-0 bg-[#ee6730] hover:scale-105 hover:bg-gray-800 duration-300 text-white px-2 shadow-2xl ">
            <AiOutlineSearch />
          </button>
        </div>

        <div className="">
          {/* <select
            type="text"
            id="required-email"
            className=" rounded-lg border-transparent flex-1  border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
            name="email"
          >
            <option>All Player</option>

            <option value="point guard">Point Guard</option>
            <option value="shooting guard">Shooting Guard</option>
            <option value="center">Center</option>
            <option value="power forward">Power Forward</option>
            <option value="shooting forward">Shooting Forward</option>
          </select> */}
          <div className="flex   mx-auto flex-col items-center px-4 lg:px-16 py-1 space-y-4">
            {PlayerList.map((player) => {
              return (
                <div className="lg:flex items-center justify-between bg-gray-800  text-white shadow-xl rounded-xl px-4 lg:px-8 py-2 lg:py-4 w-full ">
                  {/* avtar start */}
                  <div className="text-center justify-center   w-full space-x-2 lg:w-2/5 flex  ">
                    <img
                      src={player.basicinfo.img}
                      className=" object-cover w-20  h-20 rounded-full "
                    />
                    <div className="px-2 text-left">
                      <h1 className="text-xl font-semibold">
                        {player.basicinfo.firstName} {player.basicinfo.lastName}
                      </h1>
                      <div className="flex flex-wrap space-y-1 lg:space-y-0 items-center space-x-2 pt-1">
                        <span className="bg-orange-600 text-left text-xs font-semibold px-2 rounded-full shadow-xl">
                          {player.gameinfo.playerPosition}
                        </span>
                        <span className="bg-orange-600 text-left text-xs font-semibold px-2 rounded-full shadow-xl">
                          {player?.teamDetails.team_name}
                        </span>
                      </div>
                      <p className="text-xs  lg:block text-justify mt-1 ">
                        {player.gameinfo.Experience.slice(0, 50)}...
                      </p>
                    </div>
                  </div>
                  {/* avtar end */}
                  {/* statiscs start */}
                  <div className="grid grid-cols-4 pt-2  lg:gap-10   ">
                    <div className="text-center    ">
                      <h1 className="text-sm lg:text-2xl font-bold">
                        {player.statics.totalMatch}
                      </h1>
                      <span className="text-xs lg:text-lg text-gray-200">
                        Total Match
                      </span>
                    </div>
                    <div className="text-center   ">
                      <h1 className="text-sm lg:text-2xl text-green-600 font-bold">
                        {player.statics.matchWon}
                      </h1>
                      <span className="text-xs lg:text-lg text-gray-200">
                        Match Won
                      </span>
                    </div>
                    <div className="text-center   text-red-600 ">
                      <h1 className="text-sm lg:text-2xl  font-bold">
                        {player.statics.matchLoss}
                      </h1>
                      <span className="text-xs lg:text-lg text-gray-200">
                        Match loss
                      </span>
                    </div>
                    <div className="text-center   text-green-600 ">
                      <h1 className="text-sm lg:text-2xl  font-bold">
                        {player.statics.totalScore}
                      </h1>
                      <span className="text-xs lg:text-lg text-gray-200">
                        Total Score
                      </span>
                    </div>
                  </div>
                  {/* statics end */}
                </div>
              );
            })}
          </div>

          <div className="table-container w-full flex lg:justify-center overflow-x-auto mt-5 ">
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
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default PlayerList;
