import React from "react";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import Heading from "../../../Component/Heading";
import { useDispatch, useSelector } from "react-redux";
import { setBasicInfoForm } from "../../../redux/actions/Player";
import { basicInfoSchema } from "../../../models/BasicInfoModel";

const BasicInfo = ({ index, setIndex }) => {
  const dispatch = useDispatch();
  const { PlayerForm } = useSelector((state) => state.player);
  console.log(PlayerForm);

  const { values, touched, errors, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: PlayerForm.basicInfo,
      validationSchema: basicInfoSchema,
      onSubmit: (values) => {
        console.log(values);
        setIndex(2);
        dispatch(setBasicInfoForm(values));
      },
    });

  return (
    <>
      <form className="flex w-full  space-x-3">
        <div className="w-full  px-5  m-auto dark:bg-gray-800">
          <div className="grid text-lg lg:text-base grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5   lg:gap-5">
            <div className="md:col-span-2 mt-5 flex items-center md:items-start md:justify-end flex-col">
              <h1 className="py-2 underline underline-offset-4 px-3 text-xl text-orange-600">
                Basic Information
              </h1>
            </div>
            <div className="md:col-span-1   md:flex justify-center md:justify-center items-center ">
              <div className="flex flex-col items-center mb-2 md:items-center md:justify-end px-8">
                <img
                  className="w-24 h-24 md:w-28 md:h-28 rounded-full shadow-xl object-cover"
                  src="/CBL_Images/player-default-profile.webp"
                />
                <input
                  type="file"
                  id="for-file-upload"
                  className="hidden  "
                  placeholder=""
                />
                <div className="mt-2 ">
                  <label
                    htmlFor="for-file-upload"
                    className="cursor-pointer text-sm   font-semibold px-4  bg-orange-600 text-white py-1 rounded shadow-xl "
                  >
                    {" "}
                    Upload Image
                  </label>
                </div>
              </div>
            </div>
            <div className="  ">
              <label htmlFor="firstName" className="text-gray-700">
                First Name
                <span className="text-red-500 required-dot">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter Your First Name"
              />
              <span className="text-sm font-semibold text-red-600 px-1">
                {errors.firstName && touched.firstName
                  ? errors.firstName
                  : null}
              </span>
            </div>
            {/* for last name */}
            <div className="  ">
              <label htmlFor="middleName" className="text-gray-700">
                Middle Name
                <span className="text-red-500 required-dot"></span>
              </label>
              <input
                type="text"
                id="middleName"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                name="middleName"
                value={values.middleName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter Your Middle Name"
              />
              <span className="text-sm font-semibold text-red-600 px-1">
                {errors.middleName && touched.middleName
                  ? errors.middleName
                  : null}
              </span>
            </div>

            {/* for last name */}
            <div className="  ">
              <label htmlFor="lastName" className="text-gray-700">
                Last Name
                <span className="text-red-500 required-dot">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                name="lastName"
                placeholder="Enter Your Last Name"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span className="text-sm font-semibold text-red-600 px-1">
                {errors.lastName && touched.lastName ? errors.lastName : null}
              </span>
            </div>

            {/*  */}
            <div className="  ">
              <label htmlFor="mobileNo" className="text-gray-700">
                Mobile No(Whatsapp No)
                <span className="text-red-500 required-dot">*</span>
              </label>
              <input
                type="text"
                disabled={true}
                id="mobileNo"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-gray-200     placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                name="mobileNo"
                value={values.mobileNo}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter Your Mobile Number"
              />
              <span className="text-sm font-semibold text-red-600 px-1">
                {errors.mobileNo && touched.mobileNo ? errors.mobileNo : null}
              </span>
            </div>
            {/* for last name */}
            <div className="  ">
              <label htmlFor="alternativeNo" className="text-gray-700">
                Alternative Number
                <span className="text-red-500 required-dot"></span>
              </label>
              <input
                type="text"
                id="alternativeNo"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                name="alternativeNo"
                value={values.alternativeNo}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter Your alternative Number"
              />
              <span className="text-sm font-semibold text-red-600 px-1">
                {errors.alternativeNo && touched.alternativeNo
                  ? errors.alternativeNo
                  : null}
              </span>
            </div>
            {/* for last name */}

            {/* end row */}
            <div className="  ">
              <label htmlFor="dob" className="text-gray-700">
                Date of Birth
                <span className="text-red-500 required-dot">*</span>
              </label>
              <input
                type="date"
                id="dob"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                name="dob"
                value={values.dob}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span className="text-sm font-semibold text-red-600 px-1">
                {errors.dob && touched.dob ? errors.dob : null}
              </span>
            </div>
            {/* for last name */}
            <div className=" ">
              <label htmlFor="gender" className="text-gray-700">
                Gender
                <span className="text-red-500 required-dot">*</span>
              </label>
              <div className="flex space-x-2 bg-white items-center text-gray-700 rounded-lg border border-gray-300 py-2 px-4">
                <div className="flex  justify-center  items-center space-x-2">
                  <label className="cursor-pointer" c htmlFor="male">
                    Male
                  </label>
                  <input
                    className="w-4 h-4 cursor-pointer"
                    type="radio"
                    checked={values.gender == "m"}
                    id="male"
                    name="gender"
                    value={"m"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="flex justify-center  items-center space-x-2">
                  <label className="cursor-pointer" htmlFor="female">
                    Female
                  </label>

                  <input
                    className="w-4 h-4 cursor-pointer"
                    type="radio"
                    id="female"
                    checked={values.gender == "f"}
                    name="gender"
                    value={"f"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div>
                  <div className="flex justify-center  items-center space-x-2">
                    <label className="cursor-pointer" htmlFor="other">
                      Other
                    </label>

                    <input
                      className="w-4 h-4 cursor-pointer"
                      type="radio"
                      id="other"
                      name="gender"
                      checked={values.gender == "o"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={"o"}
                    />
                  </div>
                </div>
              </div>
              <span
                className={`text-sm font-semibold  text-red-600 px-1 ${
                  errors.gender && touched.gender ? "" : "hidden  "
                }`}
              >
                {errors.gender && touched.gender ? errors.gender : null}
              </span>
            </div>
            {/* for last name */}
            <div className="  ">
              <label htmlFor="required-email" className="text-gray-700">
                Pincode
                <span className="text-red-500 required-dot">*</span>
              </label>
              <input
                type="text"
                id="pincode"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                name="pincode"
                placeholder="Enter Your Pincode"
                value={values.pincode}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span className="text-sm font-semibold text-red-600 px-1">
                {errors.pincode && touched.pincode ? errors.pincode : null}
              </span>
            </div>
            {/* end row */}
          </div>
        </div>
      </form>
      <motion.div className="flex justify-between items-center p-4 ">
        <div>
          {index > 1 && (
            <button
              onClick={(e) => setIndex(index - 1)}
              type={"button"}
              className="px-6 bg-gray-50 border-black py-1  border rounded text-gray-800 text-lg    "
            >
              Back
            </button>
          )}
        </div>
        <div>
          <button
            onClick={(e) => {
              handleSubmit();
              // setIndex(2);
            }}
            type="submit"
            className="px-6 font-semibold bg-orange-600 border-orange-800 py-1  border rounded text-white text-lg    "
          >
            {index > 1 ? "Submit" : "Next"}
          </button>
        </div>
      </motion.div>
    </>
  );
};
export default BasicInfo;
