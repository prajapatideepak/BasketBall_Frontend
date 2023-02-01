import React from "react";
import NewsCard from "../../Component/News/NewsCard";
import { GiBasketballBall } from "react-icons/gi";
import Loader from "../../Component/Loader";
import { useDispatch, useSelector } from "react-redux";
import { GetNewsData } from "../../redux/actions/News";
import { setNews } from "../../redux/slices/newsSlice";

const NewsPage = () => {
  const dispatch = useDispatch();

  const { NewsList } = useSelector((state) => state.newsReducer);

  const defaultArray = [1, 2, 3, 4];
  const [loader, setloader] = React.useState(true);
  const path = [];

  React.useEffect(() => {
    dispatch(
      setNews([
        {
          id: 1,
          title: "Wellbenix created amazing web application for basketball",
          priority: 2,
          tags: "CBL, wellebnix , work",
          date: "22/3/21",
          image: "/CBL_Images/7xm.xyz928823.webp",
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione porro dolor aspernatur esse assumenda, nisi dolorum labore eos repellendus, alias tenetur. Iure placeat eveniet necessitatibus similique ducimus cumque veritatis. Vero.",
        },

        {
          id: 4,
          title: "Monu created amazing web application for basketball",
          priority: 2,
          tags: "CBL, wellebnix , work",
          date: "22/3/21",
          image: "/CBL_Images/7xm.xyz946052.webp",

          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione porro dolor aspernatur esse assumenda, nisi dolorum labore eos repellendus, alias tenetur. Iure placeat eveniet necessitatibus similique ducimus cumque veritatis. Vero.",
        },
        {
          id: 5,
          title: "Shad created amazing web application for basketball",
          priority: 2,
          tags: "CBL, wellebnix , work",
          date: "22/3/21",
          image: "/CBL_Images/7xm.xyz851458.webp",

          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione porro dolor aspernatur esse assumenda, nisi dolorum labore eos repellendus, alias tenetur. Iure placeat eveniet necessitatibus similique ducimus cumque veritatis. Vero.",
        },
        {
          id: 6,
          title: "Sadik created amazing web application for basketball",
          priority: 2,
          tags: "CBL, wellebnix , work",
          date: "22/3/21",
          image: "/CBL_Images/landeeng.webp",

          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione porro dolor aspernatur esse assumenda, nisi dolorum labore eos repellendus, alias tenetur. Iure placeat eveniet necessitatibus similique ducimus cumque veritatis. Vero.",
        },
        {
          id: 7,
          title: "Deepak created amazing web application for basketball",
          priority: 2,
          tags: "CBL, wellebnix , work",
          date: "22/3/21",
          image: "/CBL_Images/Screenshot (50).png",

          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione porro dolor aspernatur esse assumenda, nisi dolorum labore eos repellendus, alias tenetur. Iure placeat eveniet necessitatibus similique ducimus cumque veritatis. Vero.",
        },
        {
          id: 2,
          title: "LJ created amazing web application for basketball",
          priority: 2,
          tags: "CBL, wellebnix , work",
          date: "22/3/21",
          image: "/CBL_Images/7xm.xyz160722 (1).webp",
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione porro dolor aspernatur esse assumenda, nisi dolorum labore eos repellendus, alias tenetur. Iure placeat eveniet necessitatibus similique ducimus cumque veritatis. Vero.",
        },
        {
          id: 3,
          title: "Bhavin sir created amazing web application for basketball",
          priority: 2,
          tags: "CBL, wellebnix , work",
          date: "22/3/21",
          image: "/CBL_Images/7xm.xyz343615.webp",

          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione porro dolor aspernatur esse assumenda, nisi dolorum labore eos repellendus, alias tenetur. Iure placeat eveniet necessitatibus similique ducimus cumque veritatis. Vero.",
        },
      ])
    );
  }, []);
  return (
    <div className="min-h-screen  md:px-8 py-20">
      {NewsList?.length < 1 ? (
        <Loader />
      ) : (
        <>
          <div className="flex   justify-center items-center text-[#ee6730] p-2 space-x-3 text-3xl">
            <h1 className="text-black text-4xl "> News</h1>
            <GiBasketballBall className="animate-bounce	 text-[#ee6730] " />
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
