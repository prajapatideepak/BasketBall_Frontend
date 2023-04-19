/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import logo from "/images/cbl.webp"


const PublicLayout = () => {

    const [open, setOpen] = React.useState(false);

    return (
        <>
            {/* <div className='bg-white'>
                <div className='bg-[#ee6730] min-h-screen w-full relative triengle z-[-100]'>
                    1
                </div>
                <div className='absolute top-0'>
                    <div className="nav items-center flex justify-between p-5 bg-black z-50">
                        <div className="logo w-12">
                            <img
                                src="/CBL_Images/logo.png"
                                alt=""
                                className="cursor-pointer"

                            />
                        </div>
                        <div className="navbar">
                            <ul className='flex justify-end items-end space-x-10'>
                                <li className='text-white'>Home</li>
                                <li className='text-white'>About</li>
                                <li className='text-white'>Contact</li>
                                <li className='text-white'>Service</li>
                                <li className='text-white'>Login</li>
                                <li className='text-white'>Register</li>
                            </ul>
                        </div>
                    </div>
                    <div className="contant grid grid-cols-2 py-5">
                        <div className="flex flex-col w-full justify-center items-start mt-20 px-32 z-50 space-y-5 ">
                            <h1 className="xs:text-[44px] font-roboto text-black italic font-bold sm:text-[55px] md:text-7xl lg:text-[80px] text-blabg-black
                             xl:text-8xl  2xl:text-[120px]  uppercase ">
                                Corporate
                            </h1>
                            <div className="flex items-center space-x-8">
                                <h1
                                    className="landing-sub text-[#ee6730] text-4xl italic  font-bold  uppercase ">
                                    BasketBall
                                </h1>
                                <h1 className="landing-sub text-black text-4xl italic  font-bold  uppercase ">
                                    League
                                </h1>
                            </div>
                            <p
                                className="text-center sm:text-start ||  sm:mr-80 md:w-[300px] lg:w-[350px] text-black  xl:w-[500px] || text-xs sm:text-sm md:text-sm lg:font-normal 2xl:text-base  ||
                     py-2 "
                            >
                                Use in khelo India, khel mahakumb, state level tournament,
                                district level tournament, inter university, any professional
                                league.
                            </p>
                            <div className='flex items-center space-x-5'>
                                <Link className="Link" to={"/register"}>
                                    <button
                                        type="submit"
                                        className="bg-transparent border-2 border-black hover:text-white  relative inline-flex items-center justify-center w-full px-8 py-1.5 sm:px-8 my-2 sm:py-[5px] 2xl:px-20 2xl:py-2 overflow-hidden font-medium tracking-tighter text-black rounded-full cursor-pointer group"
                                    >
                                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-lg group-hover:w-full group-hover:h-56"></span>
                                        <span className="relative flex justify-center items-center flex-row">
                                            Register
                                        </span>
                                    </button>
                                </Link>
                                <Link className="Link" to={"/register"}>
                                    <button
                                        type="submit"
                                        className="bg-[#ee6730] border-2  relative border-[#ee6730] hover:text-[#ee6730] inline-flex items-center justify-center w-full px-8 py-1.5 sm:px-8 my-2 sm:py-[5px] 2xl:px-20 2xl:py-2 overflow-hidden font-medium tracking-tighter text-white rounded-full cursor-pointer group"
                                    >
                                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-lg group-hover:w-full group-hover:h-56"></span>
                                        <span className="relative flex justify-center items-center flex-row">
                                            Register
                                        </span>
                                    </button>
                                </Link>
                            </div>
                            <div className="flex items-center pt-5 space-x-7">
                                <img
                                    src="../../CBL_Images/mahakumbh.png"
                                    alt=""
                                    className="w-10 lg:w-14 xl:w-16 2xl:w-[70px]"
                                />
                                <img
                                    src="../../CBL_Images/67433339.webp"
                                    alt=""
                                    className="w-10 lg:w-14 xl:w-16 2xl:w-[80px]"
                                />
                                <img
                                    src="../../CBL_Images/nsfi.png"
                                    alt=""
                                    className="w-10 lg:w-14 xl:w-16 2xl:w-[65px]"
                                />
                                <img
                                    src="../../CBL_Images/afi.jpeg"
                                    alt=""
                                    className="w-10 lg:w-14 xl:w-16 2xl:w-[110px]"
                                />
                            </div>
                        </div>
                        <div className="right flex items-center w-full justify-center">
                            <div className="img sm:absolute right-0 sm:top-40 mt-16 md:top-40 lg:top-20 2xl:top-16 h-[350px] w-[350px] sm:h-[400px] sm:w-[380px] md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px] xl:h-[480px] xl:w-[480px] 2xl:h-[600px] 2xl:w-[800px] mr-20">
                                <img src="/CBL_Images/portrait-two-basketball-players-training-dribbling-isolated-white-studio-background.jpg" alt="landing" className=" w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className='w-full relative'>

                {/* <div className='absolute top-0'> */}
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
                {/* </div> */}
                <div className='absolute top-0  w-1/2 z-50 h-20'>
                    <img src="/CBL_Images/triangle-svgrepo-com.svg" alt="" srcset="" className='w-full h-[800px] ' />
                </div>
            </div>
        </>
    )
}

export default PublicLayout
