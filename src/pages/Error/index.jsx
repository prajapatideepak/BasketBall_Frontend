import React from "react";
import { HiArrowLeft } from "react-icons/hi"

export default function PageNotFound() {
  return (
    <div className="text-center py-60 lg:py-36" style={{minHeight: 'calc(100vh - 70px)'}}>
      <h1 className="text-7xl md:text-9xl font-bold text-black py-2">404</h1>
      <h2 className="md:text-4xl text-2xl lg:text-5xl font-bold text-[#ee6730] py-2">
        Page not found
      </h2>
      <p className="text-md text-gray-600 py-2 px-12 lg:px-96">
        Sorry! We could not find you the page you are looking for. Please check
        URL in address bar and try again.
      </p>
      <div className="text-md text-indigo-700 flex justify-center cursor-pointer mt-5">
        <div className="hover:underline text-[#ee6730] flex items-center gap-1">
          <HiArrowLeft />
          Go back</div>
      </div>
    </div>
  );
}
