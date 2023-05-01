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
        <div className="xs:py-10 py-10">
          <h1 className="xs:text-5xl text-6xl  text-center font-bold  italic uppercase text-[#ee6730]  ">News</h1>
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
              <div className="mx-auto px-20 sm:px-24  md:px-28 ">
                <div className="flex xs:flex-col lg:flex-row lg:space-y-0 lg:space-x-14 xs:space-x-0 xs:space-y-10 space-x-14">
                  <div className=" col-span-3 row-span-1 xl:w-[71%] xl:h-full ">
                    <NewsCard news={data?.AllNews?.[0]} />
                  </div>
                  <div className="flex flex-col lg:flex-row lg:space-y-0 xl:flex-col xl:space-y-5 space-y-5 xl:w-[29%]">
                    <h1 className="hidden xl:block px-2 font-bold text-center text-3xl italic underline ">
                      {" "}
                      Latest <span className="text-black">Update</span>
                    </h1>
                    <div className="flex flex-col lg:flex-row xl:flex-col xl:space-x-0 xl:space-y-14 lg:space-y-0 lg:space-x-10 space-y-6 ">
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
