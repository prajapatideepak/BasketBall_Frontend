import React from 'react'

export default function AboutUsCard({name}) {
    console.log(name)
  return (
    <div className={`flex space-x-5  flex-col lg:flex-row justify-around  ${name%2==0 ? "flex-row-reverse": ""} my-3 `}>
          <div className="w-full lg:w-1/2 flex justify-center mx-auto flex-col">
            <h1 className="text-[#ee6730] text-4xl font-semibold">Corporate Basketball league</h1>
            <p className="text-gray-700 py-3 text-lg px-2 ">No longer keep track of the score in your head, or with just your fingers. Whether you are playing, refereeing, or just watching the game, this attractive new look allows you to keep scores in style.
             
            </p>
            <p className="text-gray-700 py-3 text-lg px-2 ">Our tournament feature allows users to discover local basketball tournaments happening in their area, register their teams, and stay updated on the tournament schedule and results.

</p>  
          </div>
          <div className={`w-full lg:w-1/2 flex  ${name%2==0 ? "justify-start items-start": "items-end"} `}>
            <img
              className="w-full lg:w-3/4 rounded "
              src={"/CBL_Images/Picsart_23-01-24_18-35-25-774.png"}
            />
          </div>
        </div>
  )
}
