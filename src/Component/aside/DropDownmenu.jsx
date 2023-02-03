import React from 'react'
import { FaUserAlt } from "react-icons/fa"
import { FaUserCircle } from "react-icons/fa"
import { FiChevronRight } from "react-icons/fi"
import { MdOutlineLogout } from "react-icons/md"
import { GoKey } from "react-icons/go"
import { MdPublishedWithChanges } from "react-icons/md"
import { NavLink, Link, Outlet } from 'react-router-dom'


function DropDownmenu() {

    const [isMenu, setismenu] = React.useState(false)

    return (
        <>
            <div className=''>
                <div className='flex items-center space-x-2 cursor-pointer' onClick={() => setismenu(!isMenu)}>
                    <div className="">
                        <FaUserCircle className='text-4xl text-white' />
                    </div>
                    <div className='hidden xl:block'>
                        <p className="text-base text-[#ee6730] font-semibold">Visitor</p>
                    </div>
                </div>
            </div>

            <div className={`${isMenu ? "active" : " inactive"} dropdown-menu bg-black duration-500 ease-in  shadow-lg p-2 absolute lg:right-5 right-2 w-64 top-[70px]   rounded-md `}>
                <ul className='py-3 px-2'>
                    <p className='text-gray-400 py-2'>Profile settings</p>
                    <Link to={"/Visitor-profile"}>
                        <li onClick={() => setismenu(false)}
                            className="flex items-center justify-between my-2 cursor-pointer hover:bg-[#ee6730] duration-150 px-2  py-2 rounded-md  ">
                            <div className="flex items-center space-x-3 text-white">
                                <div className="rounded-full px-1 py-1 bg-white text-black flex justify-center border items-center ">
                                    <FaUserAlt />
                                </div>
                                <h1 className='text-sm font-semibold'>View Profile</h1>
                            </div>
                            <FiChevronRight className='text-white' />
                        </li>
                    </Link>
                    <Link>
                        <li onClick={() => setismenu(false)}
                            className="flex items-center justify-between my-2 cursor-pointer hover:bg-[#ee6730] duration-150 px-2  py-1 rounded-md  ">
                            <div className="flex items-center space-x-3 text-white">
                                <div className="rounded-full px-1 py-1 bg-white text-black flex justify-center border items-center ">
                                    <MdPublishedWithChanges />
                                </div>
                                <div className='flex flex-col'>
                                    <h1 className='text-sm font-semibold'>Change Role</h1>
                                    <p className='text-sm font-semibold text-slate-400'>Visitor</p>
                                </div>
                            </div>
                            <FiChevronRight className='text-white' />
                        </li>
                    </Link>
                    <Link>
                        <li onClick={() => setismenu(false)}
                            className="flex items-center justify-between my-2 cursor-pointer hover:bg-[#ee6730] duration-150 px-2  py-2 rounded-md  ">
                            <div className="flex items-center space-x-3 text-white">
                                <div className="rounded-full px-1 py-1 bg-white text-black flex justify-center border items-center ">
                                    <GoKey />
                                </div>
                                <h1 className='text-sm font-semibold'>Forget Password</h1>
                            </div>
                            <FiChevronRight className='text-white' />
                        </li>
                    </Link>
                    <Link>
                        <li onClick={() => setismenu(false)}
                            className="flex items-center justify-between my-2 cursor-pointer hover:bg-[#ee6730] duration-150 px-2  py-2 rounded-md  ">
                            <div className="flex items-center space-x-3 text-white">
                                <div className="rounded-full px-1 py-1 bg-white text-black flex justify-center border items-center ">
                                    <MdOutlineLogout />
                                </div>
                                <h1 className='text-sm font-semibold'>Log out</h1>
                            </div>
                            <FiChevronRight className='text-white' />
                        </li>
                    </Link>



                </ul>
            </div>


        </>

    )
}

export default DropDownmenu
