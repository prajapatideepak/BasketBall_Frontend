import React from 'react'
import {GiBasketballBasket} from "react-icons/gi"
import {IoIosBasketball} from "react-icons/io"
export default function AboutusFeatureCard({feature}) {
    console.log(feature)
  return (
    <div className=" bg-gray-100 hover:text-white hover:bg-orange-400  duration-300 border-black border  font-semibold rounded shadow-xl flex  px-2 items-center space-x-3 py-2">
                  <span>
                    <IoIosBasketball className=" text-2xl text-orange-600" />
                    {/* <IoIosDoneAll className="text-3xl text-green-800" /> */}
                  </span>
<h1 className=' text-center'> {feature}</h1>
                </div>
  )
}
