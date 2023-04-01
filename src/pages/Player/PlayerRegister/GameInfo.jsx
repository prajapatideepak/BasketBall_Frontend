import React from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { setGameInfoForm } from "../../../redux/actions/Player";
import { GameInfoSchema } from "../../../models/GameInfoModel";
import { useRegisterPlayer } from "../../../hooks/usePost";


const GameInfo = ({ index, setIndex }) => {
  const dispatch = useDispatch();
  const RegisterTeam = useRegisterPlayer();
  const { PlayerForm } = useSelector((state) => state.player);
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: PlayerForm.gameInfo,
      validationSchema: GameInfoSchema,
      onSubmit: (values) => {
        dispatch(setGameInfoForm(values));
        try {
          const fb = new FormData();
          let ok = JSON.stringify({
            PlayerInfo: PlayerForm,
          });
          // RegisterTeam.mutate(ok);
        } catch (err) {
          console.log(err);
        }
      },
    });

  return (
    <>
      <form action="" className="flex w-full  space-x-3">
        <div className="w-full  px-5  m-auto dark:bg-gray-800">
          <h1 className="py-2 text-xl text-center md:text-left my-2 text-orange-600">
            Game Information
          </h1>
          <div className="grid text-lg lg:text-base grid-cols-1 md:grid-cols-2  gap-4   lg:gap-2">
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
                id="playerPosition"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.playerPosition}
                className=" rounded-lg border-transparent flex-1  border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                name="playerPosition"
              >
                <option value={""}>Select Position</option>

                <option value="point guard">Point Guard</option>
                <option value="shooting guard">Shooting Guard</option>
                <option value="center">Center</option>
                <option value="power forward">Power Forward</option>
                <option value="shooting forward">Shooting Forward</option>
              </select>
              <span className="text-sm font-semibold text-red-600 px-1">
                {errors.playerPosition && touched.playerPosition
                  ? errors.playerPosition
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
                id="JerseyNumber"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.JerseyNumber}
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white     placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                name="JerseyNumber"
                placeholder="Enter Your Jersey Number or Preferred Jersey Number "
              />
              <span className="text-sm font-semibold text-red-600 px-1">
                {errors.JerseyNumber && touched.JerseyNumber
                  ? errors.JerseyNumber
                  : null}
              </span>
            </div>
            {/* for last name */}
            <div className=" md:col-span-2   ">
              <label htmlFor="Experience" className="text-gray-700">
                Experience(Achievement)
                <span className="text-red-500 required-dot"></span>
              </label>
              <textarea
                type="text"
                id="Experience"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Experience}
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                name="Experience"
                placeholder="Write About Yourself and Your Achivement and Experience "
              />
              <span className="text-sm font-semibold text-red-600 px-1">
                {errors.Experience && touched.Experience
                  ? errors.Experience
                  : null}
              </span>
            </div>
            {/* for last name */}

            {/* end row */}

            {/* end row */}
          </div>
        </div>
      </form>
      <motion.div className="flex justify-between items-center p-4 ">
        <div>
          {index > 1 && (
            <button
              onClick={(e) => {
                dispatch(setGameInfoForm(values));
                setIndex(index - 1);
              }}
              className="px-6 bg-gray-50 border-black py-1  border rounded text-gray-800 text-lg    "
            >
              Back
            </button>
          )}
        </div>
        <div>
          <button
            onClick={handleSubmit}
            type={"submit"}
            className="px-6 font-semibold bg-orange-600 border-orange-800 py-1  border rounded text-white text-lg    "
          >
            {index > 1 ? "Submit" : "Next"}
          </button>
        </div>
      </motion.div>
    </>
  );
};
export default GameInfo;
