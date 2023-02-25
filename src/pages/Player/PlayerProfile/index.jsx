import React, { useEffect } from "react";
import Heading from "../../../Component/Heading";
import MatchCard from "../../../Component/MatchCard";
import TeamCard from "../../../Component/TeamCard";
import { motion } from "framer-motion";
import PlayerAvtar from "../PlayerAvtar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findPlayer } from "../../../redux/actions/Player";
import PlayerInfo from "./PlayerInfo";
export default function PlayerProfile() {
  const params = useParams();
  const { PlayerDetail } = useSelector((state) => state.playerReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findPlayer(params.id));
  }, []);

  const [tab, setTab] = React.useState(1);
  const match = {
    match_id: 12,
    tournament_name: "Gokuldham Premier League",
    team_1_logo: "/CBL_Images/basketball_team_logo_2.webp",
    team_2_logo: "/CBL_Images/basketball_team_logo_1.webp",
    team_1_name: "Mehta Ke Maharathi",
    team_2_name: "Jetha Ke Jabaaz",
    team_1_score: 24,
    team_2_score: 22,
    duration: 45,
    address: "Amber tower, Sarkhej, Ahmedabad 380055",
    isSuccessfull: 1,
    date: "12/12/2022",
  };

  return !PlayerDetail?.status ? (
    <div></div>
  ) : (
    <div className="mx-auto px-6 py-10 sm:px-20 sm:py-12 md:px-20 md:py-12 lg:px-24 xl:px-28 2xl:px-32 min-h-screen  ">
      {/* <div className="w-1/3"></div> */}
      <div className="flex flex-col lg:flex-row space-y-5 ">
        {/* for up */}
        <div className="lg:w-1/2 flex">
          <PlayerAvtar player={PlayerDetail} />
        </div>
        <div className="flex-1    ">
          <PlayerInfo PlayerDetail={PlayerDetail} />
        </div>
      </div>
      <div className="left-0 rounded-2xl right-0 bg-black mx-0 text-white">
        {/* <h1 className="py-1 text-center font-bold">Player statistics</h1> */}
        <div className="grid grid-cols-2 lg:grid-cols-4  gap-1 lg:gap-5 p-2 mt-5 ">
          <div className="text-center  p-2 ">
            <h1 className="text-xl md:text-2xl font-bold">
              {PlayerDetail?.statics.totalMatch}
            </h1>
            <span className="text-sm md:text-lg text-gray-200">
              Total Match
            </span>
          </div>
          <div className="text-center  p-2 ">
            <h1 className="text-xl md:text-2xl   text-green-600 font-bold">
              {PlayerDetail?.statics.matchWon}
            </h1>
            <span className="text-sm md:text-lg text-gray-200">Match Won</span>
          </div>
          <div className="text-center  p-2 text-red-600 ">
            <h1 className="text-xl md:text-2xl  font-bold">
              {PlayerDetail?.statics.matchLoss}
            </h1>
            <span className="text-sm md:text-lg text-gray-200">Match loss</span>
          </div>
          <div className="text-center  p-2 text-green-600 ">
            <h1 className="text-xl md:text-2xl  font-bold">
              {PlayerDetail?.statics.totalScore}
            </h1>
            <span className="text-sm md:text-lg text-gray-200">
              Total Score
            </span>
          </div>
        </div>
      </div>
      {/* new sec */}
      <div className=":flex">
        <div className=" p-4 space-y-8  mt-4">
          <div className=" flex justify-center">
            <Heading
              text={"Team"}
              className={"text-center py-1 px-3 text-3xl"}
              margin={true}
            />
          </div>
          <div className="flex lg:w-2/3 mx-auto">
            <TeamCard teamDetails={PlayerDetail?.teamDetails} />
          </div>
        </div>
        <div className=" py-4">
          <div className="px-1 text-lg lg:w-1/3 mx-auto  py-1 text-white  flex  text-center justify-center items-center mt-2 rounded-full space-x-2 bg-black">
            <motion.span
              animate={{
                backgroundColor: tab === 1 ? "#ee6730" : "#000000",
              }}
              onClick={(e) => setTab(1)}
              className=" cursor-pointer    rounded-full  w-1/2 py-2 text-sm shadow-2xl"
            >
              Past
            </motion.span>
            <motion.span
              animate={{
                backgroundColor: tab === 1 ? "#000000" : "#ee6730",
              }}
              onClick={(e) => setTab(2)}
              className=" bg-black cursor-pointer  rounded-full  w-1/2 py-2 text-sm shadow-2xl"
            >
              Upcomming
            </motion.span>
          </div>
          <div className="   px-2 py-2 player-container w-full flex flex-nowrap gap-8 sm:gap-16 md:gap-20 mt-10 overflow-x-auto ">
            <MatchCard match={match} />
            <MatchCard match={match} />
            <MatchCard match={match} />
            <MatchCard match={match} />
            <MatchCard match={match} />
            <MatchCard match={match} />
          </div>
        </div>
      </div>
    </div>
  );
}
