import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { BsFillPlayFill } from 'react-icons/bs';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import moment from 'moment'



function MatchLive({ slides }) {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [count, setcount] = useState(0);
  const length = slides?.length
  const [progressBar, setProgressBar] = useState(0);

  const autoScroll = true
  let slideInterval;
  let intervalTime = 5000

  // const prevSlide = () => {
  //   const isFirstSlide = currentIndex === 0;
  //   const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
  //   setCurrentIndex(newIndex);
  // };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides?.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setProgressBar(0)
    setCurrentIndex(newIndex);
  };


  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime)
  }
  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval)
  }, [currentIndex])

  useEffect(() => {
    setInterval(() => { setProgressBar((value) => (value + 1) % 67) }, 125)
  }, [])

  const goToSlide = (slideIndex) => {
    setProgressBar(0)
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='h-full w-full '>
      <div className='h-[240px] sm:h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px] relative overflow-hidden'>
        {slides?.map((item, index) => {
          return (
            <div className={index === currentIndex ? 'slide active ' : 'slide'}
              key={index}>
              {index === currentIndex && (
                <img src='../../CBL_Images/background4.webp' alt="" className=' w-full h-[240px] sm:h-full md:h-[400px] lg:h-[450px]  xl:h-full bg-cover bg-center' />
              )}
              {index == currentIndex && (
                <div className='bg-gradient-to-t from-black absolute h-[240px] sm:h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px] top-0 min-w-full   '>
                  <div className='flex flex-col justify-start items-start h-full w-full px-10 sm:px-16 mt-2 sm:mt-5 md:mt-8 lg:mt-10 lg:px-32 xl:mt-16 2xl:mt-20 py-2'>
                    {
                      item.status == 1
                        ?
                        <div className='bg-green-600 flex items-center pr-2 py-[2px] lg:py-[3px] px-2 rounded-md text-white  '>
                          <p className='font-semibold text-[10px] sm:text-[12px] lg:text-sm'>Scheduled</p>
                        </div>
                        :
                        item.status == 2
                          ?
                          <div className='bg-red-600 flex items-center pr-2 py-[2px] lg:py-[3px] px-2 rounded-md text-white lg:mb-2 '>
                            <RxDotFilled className='lg:mt-1 text-sm' />
                            <p className='font-semibold text-[10px] sm:text-[12px] lg:text-sm'>LIVE</p>
                          </div>
                          :
                          <div className='bg-black flex items-center pr-2 py-[2px] lg:py-[3px] px-2 rounded-md text-white lg:mb-2 '>
                            <p className='font-semibold text-[10px] sm:text-[12px] lg:text-sm'>Finished</p>
                          </div>
                    }
                    <div className='flex items-start flex-col py-2 lg:py-3'>
                      <div className='flex items-center space-x-2'>
                        <p className='text-white text-[15px]'>
                          {
                            item.start_date ?

                              moment(item?.start_date).format('DD / MM / YY')
                               :
                              "Comming Soon"
                          }
                          <span className='ml-1'>
                            -  Munday
                          </span> ,
                        </p>
                        <p className='text-black font-bold text-[15px]'>
                          {item?.start_time ? item?.start_time : ""}
                        </p>
                      </div>
                      <p className='text-white font-bold text-sm sm:text-[15px] lg:text-lg'>{item?.tournaments?.tournament_name}</p>
                    </div>
                    <div className='flex flex-col items-center text-white lg:gap-3 lg:py-2'>
                      <div className="t_1  flex  justify-start w-full items-center gap-2 ">
                        <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-20 lg:w-16 lg:h-16  xl:w-[80px] xl:h-[80px]">
                          <img src={item?.team_1?.logo} className="object-contain h-full w-full rounded-full " alt="" />
                        </div>
                        <h1 className='text-white font-extrabold text-xs sm:text-lg xl:text-4xl 2xl:text-[42px] text-center uppercase'>{item?.team_1?.team_name}</h1>
                      </div>
                      <div className="t_1  flex  justify-start w-full items-center gap-2 ">
                        <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-20 lg:w-16 lg:h-16  xl:w-[80px] xl:h-[80px]">
                          <img src={item?.team_2?.logo} className="object-contain h-full w-full rounded-full " alt="" />
                        </div>
                        <h1 className='text-white font-extrabold text-xs sm:text-lg xl:text-4xl 2xl:text-[42px] text-center uppercase'>{item?.team_2?.team_name}</h1>
                      </div>

                    </div>
                    {
                      item.status == 1
                        ?
                        null
                        :
                        item.status == 2
                          ?
                          <button
                            onClick={() => navigate(`/match/${item.id}`)}
                            className='bg-[#ff5000] my-2 text-white duration-300 xl:my-5 flex gap-1 items-center  rounded-lg font-medium hover:bg-white hover:text-[#ee6730] lg:px-20 lg:py-1 sm:px-10 sm:py-[6px] py-1 md:py-2 md:px-12 xl:py-[7px] px-3'>
                            <BsFillPlayFill className='lg:text-2xl' />
                            <h1 className='text-xs xl:text-[14px]'>Watch</h1>
                          </button>
                          :
                          <button
                            onClick={() => navigate(`/match/${item.id}`)}
                            className='bg-[#ff5000] my-2 text-white duration-300 xl:my-5 flex gap-1 items-center  rounded-lg font-medium hover:bg-white hover:text-[#ee6730] lg:px-20 lg:py-2 sm:px-10 sm:py-[6px] py-1 md:py-2 md:px-12 xl:py-[10px] px-3'>
                            <h1 className='text-xs xl:text-[14px]'>Highlights</h1>
                          </button>
                    }
                  </div>
                </div>
              )}
            </div>
          )
        })}

        {
          slides?.length > 0
            ?
            (
              // <div className='flex  absolute bottom-3 sm:bottom-4 2xl:bottom-10 lg:space-x-8 space-x-7 left-[33%] sm:left-[37%] lg:left-[25%] xl:left-[26%] 2xl:left-[30%]  lg:px-40 '>
              //   {slides.map((slide, slideIndex) => (
              //     <div
              //       key={slideIndex}
              //       onClick={() => goToSlide(slideIndex)}
              //       className={slideIndex === currentIndex ? ' text-white lg:border-4 border-2  h-8 w-8 lg:w-12 lg:h-12 border-[#ee6630] rounded-full flex cursor-pointer justify-center items-center hover:text-[#ee6730] duration-300 ' : ' text-gray-500 h-8 w-8  lg:w-12 lg:h-12 flex border-none justify-center items-center hover:text-[#ee6730] cursor-pointer duration-300 font-bold'}
              //     >
              //       {slideIndex + 1}
              //     </div>
              //   ))}
              // </div>
              <div
                className="flex absolute bottom-3 sm:bottom-4 2xl:bottom-10 lg:space-x-6 space-x-5 left-[33%] sm:left-[37%] lg:left-[25%] xl:left-[26%] 2xl:left-[30%]  lg:px-40 "
              >
                {
                  slides.map((slide, slideIndex) => {
                    return (
                      <div key={slideIndex} className="relative cursor-pointer" onClick={() => goToSlide(slideIndex)}>
                        <svg className="w-12 h-12 relative rotate-[-90deg]">
                          <circle
                            className="text-gray-500"
                            strokeWidth="3"
                            stroke="currentColor"
                            fill="transparent"
                            r="18"
                            cx="25"
                            cy="25"
                          />
                          <circle
                            className={`${slideIndex === currentIndex ? 'text-[#ee6730]' : 'text-gray-500'} transition-all`}
                            strokeWidth="3"
                            strokeDasharray={30 * 2 * Math.PI}
                            strokeDashoffset={(30 * 2 * Math.PI) - progressBar / 100 * (30 * 2 * Math.PI)}
                            strokeLinecap="round"
                            stroke="currentColor"
                            fill="transparent"
                            r="18"
                            cx="25"
                            cy="25"
                          />
                        </svg>
                        <span className="w-10 absolute text-lg text-white top-2 left-1.5 text-center">{slideIndex + 1}</span>
                      </div>
                    )
                  })
                }
              </div>

            )
            :
            null
        }

      </div>
    </div>
  );
}

export default MatchLive;


