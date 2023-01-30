import React from 'react'
import { NavLink, Link, Outlet } from 'react-router-dom'


function AsideMenuMain() {
    const [open, setOpen] = React.useState(false);

    return(
        <div className='w-full relative'>
            <div className="py-3 bg-black px-9 md:flex items-center justify-between absolute w-full">
                <div className='inline-block'>
                    <h1 className='font-bold text-3xl font-mono text-white'>The<span className='text-[#ee6730]'>CBL</span></h1>
                </div>
                <div className='text-3xl text-white absolute right-8 top-4 cursor-pointer lg:hidden' onClick={() => setOpen(!open)}>
                    <ion-icon name={open ? "close" : "menu"} ></ion-icon>
                </div>
                <div className=''>
                    <ul className={`lg:space-x-10 font-semibold text-gray-800 pb-10 lg:pb-0  absolute lg:static lg:z-auto
                     z-[-1] left-0 pl-9 lg:pl-0 pr-9 lg:pr-0 w-full lg:w-auto  bg-black flex flex-col lg:flex-row lg:items-center
                     duration-500 ease-in ${open ? "top-12 opacity-100" : "top-[-500px] lg:opacity-100 opacity-0"}`}>
                        <li className="nav-item" onClick={() => setOpen(!open)}>
                            <Link className='Link' to={"/"} >
                                <h1 className='relative text-white text-base md:text-lg lg:text-base xl:text-lg   my-5 md:my-6 lg:my-0'>
                                    Home
                                </h1>
                            </Link>
                        </li>
                        <li className="nav-item" onClick={() => setOpen(!open)}>
                            <Link className='Link' to={"/about"} >
                                <h1 className='relative text-white text-base md:text-lg lg:text-base xl:text-lg  my-5 lg:my-0'>
                                    About
                                </h1>
                            </Link>
                        </li>
                        <li className="nav-item" onClick={() => setOpen(!open)}>
                            <Link className='Link' to={"/contact"} >
                                <h1 className='relative text-white text-base md:text-lg lg:text-base xl:text-lg  my-5 lg:my-0'>
                                    Contact
                                </h1>
                            </Link>
                        </li>
                        <li className="nav-item" onClick={() => setOpen(!open)}>
                            <Link className='Link' to={"/news"} >
                                <h1 className='relative text-white text-base md:text-lg lg:text-base xl:text-lg  my-5 lg:my-0'>
                                    News
                                </h1>
                            </Link>
                        </li>
                        <li className="nav-item" onClick={() => setOpen(!open)}>
                            <Link className='Link' to={"/gallery"} >
                                <h1 className='relative text-white text-base md:text-lg lg:text-base xl:text-lg  my-4 lg:my-0'>
                                Gallery
                                </h1>
                            </Link>
                        </li>
                        <li className="nav-item" onClick={() => setOpen(!open)}>
                            <Link className='Link' to={"/team-profile"} >
                                <h1 className='relative text-white text-base md:text-lg lg:text-base xl:text-lg  my-4 lg:my-0'>
                                Team
                                </h1>
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
            <div className='bg-[#F5F5F7] w-full absolute top-0 -z-50  '>
                <Outlet />
            </div>

        </div>
    )
}
export default AsideMenuMain