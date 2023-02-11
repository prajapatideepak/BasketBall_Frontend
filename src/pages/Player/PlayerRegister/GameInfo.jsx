import React from "react";
const GameInfo = () => {
  return (
    <form className="flex w-full  space-x-3">
      <div className="w-full  px-5  m-auto dark:bg-gray-800">
        <h1 className="py-2 text-xl text-orange-600">Game Information</h1>
        <div className="grid text-lg lg:text-base grid-cols-1 md:grid-cols-2  gap-8   lg:gap-4">
          <div className="  ">
            <label htmlFor="required-email" className="text-gray-700">
              Height (cm)
              <span className="text-red-500 required-dot"></span>
            </label>
            <input
              type="text"
              id="required-email"
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
              name="email"
              placeholder="Your Height In cm"
            />
          </div>
          {/* for last name */}
          <div className="  ">
            <label htmlFor="required-email" className="text-gray-700">
              Weight (kg)
              <span className="text-red-500 required-dot"></span>
            </label>
            <input
              type="text"
              id="required-email"
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
              name="email"
              placeholder="Your email"
            />
          </div>
          {/* for last name */}
          <div className="  ">
            <label htmlFor="required-email" className="text-gray-700">
              Player Position
              <span className="text-red-500 required-dot">*</span>
            </label>
            <select
              type="text"
              id="required-email"
              className=" rounded-lg border-transparent flex-1  border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
              name="email"
            >
              <option>Select Position</option>

              <option value="point guard">Point Guard</option>
              <option value="shooting guard">Shooting Guard</option>
              <option value="center">Center</option>
              <option value="power forward">Power Forward</option>
              <option value="shooting forward">Shooting Forward</option>
            </select>
          </div>
          {/*  */}
          <div cllassName="  ">
            <label htmlFor="required-email" className="text-gray-700">
              Preferred Jersey Number
              <span className="text-red-500 required-dot">*</span>
            </label>
            <input
              type="text"
              id="required-email"
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white     placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
              name="email"
              placeholder="Your email"
            />
          </div>
          {/* for last name */}
          <div className=" md:col-span-2   ">
            <label htmlFor="required-email" className="text-gray-700">
              Experience(Achievement)
              <span className="text-red-500 required-dot"></span>
            </label>
            <textarea
              type="text"
              id="required-email"
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
              name="email"
              placeholder="Your email"
            />
          </div>
          {/* for last name */}

          {/* end row */}

          {/* end row */}
        </div>
      </div>
    </form>
  );
};
export default GameInfo;
