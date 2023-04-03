import React, { useState, useEffect } from "react";
import TeamCard from "../../../Component/TeamCard";
import Heading from "../../../Component/Heading";
import Paginate from "../../../Component/Pagination";
import {
  AiOutlineTeam,
  AiOutlineSearch,
  AiOutlineBackward,
} from "react-icons/ai";
import { useGetTeamListQuery } from "../../../services/team";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function TeamsList() {
  const [search, setSearch] = React.useState("");
  const [pageNo, setPageNo] = React.useState(1);

  const { isLoading, data } = useGetTeamListQuery({
    pageNo: pageNo - 1,
    search,
  });
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
            return <TeamCard key={team?.id} teamDetails={team} />;
          })
        ) : (
          <div className="flex justify-center items-center mt-16 md:mt-24">
            {!isLoading && (
              <AiOutlineTeam className="text-2xl xs:text-3xl sm:text-5xl text-gray-400 mr-2" />
            )}
            <p className="text-xs xs:text-sm sm:text-lg font-medium text-gray-400">
              {isLoading ? <span>Loading .....</span> : "Team Not Found"}
            </p>
          </div>
        )}

        <div className="flex  justify-center items-center text-gray-400 py-5 space-x-2 mt-5 text-sm">
          <button
            onClick={(e) => {
              setPageNo(() => pageNo - 1);
            }}
            disabled={pageNo == 1}
            className="cursor-pointer disabled:cursor-default disabled:opacity-30 p-2 border rounded border-gray-400"
          >
            <IoIosArrowBack />
          </button>
          <div className="cursor-pointer px-4 py-1  border rounded bg-[#ee6730] text-base text-white shadow-xl">
            {" "}
            {pageNo}
          </div>
          <button
            onClick={(e) => {
              setPageNo(() => pageNo + 1);
            }}
            disabled={data?.data.length < 5}
            className="cursor-pointer disabled:opacity-30 disabled:cursor-default p-2 border rounded border-gray-400"
          >
            {" "}
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
}

export default TeamsList;
