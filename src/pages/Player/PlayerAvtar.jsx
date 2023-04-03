import React from "react";

export default function PlayerAvtar({ player }) {
  return (
    <div className=" flex flex-col items-center  mx-auto   ">
      <img
        className="mx-auto w-32 h-32 md:w-44 md:h-44 lg:w-60   lg:h-60 object-cover shadow rounded-full"
        src={player?.SinglePlayerDetails?.photo}
      />

      <div className="p-2 space-y-1">
        <h1 className="text-3xl text-center text-gray-900">
          {player?.SinglePlayerDetails?.middle_name} {player?.SinglePlayerDetails?.last_name}
        </h1>
        <div className="flex items-center justify-center">
          <span className="px-2    text-xs italic bg-orange-600 font-semibold text-white rounded-lg ">
           {player?.SinglePlayerDetails?.team_players[0]?.teams?.team_name ? player?.SinglePlayerDetails?.team_players[0]?.teams?.team_name : ""}
          </span>
          <span>-</span>
          <span className="px-2  text-xs italic bg-gray-800 font-semibold text-white rounded-lg ">
            {player?.SinglePlayerDetails?.playing_position}
          </span>
        </div>
        <p className="text-center text-gray-600 text-sm lg:w-1/2 mx-auto">
          {player?.SinglePlayerDetails?.about}
        </p>
      </div>
    </div>
  );
}
