import React from "react";
import NewsCard from "../../Component/News/NewsCard";
import { GiBasketballBall } from "react-icons/gi";
import Loader from "../../Component/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getNewsData } from "../../redux/actions/News";
import Heading from "../../Component/Heading";

const NewsPage = () => {
  const dispatch = useDispatch();
  const { NewsList } = useSelector((state) => state.newsReducer);

  React.useEffect(() => {
    dispatch(getNewsData());
  }, []);

  return (
    <div className="min-h-screen  md:px-8 py-5">
      {NewsList?.length < 1 ? (
        <Loader />
      ) : (
        <>
          <div className="flex  justify-center items-center text-[#ee6730] p-2 space-x-3 text-3xl">
            {/* <h1 className="text-black text-4xl "> News</h1> */}
            <Heading
              text={"News"}
              className={"text-3xl  md:text-4xl px-8 py-1"}
              margin={true}
            />
            {/* <GiBasketballBall className="animate-bounce	 text-[#ee6730] " /> */}
          </div>
          <div className="mx-6 lg:mx-12 pt-5">
            <div className="lg:grid space-y-5 grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8     ">
              <div className="w-full col-span-3 row-span-1 h-full">
                <NewsCard news={NewsList?.[0]} />
              </div>
              <div className=" col-span-1   flex  justify-start flex-col space-y-3">
                <h1 className="hidden lg:block px-2 font-bold text-center text-2xl">
                  {" "}
                  Latest Update
                </h1>
                <div className="flex flex-col space-y-3 ">
                  <NewsCard key={1} small={true} news={NewsList?.[1]} />

                  <NewsCard key={3} small={true} news={NewsList?.[2]} />
                </div>
              </div>
            </div>
            <div className="grid py-3 grid-cols-1   lg:grid-cols-3 gap-8">
              {NewsList?.map((m, i) => {
                if (i < NewsList.length - 3)
                  return <NewsCard news={NewsList[i + 3]} />;
                else return;
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NewsPage;
