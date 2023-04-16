import React from "react";
import { useSelector } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import DropDownmenu from "./DropDownmenu";
import { NavLink, Link, Outlet, useNavigate } from "react-router-dom";

function AsideMenuMain() {
  const { user } = useSelector((state) => state.user);

  const [open, setOpen] = React.useState(false);
  const [isMenu, setIsMenu] = React.useState(false);

  const navigate = useNavigate();

  return (
    <div className="w-full relative">
      <div className="py-3 bg-black  px-5 lg:px-9 flex sticky top-0 items-center justify-between w-full z-[9999]">
        <div className="w-[18%] sm:w-[10%] md:w-[8%] xl:w-[6%] 2xl:w-[4%] ">
          <img
            src="/CBL_Images/logo.png"
            alt=""
            className="cursor-pointer w-14"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div className="hidden md:block">
          <ul className="items-center flex flex-col md:flex-row justify-start lg:justify-center md:space-x-5 lg:space-x-8">
            <li className="nav-item">
              <NavLink className={({ isActive }) => (isActive ? "active" : 'none')} to={"/"} >
                <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg  my-5 md:my-0">
                  Home
                </h1>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => (isActive ? "active" : 'none')} to={"/player/list"}  >
                <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg  my-5 md:my-0">
                  Players
                </h1>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => (isActive ? "active" : 'none')} to={"/team/list"} >
                <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg  my-5 md:my-0">
                  Teams
                </h1>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => (isActive ? "active" : 'none')} to={"/tournament"} >
                <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg  my-5 md:my-0">
                  Tournaments
                </h1>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => (isActive ? "active" : 'none')} to={"/match"} >
                <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg  my-5 md:my-0">
                  Matches
                </h1>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={({ isActive }) => (isActive ? "active" : 'none')} to={"/news"} >
                <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg  my-5 md:my-0">
                  News
                </h1>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => (isActive ? "active" : 'none')} to={"/gallery"} >
                <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg  my-4 md:my-0">
                  Gallery
                </h1>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => (isActive ? "active" : 'none')} to={"/registration"} >
                <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg  my-4 md:my-0">
                  Registration
                </h1>
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className={` font-semibold bg-black mt-0.5 text-gray-800 pb-10 lg:pb-0 lg:space-y-10 fixed
                     z-50  pl-9 md:pl-0 right-0 w-full md:w-72 md:h-screen lg:pr-0  flex flex-col justify-start items-start lg:justify-start md:items-center
                     duration-500 ease-in ${open
              ? "top-[66px] lg:top-[82px] xl:top-[80px] 2xl:top-[66px] opacity-100"
              : " top-[68px] lg:top-[85px] xl:top-[80px] 2xl:top-[68px]  right-[-800px] lg:opacity-100 opacity-0"
            }`}
        >
          <ul className="items-start flex flex-col justify-start lg:justify-center md:items-center lg:space-y-10 md:pt-5 ">
            <li className="nav-item md:hidden" onClick={() => setOpen(!open)}>
              <NavLink className={({ isActive }) => (isActive ? "active" : 'none')} to={"/"} >
                <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg my-[16px] md:my-6 lg:my-0">
                  Home
                </h1>
              </NavLink>
            </li>
            <li className="nav-item" onClick={() => setOpen(!open)}>
              <NavLink className={({ isActive }) => (isActive ? "active" : 'none')} to={"/player/list"} >
                <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg  my-5 md:my-0">
                  Players
                </h1>
              </NavLink>
            </li>
            {
              user.is_organizer
              ?
                <li className="nav-item" onClick={() => setOpen(!open)}>
                  <NavLink className={({isActive}) => (isActive ? "active" : 'none')} to={"/tournament/organizer"} >
                    <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg  my-5 md:my-0">
                      Your Tournaments
                    </h1>
                  </NavLink>
                </li>
              :
                null
            }
            {
              user.is_manager
              ?
                <li className="nav-item" onClick={() => setOpen(!open)}>
                  <NavLink className={({isActive}) => (isActive ? "active" : 'none')} to={"/team/profile"} >
                    <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg  my-5 md:my-0">
                      Your Teams
                    </h1>
                  </NavLink>
                </li>
              :
                null
            }
            <li className="nav-item md:hidden" onClick={() => setOpen(!open)}>
              <NavLink className={({ isActive }) => (isActive ? "active" : 'none')} to={"/team/profile"} >
                <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg my-[16px] lg:my-0">
                  Teams
                </h1>
              </NavLink>
            </li>
            <li
              className="nav-item hidden md:block"
              onClick={() => setOpen(!open)}
            >
              <NavLink className={({ isActive }) => (isActive ? "active" : 'none')} to={"/About"} >
                <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg my-[16px] lg:my-0">
                  About
                </h1>
              </NavLink>
            </li>
            <li className="nav-item md:hidden" onClick={() => setOpen(!open)}>
              <NavLink className={({ isActive }) => (isActive ? "active" : 'none')} to={"/tournaments"} >
                <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg my-[16px] lg:my-0">
                  Tournament
                </h1>
              </NavLink>
            </li>
            <li className="nav-item md:hidden" onClick={() => setOpen(!open)}>
              <NavLink className={({ isActive }) => (isActive ? "active" : 'none')} to={"/news"} >
                <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg my-[16px] lg:my-0">
                  News
                </h1>
              </NavLink>
            </li>
            <li className="nav-item " onClick={() => setOpen(!open)}>
              <NavLink className={({ isActive }) => (isActive ? "active" : 'none')} to={"/highlights"} >
                <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg my-[16px] lg:my-0">
                  Highlight
                </h1>
              </NavLink>
            </li>
            <li className="nav-item md:hidden" onClick={() => setOpen(!open)}>
              <NavLink className={({ isActive }) => (isActive ? "active" : 'none')} to={"/gallery"} >
                <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg my-[16px] lg:my-0">
                  Gallery
                </h1>
              </NavLink>
            </li>
            <li className="nav-item" onClick={() => setOpen(!open)}>
              <NavLink className={({ isActive }) => (isActive ? "active" : 'none')} to={"/contact"} >
                <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg my-[16px] lg:my-0">
                  Contact
                </h1>
              </NavLink>
            </li>
            <li className="nav-item md:hidden" onClick={() => setOpen(!open)}>
              <NavLink className={({ isActive }) => (isActive ? "active" : 'none')} to={"/About"} >
                <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg my-[16px] lg:my-0">
                  About
                </h1>
              </NavLink>
            </li>
            <li className="nav-item md:hidden " onClick={() => setOpen(!open)}>
              <NavLink className={({ isActive }) => (isActive ? "active" : 'none')} to={"/role"} >
                <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg my-[16px] lg:my-0">
                  Registration
                </h1>
              </NavLink>
            </li>
            <li className="nav-item " onClick={() => setOpen(!open)}>
              <NavLink className={({ isActive }) => (isActive ? "active" : 'none')} to={"/term&condition"} >
                <h1 className="relative text-white text-base md:text-base lg:text-base xl:text-lg my-[16px] lg:my-0">
                  Terms & Conditions
                </h1>
              </NavLink>
            </li>
          </ul>
          <div className="flex justify-center space-x-7 pt-10">
            <AiFillInstagram className=" rounded-full hover:text-white hover:bg-[#ee6730] text-[26px] bg-white text-[#ee6730] h-10 w-10 p-2 duration-200 hover:scale-110 cursor-pointer" />
            <FaFacebookSquare className=" rounded-full hover:text-white hover:bg-[#ee6730] text-[26px] bg-white text-[#ee6730] h-10 w-10 p-2 duration-200 hover:scale-110 cursor-pointer" />
            <AiOutlineTwitter className=" rounded-full hover:text-white hover:bg-[#ee6730] text-[26px] bg-white text-[#ee6730] h-10 w-10 p-2 duration-200 hover:scale-110 cursor-pointer" />
          </div>
        </div>

        <div className="flex items-center space-x-2 lg:space-x-5">
          <div className="">
            <DropDownmenu setOpen={setOpen} setIsMenu={setIsMenu} isMenu={isMenu}/>
          </div>
          <div
            className="px-1 py-[2px]  rounded-md w-8"
            onClick={() => {setIsMenu(false); setOpen(!open)}}
          >
            {open ? (
              <RxCross1 className="text-slate-400 hover:text-white  cursor-pointer transition-all duration-700 text-[22px]" />
            ) : (
              <RxHamburgerMenu className="text-slate-400 hover:text-white transition-all duration-700  cursor-pointer text-2xl" />
            )}
          </div>
        </div>
      </div>
      <div className="bg-[#F5F5F7] w-full  -z-50  ">
        <Outlet />
      </div>
    </div>
  );
}
export default AsideMenuMain;
