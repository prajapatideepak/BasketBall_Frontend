import React, { useEffect } from "react";
import Heading from "../../../Component/Heading";
import MatchCard from "../../../Component/MatchCard";
import TeamCard from "../../../Component/TeamCard";
import { motion } from "framer-motion";
import PlayerAvtar from "../PlayerAvtar";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findPlayer } from "../../../redux/actions/Player";
import { setBasicInfoForm } from "../../../redux/actions/Player";
import PlayerInfo from "./PlayerInfo";
import PlayerStatics from "./PlayerStatics";
import Notification from "../../../Component/Notification/Notification";
import { AiFillEye } from "react-icons/ai";
import { GiExitDoor } from "react-icons/gi";
import { ImExit } from "react-icons/im";
import { useGetPlayerDetailsQuery } from '../../../services/player';
import Loader from "../../../Component/Loader";
import { setGameInfoForm } from "../../../redux/actions/Player";




export default function PlayerProfile() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetPlayerDetailsQuery(params.id);
  console.log(data)
  const [currentTab, setCurrentTab] = React.useState(2);
  const [currentTabMatches, setCurrentTabMatches] = React.useState([]);
  let allMatches =    
    data?.data && data?.data.team_1_matches && data?.data.team_2_matches
      ? [...data?.data.team_1_matches, ...data?.data.team_2_matches]
      : [];

  React.useEffect(() => {
    handleTabChange();
  }, [currentTab, data]);

  function handleTabChange() {
    setCurrentTabMatches((e) => {
      return allMatches.filter((match) => {
        return match?.status == currentTab;
      });
    });
  }

  const handleEdit = () => {
    dispatch(setBasicInfoForm(data.SinglePlayerDetails));
    dispatch(setGameInfoForm(data.SinglePlayerDetails));
    navigate(`/player/add-edit`, {
      state: {
        isEdit: true,
        player_id : data.SinglePlayerDetails.id,
        photo : data.SinglePlayerDetails.photo
      },
    });
  };



  return (
    <section className="min-h-screen-fit">
      <div>
        {isLoading && <Loader />}
        {data && (
          <div>
            <div className="mx-auto  px-6 py-10 sm:px-20 sm:py-12 md:px-20 md:py-12 lg:px-24 xl:px-28 2xl:px-32 min-h-screen  ">
              {/* Player Detail Section */}
              <div className="flex flex-col relative lg:flex-row space-y-5 ">
                <div className="lg:w-1/2 justify-center items-center flex">
                  <PlayerAvtar player={data} />
                </div>
                <div className="flex-1    ">
                  <PlayerInfo PlayerDetail={data} />
                </div>
                <div className="absolute right-0 bottom-0 mr-10">
                  <button
                    type="button"
                    className="bg-[#ee6730] relative inline-flex items-center justify-center px-8 py-2 overflow-hidden text-white rounded-lg cursor-pointer group mr-3"
                    onClick={handleEdit}
                  >
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-slate-900 rounded-lg group-hover:w-full group-hover:h-56"></span>
                    <span className="relative">
                      Edit
                    </span>
                  </button>
                </div>
                <div>

                </div>
              </div>
              {/* Player Detail Section End */}

              {/* Player Staticstc start */}
              <PlayerStatics PlayerDetail={data} />
              {/* Player Statics End */}

              {/* ------------------notification Section -------------*/}
              {data?.SinglePlayerDetails?.id == params.id && <Notification />}
              {/*--------- notification seciton end--------------- */}

              {/* new sec */}
              <div className="flex flex-col ">
                <div className=" p-4 space-y-8  mt-4">
                  <div className=" flex justify-center">
                    <Heading
                      text={"Team"}
                      className={"text-center py-1 px-3 text-3xl"}
                      margin={true}
                    />
                  </div>
                  {data?.SinglePlayerDetails?.id != params.id && (
                    <div className="flex  mx-auto">
                      {data?.SinglePlayerDetails?.team_players.map((team) => {
                        return <TeamCard teamDetails={team.teams} />;
                      })}
                    </div>
                  )}
                  {data?.SinglePlayerDetails?.id == params.id && (
                    <div className="overflow-x-scroll ">
                      <table className="items-center bg-transparent w-full border-collapse ">
                        <thead>
                          <tr>
                            <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3  text-sm md:text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              Team Name
                            </th>
                            <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3  text-sm md:text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              Total Players
                            </th>
                            <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3  text-sm md:text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {data?.SinglePlayerDetails?.team_players.map((team) => {
                            return (
                              <tr className="cursor-pointer border-b">
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0  text-sm md:text-base whitespace-nowrap p-4 text-left text-gray-700 capitalize">
                                  {team?.teams?.team_name}
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0  text-sm md:text-base whitespace-nowrap p-4 capitalize">
                                  {team?.teams?.matches_played}
                                </td>
                                <td className=" flex space-x-3  border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 capitalize">
                                  <div title={`View ${team?.teams?.team_name}`}>
                                    <Link to={`/team/profile-detail/${team?.teams?.id}`}>
                                      <AiFillEye className="hover:text-green-900" />
                                    </Link>
                                  </div>
                                  <div
                                    title={`Leave ${team?.teams?.team_name}`}
                                    className="hover:text-red-600"
                                  >
                                    <ImExit />
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                          {data?.SinglePlayerDetails?.team_players < 1 && (
                            <tr className="cursor-pointer border-b">
                              <td
                                className="border-t-0  px-6 text-center bg-red-100 text-red-800 font-bold align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 capitalize"
                                colSpan={3}
                              >
                                You are not in any Team
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
                <div className=" py-4">
                  <div className="px-1 text-lg lg:w-1/3 mx-auto  py-1 text-white  flex  text-center justify-center items-center mt-2 rounded-full space-x-2 bg-black">
                    <motion.span
                      animate={{
                        backgroundColor: currentTab === 2 ? "#ee6730" : "#000000",
                      }}
                      onClick={(e) => setCurrentTab(2)}
                      className=" cursor-pointer    rounded-full  w-1/2 py-2 text-sm shadow-2xl"
                    >
                      Past
                    </motion.span>
                    <motion.span
                      animate={{
                        backgroundColor: currentTab === 2 ? "#000000" : "#ee6730",
                      }}
                      onClick={(e) => setCurrentTab(1)}
                      className=" bg-black cursor-pointer  rounded-full  w-1/2 py-2 text-sm shadow-2xl"
                    >
                      Upcomming
                    </motion.span>
                  </div>
                  <div className="   px-2 py-2 player-container w-full flex flex-nowrap gap-8 sm:gap-16 md:gap-20 mt-10 overflow-x-auto ">
                    {currentTabMatches.length > 0 ? (
                      currentTabMatches.map((match, index) => {
                        return <MatchCard key={index} match={match} />;
                      })
                    ) : (
                      <div className="w-full text-center mt-12">
                        <h4 className="text-lg font-medium text-gray-400">
                          No Match Found
                        </h4>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>

  );
}
