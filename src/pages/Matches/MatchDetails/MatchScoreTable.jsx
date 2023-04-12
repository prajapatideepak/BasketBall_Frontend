import React from "react";

export default function MatchScoreTable({ data }) {
  return (
    <div id="scoretable" className=" mx-auto text-center">
      {(data?.data?.match_data?.data?.status == 2 ||
        data?.data?.match_data?.data?.status == 3) && (
        <div className="flex flex-col md:my-8">
          <div className="overflow-x-auto bg-white md:rounded-lg shadow overflow-y-auto relative">
            <table className="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
              <thead>
                <tr className="text-left">
                  <th
                    className="py-2 px-3 sticky top-0 bg-gray-800 text-white"
                    rowSpan="2"
                  >
                    Quarter
                  </th>
                  <th
                    className="py-2 px-3 sticky top-0 bg-gray-800 text-white"
                    colSpan="2"
                  >
                    <div className="flex items-center justify-center">
                      <div className="h-4 w-4 rounded-full bg-orange-500 mr-2"></div>
                      {data?.data?.match_data?.data?.team_1.team_name}
                    </div>
                  </th>
                  <th
                    className="py-2 px-3 sticky top-0 bg-gray-800 text-white"
                    colSpan="2"
                  >
                    <div className="flex items-center justify-center">
                      <div className="h-4 w-4 rounded-full bg-blue-500 mr-2"></div>
                      {data?.data?.match_data?.data?.team_2.team_name}
                    </div>
                  </th>
                  <th
                    className="py-2 px-3 sticky top-0 bg-gray-800 text-white"
                    rowSpan="2"
                  >
                    Winner
                  </th>
                </tr>
                <tr>
                  <th className="bg-gray-700 text-white px-3 py-2 font-medium tracking-wide">
                    Fouls
                  </th>
                  <th className="bg-gray-700 text-white px-3 py-2 font-medium tracking-wide">
                    Points
                  </th>
                  <th className="bg-gray-700 text-white px-3 py-2 font-medium tracking-wide">
                    Fouls
                  </th>
                  <th className="bg-gray-700 text-white px-3 py-2 font-medium tracking-wide">
                    Points
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.match_data?.all_quarters?.map((q) => {
                  return (
                    <tr key={q?.id}>
                      <td className="border-t px-3 py-2">
                        {q?.quarter_number}
                      </td>
                      <td className="border-t px-3 py-2 sm:text-sm lg:text-base">
                        {q?.team_1_fouls}
                      </td>
                      <td className="border-t px-3 py-2 sm:text-sm lg:text-base">
                        {q?.team_1_points}
                      </td>
                      <td className="border-t px-3 py-2 sm:text-sm lg:text-base">
                        {q?.team_2_fouls}
                      </td>
                      <td className="border-t px-3 py-2 sm:text-sm lg:text-base">
                        {q?.team_2_points}
                      </td>
                      <td className="border-t px-3 py-2 sm:text-sm lg:text-base">
                        {q?.status !== 0 ? (
                          "--"
                        ) : (
                          <div className="flex items-center  justify-center">
                            <div
                              className={`h-4 w-4 rounded-full bg-${
                                q?.won_by_team_id ==
                                data?.data?.match_data?.data?.team_1.id
                                  ? "orange"
                                  : "blue"
                              }-500 mr-2`}
                            ></div>
                            {q?.won_by_team_id ==
                            data?.data?.match_data?.data?.team_1.id
                              ? data?.data?.match_data?.data?.team_1.team_name
                              : data?.data?.match_data?.data?.team_2.team_name}
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
