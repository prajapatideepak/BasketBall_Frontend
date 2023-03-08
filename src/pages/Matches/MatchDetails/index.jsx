import { tab } from "@material-tailwind/react";
import React from "react";
import { motion } from "framer-motion";
import { CgMediaLive } from "react-icons/cg";
const MatchDetails = () => {
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

  function HandleChange(id) {
    setMenu(
      menu.map((m, index) => {
        if (index == id) {
          return { ...m, active: true };
        } else {
          return { ...m, active: false };
        }
      })
    );
  }
  return (
    <section className="min-h-screen">
      <div className="relative bg-gradient-to-r  py-5 bg-clip-border   mx-auto  from-orange-700 via-current to-blue-600">
        {/* heading start here */}
        <div className=" text-center py-2 px-12 ">
          <h1 className="text-xl sm:text-2xl md:text-3xl mt-10 md:mt-5 lg:text-5xl uppercase leading-tight tracking-widest flex font-bold justify-center items-center  text-white opacity-40 w-fit mx-auto  ">
            corporate Basketball league{" "}
          </h1>
        </div>

        {true && (
          <div
            className="bg-white shadow-2xl rounded-l-lg rounded-t-none flex items-center justify-center px-2 py-1s sm:px-4 sm:py-2 font-bold top-0 right-0 absolute
        "
          >
            {" "}
            <div className="px-3 text-red-600 text-lg"> Live</div>
            <div>
              <CgMediaLive className="text-red-600 text-xs animate-ping" />
            </div>
          </div>
        )}
        {/* heading ends here */}

        {/* team score statics  start here */}
        <div className="flex flex-wrap py-8 md:py-16  justify-evenly items-center ">
          {/* team 1 Detail */}
          <div className="text-center  space-y-2">
            <img
              className=" xxs:w-14 xxs:h-14 xs:w-20 xs:h-20 md:w-32 md:h-32 mx-auto bg-white object-cover p-1 shadow-lg border border-gray-300 rounded-full  "
              src="/CBL_Images/logo5.png"
            />
            <h2 className="xss:text-xs xs:text-lg md:text-xl text-orange-100 font-semibold">
              Jetha ki Babita
            </h2>
          </div>
          {/* team detail end here  */}
          {/*  */}
          <div className="text-white order-2  xss:text-xs xs:text-2xl sm:hidden">
            <h1 className="bg-white flex justify-center items-center  font-semibold  text-black xxs:w-7 xxs:h-7 xs:w-10 xs:h-10   rounded-full ">
              4
            </h1>
          </div>
          <div className="space-y-8 xs:space-x-4 mt-3 mx-4  order-4 sm:order-2">
            <div className="hidden  text-center md:flex justify-center">
              <h1 className="bg-white flex justify-center items-center  font-semibold text-2xl text-black w-10 h-10   rounded-full ">
                4
              </h1>
            </div>
            <div className="grid  grid-cols-3 font-bold  text-xl md:text-3xl text-white">
              <div className=" bg-orange-600 shadow-xl  rounded-l-xl rounded-bl-none px-10 md:px-12 py-2 ">
                {12}
              </div>
              <div className="text-4xl px-6 scale-110 text-center bg-white shadow-xl text-black italic  py-1 text-">
                Vs
              </div>
              <div className=" bg-blue-600 shadow-xl rounded-b-none rounded-r-xl rounded-br-none  px-8 py-2">
                {12}
              </div>
              <div className="col-span-3 bg-black text-white py-1 shadow-2xl flex justify-around  w-full mx-auto mb-2 font-semibold rounded-b-xl text-lg items-center space-x-3">
                <span>3</span>
                <span>-</span>
                <span>1</span>
              </div>
            </div>
            {/* score Detail */}
          </div>
          {/*  */}
          {/* Team 2 Detail */}
          <div className="text-center order-3  space-y-2">
            <img
              className="xxs:w-14 xxs:h-14 xs:w-20 xs:h-20 md:w-32 md:h-32 mx-auto  bg-white  object-cover p-1  shadow-lg border border-gray-300 rounded-full  "
              src="/CBL_Images/logo3.png"
            />
            <h2 className="text-lg md:text-xl text-white font-semibold">
              Champak ki Sonu
            </h2>
          </div>
          {/* Team 2 Detail */}
        </div>
        {/* team score statics  end here here */}
      </div>
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
                  duration: 1.3,
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
    </section>
  );
};

export default MatchDetails;
