import React from "react";
import { GiBasketballBall } from "react-icons/gi";
import Heading from "../../Component/Heading";
import { useGetMatchListQuery } from "../../services/match";
import MatchCard from "../../Component/MatchCard";
import SmallLoader from "../../Component/SmallLoader";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function MatchList() {
  const [currentTab, setCurrentTab] = React.useState(1);
  const [pageNo, setPageNo] = React.useState(0);

  const data = useGetMatchListQuery({ pageNo: pageNo, status: currentTab });

  return (
    <section className="min-h-screen-fit">
      <div className="mx-auto px-10 py-12 sm:px-20 sm:py-12 md:px-20 md:py-16 lg:px-24 xl:px-28 2xl:px-32">
        <Heading text="Matches" />
        <div className="flex justify-center items-center">
          <div className="w-48 xs:w-72 sm:w-72 md:w-80 p-1 rounded-full flex justify-around items-center bg-black">
            <div
              className={`${
                currentTab == 2 ? "bg-[#ee6730]" : ""
              } group cursor-pointer w-full text-center p-1 rounded-full`}
              onClick={() => setCurrentTab(2)}
            >
              <h3
                className={`${
                  currentTab == 2 ? "text-white" : "text-gray-300"
                } group-hover:text-white font-semibold text-xs xs:text-sm md:text-base`}
              >
                Ongoing
              </h3>
            </div>
            <div
              className={`${
                currentTab == 1 ? "bg-[#ee6730]" : ""
              } group cursor-pointer w-full text-center mx-1.5 p-1 rounded-full`}
              onClick={() => setCurrentTab(1)}
            >
              <h3
                className={`${
                  currentTab == 1 ? "text-white" : "text-gray-300"
                } group-hover:text-white font-semibold text-xs xs:text-sm md:text-base`}
              >
                Upcoming
              </h3>
            </div>
            <div
              className={`${
                currentTab == 3 ? "bg-[#ee6730]" : ""
              } group cursor-pointer w-full text-center p-1 rounded-full`}
              onClick={() => setCurrentTab(3)}
            >
              <h3
                className={`${
                  currentTab == 3 ? "text-white" : "text-gray-300"
                } group-hover:text-white font-semibold text-xs xs:text-sm md:text-base`}
              >
                Past
              </h3>
            </div>
          </div>
        </div>
        {data.isFetching && (
          <div className="px-6 py-12 flex justify-center">
            <SmallLoader/>
          </div>
        )}
        {!data.isFetching && data.isSuccess && (
          <div className="matches-container">
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12 mt-10 sm:mt-12 md:mt-16">
              {data?.data?.data.length > 0 ? (
                data?.data?.data.map((match, index) => {
                  return <MatchCard match={match} key={match?.id} />;
                })
              ) : (
                <div className="flex justify-center items-center mt-16 md:mt-24">
                  <GiBasketballBall className="text-2xl xs:text-3xl sm:text-5xl text-gray-400 mr-2" />
                  <p className="text-xs xs:text-sm sm:text-lg font-medium text-gray-400">
                    No Matches Found
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {data?.data?.data.length > 0 && (
          <div className="flex  justify-center items-center text-gray-400 py-5 space-x-2 mt-5 text-sm">
            <button
              onClick={(e) => {
                setPageNo(() => pageNo - 1);
              }}
              disabled={pageNo == 0}
              className="cursor-pointer disabled:cursor-default disabled:opacity-30 p-2 border rounded border-gray-400"
            >
              <IoIosArrowBack />
            </button>
            <div className="cursor-pointer px-4 py-1  border rounded bg-[#ee6730] text-base text-white shadow-xl">
              {" "}
              {pageNo + 1}
            </div>
            <button
              onClick={(e) => {
                setPageNo(() => pageNo + 1);
              }}
              disabled={data?.data?.data?.length < 5}
              className="cursor-pointer disabled:opacity-30 disabled:cursor-default p-2 border rounded border-gray-400"
            >
              {" "}
              <IoIosArrowForward />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default MatchList;
