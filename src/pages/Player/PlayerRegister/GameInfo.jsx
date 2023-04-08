import React from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { setGameInfoForm } from "../../../redux/actions/Player";
import { GameInfoSchema } from "../../../models/GameInfoModel";
import { toast } from "react-toastify";

import {
  useRegisterPlayerMutation,
  useUpdatePlayerDetailsMutation,
} from "../../../services/player";
import BasicInfo from "./BasicInfo";

const GameInfo = ({ index, setIndex }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [playerRegistration, { ...thing }] = useRegisterPlayerMutation();
  const [playerUpdate, { ...updateData }] = useUpdatePlayerDetailsMutation();
  const { PlayerForm } = useSelector((state) => state.player);
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: PlayerForm.gameInfo,
      validationSchema: GameInfoSchema,
      onSubmit: async (values) => {
        await dispatch(setGameInfoForm(values));
        try {
          const fb = new FormData();
          fb.append("logo", PlayerForm.basicInfo?.logo);
          let ok = JSON.stringify({
            PlayerInfo: PlayerForm,
          });
          fb.append("data", ok);
          if (location?.state?.isEdit) {
            fb.append("id", location.state.id);
            playerUpdate(fb).then(console.log("update ho gai"));
          } else {
            playerRegistration(fb).then(console.log("ho gaya"));
          }
        } catch (err) {
          console.log(err);
        }
      },
    });

    
  function setValues() {
    dispatch(setGameInfoForm(values));
  }
  console.log(thing?.error?.data?.message)
  React.useEffect(() => {
    if (thing.isError) {
      toast.error(thing?.error?.data?.message);
    }
    if (thing.isSuccess) {
      if (thing?.data?.success) {
        toast.success("Player Registration Successfull ");
        navigate(`/player/profile-detail/${thing?.data?.data?.id}`);
      }
    }
  }, [thing.isError, thing.isSuccess]);

  React.useEffect(() => {
    if (updateData.isError) {
      toast.error(updateData?.error?.data?.message);
    }
    if (updateData.isSuccess) {
      if (updateData?.data?.success) {
        toast.success("Player Update Successfull ");
        navigate(`/player/profile-detail/${updateData?.data?.data?.id}`);
      }
    }
  }, [updateData.isError, updateData.isSuccess]);

  return (
    <>
      <form
        action=""
        className="flex w-full  space-x-3"
        onBlur={setValues}
        onChange={setValues}
      >
        <div className="w-full  px-5  m-auto dark:bg-gray-800">
          <h1 className="py-2 text-xl text-center md:text-left my-2 text-orange-600">
            Game Information
          </h1>
          <div className="grid text-lg lg:text-base grid-cols-1 md:grid-cols-2 gap-4 lg:gap-2">
            <div className="  ">
              <label htmlFor="required-email" className="text-gray-700">
                Height (cm)
                <span className="text-red-500 required-dot"></span>
              </label>
              <input
                type="number"
                id="height"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.height}
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                name="height"
                placeholder="Enter Your Height In cm"
              />
              <span className="text-sm font-semibold text-red-600 px-1">
                {errors.height && touched.height ? errors.height : null}
              </span>
            </div>
            {/* for last name */}
            <div className="  ">
              <label htmlFor="weight" className="text-gray-700">
                Weight (kg)
                <span className="text-red-500 required-dot"></span>
              </label>
              <input
                type="number"
                id="weight"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.weight}
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                name="weight"
                placeholder="Enter Your Weight in KG"
              />
              <span className="text-sm font-semibold text-red-600 px-1">
                {errors.weight && touched.weight ? errors.weight : null}
              </span>
            </div>
            {/* for last name */}
            <div className="  ">
              <label htmlFor="playerPosition" className="text-gray-700">
                Player Position
                <span className="text-red-500 required-dot">*</span>
              </label>
              <select
                type="text"
                id="playing_position"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.playing_position}
                className=" rounded-lg border-transparent flex-1  border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                name="playing_position"
              >
                <option value={""}>Select Position</option>

                <option value="point guard">Point Guard</option>
                <option value="shooting guard">Shooting Guard</option>
                <option value="center">Center</option>
                <option value="power forward">Power Forward</option>
                <option value="shooting forward">Shooting Forward</option>
              </select>
              <span className="text-sm font-semibold text-red-600 px-1">
                {errors.playing_position && touched.playing_position
                  ? errors.playing_position
                  : null}
              </span>
            </div>
            {/*  */}
            <div>
              <label htmlFor="JerseyNumber" className="text-gray-700">
                Preferred Jersey Number
                <span className="text-red-500 required-dot">*</span>
              </label>
              <input
                type="number"
                id="jersey_no"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.jersey_no}
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white     placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                name="jersey_no"
                placeholder="Enter Your Jersey Number or Preferred Jersey Number "
              />
              <span className="text-sm font-semibold text-red-600 px-1">
                {errors.jersey_no && touched.jersey_no
                  ? errors.jersey_no
                  : null}
              </span>
            </div>
            {/* for last name */}
            <div className=" md:col-span-2   ">
              <label htmlFor="Experience" className="text-gray-700">
                Experience(Achievement)
                <span className="text-red-500 required-dot">*</span>
              </label>
              <textarea
                type="text"
                id="about"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.about}
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                name="about"
                placeholder="Write About Yourself and Your Achivement and Experience "
              />
              <span className="text-sm font-semibold text-red-600 px-1">
                {errors.about && touched.about
                  ? errors.about
                  : null}
              </span>
            </div>
            {/* for last name */}

            {/* end row */}

            {/* end row */}
          </div>
        </div>
      </form>
      <div className="w-full flex justify-end mt-5 sm:mt-10 py-5 px-5 ">
        {location?.state?.isEdit ? (
          <button
            type="button"
            className="bg-[#ee6730] relative inline-flex items-center justify-center px-7 py-2 overflow-hidden text-white rounded-lg cursor-pointer group mr-3"
            onClick={(e) => {
              dispatch(setGameInfoForm(values));
              setIndex(index - 1);
            }}
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-slate-900 rounded-lg group-hover:w-full group-hover:h-56"></span>
            <span className="relative">Cancel</span>
          </button>
        ) : (
          <button
            type="button"
            className="bg-[#ee6730] relative inline-flex items-center justify-center px-8 py-2 overflow-hidden text-white rounded-lg cursor-pointer group mr-3"
            onClick={(e) => {
              dispatch(setGameInfoForm(values));
              setIndex(index - 1);
            }}
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-slate-900 rounded-lg group-hover:w-full group-hover:h-56"></span>
            <span className="relative">Back</span>
          </button>
        )}
        <button
          type="submit"
          className="bg-slate-900 relative inline-flex items-center justify-center px-6 py-2 overflow-hidden text-white rounded-lg cursor-pointer group"
          onClick={handleSubmit}
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#ee6730] rounded-lg group-hover:w-full group-hover:h-56"></span>
          <span className="relative">
            {thing.isLoading
              ? "SUBMIT..."
              : updateData.isLoading
                ? "Updating..."
                : location?.state?.isEdit
                  ? "UPDATE"
                  : "SUBMIT"}
          </span>
        </button>
      </div>
    </>
  );
};
export default GameInfo;
