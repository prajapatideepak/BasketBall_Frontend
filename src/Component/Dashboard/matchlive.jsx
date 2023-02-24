import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { BsFillPlayFill } from 'react-icons/bs';
import { useEffect } from 'react';



function MatchLive({ slides }) {
  console.log(slides)

  const [currentIndex, setCurrentIndex] = useState(0);
  const length = slides.length
  const autoScroll = true
  let slideInterval;
  let intervalTime = 3500

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

  function auto() {
    slideInterval = setInterval(nextSlide , intervalTime)
  }
  useEffect(() => {
    if(autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval)
  }, [currentIndex])

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='h-full w-full '>
      <div className='w-[100%] h-[100%] relative flex justify-start items-center overflow-hidden'>
        {slides.map((item, index) => {
          return (
            <div className={index === currentIndex ? 'slide active ' : 'slide'}
             key={index}>
              {index === currentIndex && (
              <img src={item.url} alt="" className='w-[12000px] h-[500px] bg-cover bg-center' />

              )}
              <div className='bg-gradient-to-t from-black absolute h-full bottom-0 min-w-full flex flex-col justify-end '>
              {
                item.is_live == 1 ? 
                <div className='bg-red-500 flex items-center absolute left-10 mx-20  top-[30%] cursor-pointer pr-2 px-1 rounded-md text-white  '>
                  <RxDotFilled className='' />
                  <p className='font-bold'>Live</p>
                </div>
                : 
                null
              }
                <div className='absolute bottom-[47%] left-10 space-y-3 px-20'>
                  <div className='flex items-center text-white gap-3'>
                    <h1 className='text-3xl font-bold uppercase'>{item.Fisrt_Team}</h1>
                    <p className='text-2xl font-bold '>V<span className='text-[#ee6730] font-bold text-2xl'>S</span></p>
                    <h1 className='text-3xl font-bold uppercase'>{item.Secound_Team}</h1>
                  </div>
                  <div className=''>
                    <p className='text-gray-400'>{item.Tournament}</p>
                  </div>
                </div>
                <div className='absolute bottom-40 px-[120px]'>
                  <button className='bg-[#ff5000] text-white duration-300  flex gap-1 items-center  rounded-lg font-medium hover:bg-white hover:text-[#ee6730] px-14 py-[10px] left-10'>
                    <BsFillPlayFill className='text-xl' />
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
          )
        })}
        <div className='flex  absolute bottom-10 space-x-8 w-full justify-center items-center px-40 '>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={slideIndex === currentIndex ? 'text-white border-2 w-12 h-12 border-[#ee663046] rounded-full flex cursor-pointer justify-center items-center hover:text-[#ee6730] duration-300 ' : ' text-gray-500 w-12 h-12 flex border-none justify-center items-center hover:text-[#ee6730] cursor-pointer duration-300 font-bold'}
            >
              1
            </div>
          ))}
        </div>
      </div>




    </div>
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