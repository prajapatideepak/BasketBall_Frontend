import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { BsFillPlayFill } from 'react-icons/bs';
import { useEffect } from 'react';



function MatchLive({ slides }) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [count, setcount] = useState(0);
  const length = slides.length
  const autoScroll = true
  let slideInterval;
  let intervalTime = 3000

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // function auto() {
  //   slideInterval = setInterval(nextSlide, intervalTime)
  // }
  // useEffect(() => {
  //   if (autoScroll) {
  //     auto();
  //   }
  //   return () => clearInterval(slideInterval)
  // }, [currentIndex])


  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='h-full w-full bg-yellow-600 relative'>
      {/* <div className='h-[261px] lg:h-[600px] relative flex justify-start items-start'> */}
        {slides.map((item, index) => {
          return (
            <div className={index === currentIndex ? 'slide active ' : 'slide'}
              key={index}>
              {index === currentIndex && (
                <img src={item.url} alt="" className=' w-full  h-[250px] lg:h-full bg-cover bg-center' />

              )}
              <div className='bg-gradient-to-t from-black absolute h-full lg:h-[750px] top-0 min-w-full   '>
                <div className='flex flex-col justify-center items-start h-full w-full px-10 sm:px-16 lg:px-32 lg:mt-16  py-2'>
                  {
                    item.is_live == 0
                      ?
                      <div className='bg-green-600 flex items-center pr-2 py-[2px] lg:py-[3px] px-2 rounded-md text-white  '>
                        <p className='font-semibold text-[10px] lg:text-sm'>Scheduled</p>
                      </div>
                      :
                      item.is_live == 1
                        ?
                        <div className='bg-red-600 flex items-center pr-2 py-[2px] lg:py-[3px] px-2 rounded-md text-white lg:mb-2 '>
                          <RxDotFilled className='lg:mt-1 text-sm' />
                          <p className='font-semibold text-[10px] lg:text-sm'>LIVE</p>
                        </div>
                        :
                        <div className='bg-black flex items-center pr-2 py-[2px] lg:py-[3px] px-2 rounded-md text-white lg:mb-2 '>
                          <p className='font-semibold text-[10px] lg:text-sm'>Finished</p>
                        </div>
                  }
                  <div className='flex items-start flex-col py-2 lg:py-3'>
                    <div className='flex items-center space-x-2'>
                      <p className='text-white text-[15px]'>{item.date} - <span>{item.day}</span> ,</p>
                      <p className='text-gray-400 text-[15px]'>{item.time}  </p>
                    </div>
                    <p className='text-white font-bold text-sm lg:text-lg'>{item.Tournament}</p>
                  </div>
                  <div className='flex flex-col items-center text-white lg:gap-3 lg:py-2'>
                    <div className="t_1  flex  justify-start w-full items-center gap-2 ">
                      <div className="w-8 h-8 md:w-[80px] md:h-[80px]">
                        <img src={item.Fisrt_Team_logo} className="object-contain h-full w-full rounded-full " alt="" />
                      </div>
                      <h1 className='text-white font-extrabold text-xs lg:text-4xl text-center uppercase'>{item.Fisrt_Team}</h1>
                    </div>
                    <div className="t_1  flex  justify-start w-full items-center gap-2 ">
                      <div className="w-8 h-8 md:w-[80px] md:h-[80px]">
                        <img src={item.Secount_Team_logo} className="object-contain h-full w-full rounded-full " alt="" />
                      </div>
                      <h1 className='text-white font-extrabold text-xs lg:text-4xl text-center uppercase'>{item.Secound_Team}</h1>
                    </div>

                  </div>
                  {
                    item.is_live == 0
                      ?
                      null
                      :
                      item.is_live == 1
                        ?
                        <button className='bg-[#ff5000] my-2 text-white duration-300  flex gap-1 items-center  rounded-lg font-medium hover:bg-white hover:text-[#ee6730] lg:px-20 sm:px-4 sm:py-1 py-1 lg:py-[10px] px-3'>
                          <BsFillPlayFill className='lg:text-2xl' />
                          <h1 className='text-xs'>Watch</h1>
                        </button>
                        :
                        <button className='bg-[#ff5000] text-xs my-2 text-white duration-300  flex gap-1 items-center  rounded-lg font-medium hover:bg-white hover:text-[#ee6730] lg:px-20 sm:px-4 sm:py-1 py-1 lg:py-[10px] px-3'>
                          Highlights
                        </button>
                  }
                </div>
              </div>
            </div>
          )
        })}

        {
          slides.length > 0
            ?
            (
              <div className='flex  absolute bottom-3  lg:bottom-10 lg:space-x-8 space-x-7 w-full h-full items-end justify-center lg:items-center lg:px-40 '>
                {slides.map((slide, slideIndex) => (
                  console.log(slide, "slide"),
                  <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className={slideIndex === currentIndex ? ' text-white lg:border-4  border-2 px-2  lg:w-12  lg:h-12 border-[#ee6630] rounded-full flex cursor-pointer justify-center items-center hover:text-[#ee6730] duration-300 ' : ' text-gray-500  lg:w-12 lg:h-12 flex border-none justify-center items-center hover:text-[#ee6730] cursor-pointer duration-300 font-bold'}
                  >
                    {slideIndex + 1}
                  </div>
                ))}
              </div>
            )
            :
            null
        }

      </div>
    // </div>
  );
}

export default MatchLive;






{/* Left Arrow */ }
{/* <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-4 text-2xl rounded-full p-2 bg-black/20 duration-300 hover:bg-black text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div> */}
{/* Right Arrow */ }
{/* <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-4 text-2xl rounded-full p-2 bg-black/20 duration-300 hover:bg-black text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div> */}