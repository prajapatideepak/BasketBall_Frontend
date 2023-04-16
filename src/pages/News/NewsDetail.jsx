import React from "react";
import { useParams } from "react-router-dom";
import { WhatsappIcon } from "react-share";
import { WhatsappShareButton } from "react-share";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useGetNewsDetailsQuery } from "../../services/news";
import moment from 'moment'


const newsDetail = [
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
];

const   NewsDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { data, isLoading, error } = useGetNewsDetailsQuery(params.id);

  const news = newsDetail.find((n) => {
    return n.id == params.id;
  });

  let tags = data?.oneNewsDetails?.tags?.split(",");

  return (
    <div className="flex justify-center min-h-screen ">
      <div className=" lg:px-28 py-8 lg:w-5/4 ">
        <div className="flex justify-end">
          <button
            onClick={(e) => navigate(-1)}
            className={
              "px-4  font-bold bg-black rounded-xl hover:scale-110 duration-200 hover:bg-orange-600 text-white flex justify-center items-center space-x-2 text-lg py-1"
            }
          >
            {" "}
            <BiArrowBack /> <span className="text-sm"> Go back </span>
          </button>
        </div>
        <div className=" px-12 py-4 space-y-3 ">
          <h1 className="text-2xl  lg:text-5xl ">{data?.oneNewsDetails?.title}</h1>
          <div className="flex  pt-4 space-x-3 text-xs font-bold uppercase italic">
            {tags?.map((tag) => (
              <span className="bg-orange-600 px-3 text-white  rounded ">
                {tag}{" "}
              </span>
            ))}
            <span className="text-right">{moment(data?.oneNewsDetails).format('DD / MM / YY')}</span>
          </div>
          <img className="mx-auto rounded  font-sans" src={data?.oneNewsDetails?.photo} />
          <p className=" text-sm md:text-base pt-4  ">{data?.oneNewsDetails?.description}</p>
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
