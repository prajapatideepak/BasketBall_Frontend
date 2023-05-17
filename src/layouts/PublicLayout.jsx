/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, Outlet, NavLink } from 'react-router-dom'
import Footer from '../Component/Footer';


const PublicLayout = () => {

    const [open, setOpen] = React.useState(false);

    return (
        <>
            <div className='w-full relative'>
                <div className="py-3 h-[70px] bg-black px-9 md:flex items-center justify-between sticky top-0 z-[9999] w-full">
                    <div className="w-[18%] sm:w-[10%] md:w-[8%] xl:w-[6%] 2xl:w-[4%] ">
                        <img
                            src="/CBL_Images/logo.png"
                            alt=""
                            className="cursor-pointer"
                            onClick={() => {
                                navigate("/");
                            }}
                        />
                    </div>
                    <div className='text-3xl text-white absolute right-8 top-4 cursor-pointer lg:hidden' onClick={() => setOpen(!open)}>
                        <ion-icon name={open ? "close" : "menu"} ></ion-icon>
                    </div>
                    <div className=''>
                        <ul className={`lg:space-x-10 font-semibold bg-black/100 text-gray-800 pb-10 lg:pb-0  absolute lg:static lg:z-auto
                     -z-20 left-0 pl-9 lg:pl-0 pr-9 lg:pr-0 w-full lg:w-auto flex flex-col lg:flex-row lg:items-center
                     duration-500 ease-in ${open ? "top-16 opacity-100 " : "top-[-500px] lg:opacity-100 opacity-0 duration-500"}`}>
                            <li className="nav-item" onClick={() => setOpen(!open)}>
                                <NavLink className={({ isActive }) => (isActive ? "active" : 'none')} to={"/"} >
                                    <h1 className='relative text-white text-base md:text-lg lg:text-base xl:text-lg   my-5 md:my-6 lg:my-0'>
                                        Home
                                    </h1>
                                </NavLink>
                            </li>
                            <li className="nav-item" onClick={() => setOpen(!open)}>
                                <NavLink className={({ isActive }) => (isActive ? "active" : 'none')} to={"/about"} >
                                    <h1 className='relative text-white text-base md:text-lg lg:text-base xl:text-lg  my-5 lg:my-0'>
                                        About
                                    </h1>
                                </NavLink>
                            </li>
                            <li className="nav-item" onClick={() => setOpen(!open)}>
                                <NavLink className={({ isActive }) => (isActive ? "active" : 'none')} to={"/contact"} >
                                    <h1 className='relative text-white text-base md:text-lg lg:text-base xl:text-lg  my-5 lg:my-0'>
                                        Contact
                                    </h1>
                                </NavLink>
                            </li>
                            <li className="nav-item" onClick={() => setOpen(!open)}>
                                <NavLink className={({ isActive }) => (isActive ? "active" : 'none')} to={"/news"} >
                                    <h1 className='relative text-white text-base md:text-lg lg:text-base xl:text-lg  my-5 lg:my-0'>
                                        News
                                    </h1>
                                </NavLink>
                            </li>
                            <li className="nav-item" onClick={() => setOpen(!open)}>
                                <NavLink className={({ isActive }) => (isActive ? "active" : 'none')} to={"/gallery"} >
                                    <h1 className='relative text-white text-base md:text-lg lg:text-base xl:text-lg  my-4 lg:my-0'>
                                        Gallery
                                    </h1>
                                </NavLink>
                            </li>
                            <div className='flex pl-3 space-x-4'>
                                <li onClick={() => setOpen(!open)} className=''>
                                    <NavLink to={"/login"}>
                                        <button
                                            type="reset"
                                            className="bg-white text-[#ee6730] relative inline-flex items-center justify-center w-full px-8 py-2 lg:py-1 overflow-hidden hover:text-white rounded-full cursor-pointer group my-4">
                                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out  bg-[#ee6730]  rounded-lg group-hover:w-full group-hover:h-56"></span>
                                            <span className="relative">Login</span>
                                        </button>

                                    </NavLink>
                                </li>
                                <li onClick={() => setOpen(!open)}>
                                    <NavLink to={"/register"}>
                                        <button
                                            type="reset"
                                            className="bg-white text-[#ee6730] relative inline-flex items-center justify-center w-full px-8 py-2 lg:py-1 overflow-hidden hover:text-white rounded-full cursor-pointer group my-4 ">
                                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out  bg-[#ee6730]  rounded-lg group-hover:w-full group-hover:h-56"></span>
                                            <span className="relative">Register</span>
                                        </button>
                                    </NavLink>
                                </li>
                            </div>
                        </ul>
                    </div>

                </div >
                <div className=' w-full -z-50  '>
                    <Outlet />
                </div>
                <div className='absolute bottom-0 w-full'>
                    <Footer />
                </div>
            </div >
        </>
    )
}

export default PublicLayout
