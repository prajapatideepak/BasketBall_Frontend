import React from "react";
import { useNavigate } from "react-router-dom";

function PlayerCard({ id, photo, name, position, age, jersey_no }) {
  const navigate = useNavigate();
  return (
    <div
      className="group overflow-hidden  cursor-pointer"
      style={{
        minWidth: "240px",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
      }}
      onClick={() => navigate(`/player/${id}`)}
    >
      <div className="overflow-hidden w-60 h-52 bg-white">
        <img
          src={photo}
          className="object-cover h-full   group-hover:scale-105 transition-all duration-500"
          alt=""
        />
      </div>
      <div className="bg-gray-700 flex overflow-hidden">
        <div className="px-3 py-1">
          <h4 className="text-gray-200 capitalize">{name}</h4>
          <p className="text-orange-400 text-xs tracking-wide capitalize">
            {position}{" "}
            <span className="text-gray-400 font-medium">(Age: {age})</span>
          </p>
        </div>
        <div className="flex flex-1 justify-end">
          <div className="bg-gray-500 w-5 h-[40px] mt-auto skew-x-[-17deg]"></div>
          <div className="flex justify-center items-center bg-[#ee6730] w-12 h-[40px] mt-auto skew-x-[-17deg] mr-[-7px]">
            <p className="text-white text-2xl font-medium skew-x-[17deg]">
              {jersey_no}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;
