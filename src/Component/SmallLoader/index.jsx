import React from "react";
import { GiBasketballBall } from "react-icons/gi";
export default function Loader() {
  return (
    <div className="flex justify-center items-center">
      <GiBasketballBall className="animate-spin text-3xl opacity-90 text-[#ee6730] mr-1" />
      <h1 className="text-lg text-gray-500 font-medium"> Loading...</h1>
    </div>
  );
}
