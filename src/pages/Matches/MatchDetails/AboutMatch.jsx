import React from "react";
import moment from "moment";

export default function ({ data }) {
  return (
    <div id="about" className="p-4">
      {/* tournamet branding */}
      <div className="text-center">
        <img
          src={data?.data?.match_data?.data?.tournaments?.logo}
          className="w-16 h-16 sm:w-20 sm:h-20 mx-auto object-cover rounded-full "
        />
        <h1 className="text-2xl p-2 tracking-widest  ">
          {data?.data?.match_data?.data?.tournaments?.tournament_name}
        </h1>
      </div>
      {/* touranment branding end */}

      {/* info  */}

      <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
        <div className="  ">
          <label htmlFor="required-email" className="text-gray-700">
            Game Level
          </label>
          <input
            type="text"
            id="height"
            disabled={true}
            value={data?.data?.match_data?.data?.tournaments?.level}
            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
            name="height"
          />
        </div>
        {/*  */}
        <div className="  ">
          <label htmlFor="required-email" className="text-gray-700">
            Match Date
          </label>
          <input
            type="text"
            id="date"
            disabled={true}
            value={
              data?.data?.match_data?.data?.start_date
                ? moment(data?.data?.match_data?.data?.start_date).format(
                    "DD-MM-YYYY"
                  )
                : "--"
            }
            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
            name="height"
          />
        </div>
        {/*  */}
        <div className="  ">
          <label htmlFor="required-email" className="text-gray-700">
            Match Time
          </label>
          <input
            type="text"
            id="height"
            disabled={true}
            value={
              data?.data?.match_data?.data?.start_time
                ? moment(
                    data?.data?.match_data?.data?.start_time,
                    "h:mm a"
                  ).format("h:mm A")
                : "--"
            }
            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
            name="height"
          />
        </div>
        {/*  */}

        {/*  */}
        <div className="  ">
          <label htmlFor="required-email" className="text-gray-700">
            Address
          </label>
          <input
            type="text"
            id="height"
            disabled={true}
            value={data?.data?.match_data?.data?.address}
            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
            name="height"
          />
        </div>
        {/*  */}

        {/*  */}
        <div className="  ">
          <label htmlFor="required-email" className="text-gray-700">
            Scorekeeper
          </label>
          <input
            type="text"
            id="height"
            disabled={true}
            value={data?.data?.match_data?.data?.scorekeeper?.name}
            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
            name="height"
          />
        </div>
        {/*  */}
      </div>
    </div>
  );
}
