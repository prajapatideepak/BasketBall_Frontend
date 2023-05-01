

import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'
import moment from 'moment'


function News_cards({ news }) {
    let tags = news?.tags?.split(",");
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/news/${news?.id}/${news.title.split(" ").join("-")}`)
    }
    const prevSlide = () => {
        var news = document.getElementById("news")
        news.scrollLeft = news.scrollLeft - 360;
    };

    const nextSlide = () => {
        var news = document.getElementById("news")
        news.scrollLeft = news.scrollLeft + 380;
    };


    return (
        <>
            <div onClick={handleClick}
                className="relative min-w-[260px] hover:scale-110  duration-300 xs:min-w-[320px] rounded-lg sm:min-w-[350px] md:min-w-[330px] max-w-[300px] h-[200px] md:h-[195px] 
         group ">
                <div className="absolute cursor-pointer w-full h-full  shadow-lg flex flex-col justify-center items-center  overflow-hidden " >
                    <img src={news.photo} alt="" className=' bg-cover bg-center h-full w-full rounded-lg' />
                    <div className='bg-gradient-to-b from-black/60 group-hover:from-black/40 duration-300  h-full w-full roulg absolute'>
                        <div className='bg-gradient-to-r from-black absolute bottom-0 w-full py-3 space-y-1 '>
                            <div className='flex justify-start items-center gap-4 px-4 '>
                                <h1 className='text-white font-semibold text-base'>
                                {news.title}
                                </h1>
                            </div>
                            <div className='px-4 space-y-2 py-1'>
                                {tags?.map((tag, index) => (
                                    <span key={index} className="bg-orange-600 px-3 font-semibold text-white text-sm rounded ">{tag} </span>
                                ))}
                                <p className='text-xs text-[#ee6730] font-semibold'>
                                    {moment(news.created_at).format('DD / MM / YY')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* Left Arrow  */}
            <div onClick={prevSlide}
                className="justify-center hidden lg:block absolute left-2 bottom-[40%] active:scale-90 hover:bg-black duration-300 group items-center p-2 bg-white  text-black shadow-xl  rounded-full cursor-pointer">
                <FaChevronLeft
                    className="text-lg group-hover:text-white" />
            </div>
            {/* Right Arrow  */}
            <div onClick={nextSlide}
                className="justify-center hidden lg:block absolute bottom-[40%] right-2 active:scale-90 hover:bg-black duration-300 group items-center p-2 bg-white  text-black shadow-xl  rounded-full cursor-pointer">
                <FaChevronRight
                    className="text-lg group-hover:text-white" />
            </div>
        </>
    )
}

export default News_cards
