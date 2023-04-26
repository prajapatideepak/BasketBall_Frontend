import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { MdOutlineLogout } from "react-icons/md";
import { GiBasketballJersey, GiDiamondTrophy } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { logout } from "../../redux/actions/User";
import { useDispatch, useSelector } from "react-redux";

function DropDownmenu({setOpen, isMenu, setIsMenu}) {
  const dispatch = useDispatch();
  const { user } = useSelector((state)=> state.user)

  return (
    <>
      <div className="">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => {setOpen(false); setIsMenu(!isMenu)}}
        >
          <div className="">
            <FaUserCircle className="text-4xl text-white" />
          </div>
          <div className="hidden xl:block">
            <p className="text-base text-[#ee6730] font-semibold capitalize">{user.name.split(' ')[0]}</p>
          </div>
        </div>
      </div>

      <div
        className={`${
          isMenu
            ? "active top-[80px] lg:top-[90px] 2xl:top-[78px] "
            : " inactive"
        } dropdown-menu bg-black duration-500 ease-in  shadow-lg p-2 absolute  right-3 w-64 top-[70px]   rounded-md `}
      >
        <ul className="py-3 px-2">
          <p className="text-gray-400 py-2">Profile settings</p>
          <Link to={"/visitor-profile"}>
            <li
              onClick={() => setIsMenu(false)}
              className="flex items-center justify-between my-2 cursor-pointer hover:bg-[#ee6730] duration-150 px-2  py-2 rounded-md  "
            >
              <div className="flex items-center space-x-3 text-white">
                <div className="rounded-full px-1 py-1 bg-white text-black flex justify-center border items-center ">
                  <FaUserAlt />
                </div>
                <h1 className="text-sm font-semibold">User Profile</h1>
              </div>
              <FiChevronRight className="text-white" />
            </li>
          </Link>
          {
            user.is_player
            ?
              <Link to={`/player/profile-detail/${user?.players[0]?.id}`}>
                <li
                  onClick={() => setIsMenu(false)}
                  className="flex items-center justify-between my-2 cursor-pointer hover:bg-[#ee6730] duration-150 px-2  py-2 rounded-md  "
                >
                  <div className="flex items-center space-x-3 text-white">
                    <div className="rounded-full px-1 py-1 bg-white text-black flex justify-center border items-center ">
                      <GiBasketballJersey />
                    </div>
                    <h1 className="text-sm font-semibold">Player Profile</h1>
                  </div>
                  <FiChevronRight className="text-white" />
                </li>
              </Link>
            :
              null
          }
          {
            user.is_manager
            ?
              <Link to={"/team/profile"}>
                <li
                  onClick={() => setIsMenu(false)}
                  className="flex items-center justify-between my-2 cursor-pointer hover:bg-[#ee6730] duration-150 px-2  py-2 rounded-md  "
                >
                  <div className="flex items-center space-x-3 text-white">
                    <div className="rounded-full px-1 py-1 bg-white text-black flex justify-center border items-center ">
                      <RiTeamFill />
                    </div>
                    <h1 className="text-sm font-semibold">Team Profile</h1>
                  </div>
                  <FiChevronRight className="text-white" />
                </li>
              </Link>
            :
              null
          }
          {
            user.is_organizer
            ?
              <Link to={"/tournament/organizer"}>
                <li
                  onClick={() => setIsMenu(false)}
                  className="flex items-center justify-between my-2 cursor-pointer hover:bg-[#ee6730] duration-150 px-2  py-2 rounded-md  "
                >
                  <div className="flex items-center space-x-3 text-white">
                    <div className="rounded-full px-1 py-1 bg-white text-black flex justify-center border items-center ">
                      <GiDiamondTrophy />
                    </div>
                    <h1 className="text-sm font-semibold">Tournament Profile</h1>
                  </div>
                  <FiChevronRight className="text-white" />
                </li>
              </Link>
            :
              null
          }
          <Link to={"/"}>
            <li
              onClick={() => {
                dispatch(logout());
              }}
              className="flex items-center justify-between my-2 cursor-pointer hover:bg-[#ee6730] duration-150 px-2  py-2 rounded-md  "
            >
              <div className="flex items-center space-x-3 text-white">
                <div className="rounded-full px-1 py-1 bg-white text-black flex justify-center border items-center ">
                  <MdOutlineLogout />
                </div>
                <h1 className="text-sm font-semibold">Logout</h1>
              </div>
              <FiChevronRight className="text-white" />
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default DropDownmenu;
