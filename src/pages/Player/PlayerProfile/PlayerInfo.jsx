import React from "react";
import Heading from "../../../Component/Heading";

export default function PlayerInfo({ PlayerDetail }) {
  return (
    <div className="mx-auto text-center">
      <div className="flex justify-center ">
        <Heading
          text={"Player Information"}
          className="text-lg md:text-2xl text-center  "
          margin={true}
        />
      </div>
      {/*  */}
      <div className="text-left pt-4 ">
        <h2 className="text-xl py-2">Basic Information</h2>

        <div className="flex flex-wrap p-2  gap-2 lg:gap-3">
          <div className="bg-white px-2 py-1 rounded-lg border-2 border-orange-100 shadow-xl">
            <span className="text-xs md:text-base">Height -</span>
            <span className="text-xs md:text-sm font-semibold ">
              {PlayerDetail?.gameinfo?.height}cm
            </span>
          </div>
          <div className="bg-white px-2 py-1 rounded-lg border-2 border-orange-100 shadow-xl">
            <span className="text-xs md:text-base">Weight -</span>
            <span className="text-xs md:text-sm font-semibold ">
              {PlayerDetail?.gameinfo?.weight}KG
            </span>
          </div>

          <div className="bg-white px-2 py-1 rounded-lg border-2 border-orange-100 shadow-xl">
            <span className="text-xs md:text-base">Date of birth - </span>
            <span className="text-xs md:text-sm font-semibold ">
              {PlayerDetail?.basicinfo?.dateofbirth.inString()}
            </span>
          </div>

          <div className="bg-white px-2 py-1 rounded-lg border-2 border-orange-100 shadow-xl">
            <span className="text-xs md:text-base">From - </span>
            <span className="text-xs md:text-sm font-semibold ">
              Ahmedabad , Gujarat
            </span>
          </div>
        </div>
      </div>

      {/* contat */}
      <div className="text-left ">
        <h2 className="text-xl py-2">Game Information</h2>

        <div className="flex flex-wrap p-2  gap-3">
          <div className="bg-white px-2 py-1 rounded-lg border-2 border-orange-100 shadow-xl">
            <span className="text-xs md:text-base">Jersey Number -</span>
            <span className="text-xs md:text-sm font-semibold    px-4">
              {PlayerDetail?.gameinfo.JerseyNumber}
            </span>
          </div>
          <div className="bg-white px-2 py-1 rounded-lg border-2 border-orange-100 shadow-xl">
            <span className="text-xs md:text-base">Game Position - </span>
            <span className="text-xs md:text-sm font-semibold ">
              {PlayerDetail?.gameinfo.playerPosition}
            </span>
          </div>
        </div>
      </div>
      {/* for contact infor */}
      <div className="text-left ">
        <h2 className="text-xl py-2">Contact Information</h2>

        <div className="flex flex-wrap p-2  ">
          <div className="bg-white   px-2 py-1 rounded-lg border-2 border-orange-100 shadow-xl">
            <span className="text-xs md:text-base">Email - </span>
            <span className="text-xs md:text-sm font-semibold ">
              {PlayerDetail?.basicinfo.email}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
