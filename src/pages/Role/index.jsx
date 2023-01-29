import { motion } from "framer-motion";
import React from "react";
import { MdDone } from "react-icons/md";
import Button from "../../Component/Button";
export default function Role() {
  const [role, setRole] = React.useState([
    {
      title: "Visitor",
      isSelected: false,
      icon: "/icons/user_icon.png",
    },
    {
      title: "Player",
      isSelected: false,
      icon: "/icons/player_icon.png",
    },
    {
      title: "Team Owner/Manager",
      isSelected: false,
      icon: "/icons/team_icon.png",
    },
    {
      title: "Tournament Host",
      isSelected: false,
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

  function handleSubmit(){
    
  }
  return (
    <div className="flex flex-col  justify-center px-8  md:pt-20 md:px-20  min-h-screen ">
      <div className="space-y-1 mt-10 text-center ">
        <h1 className="text-4xl  "> Who are You ?</h1>
        <p className="italic text-gray-700 p-1">
          Rise to the Top: Choose Your Role as Visitor, Player, Tournament Host,
          or Team Manager and Dominate the Court
        </p>
      </div>
      <div className="grid mt-20 md:m-10 grid-cols-2 md:grid-cols-4 gap-5 md:gap-10">
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
                              duration: 0.5,
                            }}
              onClick={(e) => handleClick(i)}
              key={i}
              className="cursor-pointer relative bg-gray-100 rounded-lg shadow border border-black  "
            >
              <motion.div
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
              <img className="md:w-2/3 mx-auto" src={r.icon} />
              <motion.div
                animate={{
                  color: r.isSelected ? "#ee6730" : "black",
                }}
                className="text-center m-2 text-sm md:text-lg font-semibold"
              >
                <h1>{r.title} </h1>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex justify-end items-center">
        <div className="">
            <Button onClick={e=>console.log("clicked")}  text={"Submit"}></Button>
          {/* <button className="px-4  border py-1 rounded-md bg-[#ee6730] text-white  "> Submit</button> */}
        </div>
      </div>
    </div>
  );
}
