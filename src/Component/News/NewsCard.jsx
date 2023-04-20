import React from "react";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
import moment from 'moment'


export default function NewsCard(news) {
  console.log(news, "skjdvn")
  let tags = news?.news?.tags?.split(",");
  return (
    <div className="w-full cursor-pointer relative shadow-2xl rounded  ">
      <Link
        className="Link"
        to={`/news/${news?.news?.id}/${news?.news?.title.split(" ").join("-")}`}
      >
        <div className="w-full ">
          <LazyLoad placeholder={<Deepak />} once>
            <img className=" rounded-2xl" src={news?.news?.photo} />
          </LazyLoad>
        </div>
        <div
          className={`absolute overflow-hidden  rounded-b-2xl flex flex-col  space-y-0 md:space-y-0 justify-end w-full  bottom-0  left-0 text-white bg-gradient-to-l hover:h-full  from-transparent via-black  to-gray-900 px-2  py-2 ${news.small ? "lg:px-2 lg:pt-1" : "lg:px-8 lg:pt-4"
            } pb-2 opacity-90 hover:opacity-100  duration-500 transition`}>

          <div className="py-1 lg:pt-3 leading-relaxed">
            <h1
              className={`text-sm md:text-lg  ${news.small ? "lg:text-sm" : "lg:text-lg"
                }  font-bold opacity-100 `}
            >
              {news?.news?.title}
            </h1>
          </div>
          <div className="flex overflow-hidden space-x-2 py-2 lg:space-x-4 italic items-center uppercase text-xs font-bold ">
            <div className="flex space-x-2">
              {tags?.map((tag) => (
                <span className="bg-orange-600 px-3  rounded ">{tag} </span>
              ))}
            </div>
            <span className=" text-orange-600 text-normal font-bold ">

              {moment(news?.news?.created_at).format('DD / MM / YY')}

            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
const Deepak = () => {
  return (
    <div className="bg-gray-700 rounded-2xl animate-pulse  h-60 ">
      {/* <img src="/CBL_Images/cbl.webp" className="w-full h-full" /> */}
      <h1 className="opacity-0 ">
        qui saepe odio tempore magnam incidunt? Voluptatum placeat quas dolorem?
        Quia recusandae harum quisquam esse, quos impedit vel neque provident
        placeat accusantium et, repellendus amet.
      </h1>
    </div>
  );
};
