import React from 'react'

function Tournaments() {
    const [currentTab, setCurrentTab] = React.useState(1);

    return (
        <section>
            <div className='mx-auto px-10 py-12 sm:px-20 sm:py-12 md:px-20 md:py-16 lg:px-24 xl:px-28 2xl:px-32'>
                <div className='flex justify-center items-center'>
                    <div className="w-2/3 sm:w-2/4 lg:w-1/3 p-1 rounded-full flex justify-around items-center bg-black">
                        <div className={`${currentTab == 1 ? 'bg-[#ee6730]' : ''} hover:bg-[#ee6730] group cursor-pointer w-full text-center p-1 rounded-full`} onClick={()=> setCurrentTab(1)}>
                            <h3 className={`${currentTab == 1 ? 'text-white' : 'text-gray-300'} group-hover:text-white font-semibold`}>Ongoing</h3>
                        </div>
                        <div className={`${currentTab == 2 ? 'bg-[#ee6730]' : ''} hover:bg-[#ee6730] group cursor-pointer w-full text-center mx-1.5 p-1 rounded-full`} onClick={()=> setCurrentTab(2)}>
                            <h3 className={`${currentTab == 2 ? 'text-white' : 'text-gray-300'} group-hover:text-white font-semibold`}>Upcoming</h3>
                        </div>
                        <div className={`${currentTab == 3 ? 'bg-[#ee6730]' : ''} hover:bg-[#ee6730] group cursor-pointer w-full text-center p-1 rounded-full`} onClick={()=> setCurrentTab(3)}>
                            <h3 className={`${currentTab == 3 ? 'text-white' : 'text-gray-300'} group-hover:text-white font-semibold`}>Past</h3>
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </section>
    )
}

export default Tournaments