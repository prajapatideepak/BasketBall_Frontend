import React, { useState, useEffect } from "react";
import TeamCard from "../../../Component/TeamCard";
import Heading from "../../../Component/Heading";
import Paginate from "../../../Component/Pagination";
import { AiOutlineTeam, AiOutlineSearch } from "react-icons/ai";
import { useGetTeamListQuery } from "../../../services/team";

function TeamsList() {
  const [paginationData, setPaginationData] = React.useState([]);
  const [search, setSearch] = React.useState("");

  const rojki = useGetTeamListQuery({ pageNo: 0, search });
  const { isLoading, data } = rojki;
  console.log(data);

  return (
    <section className="min-h-screen">
      <div className="mx-auto px-10 py-12 sm:px-20 sm:py-12 md:px-20 md:py-16 lg:px-24 xl:px-28 2xl:px-32">
        <Heading text="All Teams" />
        <div className="flex m-5  justify-center ">
          <input
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
            className=" rounded-lg w-full lg:w-2/3 rounded-r-none  appearance-none border border-gray-400 border-r-0 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:shadow-2xl duration-300 text-base focus:outline-none  "
            name="search"
            placeholder="Search Team"
          />
          <button className="text-2xl rounded-lg border rounded-l-none border-[#ee6730] border-l-0 bg-[#ee6730]  hover:bg-gray-800 group text-white px-2 shadow-2xl ">
            <AiOutlineSearch className="group-hover:scale-110 duration-300" />
          </button>
        </div>
        {data?.data && data?.data.length > 0 ? (
          data?.data.map((team) => {
            console.log(team);
            return <TeamCard key={team?.id} teamDetails={team} />;
          })
        ) : (
          <div className="flex justify-center items-center mt-16 md:mt-24">
            {!isLoading && (
              <AiOutlineTeam className="text-2xl xs:text-3xl sm:text-5xl text-gray-400 mr-2" />
            )}
            <p className="text-xs xs:text-sm sm:text-lg font-medium text-gray-400">
              {isLoading ? <div>Loading .....</div> : "Team Not Found"}
            </p>
          </div>
        )}

        <Paginate data={data?.data} setPaginationData={setPaginationData} />
      </div>
    </section>
  );
}

export default TeamsList;
