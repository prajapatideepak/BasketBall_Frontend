import React from "react";

export default function AdminDashboard() {
  return (
    <div className="px-12 py-8 ">
      <div className="flex">
        {/* <div className="w-1/2 rounded-xl pt-5 bg-blue-100">
          <img
            className="rounded-xl shadow-lg"
            src={"CBL_Images/dash.jpg"}
          ></img>
        </div> */}
        <div className="px-4 py-2 flex-1 flex flex-wrap gap-5 ">
          <div className="py-2 px-10 w-1/4 text-center bg-blue-400 flex justify-center flex-col text-white rounded shadow-xl">
            <h1 className="text-2xl font-bold">300</h1>
            <span className="text-lg"> Total Users</span>
          </div>

          <div className="py-2 px-10 w-1/4 text-center bg-blue-600 flex justify-center flex-col text-white rounded shadow-xl">
            <h1 className="text-2xl font-bold">300</h1>
            <span className="text-lg"> Total Users</span>
          </div>

          <div className="py-2 px-10 w-1/4 text-center bg-blue-800 flex justify-center flex-col text-white rounded shadow-xl">
            <h1 className="text-2xl font-bold">300</h1>
            <span className="text-lg"> Total Users</span>
          </div>
        </div>
      </div>
    </div>
  );
}
