import React from "react";
import { GiBasketballBall } from "react-icons/gi";
export default function Loader() {
  return (
    <div className="flex justify-center space-x-2  items-center min-h-screen">
      <GiBasketballBall className="animate-spin opacity-60	text-5xl text-[#ee6730] " />
      <h1 className="text-4xl text-gray-400 font-bold"> Loading...</h1>
    </div>
  );
}
