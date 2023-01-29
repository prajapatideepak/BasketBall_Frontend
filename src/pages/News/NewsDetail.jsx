import React from "react";
import { useParams } from "react-router-dom";
import { newsDetail } from "./NewsPage.jsx";
// import { WhatsappIcon } from "react-share";
// import { WhatsappShareButton } from "react-share";
import {useNavigate} from "react-router-dom"
import {BiArrowBack} from "react-icons/bi"
const NewsDetail = () => {
    const navigate = useNavigate()
  console.log(newsDetail);
  const params = useParams();
  console.log(params);

  const news = newsDetail.find((n) => {
    return n.id == params.id;
  });

  let tags = news?.tags?.split(",");

  return (
    <div className="flex justify-center min-h-screen ">
      <div className=" lg:px-28 py-20 lg:w-5/4 ">
        <div className="flex justify-end">
          <button onClick={e=> navigate(-1)} className={"px-4  font-bold bg-black rounded-xl hover:scale-110 duration-200 hover:bg-orange-600 text-white flex justify-center items-center space-x-2 text-lg py-1"}> <BiArrowBack /> <span className="text-sm"> Go back </span></button>
        </div>
        <div className=" px-12 py-4 space-y-3 ">
          <h1 className="text-2xl  lg:text-5xl ">{news?.title}</h1>
          <div className="flex  pt-4 space-x-3 text-xs font-bold uppercase italic">
            {tags.map((tag) => (
              <span className="bg-orange-600 px-3 text-white  rounded ">
                {tag}{" "}
              </span>
            ))}
            <span className="text-right">{news.date}</span>
          </div>
          <img className="mx-auto rounded  font-sans" src={news.image} />
          <p className=" text-sm md:text-base pt-4  ">{news.description}</p>
          <div className=" flex justify-end items-center space-x-2">
            <span className="italic font-semibold text-lg"> Share on</span>
            <WhatsappShareButton
              className=""
              separator=""
              url={`http://localhost:5173/news/${params.id}/${params.title}`}
              quote={"nothing "}
            >
              <WhatsappIcon
                className="animate-pulse w-10 lg:w-12 hover:w-16 duration-300"
                round={true}
              />
            </WhatsappShareButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
