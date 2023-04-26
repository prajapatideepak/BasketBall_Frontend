import React, { useState } from "react";
import { BsTrophy } from "react-icons/bs";
import { GiBasketballJersey } from "react-icons/gi";
import { BiNews } from "react-icons/bi";
import { Link } from "react-router-dom";

import { GrGallery } from "react-icons/gr";
function AdminSidebar() {
  const [show, setShow] = useState(true);
  const [tooltipStatus, setTooltipStatus] = useState(0);
  return (
    <>
      {/* Vertical navigation starts */}
      <div className="flex flex-no-wrap h-full">
        <div className="h-full bg-gray-900 p-4">
          <div className="flex w-full h-full">
            <div className=" flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center">
                  <img
                    src="/CBL_Images/logo.png"
                    className={`${show ? "w-16" : "w-10"} `}
                  />
                  {show && (
                    <div className="pl-3" id="closed">
                      <h1 className="text-2xl text-gray-400 font-sans">
                        Dashboard
                      </h1>
                    </div>
                  )}
                </div>
                <div className="mt-10 flex items-center relative">
                  {show ? (
                    <div arial-label="search" className="relative w-full">
                      <div className="absolute p-2">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.1665 1.66667C13.3065 1.66667 16.6665 5.02667 16.6665 9.16667C16.6665 13.3067 13.3065 16.6667 9.1665 16.6667C5.0265 16.6667 1.6665 13.3067 1.6665 9.16667C1.6665 5.02667 5.0265 1.66667 9.1665 1.66667ZM9.1665 15C12.389 15 14.9998 12.3892 14.9998 9.16667C14.9998 5.94333 12.389 3.33333 9.1665 3.33333C5.94317 3.33333 3.33317 5.94333 3.33317 9.16667C3.33317 12.3892 5.94317 15 9.1665 15ZM16.2373 15.0592L18.5948 17.4158L17.4157 18.595L15.059 16.2375L16.2373 15.0592Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <input
                        type="seach"
                        className="w-full py-2 pl-10 bg-gray-800 rounded text-base leading-none text-white placeholder-white"
                        placeholder="Search"
                      />
                    </div>
                  ) : (
                    <div>
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w 3.org/2000/svg"
                      >
                        <path
                          d="M9.1665 1.66667C13.3065 1.66667 16.6665 5.02667 16.6665 9.16667C16.6665 13.3067 13.3065 16.6667 9.1665 16.6667C5.0265 16.6667 1.6665 13.3067 1.6665 9.16667C1.6665 5.02667 5.0265 1.66667 9.1665 1.66667ZM9.1665 15C12.389 15 14.9998 12.3892 14.9998 9.16667C14.9998 5.94333 12.389 3.33333 9.1665 3.33333C5.94317 3.33333 3.33317 5.94333 3.33317 9.16667C3.33317 12.3892 5.94317 15 9.1665 15ZM16.2373 15.0592L18.5948 17.4158L17.4157 18.595L15.059 16.2375L16.2373 15.0592Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  )}
                  <div className="-mt-5 z-20" onClick={() => setShow(!show)}>
                    {show ? (
                      <button
                        aria-label="minimize sidebar"
                        id="close"
                        className="w-6 h-6 right-0 -mr-7 bg-orange-500 absolute shadow rounded-full flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600"
                      >
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 4L6 8L10 12"
                            stroke="white"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    ) : (
                      <button
                        id="open"
                        className=" w-6 h-6 right-0 -mr-7 bg-orange-500 absolute shadow rounded-full flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600"
                      >
                        <svg
                          aria-label="expand sidebar"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 12L10 8L6 4"
                            stroke="white"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
                <div className="flex items-center">
                  <ul aria-orientation="vertical">
                    <Link className="Link" to={"/admin"}>
                      <li
                        tabIndex={0}
                        role="button"
                        aria-label="Overview"
                        className="cursor-pointer mt-10"
                      >
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.5 2.5H9.16667V9.16667H2.5V2.5ZM2.5 10.8333H9.16667V17.5H2.5V10.8333ZM10.8333 2.5H17.5V9.16667H10.8333V2.5ZM10.8333 10.8333H17.5V17.5H10.8333V10.8333ZM12.5 4.16667V7.5H15.8333V4.16667H12.5ZM12.5 12.5V15.8333H15.8333V12.5H12.5ZM4.16667 4.16667V7.5H7.5V4.16667H4.16667ZM4.16667 12.5V15.8333H7.5V12.5H4.16667Z"
                            fill="#9CA3AF"
                          />
                        </svg>
                      </li>
                    </Link>
                    <Link className="Link" to={"admin/all-teams"}>
                      <li
                        tabIndex={0}
                        role="button"
                        aria-label="Teams"
                        className="cursor-pointer mt-6"
                      >
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.6665 18.3333C1.6665 16.5652 2.36888 14.8695 3.61913 13.6193C4.86937 12.369 6.56506 11.6667 8.33317 11.6667C10.1013 11.6667 11.797 12.369 13.0472 13.6193C14.2975 14.8695 14.9998 16.5652 14.9998 18.3333H13.3332C13.3332 17.0073 12.8064 15.7355 11.8687 14.7978C10.931 13.8601 9.65925 13.3333 8.33317 13.3333C7.00709 13.3333 5.73532 13.8601 4.79764 14.7978C3.85995 15.7355 3.33317 17.0073 3.33317 18.3333H1.6665ZM8.33317 10.8333C5.57067 10.8333 3.33317 8.59584 3.33317 5.83334C3.33317 3.07084 5.57067 0.833336 8.33317 0.833336C11.0957 0.833336 13.3332 3.07084 13.3332 5.83334C13.3332 8.59584 11.0957 10.8333 8.33317 10.8333ZM8.33317 9.16667C10.1748 9.16667 11.6665 7.675 11.6665 5.83334C11.6665 3.99167 10.1748 2.5 8.33317 2.5C6.4915 2.5 4.99984 3.99167 4.99984 5.83334C4.99984 7.675 6.4915 9.16667 8.33317 9.16667ZM15.2365 12.2525C16.4076 12.7799 17.4015 13.6344 18.0987 14.7131C18.7958 15.7918 19.1666 17.0489 19.1665 18.3333H17.4998C17.5 17.37 17.222 16.4271 16.6991 15.618C16.1762 14.8089 15.4307 14.1681 14.5523 13.7725L15.2357 12.2525H15.2365ZM14.6632 2.84417C15.5028 3.19025 16.2206 3.77795 16.7257 4.53269C17.2307 5.28744 17.5002 6.1752 17.4998 7.08334C17.5002 8.22695 17.0729 9.32936 16.302 10.174C15.531 11.0187 14.4721 11.5446 13.3332 11.6483V9.97084C13.9506 9.8824 14.5235 9.59835 14.9676 9.16038C15.4117 8.72242 15.7037 8.1536 15.8008 7.53745C15.8979 6.92129 15.7948 6.29025 15.5068 5.73696C15.2188 5.18368 14.761 4.73729 14.2007 4.46334L14.6632 2.84417Z"
                            fill="#9CA3AF"
                          />
                        </svg>
                      </li>
                    </Link>
                    <Link className="Link" to={"admin/all-tournaments"}>
                      <li
                        tabIndex={0}
                        role="button"
                        aria-label="Tournaments"
                        className="cursor-pointer mt-6"
                      >
                        <BsTrophy className="text-gray-400 text-lg" />
                      </li>
                    </Link>
                    <Link className="Link" to={"admin/players"}>
                      <li
                        tabIndex={0}
                        role="button"
                        aria-label="Players"
                        className="cursor-pointer mt-6"
                      >
                        <GiBasketballJersey className="text-gray-400 text-xl" />
                      </li>
                    </Link>

                    <Link className="Link" to={"admin/news"}>
                      <li
                        tabIndex={0}
                        role="button"
                        aria-label="News"
                        className="cursor-pointer mt-6"
                      >
                        <BiNews className="text-gray-400 text-xl" />
                      </li>
                    </Link>
                    <Link className="Link" to={"admin/gallery"}>
                      <li
                        tabIndex={0}
                        role="button"
                        aria-label="Gallery"
                        className="cursor-pointer mt-6"
                      >
                        <GrGallery className=" bg-gray-400 text-lg" />
                      </li>
                    </Link>
                    <li
                      tabIndex={0}
                      role="button"
                      aria-label="Notifications"
                      className="cursor-pointer mt-6"
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.3332 16.6667H1.6665V15H2.49984V9.19249C2.49984 5.03582 5.85817 1.66666 9.99984 1.66666C14.1415 1.66666 17.4998 5.03582 17.4998 9.19249V15H18.3332V16.6667ZM4.1665 15H15.8332V9.19249C15.8332 5.95666 13.2215 3.33332 9.99984 3.33332C6.77817 3.33332 4.1665 5.95666 4.1665 9.19249V15ZM7.9165 17.5H12.0832C12.0832 18.0525 11.8637 18.5824 11.473 18.9731C11.0823 19.3638 10.5524 19.5833 9.99984 19.5833C9.4473 19.5833 8.9174 19.3638 8.5267 18.9731C8.136 18.5824 7.9165 18.0525 7.9165 17.5Z"
                          fill="#9CA3AF"
                        />
                      </svg>
                    </li>
                  </ul>
                  {show && (
                    <div className="w-full mt-10">
                      <Link className="Link" to={"/admin"}>
                        <p className="text-base leading-4 pl-3 cursor-pointer text-gray-400">
                          Overview
                        </p>
                      </Link>
                      <Link className="Link" to={"admin/all-teams"}>
                        <p className="text-base leading-4 pl-3 cursor-pointer pt-7 text-gray-400">
                          Teams
                        </p>
                      </Link>
                      <Link className="Link" to={"admin/all-tournaments"}>
                        <p className="text-base leading-4 pl-3 cursor-pointer pt-7 text-gray-400">
                          Tournaments
                        </p>
                      </Link>
                      <Link className="Link" to={"admin/players"}>
                        <p className="text-base leading-4 pl-3 cursor-pointer pt-7 text-gray-400">
                          Players
                        </p>
                      </Link>
                      <Link className="Link" to={"admin/news"}>
                        <p className="text-base leading-4 pl-3 cursor-pointer pt-7 text-gray-400">
                          News
                        </p>
                      </Link>
                      <Link className="Link" to={"admin/gallery"}>
                        <p className="text-base leading-4 pl-3 cursor-pointer pt-7 text-gray-400">
                          Gallery
                        </p>
                      </Link>
                      <p className="text-base leading-4 pl-3 cursor-pointer pt-7 text-gray-400">
                        Notifications
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Vertical navigation ends */}
    </>
  );
}

export default AdminSidebar;
