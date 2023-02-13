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
                <div key={index} className="flex flex-col h-24 sm:flex-row gap-5 shadow-md shadow-[#ea5a2e29] duration-150 text-[#ea592e] justify-center items-center  px-5 py-4 rounded-lg bg-white capitalize font-medium">
                  <img src={item.sponsor_logo} alt="" className='w-20' />
                  <p>
                    {item.sponsor_name == '' ? '--' : item.sponsor_name}

                  </p>
                </div>
              )
            })
            :
            <div className="bg-red-100 w-full mt-4 text-center">
              <h4 className='text-red-700 font-medium p-2'>No Sponsor Found</h4>
            </div>
        }

      </div>

    </div>
  )
}

export default Sponsors