import React from "react";
import ReadMoreReact from 'read-more-react';
import { AiFillCloseCircle } from "react-icons/ai";


export default function PlayerAvtar({ player }) {
  const [model, setModel] = React.useState(false);
  const [playerBio, setPlayerBio] = React.useState('')
  const [showReadMore, setShowReadMore] = React.useState(false)

  function truncateString(str, num) {
    // If the length of str is less than or equal to num
    // just return str--don't truncate it.
    if (str.length <= num) {
      return str
    }
    setShowReadMore(true)
    // Return str truncated with '...' concatenated to the end of str.
    return str.slice(0, num) + '...'
  }

  React.useEffect(()=>{
    const player_bio = truncateString(player?.SinglePlayerDetails.about, 50)
    setPlayerBio(player_bio)
  },[])

  return (
    <div className="relative">
      {model && (
        <div className="absolute w-full h-full z-30 ">
          <div className="flex justify-center opacity-100 ">
            <div className="h-full mx-auto opacity-100 shadow-2xl rounded-md mt-10 2xl:mt-40  bg-white w-full z-50">
              <div className="">
                <div className="flex justify-end ">
                  <button
                    onClick={(e) => {
                      setModel(!model);
                      handleClick();
                    }}
                    className="absolute translate-x-4 -translate-y-4 font-bold text-2xl p-2 text-red-700"
                  >
                    <AiFillCloseCircle />
                  </button>
                </div>
                <div className="bg-slate-200  p-5 rounded-md">
                  <h1 className="text-start px-3 w-20 text-white rounded-md uppercase font-semibold bg-black">About</h1>
                  <div className="">
                    <p className="text-start py-2 text-slate-700">
                      {player.SinglePlayerDetails.about}
                      {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis ut, rem repellat quam quo, nihil temporibus, libero commodi perferendis nam et sunt quaerat exercitationem laborum ipsam! Temporibus harum itaque sint. */}
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className={`bg-slate-100 ${model && "opacity-20"}`}
      >
        <div className="flex flex-col items-center  mx-auto ">
          <img
            className="mx-auto w-32 h-32 md:w-44 md:h-44 lg:w-60 lg:h-60 object-cover shadow rounded-full"
            src={player?.SinglePlayerDetails?.photo ? player?.SinglePlayerDetails?.photo : "/CBL_Images/60111-removebg-preview.png"}
          />

          <div className="p-2 justify-center items-center space-y-1  ">
            <h1 className="text-3xl text-center text-gray-900">
              {player?.SinglePlayerDetails?.first_name} {player?.SinglePlayerDetails?.last_name}
            </h1>
            <div className="flex items-center justify-center">
              <span className="px-2 text-xs italic bg-[#ee6730] font-semibold text-white rounded-lg ">
                {player?.SinglePlayerDetails?.team_players[0]?.teams?.team_name ? player?.SinglePlayerDetails?.team_players[0]?.teams?.team_name : "--"}
              </span>
              <span>-</span>
              <span className="px-2  text-xs italic bg-gray-800 font-semibold text-white rounded-lg capitalize ">
                {player?.SinglePlayerDetails?.playing_position}
              </span>
            </div>

            <div className=" w-full flex justify-center items-center">
              <div className="flex items-center justify-center w-1/2 h-full">
                <p className='text-center text-gray-600 text-sm overflow-hidden'>
                  {playerBio}
                </p>
              </div>
            </div>

            {
              showReadMore
              ?
                <div onClick={(e) => setModel(true)}>
                  {
                    player?.SinglePlayerDetails?.about?.length > 50 ?

                      <h1 className="text-center text-sm cursor-pointer font-semibold">...Read More</h1>
                      :
                      ""
                  }
                </div>
              : null
            }
          </div>
        </div>
      </div>
    </div>
  );
}
