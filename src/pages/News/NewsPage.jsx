import React from "react";
import NewsCard from "../../Component/News/NewsCard";
import Loader from "../../Component/Loader";
import { useDispatch } from "react-redux";
import { getNewsData } from "../../redux/actions/News";
import Heading from "../../Component/Heading";
import { useGetAllNewsQuery } from "../../services/news";
import { HiOutlineNewspaper } from "react-icons/hi"
import Pagination from 'react-responsive-pagination'
import '../../Component/Pagination/pagination.css'



const NewsPage = () => {
  const dispatch = useDispatch();
  const [pageNo, setPageNo] = React.useState(1);
  const { isLoading, data } = useGetAllNewsQuery({
    pageNo: pageNo - 1,
  });
  console.log(data)
  React.useEffect(() => {
    dispatch(getNewsData());
  }, []);




  return (
    <div className="min-h-screen">
      <div>
        <div className="flex  justify-center items-center text-[#ee6730] p-2 space-x-3 text-3xl">
          {/* <h1 className="text-black text-4xl "> News</h1> */}
          <Heading
            text={"News"}
            className={"text-3xl  md:text-4xl px-8 py-1"}
            margin={true}
          />
          {/* <GiBasketballBall className="animate-bounce	 text-[#ee6730] " /> */}
        </div>
        {
          isLoading ?
            <Loader />
            :
            data?.AllNews?.length < 1 ?
              <div className='flex justify-center items-center w-full py-5 mt-48'>
                <HiOutlineNewspaper className=" text-2xl sm:text-3xl md:text-4xl text-gray-400 mr-2" />
                <p className='text-xs xs:text-sm sm:text-lg lg:text-xl font-medium text-gray-400'>News not found</p>
              </div>
              :
              <div className="mx-auto px-20 py-12 sm:px-24 sm:py-12 md:px-28 md:py-16">
                <div className="lg:grid space-y-5 grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8     ">
                  <div className="w-full col-span-3 row-span-1 h-full">
                    <NewsCard news={data?.AllNews?.[0]} />
                  </div>
                  <div className=" col-span-1   flex  justify-start flex-col space-y-3">
                    <h1 className="hidden lg:block px-2 font-bold text-center text-2xl">
                      {" "}
                      Latest Update
                    </h1>
                    <div className="flex flex-col space-y-6 ">
                      <NewsCard key={1} small={true} news={data?.AllNews?.[1]} />
                      {
                        data?.AllNews?.length >= 3 &&
                        <NewsCard key={3} small={true} news={data?.AllNews?.[2]} />
                      }
                    </div>
                  </div>
                </div>
                <div className="grid py-3 grid-cols-1 lg:grid-cols-3 gap-12 mt-10">

                  {data?.AllNews?.length > 3 && data?.AllNews?.map((m, i) => {
                    if (i < data?.AllNews?.length - 3)
                      return <NewsCard news={data?.AllNews[i + 3]} />;
                    else return;
                  })}
                </div>
              </div>
        }


        <div className='mx-auto px-20 py-12 sm:px-24 sm:py-12 md:px-28 md:py-16'>
          <Pagination
            total={data && data.pageCount ? data.pageCount : 0}
            current={pageNo}
            onPageChange={(page) => setPageNo(page)}
          // previousLabel="Previous" nextLabel="Next"
          />
        </div>

      </div>
    </div>
  );
};

export default NewsPage;
