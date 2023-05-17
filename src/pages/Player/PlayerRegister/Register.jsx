import React from "react";
import Button from "../../../Component/Button";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import BasicInfo from "./BasicInfo";
import GameInfo from "./GameInfo";
import { MdDone } from "react-icons/md";
import { motion } from "framer-motion";

export default function PlayerRegister() {
  const [index, setIndex] = React.useState(1);
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  
  React.useEffect(() => {
    if(user.is_player && !location?.state?.isEdit){
      navigate('/')
    }
    window.scrollTo(0, 0);
  }, [index]);

  return (
    <div className="px-3 lg:px-16 py-5 min-h-screen">
      <div className=" flex justify-center items-center">
        <div>
          <h1 className=" items-end  text-center font-semibold text-2xl lg:text-3xl">
          {location?.state?.isEdit ? "Edit Player" : "Player Registration"}
          </h1>
        </div>
        <img src={"/icons/playing_icon.png"} className="w-20" />
      </div>
      <p className="text-center text-gray-700 text-sm md:text-base italic pb-5">
        Be the player that raises the bar, be relentless, be a game changer.
      </p>
      <div className="  rounded-lg shadow-xl py-2 px-5  ">
        <div className="flex justify-center space-x-8  ">
          <motion.div
            animate={{
              borderColor: "#ee6730",
              // boxShadow: index === 1 ? "rgba(0, 0, 0, 0.35) 0px 5px 15px" : "",
              backgroundColor: index > 1 ? "#ee6730" : "#FFFFFF",
              color: index > 1 ? "#FFFFFF" : "#ee6730",
              opacity: index == 2 ? 0.7 : 1,
            }}
            transition={{
              duration: 0.7,
            }}
            className="w-10 h-10 rounded-full flex justify-center items-center text-xl  border-2   "
          >
            {index > 1 ? <MdDone /> : "1"}
          </motion.div>
          <motion.div
            animate={{
              borderColor: index < 2 ? "#B0B6BF" : "#ee6730",
              // boxShadow: index === 2 ? "rgba(0, 0, 0, 0.35) 0px 5px 15px" : "",
              backgroundColor: index < 1 ? "#ee6730" : "#F5F5F7",
              color: index === 2 ? "#ee6730" : "#B0B6BF",
              opacity: index == 1 ? 0.7 : 1,
            }}
            transition={{
              duration: 1,
            }}
            className="w-10 h-10 rounded-full flex justify-center items-center text-lg border-2 border-gray-400 text-gray-400 "
          >
            2
          </motion.div>
        </div>
        { index <= 1 ? (
          <BasicInfo index={index} setIndex={setIndex} />
        ) : (
          <GameInfo index={index} setIndex={setIndex} />
        )}
      </div>
    </div>
  );
}
