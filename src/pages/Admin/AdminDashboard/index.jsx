import React from "react";
import { useDashboardDetailsQuery } from "../../../services/admin";
import { useSelector } from "react-redux";

export default function AdminDashboard() {
  const {user} = useSelector((state)=> state.user);

  const {data, isLoading } = useDashboardDetailsQuery();

  return (
    <div className="px-1 md:px-12 py-4 ">
      {/* <div className="flex">
        <div className="w-1/2 rounded-xl pt-5 bg-blue-100">
          <img className="rounded-xl" src={"CBL_Images/dash.jpg"}></img>
        </div>
      </div> */}
      <div className="py-4 px-3">
        <h1 className="text-xl md:text-3xl  font-semibold capitalize">Hello 👋, {user.name}</h1>
        <p className="lg:py-1 lg:px-2 text-base text-gray-700">
          Here's What's happening in Your Web portal
        </p>
      </div>

      <div className="  gap-5 grid grid-cols-1  md:grid-cols-2 px-5 py-2">
        {/* start  */}
        <div className=" flex  relative justify-center items-center rounded-lg shadow-xl text-center bg-graddient-to-l from-orange-200 via-orange-400  to-orange-500 bg-white  ">
          <div className="flex-1 ">
            <img
              className="rounded-xl object-cover w-full"
              src={"/CBL_Images/dash.jpg"}
            ></img>
          </div>
          <div className="p-2 w-1/2">
            <h1 className="text-xl md:text-4xl font-bold">{data?.total_users}</h1>
            <span className="text-xs md:text-base font-semibold">
              Total Users
            </span>
          </div>
        </div>

        {/* end */}

        <div className=" flex relative justify-center items-center rounded-lg shadow-xl text-center bg-graddient-to-l from-orange-200 via-orange-400  to-orange-500 bg-white  ">
          <div className="flex-1 ">
            <img className="rounded-xl" src={"/CBL_Images/dash.jpg"}></img>
          </div>
          <div className="p-2 md:w-1/2">
            <h1 className="text-xl md:text-4xl font-bold">{data?.ongoing_tournaments}</h1>
            <span className="text-xs md:text-base font-semibold">
              Ongoing Tournaments
            </span>
          </div>
        </div>
        {/* start  */}
        <div className=" flex relative justify-center items-center rounded-lg shadow-xl text-center bg-graddient-to-l from-orange-200 via-orange-400  to-orange-500 bg-white  ">
          <div className="flex-1 ">
            <img className="rounded-xl" src={"/CBL_Images/dash.jpg"}></img>
          </div>
          <div className="p-2 w-1/2">
            <h1 className="text-xl md:text-4xl font-bold">{data?.total_teams}</h1>
            <span className="text-xs md:text-base font-semibold">
              Total Teams
            </span>
          </div>
        </div>
        {/* end */}

        {/* start  */}

        <div className=" flex relative justify-center items-center rounded-lg shadow-xl text-center bg-graddient-to-l from-orange-200 via-orange-400  to-orange-500 bg-white  ">
          <div className="flex-1 ">
            <img className="rounded-xl" src={"/CBL_Images/dash.jpg"}></img>
          </div>
          <div className="p-2 w-1/2">
            <h1 className="text-xl md:text-4xl font-bold">{data?.total_players}</h1>
            <span className="text-xs md:text-base font-semibold">
              Total Players
            </span>
          </div>
        </div>
        {/* end */}
      </div>
    </div>
  );
}
