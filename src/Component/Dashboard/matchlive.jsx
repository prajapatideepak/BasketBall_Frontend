import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { BsFillPlayFill } from 'react-icons/bs';



function MatchLive({slides}) {


  const [currentIndex, setCurrentIndex] = useState(0);

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

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className=' h-[500px] w-full relative  group  shadow-xl'>
      <div className='bg-gradient-to-t from-black/100 absolute h-full bottom-0 min-w-full rounded-b-2xl flex flex-col justify-end'>
        <div className='bg-red-500 flex items-center absolute left-10 bottom-60 cursor-pointer pr-2 px-1 rounded-md text-white  '>
          <RxDotFilled className='' />
          <p className='font-bold'>Live</p>
        </div>
        <div className=''>
          <div className='flex items-center text-white absolute bottom-48 left-10 gap-3'>
            <h1 className='text-3xl font-bold uppercase'>MEHTA KE MAHAARATHI</h1>
            <p className='text-2xl font-bold '>V<span className='text-[#ee6730] font-bold text-2xl'>S</span></p>
            <h1 className='text-3xl font-bold uppercase'>JETHA KE JABAAZ</h1>
          </div>
          <div className='absolute bottom-40 left-10'>
            <p className='text-gray-400'>Gokuldham Premier League</p>
          </div>
        </div>
        <div>
          <button className='bg-[#ff5000] text-white duration-300 absolute flex gap-1 items-center bottom-24 rounded-lg font-medium hover:bg-white hover:text-[#ee6730] px-14 py-[10px] left-10'>
            <BsFillPlayFill className='text-xl' />
            Watch Now
          </button>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-4 text-2xl rounded-full p-2 bg-black/20 duration-300 hover:bg-black text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-4 text-2xl rounded-full p-2 bg-black/20 duration-300 hover:bg-black text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2 '>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MatchLive;
