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
      path: "/tournament-registration",
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
    <div className="flex flex-col  justify-center px-8   lg:px-20  min-h-screen ">
      <div className="space-y-1  text-center ">
        <h1 className="text-4xl  "> Select Your Role</h1>
        <p className="italic text-gray-700 p-1">
          Rise to the Top: Choose Your Role as Visitor, Player, Tournament Host,
          or Team Manager and Dominate the Court
        </p>
      </div>
      <div className="grid mt-20  lg:m-10 grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
        {role.map((r, i) => {
          return (
            <motion.div
              animate={{
                borderColor: r.isSelected ? "#ee6730" : "black",
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
              className="cursor-pointer relative bg-gray-100 rounded-lg shadow border border-black  "
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
                className={`${
                  r?.isSelected ? "" : "hidden"
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
                <h1 className="overflow-hidden">{r.title} </h1>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex justify-end items-center lg:px-10">
        <div className="">
          <Button onClick={(e) => handleSubmit()} text={"Continue"}></Button>
          {/* <button className="px-4  border py-1 rounded-md bg-[#ee6730] text-white  "> Submit</button> */}
        </div>
      </div>
    </div>
  );
}
