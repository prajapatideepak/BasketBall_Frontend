import { tab } from "@material-tailwind/react";
import React from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useGetMatchDetailQuery } from "../../../services/match";
import Loader from "../../../Component/Loader";
import MatchProfile from "./MatchProfile";
import TeamPlayers from "./TeamPlayers";
import AboutMatch from "./AboutMatch";
import MatchScoreTable from "./MatchScoreTable";

const MatchDetails = () => {
  const { id } = useParams();
  const data = useGetMatchDetailQuery(id);
  const [win, setWin] = React.useState(() => {
    return {
      team1: 0,
      team2: 0,
    };
  });

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
    <MatchScoreTable data={data} />,
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
                      color: tab.active ? "#ffffff" : "",
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
          <div className=" md:px-16 md:py-8">{tabs[tabIndex]}</div>
        </div>
      )}
    </section>
  );
};

export default MatchDetails;
