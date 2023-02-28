import React from "react";

export default function AdminDashboard() {
  return (
    <div className="px-1 md:px-12 py-4 ">
      {/* <div className="flex">
        <div className="w-1/2 rounded-xl pt-5 bg-blue-100">
          <img className="rounded-xl" src={"CBL_Images/dash.jpg"}></img>
        </div>
      </div> */}
      <div className="py-4 px-3">
        <h1 className="text-xl md:text-3xl  font-semibold">Hello 👋, Deepak</h1>
        <p className="lg:py-1 lg:px-2 text-base text-gray-700">
          {" "}
          Here's What's happening in Your Web portal{" "}
        </p>
      </div>

      <div className="  gap-5 grid grid-cols-1  md:grid-cols-2 px-5 py-2">
        {/* start  */}
        <div className=" flex  relative justify-center items-center rounded-lg shadow-xl text-center bg-graddient-to-l from-orange-200 via-orange-400  to-orange-500 bg-white  ">
          <div className="flex-1 ">
            <img
              className="rounded-xl object-cover w-full"
              src={"CBL_Images/dash.jpg"}
            ></img>
          </div>
          <div className="p-2 w-1/2">
            <h1 className="text-xl md:text-4xl font-bold">99K</h1>
            <span className="text-xs md:text-base font-semibold">
              Total User
            </span>
          </div>
        </div>

        {/* end */}

        <div className=" flex relative justify-center items-center rounded-lg shadow-xl text-center bg-graddient-to-l from-orange-200 via-orange-400  to-orange-500 bg-white  ">
          <div className="bg-green-300 animate-pulse  w-5 h-5 rounded-full absolute right-0 translate-x-1 -translate-y-1 top-0"></div>
          <div className="flex-1 ">
            <img className="rounded-xl" src={"CBL_Images/dash.jpg"}></img>
          </div>
          <div className="p-2 md:w-1/2">
            <h1 className="text-xl md:text-4xl font-bold">12</h1>
            <span className="text-xs md:text-base font-semibold">
              Ongoing Tournament
            </span>
          </div>
        </div>
        {/* start  */}
        <div className=" flex relative justify-center items-center rounded-lg shadow-xl text-center bg-graddient-to-l from-orange-200 via-orange-400  to-orange-500 bg-white  ">
          <div className="flex-1 ">
            <img className="rounded-xl" src={"CBL_Images/dash.jpg"}></img>
          </div>
          <div className="p-2 w-1/2">
            <h1 className="text-xl md:text-4xl font-bold">730</h1>
            <span className="text-xs md:text-base font-semibold">
              Total Teams
            </span>
          </div>
        </div>
        {/* end */}

        {/* start  */}

        <div className=" flex relative justify-center items-center rounded-lg shadow-xl text-center bg-graddient-to-l from-orange-200 via-orange-400  to-orange-500 bg-white  ">
          <div className="flex-1 ">
            <img className="rounded-xl" src={"CBL_Images/dash.jpg"}></img>
          </div>
          <div className="p-2 w-1/2">
            <h1 className="text-xl md:text-4xl font-bold">62K</h1>
            <span className="text-xs md:text-base font-semibold">
              Total Player
            </span>
          </div>
        </div>
        {/* end */}
      </div>
    </div>
  );
}
