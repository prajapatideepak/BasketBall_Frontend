import { setNews, getNewsDetail } from "../slices/newsSlice";
// import { useDispatch } from "react-redux";

export const GetNewsData = () => {
  return async (dispatch) => {
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

    dispatch(setNews(newsDetail));
  };
};
