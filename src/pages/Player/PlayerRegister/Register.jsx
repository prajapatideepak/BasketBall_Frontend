import React from "react";
import Button from "../../../Component/Button";
import BasicInfo from "./BasicInfo";

export default function PlayerRegister() {
  return (
    <div className="px-8 lg:px-16 py-20 min-h-screen">
      <h1 className="text-center pb-5  text-3xl">Player Registration</h1>

      <div className="  rounded-lg shadow-lg  ">
        <div className="flex justify-center space-x-14 ">
          <span className="w-12 h-12 rounded-full flex justify-center items-center text-xl  border-2 border-orange-600  shadow-xl">
            1
          </span>
          <span className="w-12 h-12 rounded-full flex justify-center items-center text-xl border-2 border-gray-400 text-gray-400 ">
            2
          </span>
        </div>
        <BasicInfo />
        <div className="flex justify-between items-center p-4 ">
          <button className="px-6 bg-gray-50 border-black py-1  border rounded text-gray-800 text-lg    ">
            Back
          </button>
          <div>
            <button className="px-6 font-semibold bg-orange-600 border-orange-800 py-1  border rounded text-white text-lg    ">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
