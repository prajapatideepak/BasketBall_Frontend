import React from "react";
import { BiMale } from "react-icons/bi";
const BasicInfo = () => {
  return (
    <form className="flex w-full  space-x-3">
      <div className="w-full  px-5  m-auto dark:bg-gray-800">
        <h1 className="py-2 text-xl text-orange-600">Basic Information</h1>
        <div className="grid text-lg lg:text-base grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5   lg:gap-5">
          <div className="  ">
            <label htmlFor="required-email" className="text-gray-700">
              First Name
              <span className="text-red-500 required-dot">*</span>
            </label>
            <input
              type="text"
              id="required-email"
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              name="email"
              placeholder="Your email"
            />
          </div>
          {/* for last name */}
          <div className="  ">
            <label htmlFor="required-email" className="text-gray-700">
              Middle Name
              <span className="text-red-500 required-dot"></span>
            </label>
            <input
              type="text"
              id="required-email"
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              name="email"
              placeholder="Your email"
            />
          </div>
          {/* for last name */}
          <div className="  ">
            <label htmlFor="required-email" className="text-gray-700">
              Last Name
              <span className="text-red-500 required-dot">*</span>
            </label>
            <input
              type="text"
              id="required-email"
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              name="email"
              placeholder="Your email"
            />
          </div>
          {/*  */}
          <div className="  ">
            <label htmlFor="required-email" className="text-gray-700">
              Mobile No(Whatsapp No)
              <span className="text-red-500 required-dot">*</span>
            </label>
            <input
              type="text"
              id="required-email"
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white     placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              name="email"
              placeholder="Your email"
            />
          </div>
          {/* for last name */}
          <div className="  ">
            <label htmlFor="required-email" className="text-gray-700">
              Alternative Number
              <span className="text-red-500 required-dot"></span>
            </label>
            <input
              type="text"
              id="required-email"
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              name="email"
              placeholder="Your email"
            />
          </div>
          {/* for last name */}
          <div className="  ">
            <label htmlFor="required-email" className="text-gray-700">
              Email
              <span className="text-red-500 required-dot">*</span>
            </label>
            <input
              type="text"
              id="required-email"
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              name="email"
              placeholder="Your email"
            />
          </div>
          {/* end row */}
          <div className="  ">
            <label htmlFor="required-email" className="text-gray-700">
              Date of Birth
              <span className="text-red-500 required-dot">*</span>
            </label>
            <input
              type="date"
              id="required-email"
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              name="email"
              placeholder="Your email"
            />
          </div>
          {/* for last name */}
          <div className=" ">
            <label htmlFor="required-email" className="text-gray-700">
              Gender
              <span className="text-red-500 required-dot">*</span>
            </label>
            <div className="flex space-x-2 bg-white items-center text-gray-700 rounded-lg border border-gray-300 py-2 px-4">
              <div className="flex justify-center  items-center space-x-2">
                <label className="cursor-pointer" for="male">
                  Male
                </label>
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="radio"
                  id="male"
                  name="email"
                />
              </div>
              <div className="flex justify-center  items-center space-x-2">
                <label className="cursor-pointer" for="female">
                  Female
                </label>

                <input
                  className="w-4 h-4 cursor-pointer"
                  type="radio"
                  id="female"
                  name="email"
                />
              </div>
              <div className="flex justify-center  items-center space-x-2">
                <label className="cursor-pointer" for="other">
                  Other
                </label>

                <input
                  className="w-4 h-4 cursor-pointer"
                  type="radio"
                  id="other"
                  name="email"
                />
              </div>
            </div>
          </div>
          {/* for last name */}
          <div className="  ">
            <label htmlFor="required-email" className="text-gray-700">
              Pincode
              <span className="text-red-500 required-dot">*</span>
            </label>
            <input
              type="text"
              id="required-email"
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              name="email"
              placeholder="Your email"
            />
          </div>
          {/* end row */}
          <div className="  ">
            <label htmlFor="required-email" className="text-gray-700">
              City
              <span className="text-red-500 required-dot">*</span>
            </label>
            <input
              type="text"
              id="required-email"
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              name="email"
              placeholder="Your email"
            />
          </div>
          {/* for last name */}
          <div className="  ">
            <label htmlFor="required-email" className="text-gray-700">
              State
              <span className="text-red-500 required-dot">*</span>
            </label>
            <input
              type="text"
              id="required-email"
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              name="email"
              placeholder="Your email"
            />
          </div>
          {/* for last name */}
          <div className="  ">
            <label htmlFor="required-email" className="text-gray-700">
              Country
              <span className="text-red-500 required-dot">*</span>
            </label>
            <input
              type="text"
              id="required-email"
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              name="email"
              placeholder="Your email"
            />
          </div>
          {/* end row */}
        </div>
      </div>
    </form>
  );
};
export default BasicInfo;
