import React from "react";
import moment from "moment";
import { CgMediaLive } from "react-icons/cg";

export default function MatchProfile({ data }) {
  console.log(data);
  return (
    <div className="relative bg-gradient-to-r  py-5 bg-clip-border   mx-auto  from-orange-700 via-current to-blue-600">
      {/* heading start here */}
      <div className=" text-center py-2 px-12 ">
        <h1 className="text-xl xs:text-xl md:text-3xl mt-10 md:mt-5 lg:text-5xl uppercase leading-tight tracking-widest flex font-bold justify-center items-center  text-white opacity-40  mx-auto  ">
          {data?.data?.match_data?.data?.tournaments?.tournament_name}
        </h1>
        {data?.data?.match_data?.data?.status == 3 && (
          <p className="pt-4 text-center  text-gray-500 text-xl sm:text-2xl">
            <span className="text-green-600 font-medium">
              {data?.data?.match_data?.data?.won_by_team?.team_name}{" "}
            </span>
            won the match
          </p>
        )}
      </div>

      {data?.data?.match_data?.data?.status == 2 && (
        <div
          className="bg-white shadow-2xl rounded-l-lg rounded-t-none flex items-center justify-center px-2 py-1s sm:px-4 sm:py-2 font-bold top-0 right-0 absolute
        "
        >
          {" "}
          <div className="px-3 text-red-600 text-lg"> Live</div>
          <div>
            <CgMediaLive className="text-red-600 text-xs animate-ping" />
          </div>
        </div>
      )}
      {/* heading ends here */}

      {/* team score statics  start here */}
      <div className="flex flex-wrap py-8 md:py-16  justify-evenly items-center ">
        {/* team 1 Detail */}
        <div className="text-center  w-2/5 lg:w-2/6  space-y-2">
          <img
            className=" xxs:w-14 xxs:h-14 xs:w-20 xs:h-20 md:w-32 md:h-32 mx-auto bg-white object-cover p-1 shadow-lg border border-gray-300 rounded-full  "
            src={data?.data?.match_data?.data?.team_1?.logo}
          />
          <h2 className="xxs:text-sm line-clamp-1 xs:text-lg md:text-xl text-orange-100 font-semibold">
            {data?.data?.match_data?.data?.team_1?.team_name}
          </h2>
        </div>
        {/* team detail end here  */}
        {/*  */}
        {data?.data?.match_data?.data?.status == 1 && (
          <div className="text-white text-center opacity-60 ">
            <h1 className="font-semibold text-3xl sm:text-5xl xl:text-7xl italic">
              VS
            </h1>
          </div>
        )}
        {data?.data?.match_data?.data?.status != 1 && (
          <div className="text-white order-2  xss:text-xs xs:text-2xl md:hidden">
            <h1 className="bg-white flex justify-center items-center  font-semibold  text-black xxs:w-7 xxs:h-7 xs:w-10 xs:h-10   rounded-full ">
              {data?.data?.match_data?.all_quarters?.length}
            </h1>
          </div>
        )}
        {data?.data?.match_data?.data?.status != 1 && (
          <div className="space-y-8 xs:space-x-4 mt-3 mx-4  order-4 lg:order-2">
            <div className="hidden  text-center md:flex justify-center">
              <h1 className="bg-white flex justify-center items-center  font-semibold text-2xl text-black w-10 h-10   rounded-full ">
                {data?.data?.match_data?.all_quarters?.length}
              </h1>
            </div>
            <div className="grid  grid-cols-3 font-bold  text-xl md:text-3xl text-white">
              <div className=" bg-orange-600 shadow-xl  rounded-l-xl rounded-bl-none px-10 md:px-12 py-2 ">
                {data?.data?.match_data?.live_quarter?.team_1_points}
              </div>
              <div className="text-4xl px-6 scale-110 text-center bg-white shadow-xl text-black italic  py-1 text-">
                Vs
              </div>
              <div className=" bg-blue-600 shadow-xl rounded-b-none rounded-r-xl rounded-br-none  px-8 py-2">
                {data?.data?.match_data?.live_quarter?.team_2_points}
              </div>
              <div className="col-span-3 bg-black text-white py-1 shadow-2xl flex justify-around  w-full mx-auto mb-2 font-semibold rounded-b-xl text-lg items-center space-x-3">
                <span>
                  {data?.data?.match_data?.all_quarters?.filter(
                    (m) =>
                      m?.won_by_team_id ===
                      data?.data?.match_data?.data?.team_1_id
                  )?.length ?? 0}
                </span>
                <span>-</span>
                <span>
                  {data?.data?.match_data?.all_quarters?.filter(
                    (m) =>
                      m?.won_by_team_id ===
                      data?.data?.match_data?.data?.team_2_id
                  )?.length ?? 0}
                </span>
              </div>
            </div>
            {/* score Detail */}
          </div>
        )}

        {/*  */}
        {/* Team 2 Detail */}
        <div className="text-center w-2/5 sm:w-2/6 order-3  space-y-2">
          <img
            className="xxs:w-14 xxs:h-14 xs:w-20 xs:h-20 md:w-32 md:h-32 mx-auto  bg-white  object-cover p-1  shadow-lg border border-gray-300 rounded-full  "
            src="/CBL_Images/logo3.png"
          />
          <h2 className="xxs:text-sm line-clamp-1 xs:text-lg md:text-xl text-orange-100 font-semibold">
            {data?.data?.match_data?.data?.team_2?.team_name}
          </h2>
        </div>
        {/* Team 2 Detail */}
      </div>
      {/* team score statics  end here here */}
      {data?.data?.match_data?.data?.status == 1 && (
        <p className="py-3 text-gray-200 text-xs lg:text-xl text-center">
          {!data?.data?.match_data?.data?.start_date ? (
            "Coming soon..."
          ) : (
            <>
              {moment(data?.data?.match_data?.data?.start_date).format(
                "DD-MM-YYYY"
              )}
              <span className="ml-2 font-medium">
                {moment(
                  data?.data?.match_data?.data?.start_time,
                  "h:mm a"
                ).format("h:mm A")}
              </span>
            </>
          )}
        </p>
      )}
    </div>
  );
}
