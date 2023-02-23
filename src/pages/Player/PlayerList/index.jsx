import React from "react";
import Heading from "../../../Component/Heading";
import { AiOutlineSearch, AiFillEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getPlayerList, searchPlayers } from "../../../redux/actions/Player";
import PlayerAvtar from "../PlayerAvtar";
import { Link } from "react-router-dom";
const PlayerList = () => {
  const { PlayerList } = useSelector((state) => state.playerReducer);
  const [search, setSearch] = React.useState("");
  const dispatch = useDispatch();

  console.log(PlayerList);

  React.useEffect(() => {
    dispatch(getPlayerList());
  }, []);

  function handleSubmit() {
    console.log("ho");
    dispatch(searchPlayers(search));
  }

  return (
    <div className="flex min-h-screen px-2 lg:px-16  py-8">
      <div className="mx-auto w-full">
        <Heading
          className={"text-xl md:text-3xl px-3 sm:px-7 py-1 font-mono  "}
          margin={false}
          text={"Player List"}
        />
        <div className="flex m-5  justify-center ">
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
            className="text-2xl rounded-lg border  rounded-l-none border-gray-400 border-l-0 bg-[#ee6730] hover:scale-105 hover:bg-gray-800 duration-300 text-white px-2 shadow-2xl "
          >
            <AiOutlineSearch />
          </button>
        </div>

        <div className="">
          <div className="flex  justify-between items-center px-8">
            {/* <h1 className="text-2xl">Top Play</h1> */}
            {/* <select
              type="text"
              id="required-email"
              className="w-1/5 rounded-lg border-transparent   border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
              name="email"
            >
              <option>All Player</option>

              <option value="point guard">Point Guard</option>
              <option value="shooting guard">Shooting Guard</option>
              <option value="center">Center</option>
              <option value="power forward">Power Forward</option>
              <option value="shooting forward">Shooting Forward</option>
            </select> */}
          </div>

          <div className="flex w-full   mx-auto flex-col items-center px-4 lg:px-8 py-1 space-y-6">
            {PlayerList?.map((player) => {
              return (
                <Link className="Link" to={`/player/${player.id}`}>
                  <div className="md:flex   duration-300  justify-between bg-white   text-black shadow-xl rounded-xl  w-full  ">
                    {/* avtar start */}
                    <div className="text-center   px-4 lg:px-8 py-2 lg:py-4 justify-center   w-full space-x-2 lg:w-2/5 flex  ">
                      <img
                        src={player.basicinfo.img}
                        className=" object-cover w-20  h-20 rounded-full "
                      />
                      <div className="px-2 text-left">
                        <h1 className="text-xl font-semibold">
                          {player.basicinfo.firstName}{" "}
                          {player.basicinfo.lastName}
                        </h1>
                        <div className="xxs:hidden xs:flex  flex-wrap space-y-1 lg:space-y-0 items-center xs:space-x-2 pt-1">
                          <span className="xxs:hidden sm:block bg-orange-600 text-left text-xs font-semibold px-2 rounded-full shadow-xl">
                            {player.gameinfo.playerPosition}
                          </span>
                          <span className="bg-orange-600   text-left text-xs font-semibold px-2 rounded-full shadow-xl">
                            {player?.teamDetails.team_name}
                          </span>
                        </div>
                        <p className="xxs:hidden xs:block   text-xs   text-justify mt-1 ">
                          {player.gameinfo.Experience.slice(0, 50)}...
                        </p>
                      </div>
                    </div>
                    {/* avtar end */}
                    {/* statiscs start */}
                    <div className="justify-center p-2 bg-gradient-to-tl from-orange-400 via-orange-700 to-orange-900 flex items-center px-4 rounded-b-xl md:rounded-bl-none md:rounded-br-xl md:rounded-r-lg  ">
                      <div className="grid xxs:grid-cols-2 xs:grid-cols-4 text-white place-content-center  gap-2 lg:gap-10   ">
                        <div className="text-center    ">
                          <h1 className="text-sm lg:text-2xl font-bold">
                            {player.statics.totalMatch}
                          </h1>
                          <span className="text-xs lg:text-lg text-gray-200">
                            Total Match
                          </span>
                        </div>
                        <div className="text-center   ">
                          <h1 className="text-sm lg:text-2xl font-bold">
                            {player.statics.matchWon}
                          </h1>
                          <span className="text-xs lg:text-lg text-gray-200">
                            Match Won
                          </span>
                        </div>
                        <div className="text-center   text-red-100 ">
                          <h1 className="text-sm lg:text-2xl  font-bold">
                            {player.statics.matchLoss}
                          </h1>
                          <span className="text-xs lg:text-lg text-gray-200">
                            Match loss
                          </span>
                        </div>
                        <div className="text-center   text-white">
                          <h1 className="text-sm lg:text-2xl  font-bold">
                            {player.statics.totalScore}
                          </h1>
                          <span className="text-xs lg:text-lg text-gray-200">
                            Total Score
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* statics end */}
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
