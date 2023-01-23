import React from 'react';
import NewsCard from '../../Component/News/NewsCard';
import {GiBasketballBall} from "react-icons/gi"
const News = () => {
    return (
        <div className='min-h-screen '>
        <div className='flex relative justify-center items-center text-[#ee6730] p-2 space-x-3 font-bold text-3xl'>
            <h1 className=''> News</h1>
            <GiBasketballBall className="animate-bounce	 text-[#ee6730] " />
        </div>
            <div className='mx-12 pt-5'>

            <NewsCard />
            </div>
        </div>
    );
}

export default News;
