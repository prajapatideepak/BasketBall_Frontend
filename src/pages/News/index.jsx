import React from "react";
import NewsCard from "../../Component/News/NewsCard";
import { GiBasketballBall } from "react-icons/gi";
import Loader from "../../Component/Loader/Loader";
const News = () => {
  const defaultArray = [1, 2, 3, 4];
  const [loader, setloader] = React.useState(true);
const path=["/CBL_Images/7xm.xyz343615.webp" ,"/CBL_Images/landeeng.webp","/CBL_Images/7xm.xyz851458.webp","/CBL_Images/7xm.xyz946052.webp","/CBL_Images/7xm.xyz343615.webp","/CBL_Images/7xm.xyz160722 (1).webp","/CBL_Images/7xm.xyz928823.webp"]

  React.useEffect(() => {
    setTimeout(() => {
      setloader(() => false);
    }, 300);
  }, []);
  return (
    <div className="min-h-screen  md:px-8 py-20">
      {loader ? (
        <Loader />
      ) : (
        <>
          <div className="flex  relative justify-center items-center text-[#ee6730] p-2 space-x-3 font-bold text-3xl">
            <h1 className="text-black text-4xl "> News</h1>
            <GiBasketballBall className="animate-bounce	 text-[#ee6730] " />
          </div>
          <div className="mx-6 lg:mx-12 pt-5">
            <div className="lg:grid space-y-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5     ">
              <div className="w-full col-span-3 row-span-2 h-full">
                <NewsCard path={path[0]} />
              </div>
              <div className=" col-span-1 md:row-span-2   flex  justify-center flex-col space-y-3">
                <h1 className="hidden lg:block px-2 font-bold text-center text-2xl"> Latest Update</h1>
                <NewsCard small={true} path={path[1]} />
                <NewsCard small={true} path={path[2]} />
              </div>
            </div>
            <div className="grid py-3 grid-cols-1   lg:grid-cols-2 gap-5">
              {defaultArray.map((m,i) => {
                return <NewsCard path={path[i+3]} />;
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default News;
