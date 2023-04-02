import { motion } from "framer-motion";
import React from "react";
import { MdDone } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../Component/Button";
import Heading from "../../Component/Heading";

export default function AfterRole() {
  const navigate = useNavigate();

  const [role, setRole] = React.useState([
    {
      title: "Player",
      isSelected: false,
      path: "/player/register",
      icon: "/icons/player_icon.png",
    },
    {
      title: "Team Owner/Manager",
      isSelected: false,
      path: "/team/add-edit",
      icon: "/icons/team_icon.png",
    },
    {
      title: "Tournament Host",
      isSelected: false,
      path: "/tournament/add-edit",
      icon: "/icons/tournament_icon.png",
    },
  ]);

  function handleClick(index) {
    let newArray = role.map((m, i) => {
      if (index == i) {
        m.isSelected = !m.isSelected;
      } else {
        m.isSelected = false;
      }

      return m;
    });

    setRole(() => newArray);
  }

  function handleSubmit() {
    let selected = false;
    role.map((role) => {
      if (role.isSelected) {
        navigate(role.path);
        selected = true;
        return;
      }
    });

    if (!selected) {
      toast.error("Please Select Your Role");
    }
  }
  return (
    <div className="flex flex-col  justify-start px-8 items-center h-screen  lg:px-20 py-12 lg:py-5 ">
      <div className="my-5 text-center  w-full px-20 ">
        {/* <Heading
          text={"Select Your Role"}
          className="text-2xl px-2"
          margin={true}
        /> */}
        <h1 className="text-5xl font-bold text-start text-[#ee6730] ">Select Your Role</h1>
        <div className="bg-[#ee6730] w-10">h</div>
        {/* <p className=" text-gray-700 p-1 text-start">
          Rise to the Top: Choose Your Role as Visitor, Player, Tournament Host,
          or Team Manager and Dominate the Court
        </p> */}
      </div>
      <div className="grid mt-12 mb-12 rounded-lg  px-8 lg:mx-10 grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 ">
        {role.map((r, i) => {
          return (
            <motion.div
              animate={{
                borderColor: r.isSelected ? "#ee6730" : "white",
                // backgroundColor: r.isSelected ? '#FFFFFF' : "#F3F4F6",
                boxShadow: r.isSelected
                  ? "rgba(0, 0, 0, 0.35) 0px 5px 15px"
                  : "",
              }}
              transition={{
                duration: 1.5,
              }}
              onClick={(e) => handleClick(i)}
              key={i}
              className="cursor-pointer relative  bg-gray-100 rounded-lg shadow-lg shadow-black/20  border   "
            >
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  backgroundColor: r.isSelected ? "#ee6730" : "#F3F4F6",

                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                }}
                className={`${r?.isSelected ? "" : "hidden"
                  } w-8 h-8 flex justify-center items-center  rounded-full absolute top-0 right-0  -translate-x-2 translate-y-1`}
              >
                <MdDone className="text-center text-white font-bold " />
              </motion.div>
              <img className="lg:w-2/3 mx-auto" src={r.icon} />
              <motion.div
                animate={{
                  color: r.isSelected ? "#ee6730" : "black",
                }}
                className="text-center m-2 text-sm lg:text-lg font-semibold"
              >
                <h1 className="overflow-hidden text-2xl">{r.title} </h1>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
      <div className="flex justify-end items-center lg:px-10 space-x-16 py-5">
        <button
          type="submit"
          className="bg-slate-900 relative inline-flex items-center justify-center px-24 py-3 rounded-full overflow-hidden text-white cursor-pointer group"
          onClick={handleSubmit}
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#ee6730] rounded-lg group-hover:w-full group-hover:h-56"></span>
          <span className="relative">
            Continue
          </span>
        </button>
      </div>
    </div>
  );
}
