/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import logo from "/images/cbl.webp"


const PublicLayout = () => {

    const [open, setOpen] = React.useState(false);

    return (
        <div className='w-full relative'>
       
            <div className="py-3 h-[70px] bg-[#F5F5F7] px-9 md:flex items-center justify-between sticky top-0 z-[9999] w-full">
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
                    <ul className={`lg:space-x-10 font-semibold text-gray-800 pb-10 lg:pb-0  absolute lg:static lg:z-auto
                     -z-20 left-0 pl-9 lg:pl-0 pr-9 lg:pr-0 w-full lg:w-auto  bg-transparent flex flex-col lg:flex-row lg:items-center
                     duration-500 ease-in ${open ? "top-16 opacity-100" : "top-[-500px] lg:opacity-100 opacity-0 duration-500"}`}>
                        <Link className='Link' to={"/"} >
                            <li className="nav-item" onClick={() => setOpen(!open)}>
                                <h1 className='relative text-black text-base md:text-lg lg:text-base xl:text-lg   my-5 md:my-6 lg:my-0'>
                                    Home
                                </h1>
                            </li>
                        </Link>
                        <Link className='Link' to={"/about"} >
                            <li className="nav-item" onClick={() => setOpen(!open)}>
                                <h1 className='relative text-black text-base md:text-lg lg:text-base xl:text-lg  my-5 lg:my-0'>
                                    About
                                </h1>
                            </li>
                        </Link>
                        <Link className='Link' to={"/contact"} >
                            <li className="nav-item" onClick={() => setOpen(!open)}>
                                <h1 className='relative text-black text-base md:text-lg lg:text-base xl:text-lg  my-5 lg:my-0'>
                                    Contact
                                </h1>
                            </li>
                        </Link>
                        <Link className='Link' to={"/news"} >
                            <li className="nav-item" onClick={() => setOpen(!open)}>
                                <h1 className='relative text-black text-base md:text-lg lg:text-base xl:text-lg  my-5 lg:my-0'>
                                    News
                                </h1>
                            </li>
                        </Link>
                        <Link className='Link' to={"/gallery"} >
                            <li className="nav-item" onClick={() => setOpen(!open)}>
                                <h1 className='relative text-black text-base md:text-lg lg:text-base xl:text-lg  my-4 lg:my-0'>
                                    Gallery
                                </h1>
                            </li>
                        </Link>
                        <Link to={"/login"}>
                            <li onClick={() => setOpen(!open)} className=''>
                                <button
                                    type="reset"
                                    className="bg-white text-[#ee6730] relative inline-flex items-center justify-center w-full px-8 py-2 lg:py-1 overflow-hidden hover:text-white rounded-full cursor-pointer group my-4">
                                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out  bg-[#ee6730]  rounded-lg group-hover:w-full group-hover:h-56"></span>
                                    <span className="relative">Login</span>
                                </button>
                            </li>

                        </Link>
                        <Link to={"/register"}>
                            <li onClick={() => setOpen(!open)}>
                                <button
                                    type="reset"
                                    className="bg-white text-[#ee6730] relative inline-flex items-center justify-center w-full px-8 py-2 lg:py-1 overflow-hidden hover:text-white rounded-full cursor-pointer group my-4 ">
                                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out  bg-[#ee6730]  rounded-lg group-hover:w-full group-hover:h-56"></span>
                                    <span className="relative">Register</span>
                                </button>
                            </li>
                        </Link>
                    </ul>
                </div>

            </div>
            <div className='bg-[#F5F5F7] w-full -z-50  '>
                <Outlet />
            </div>
            <div className='bg-[#ee6730] w-1/2 h-full absolute top-0'>
            1
        </div>
        </div>

    )
}

export default PublicLayout
