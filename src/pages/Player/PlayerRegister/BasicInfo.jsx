import React from "react";
import { useFormik } from "formik";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Heading from "../../../Component/Heading";
import { useDispatch, useSelector } from "react-redux";
import { setBasicInfoForm } from "../../../redux/actions/Player";
import { basicInfoSchema } from "../../../models/BasicInfoModel";
import "../../../Component/Style/PlayerProfile.css";

const BasicInfo = ({ index, setIndex }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const defaultImage = "/CBL_Images/player-default-profile.webp";
  const [img, setImg] = React.useState(defaultImage);
  const [photo, setPhoto] = React.useState("");
  const { PlayerForm } = useSelector((state) => state.player);
  console.log(PlayerForm)
  const { values, touched, errors, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: PlayerForm.basicInfo,
      validationSchema: basicInfoSchema,
      onSubmit: (values) => {
        console.log(values);
        setIndex(2);
        dispatch(setBasicInfoForm({ ...values, photo: photo }));
      },
    });

  function handleImageUpload(e) {
    setPhoto(() => e.target.files[0]);
    setImg(URL.createObjectURL(photo));
  }

    function handleImageUpload(e) {
    setPhoto(() => e.target.files[0]);
    setImg(URL.createObjectURL(photo));
  }
  // React.useEffect(() => {
  //   if (thing.isError) {
  //     toast.error(thing?.error?.data?.message);
  //   }
  //   if (thing.isSuccess) {
  //     if (thing?.data?.success) {
  //       toast.success("Team Registration Successfull ");

  //       navigate(`/team/profile-detail/${thing?.data?.team?.id}`);
  //     }
  //   }
  // }, [thing.isError, thing.isSuccess]);


  return (
    <>
      <form className="flex w-full  space-x-3">
        <div className="w-full  px-5  m-auto dark:bg-gray-800">
          <div className="grid text-lg lg:text-base grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5  lg:gap-5">
            <div className="md:col-span-2 mt-5 flex items-center md:items-start md:justify-end flex-col">
              <h1 className="py-2 underline underline-offset-4 px-3 text-xl text-orange-600">
                Basic Information
              </h1>
            </div>
            <div className="md:col-span-1  md:flex justify-center md:justify-center items-center ">
              <div className="profile_img_div flex justify-center rounded-full items-center border-2 border-gray-500 shadow-lg">
                <img
                  src={img}
                  width="100%"
                  height="100%"
                  className="object-contain "
                  alt="student profile"
                />
                <div className="profile_img_overlay absolute flex flex-col justify-center items-center">
                  <input
                    type="file"
                    id="photo"
                    className="rounded-md w-16"
                    accept=".png, .jpg, .jpeg"
                    name="photo"
                    value={values.img}
                    onChange={(e) => handleImageUpload(e)}
                    onBlur={handleBlur}
                    onInput={(e) => handleImageUpload(e)}
                  />
                  {img != defaultImage ? (
                    <button
                      className="bg-red-600 px-1 rounded text-white hover:bg-red-400 mt-5 flex items-center justify-center gap-3"
                      onClick={() => {
                        setImg(defaultImage);
                        // document.getElementById('file').value = ''
                      }}
                    >
                      <span> Remove</span>
                    </button>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="">
              <label htmlFor="firstName" className="text-gray-700">
                First Name
                <span className="text-red-500 required-dot">*</span>
              </label>
              <input
                type="text"
                id="first_Name"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                name="first_Name"
                value={values.first_name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter Your First Name"
              />
              <span className="text-sm font-semibold text-red-600 px-1">
                {errors.first_name && touched.first_name
                  ? errors.first_name
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
                id="middle_name"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                name="middle_name"
                value={values.middle_name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter Your Middle Name"
              />
              <span className="text-sm font-semibold text-red-600 px-1">
                {errors.middle_name && touched.middle_name
                  ? errors.middle_name
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
                id="last_name"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                name="last_name"
                placeholder="Enter Your Last Name"
                value={values.last_name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span className="text-sm font-semibold text-red-600 px-1">
                {errors.last_name && touched.last_name ? errors.last_name : null}
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
                id="mobile"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                name="mobile"
                value={values.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter Your Mobile Number"
              />
              <span className="text-sm font-semibold text-red-600 px-1">
                {errors.mobile && touched.mobile ? errors.mobile : null}
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
                id="alternate_mobile"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                name="alternate_mobile"
                value={values.alternate_mobile}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter Your alternative Number"
              />
              <span className="text-sm font-semibold text-red-600 px-1">
                {errors.alternate_mobile && touched.alternate_mobile
                  ? errors.alternate_mobile
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
                id="date_of_birth"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                name="date_of_birth"
                value={values.date_of_birth}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span className="text-sm font-semibold text-red-600 px-1">
                {errors.date_of_birth && touched.date_of_birth ? errors.date_of_birth : null}
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
                className={`text-sm font-semibold  text-red-600 px-1 ${errors.gender && touched.gender ? "" : "hidden  "
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
      <motion.div className="flex justify-end items-center p-4 ">
        <div>
          <button
            type="button"
            className="bg-slate-900 relative inline-flex items-center justify-center px-8 py-2 overflow-hidden text-white rounded-lg cursor-pointer group mr-3"
            onClick={(e) => {
              handleSubmit();
              // setIndex(2);
            }}
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#ee6730]  rounded-lg group-hover:w-full group-hover:h-56"></span>
            <span className="relative">
              Next
            </span>
          </button>
        </div>
      </motion.div>
    </>
  );
};
export default BasicInfo;
