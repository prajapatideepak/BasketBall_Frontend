import React from "react";
import LazyLoad from 'react-lazyload';

export default function NewsCard({path , small}) {
  return (
    <div className="w-full cursor-pointer relative shadow-2xl  rounded-2xl ">
      <div className="">
            <LazyLoad   placeholder={<Deepak/>} once>
        <img
          className=" rounded-2xl"
          src={path}
        />
        </LazyLoad>
      </div>
      <div className="absolute overflow-hidden  rounded-b-2xl flex flex-col  space-y-0 md:space-y-0 justify-end w-full  bottom-0 text-white bg-gradient-to-l hover:h-full  from-transparent via-black  to-gray-900 px-2 lg:px-8 py-2 lg:pt-4 pb-2 opacity-90 hover:opacity-100  duration-500 transition">
        <div className="flex overflow-hidden  space-y-2 space-x-2 lg:space-x-4 italic items-center uppercase text-xs font-bold ">
         <div className="flex space-x-2">
           <span className="bg-orange-600 px-3  rounded ">CBL </span>
          <span className="bg-orange-600 px-3  rounded ">basketball </span>
          <span className="bg-orange-600 px-3  rounded ">Lj </span>
         
         </div>
          <span className=" text-orange-600 text-normal font-bold ">
            26/03/12
          </span>
        </div>
        <div className="py-1 lg:py-3  leading-relaxed">
          <h1 className={`text-sm md:text-lg  ${small ? "lg:text-sm" :"lg:text-lg"}  font-bold opacity-100 `}>
            {" "}
            Wellbenix created amazing basketball web application people are
            going crazy{" "}
          </h1>
        </div>
      </div>
    </div>
  );
}
const Deepak = () =>{
    return  <div className='bg-orange-700 blur-sm h-72 '>
<img src="/CBL_Images/cbl.webp" className="w-full h-full" />
{/* <h1 className="opacity-0">qui saepe odio tempore magnam incidunt? Voluptatum placeat quas dolorem? Quia recusandae harum quisquam esse, quos impedit vel neque provident placeat accusantium et, repellendus amet.</h1> */}
    </div>

}