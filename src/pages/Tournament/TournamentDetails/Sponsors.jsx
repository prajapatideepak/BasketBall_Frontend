import React from 'react'

function Sponsors({sponsors}) {
  return (
    <div className="">
      <div className="flex flex-wrap gap-6 py-5 justify-center items-center">
        {
          sponsors.length > 0
          ?
            sponsors.map((item, index) => {
              return (
                <div key={index} className="flex flex-row w-72 h-24 gap-5 shadow-md shadow-[#ea5a2e29] duration-150 text-[#ea592e] justify-around items-center  px-5 py-4 rounded-lg bg-white capitalize font-medium">
                  <img src={item.logo} alt="" className='w-20' />
                  <p>
                    {item.title}

                  </p>
                </div>
              )
            })
          :
            <div className="w-full text-center mt-12">
              <h4 className='text-lg font-medium text-gray-400'>No Sponsors Found</h4>
            </div>
        }

      </div>

    </div>
  )
}

export default Sponsors