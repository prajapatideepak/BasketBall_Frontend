import React, { lazy, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { TbFilePlus } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { toast } from "react-toastify";
import { GrGallery } from "react-icons/gr";
import { AiFillCloseCircle } from "react-icons/ai";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import moment from "moment";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import {
  useGetAllGalleryQuery,
  useRegisterGalleryMutation
} from "../../services/gallery"

const signUpSchema = Yup.object({
  category: Yup.string().required("Please enter category"),
});

const AddEditGallery = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [photo, setphoto] = React.useState("");
  const [model, setModel] = React.useState(false);
  const [pageNo, setPageNo] = React.useState(1);
  const { isLoading, data } = useGetAllGalleryQuery({
    pageNo: pageNo - 1,
  });
  const [galleryRegistration, { ...thing }] = useRegisterGalleryMutation();
  const initialValues = {
    category: ""
  }
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit(data) {
        try {
          const fd = new FormData();
          fd.append("photo", photo);
          let ok = JSON.stringify({
            GalleryInfo: data,
          });
          fd.append("data", ok);
          // if (value) {
          //   fb.append("id", value.id);
          //   useUpdateNewsDetailsMutation(fb).then(console.log("update ho gai"));
          // } else {
          galleryRegistration(fd).then(console.log("ho gaya"));
          // }
        } catch (err) {
          console.log(err);
        }
      },
    });

  const handleDelete = (id) => {
    alert(id)
    useDeleteNewsDetailsMutation(id)
  };

  const handleUpdate = (id) => {
    let updategallery = data?.data?.find((n) => {
      return n?.id == id;
    });
    setModel(true);
    setValue(updategallery)
  };

  React.useEffect(() => {
    if (thing.isError) {
      toast.error(thing?.error?.data?.message);
    }
    if (thing.isSuccess) {
      if (thing?.data?.success) {
        toast.success("Gallery Addes Successfull ");
        setModel(false);
      }
    }
  }, [thing.isError, thing.isSuccess]);

  function handleImageUpload(e) {
    setphoto(e.target.files[0]);
  }

  return (
    <>
      <div className="relative">
        {model && (
          <div className="w-full h-full bg-black  ">
            <div className="flex justify-center shadow-2xl  ">
              <div className="absolute sm:mx-0 w-[90%] xl:w-[30%] opacity-100 shadow-2xl rounded top-5 sm:top-2 md:top-4 lg:top-10 xl:top-20 bg-white z-50 ">
                <div className="">
                  <div className="flex justify-end ">
                    <button
                      onClick={() => {
                        setModel(false);
                      }}
                      className="absolute translate-x-4 -translate-y-4 font-bold text-2xl p-2 text-[#571217] "
                    >
                      <AiFillCloseCircle />
                    </button>
                  </div>
                  <div className="  rounded-md  my-5 xl:py-4  px-5 xl:px-10">
                    <h1 className="font-semibold text-lg lg:text-2xl pb-5 xl:pb-10">
                      Add Gallery
                    </h1>
                    <form
                      action=""
                      className=" space-y-5 xl:space-y-10 "
                      onSubmit={handleSubmit}
                    >
                      <div className="flex flex-col  items-center space-y-5 md:space-y-5">
                        <div className="firstname flex flex-col space-y-2 w-full ">
                          <label htmlFor="Firstname">Photo</label>
                          <input
                            type="file"
                            name="photo"
                            // value={value.photo ? value.photo : ""}
                            accept=".png, .jpg, .jpeg"
                            onChange={(e) => handleImageUpload(e)}
                            className="rounded-md py-[3px] md:py-[3px] w-full xl:py-2 px-3 outline-non border border-slate-300 outline-blue-200"
                          />
                        </div>
                        <div className="email flex flex-col space-y-2  w-full ">
                          <label htmlFor="email">Category</label>
                          <select
                            name="category"
                            id="category"
                            className="rounded-md py-[3px] md:py-[3px] w-full xl:py-2 px-3 outline-non border border-slate-300 outline-blue-200"
                            value={values.category}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            <option value="">Select Category</option>
                            <option value="champ">Champ</option>
                            <option value="award">Awards</option>
                          </select>
                          {errors.category && touched.category ? (
                            <p className="form-error text-red-600 text-sm font-semibold">
                              {errors.category}
                            </p>
                          ) : null}
                        </div>
                      </div>
                      <div className="flex justify-center items-center w-full space-x-5 ">
                        <button
                          type="submit"
                          disabled={isLoading}
                          className={`${isLoading ? "bg-[#ee6730]" : "#ee6730"}
               bg-slate-900   relative inline-flex items-center justify-center  px-4 py-1.5 
              sm:px-8 sm:py-[6px] xl:px-32 xl:py-2 overflow-hidden font-medium tracking-tighter text-white rounded-lg cursor-pointer group`}
                        >
                          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#ee6730] rounded-lg group-hover:w-full group-hover:h-56"></span>
                          <span className="relative">
                            {/* {thing.isLoading
                              ? "SUBMIT..."
                              : updateData.isLoading
                                ? "Updating..."
                                : location?.state?.isEdit
                                  ? "UPDATE"
                                  : "SUBMIT"} */}
                            {thing.isLoading ? "SUBMIT..." : "SUBMIT"}
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className={`bg-slate-100 ${model && "opacity-10"}`}>
          <div className=" xl:px-10 h-full">
            <div className="flex justify-between py-5 md:py-10 px-5">
              <h1 className=" font-semibold md:text-2xl">Gallery List</h1>
              <button
                onClick={() => {
                  setModel(true);
                }}
                type="submit"
                className="bg-slate-900  relative inline-flex items-center justify-center px-2  sm:px-4  py-1 sm:py-1.5  overflow-hidden font-medium tracking-tighter text-white rounded-lg cursor-pointer group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#ee6730] rounded-lg group-hover:w-full group-hover:h-56"></span>
                <div className="flex items-center space-x-2">
                  <span className="relative text-[10px] sm:text-xs md:text-sm xl:text-base">
                    Add Gallery
                  </span>
                  <TbFilePlus className="relative text-xs md:text-xl" />
                </div>
              </button>
            </div>
            <div className="md:px-5 py-3">
              <ul className="flex md:px-2 2xl:px-10 justify-between bg-gray-300 md:rounded-lg py-[10px] shadow-sm text-black font-medium px-2 ">
                <li className="w-20 text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base ">
                  Sr No
                </li>
                <li className="w-20 text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base ">
                  Photo
                </li>
                <li className="w-20 text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base ">
                  Title
                </li>
                <li className="w-20 text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base ">
                  Date
                </li>
                <li className="w-20 text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base ">
                  Action
                </li>
              </ul>
              {data?.data?.length > 0 ? (
                data?.data?.map((Gallery, index) => {
                  return (
                    <ul
                      key={index}
                      className="flex items-center space-x-2 justify-between font-normal md:px-2 2xl:px-10 py-2 rounded-lg cursor-pointer hover:bg-gray-100 bg-white shadow-sm my-3"
                    >
                      <li className="w-20 text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm text-center">
                        {Gallery?.id ? Gallery?.id : ""}
                      </li>
                      <li className="w-20 flex justify-center items-center">
                        <img
                          src={Gallery?.photo ? Gallery?.photo : ""}
                          alt=""
                          className="rounded-full border -[3px] shadow-sm w-5 h-5 sm:w-8 sm:h-8 md:w-14 md:h-14 2xl:w-20 2xl:h-20"
                        />
                      </li>
                      <li className="w-20 text-center text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm ">
                        {Gallery?.category ? Gallery?.category : ""}
                      </li>
                      <li className="w-20 text-center text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm">
                        {Gallery?.created_at
                          ? moment(Gallery?.created_at).format("DD / MM / YY")
                          : ""}
                      </li>
                      <li className="w-20 text-center flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-3">
                        <FiEdit
                          className="text-[11px] md:text-sm lg:text-[19px] "
                          onClick={() => handleUpdate(Gallery?.id ? Gallery?.id : "")}
                        />
                        <MdDelete
                          className="text-[11px] md:text-sm lg:text-[21px] text-red-500"
                          onClick={() => handleDelete(Gallery?.id ? Gallery?.id : "")}
                        />
                      </li>
                    </ul>
                  );
                })
              ) : (
                <div className="flex justify-center items-center w-full py-10">
                  <GrGallery className=" text-2xl sm:text-3xl md:text-[30px] text-gray-400 mr-2" />
                  <p className="text-xs xs:text-sm sm:text-lg 2xl:text-[20px] font-medium text-gray-400">
                    Gallery Not Found
                  </p>
                </div>
              )}
            </div>
            {
              data?.data?.length > 0 ?
                <div className="flex  justify-center items-center text-gray-400 py-5 space-x-2 mt-5 text-sm">
                  <button
                    onClick={(e) => {
                      setPageNo(() => pageNo - 1);
                    }}
                    disabled={pageNo == 1}
                    className="cursor-pointer disabled:cursor-default disabled:opacity-30 p-2 border rounded border-gray-400"
                  >
                    <IoIosArrowBack />
                  </button>
                  <div className="cursor-pointer px-4 py-1  border rounded bg-[#ee6730] text-base text-white shadow-xl">
                    {" "}
                    {pageNo}
                  </div>
                  <button
                    onClick={(e) => {
                      setPageNo(() => pageNo + 1);
                    }}
                    disabled={data?.AllNews?.length < 10}
                    className="cursor-pointer disabled:opacity-30 disabled:cursor-default p-2 border rounded border-gray-400"
                  >
                    {" "}
                    <IoIosArrowForward />
                  </button>
                </div>
                :
                null
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEditGallery;
