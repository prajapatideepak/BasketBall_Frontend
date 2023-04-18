import React from "react";
import NewsCard from "../../Component/News/NewsCard";
import { GiBasketballBall } from "react-icons/gi";
import Loader from "../../Component/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getNewsData } from "../../redux/actions/News";
import Heading from "../../Component/Heading";
import { useGetAllNewsQuery } from "../../services/news";
import { BsFillCameraReelsFill } from "react-icons/bs"


const NewsPage = () => {
  const dispatch = useDispatch();
  const { NewsList } = useSelector((state) => state.news);
  const news = useGetAllNewsQuery();
  console.log(news?.data?.AllNews)
  React.useEffect(() => {
    dispatch(getNewsData());
  }, []);

  return (
    <div className="min-h-screen  md:px-8 py-5">

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
        {news.isLoading ?
          <Loader />
          :
          news?.data?.AllNews?.length < 1 ?
            <div className='flex justify-center items-center w-full py-5 mt-48'>
              <BsFillCameraReelsFill className=" text-2xl sm:text-3xl md:text-4xl text-gray-400 mr-2" />
              <p className='text-xs xs:text-sm sm:text-lg lg:text-xl font-medium text-gray-400'>News not found</p>
            </div>
            :
            <div className="mx-6 lg:mx-12 pt-5">
              <div className="lg:grid space-y-5 grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8     ">
                <div className="w-full col-span-3 row-span-1 h-full">
                  <NewsCard news={news?.data?.AllNews?.[0]} />
                </div>
                <div className=" col-span-1   flex  justify-start flex-col space-y-3">
                  <h1 className="hidden lg:block px-2 font-bold text-center text-2xl">
                    {" "}
                    Latest Update
                  </h1>
                  <div className="flex flex-col space-y-3 ">
                    <NewsCard key={1} small={true} news={news?.data?.AllNews?.[1]} />
                    {
                      news?.data?.AllNews?.length >= 3 &&
                      <NewsCard key={3} small={true} news={news?.data?.AllNews?.[2]} />
                    }
                  </div>
                </div>
              </div>
              <div className="grid py-3 grid-cols-1   lg:grid-cols-3 gap-8">

                {news?.data?.AllNews?.length > 3 && news?.data?.AllNews?.map((m, i) => {
                  if (i < news?.data?.AllNews?.length - 3)
                    return <NewsCard news={news?.data?.AllNews[i + 3]} />;
                  else return;
                })}
              </div>
            </div>
        }
      </div>
    </div>
  );
};

export default NewsPage;
