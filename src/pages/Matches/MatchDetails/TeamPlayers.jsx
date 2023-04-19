import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../../../Component/Button";
import { useSelector } from "react-redux";

export default function TeamPlayers({ data }) {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  function handleNavigate(teamId) {
    navigate("/match/playerselection", {
      state: {
        matchId: data?.data?.match_data?.data?.id,
        teamId: teamId,
      },
    });
  }

  return (
    <div className="px-6 py-8 md:flex items-start space-y-7 md:space-y-0 md:space-x-8">
      {/* for team 1 */}
      <div className="w-full md:w-1/2">
        <h1 className="text-center text-orange-600 text-xl md:text-3xl p-2 font-bold ">
          {data?.data?.match_data?.data?.team_1?.team_name}
        </h1>
        <div className="mt-4 md:mt-8">
          <div className="w-full">
            <div className="text-center grid grid-cols-4  text-xs md:text-base bg-white shadow-xl p-1  rounded  text-gray-600 ">
              <h1 className=" font-normal border-none"> Jersey No</h1>
              <h1 className=" font-normal border-none">Name</h1>
              <h1 className=" font-normal border-none line-clamp-1">
                Playing Position
              </h1>
              <h1 className=" font-normal border-none">Points</h1>
            </div>

            {data?.data?.match_data?.team_1_players.map((player, index) => {
              return (
                <>
                  <Link to={`/player/${player?.player_id}`}>
                    <div className="text-center w-full  grid grid-cols-4 shadow-2xl p-2 rounded  mt-3 bg-black text-white text-sm md:text-lg font-semibold">
                      <h1 className="">{player?.players?.jersey_no} </h1>
                      <h1 className="">{player?.players?.first_name}</h1>
                      <h1 className="line-clamp-1">
                        {player?.players?.playing_position}
                      </h1>
                      <h1 className=" text-green-600">{player?.points}</h1>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
        {data?.data?.match_data?.data?.team_1.user_id == user?.id && (
          <div className="flex justify-end">
            <div>
              <Button
                // margin={false}
                // isDisabled={startTourLoading.isLoading}
                text={"Edit Players"}
                onClick={(e) =>
                  handleNavigate(data?.data?.match_data?.data?.team_1.id)
                }
              />
            </div>
          </div>
        )}
      </div>

      {/* for team 2 */}
      <div className="w-full md:w-1/2">
        <h1 className="text-center text-blue-500 text-xl md:text-3xl p-2 font-bold ">
          {data?.data?.match_data?.data?.team_2?.team_name}
        </h1>
        <div className=" mt-4 md:mt-8">
          <div className="w-full">
            <div className="text-center grid grid-cols-4 bg-white text-xs md:text-base p-1  rounded  text-gray-600 ">
              <h1 className=" font-normal border-none"> Jersey No</h1>
              <h1 className=" font-normal border-none">Name</h1>
              <h1 className=" font-normal border-none line-clamp-1">
                Playing Position
              </h1>
              <h1 className=" font-normal border-none">Points</h1>
            </div>

            {data?.data?.match_data?.team_2_players.map((player, index) => {
              return (
                <>
                  <Link to={`/player/${player?.player_id}`}>
                    <div className="text-center shadow-2xl p-2 rounded w-full overflow-x-scroll grid grid-cols-4   mt-3 bg-black text-white text-sm md:text-lg font-semibold">
                      <h1 className="">{player?.players?.jersey_no} </h1>
                      <h1 className="">{player?.players?.first_name}</h1>
                      <h1 className="line-clamp-1">
                        {player?.players?.playing_position}
                      </h1>
                      <h1 className=" text-green-600">{player?.points}</h1>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
        {data?.data?.match_data?.data?.team_2.user_id == user?.id && (
          <div className="flex justify-end">
            <div>
              <Button
                // margin={false}
                // isDisabled={startTourLoading.isLoading}
                text={"Edit Players"}
                onClick={(e) =>
                  handleNavigate(data?.data?.match_data?.data?.team_2.id)
                }
              />
            </div>
          </div>
        )}
      </div>
      {/* team 2 end */}
    </div>
  );
}
