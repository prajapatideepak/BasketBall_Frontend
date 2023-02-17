import React from "react";
import MatchLive from "../../Component/Dashboard/matchlive";
import img from "../../../public/CBL_Images/nba.png"

const Dashboard = () => {
  return ( 
    <div className="min-h-screen px-24 ">
      <MatchLive/>
      <div className="  py-10 mt-20 ">
        <h1 className="font-bold text-2xl text-black">
        Leagues on Courtside 
        </h1>
        <div className="bg-black h-[1px] w-full my-2">

        </div>
        <div className="border bg-red-700 ">
          <img src={img} alt="" className="h-72 w-1/3 flex justify-start items-start" />
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
