import React from "react";

export default function ({ PlayerDetail }) {
  console.log(PlayerDetail)
  return (
    <div className="left-0 rounded-2xl right-0 bg-black mx-0 text-white">
      {/* <h1 className="py-1 text-center font-bold">Player statistics</h1> */}
      <div className="grid grid-cols-2 lg:grid-cols-4  gap-1 lg:gap-5 p-2 mt-5 ">
        <div className="text-center  p-2 ">
          <h1 className="text-xl md:text-2xl font-bold">
            {PlayerDetail?.SinglePlayerDetails?.player_statistics[0]?.matches_played ? PlayerDetail?.SinglePlayerDetails?.player_statistics[0]?.matches_played : "0"}
          </h1>
          <span className="text-sm md:text-lg text-gray-200">Total Match</span>
        </div>
        <div className="text-center  p-2 ">
          <h1 className="text-xl md:text-2xl   text-green-600 font-bold">
            {PlayerDetail?.SinglePlayerDetails?.player_statistics[0]?.matches_won ? PlayerDetail?.SinglePlayerDetails?.player_statistics[0]?.matches_won : "0"}
          </h1>
          <span className="text-sm md:text-lg text-gray-200">Match Won</span>
        </div>
        <div className="text-center  p-2 text-red-600 ">
          <h1 className="text-xl md:text-2xl  font-bold">
            {PlayerDetail?.SinglePlayerDetails?.player_statistics[0]?.matches_lost ? PlayerDetail?.SinglePlayerDetails?.player_statistics[0]?.matches_lost : "0"}
          </h1>
          <span className="text-sm md:text-lg text-gray-200">Match loss</span>
        </div>
        <div className="text-center  p-2 text-green-600 ">
          <h1 className="text-xl md:text-2xl  font-bold">
            {PlayerDetail?.SinglePlayerDetails?.player_statistics[0]?.points ? PlayerDetail?.SinglePlayerDetails?.player_statistics[0]?.points : "0"}
          </h1>
          <span className="text-sm md:text-lg text-gray-200">Total Score</span>
        </div>
      </div>
    </div>
  );
}
