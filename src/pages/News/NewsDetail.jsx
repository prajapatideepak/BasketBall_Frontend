import React from 'react';
import {useParams} from "react-router-dom"
import {newsDetail} from "./NewsPage.jsx"

const NewsDetail = () => {

    console.log(newsDetail)
      const params = useParams();
      console.log(params.id)

const news =  newsDetail.find((n)=>{
    return n.id == params.id
})

console.log(news)


    return (
        <div className='flex justify-center min-h-screen '>
            <div className='px-28 py-20 w-5/4'>
                <div className='p-2'>
                    <h1 className='text-5xl '>{news?.title}</h1>
                    <img className='mx-auto p-12 font-serif' src={news.image} />
                </div>

            </div>
        </div>
    );
}

export default NewsDetail;
