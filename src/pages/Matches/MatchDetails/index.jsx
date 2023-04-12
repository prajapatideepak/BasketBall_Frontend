import { tab } from "@material-tailwind/react";
import React from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useGetMatchDetailQuery } from "../../../services/match";
import Loader from "../../../Component/Loader";
import MatchProfile from "./MatchProfile";
import TeamPlayers from "./TeamPlayers";
import AboutMatch from "./AboutMatch";

const MatchDetails = () => {
  const { id } = useParams();
  const data = useGetMatchDetailQuery(id);
  const [win, setWin] = React.useState(() => {
    return {
      team1: 0,
      team2: 0,
    };
  });
  console.log(win);
  console.log(data?.data?.match_data);
  const [tabIndex, setTabIndex] = React.useState(0);
  const [menu, setMenu] = React.useState([
    {
      name: "Score Table",
      active: true,
    },
    {
      name: "Players",
      active: false,
    },
    {
      name: "Referee",
      active: false,
    },
    {
      name: "MVP",
      active: false,
    },
    {
      name: "About",
      active: false,
    },
  ]);

  const tabs = [
    "",
    <TeamPlayers data={data} />,
    "",
    "",
    <AboutMatch data={data} />,
  ];
  function HandleChange(id) {
    setMenu(
      menu.map((m, index) => {
        if (index == id) {
          setTabIndex(index);
          return { ...m, active: true };
        } else {
          return { ...m, active: false };
        }
      })
    );
  }

  return (
    <section className="min-h-screen">
      {data.isLoading && <Loader />}
      {data.isSuccess && (
        <div>
          {" "}
          <MatchProfile data={data} />
          <div className="bg-black p-6 ">
            <div className="sm:flex  space-x-6 text-center   sm:text-lg overflow-x-auto whitespace-nowrap p-2 font-semibold  justify-evenly gap-2 sm:gap-5 text-gray-400">
              {menu.map((tab, index) => {
                return (
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      backgroundColor: tab.active ? "#ee6730" : "",
                      color: tab.active ? "white" : "",
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    key={index}
                    className="inline-block transition-all px-4 py-1 cursor-pointer rounded-full shadow-xl"
                    onClick={(e) => HandleChange(index)}
                  >
                    {tab.name}
                  </motion.div>
                );
              })}
            </div>
          </div>
          {/* <div>{tabs[tabIndex]}</div> */}
          <div id="scoretable" className="md:w-4/5 mx-auto text-center">
            {(data?.data?.match_data?.data?.status == 2 ||
              data?.data?.match_data?.data?.status == 3) && (
              <div className="flex flex-col md:my-8">
                <div className="overflow-x-auto bg-white md:rounded-lg shadow overflow-y-auto relative">
                  <table className="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
                    <thead>
                      <tr className="text-left">
                        <th
                          className="py-2 px-3 sticky top-0 bg-gray-800 text-white"
                          rowSpan="2"
                        >
                          Quarter
                        </th>
                        <th
                          className="py-2 px-3 sticky top-0 bg-gray-800 text-white"
                          colSpan="2"
                        >
                          <div className="flex items-center justify-center">
                            <div className="h-4 w-4 rounded-full bg-orange-500 mr-2"></div>
                            {data?.data?.match_data?.data?.team_1.team_name}
                          </div>
                        </th>
                        <th
                          className="py-2 px-3 sticky top-0 bg-gray-800 text-white"
                          colSpan="2"
                        >
                          <div className="flex items-center justify-center">
                            <div className="h-4 w-4 rounded-full bg-blue-500 mr-2"></div>
                            {data?.data?.match_data?.data?.team_2.team_name}
                          </div>
                        </th>
                        <th
                          className="py-2 px-3 sticky top-0 bg-gray-800 text-white"
                          rowSpan="2"
                        >
                          Winner
                        </th>
                      </tr>
                      <tr>
                        <th className="bg-gray-700 text-white px-3 py-2 font-medium tracking-wide">
                          Fouls
                        </th>
                        <th className="bg-gray-700 text-white px-3 py-2 font-medium tracking-wide">
                          Points
                        </th>
                        <th className="bg-gray-700 text-white px-3 py-2 font-medium tracking-wide">
                          Fouls
                        </th>
                        <th className="bg-gray-700 text-white px-3 py-2 font-medium tracking-wide">
                          Points
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.data?.match_data?.all_quarters?.map((q) => {
                        return (
                          <tr key={q?.id}>
                            <td className="border-t px-3 py-2">
                              {q?.quarter_number}
                            </td>
                            <td className="border-t px-3 py-2 sm:text-sm lg:text-base">
                              {q?.team_1_fouls}
                            </td>
                            <td className="border-t px-3 py-2 sm:text-sm lg:text-base">
                              {q?.team_1_points}
                            </td>
                            <td className="border-t px-3 py-2 sm:text-sm lg:text-base">
                              {q?.team_2_fouls}
                            </td>
                            <td className="border-t px-3 py-2 sm:text-sm lg:text-base">
                              {q?.team_2_points}
                            </td>
                            <td className="border-t px-3 py-2 sm:text-sm lg:text-base">
                              {q?.status !== 0 ? (
                                "--"
                              ) : (
                                <div className="flex items-center  justify-center">
                                  <div
                                    className={`h-4 w-4 rounded-full bg-${
                                      q?.won_by_team_id ==
                                      data?.data?.match_data?.data?.team_1.id
                                        ? "orange"
                                        : "blue"
                                    }-500 mr-2`}
                                  ></div>
                                  {q?.won_by_team_id ==
                                  data?.data?.match_data?.data?.team_1.id
                                    ? data?.data?.match_data?.data?.team_1
                                        .team_name
                                    : data?.data?.match_data?.data?.team_2
                                        .team_name}
                                </div>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default MatchDetails;
