import React from "react";
import NewsCard from "../../Component/News/NewsCard";
import { GiBasketballBall } from "react-icons/gi";
const News = () => {
    const defaultArray = [1,2,3,4]
  return (
    <div className="min-h-screen  md:px-8 py-20">
      <div className="flex  relative justify-center items-center text-[#ee6730] p-2 space-x-3 font-bold text-3xl">
        <h1 className="text-black underline"> News</h1>
        <GiBasketballBall className="animate-bounce	 text-[#ee6730] " />
      </div>
      <div className="mx-6 lg:mx-12 pt-5">
        <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-4 space-y-4  items-center justify-center">
          <div className="w-full lg:w-2/3">
            <NewsCard />
          </div>
          <div className="flex-1 flex  flex-col space-y-3">
            <NewsCard />
            <NewsCard />
          </div>
        </div>
          <div className="grid py-3 grid-cols-1   lg:grid-cols-2 gap-5">
                {
                    defaultArray.map(()=>{
                        return  <NewsCard />        

                    })
                }
          </div>
      </div>
    </div>
  );
};

export default News;
