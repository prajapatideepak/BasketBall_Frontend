import React from "react";
import { GiBasketballBall } from "react-icons/gi";
import Heading from "../../Component/Heading";
import { useGetMatchListQuery } from "../../services/match";
import MatchCard from "../../Component/MatchCard";
import SmallLoader from "../../Component/SmallLoader";
import Pagination from 'react-responsive-pagination'
import '../../Component/Pagination/pagination.css'

function MatchList() {
  const [currentTab, setCurrentTab] = React.useState(1);
  const [pageNo, setPageNo] = React.useState(1);

  const data = useGetMatchListQuery({ pageNo: pageNo - 1, status: currentTab });
  console.log(data.data)
  return (
    <section className="min-h-screen-fit">
      <div className="xs:py-10 py-10 xl:py-14">
        <h1 className="xs:text-3xl sm:text-3xl md:text-4xl text-center font-bold  italic uppercase text-[#ee6730] ">All Matches</h1>
      </div>
      <div className="mx-auto px-10  sm:px-20  md:px-20  lg:px-24 xl:px-28 2xl:px-32">
        <div className="flex justify-center items-center">
          <div className="w-48 xs:w-72 sm:w-72 md:w-80 p-1 rounded-full flex justify-around items-center bg-black">
            <div
              className={`${currentTab == 2 ? "bg-[#ee6730]" : ""
                } group cursor-pointer w-full text-center p-1 rounded-full`}
              onClick={() => setCurrentTab(2)}
            >
              <h3
                className={`${currentTab == 2 ? "text-white" : "text-gray-300"
                  } group-hover:text-white font-semibold text-xs xs:text-sm md:text-base`}
              >
                Ongoing
              </h3>
            </div>
            <div
              className={`${currentTab == 1 ? "bg-[#ee6730]" : ""
                } group cursor-pointer w-full text-center mx-1.5 p-1 rounded-full`}
              onClick={() => setCurrentTab(1)}
            >
              <h3
                className={`${currentTab == 1 ? "text-white" : "text-gray-300"
                  } group-hover:text-white font-semibold text-xs xs:text-sm md:text-base`}
              >
                Upcoming
              </h3>
            </div>
            <div
              className={`${currentTab == 3 ? "bg-[#ee6730]" : ""
                } group cursor-pointer w-full text-center p-1 rounded-full`}
              onClick={() => setCurrentTab(3)}
            >
              <h3
                className={`${currentTab == 3 ? "text-white" : "text-gray-300"
                  } group-hover:text-white font-semibold text-xs xs:text-sm md:text-base`}
              >
                Past
              </h3>
            </div>
          </div>
        </div>
        {data.isFetching && (
          <div className="px-6 py-12 flex justify-center">
            <SmallLoader />
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


        <div className='mx-auto px-20 py-12 sm:px-24 sm:py-12 md:px-28 md:py-16'>
          <Pagination
            total={data.data && data.data.pageCount ? data.data.pageCount : 0}
            current={pageNo}
            onPageChange={(page) => setPageNo(page)}
          // previousLabel="Previous" nextLabel="Next"
          />
        </div>

      </div>
    </section>
  );
}

export default MatchList;
