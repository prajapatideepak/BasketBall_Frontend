import React, { lazy } from 'react'
import { Route, Routes, Navigate, NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { TbFilePlus } from "react-icons/tb"
import { MdDelete } from "react-icons/md"
import { FiEdit } from "react-icons/fi"
import { toast } from "react-toastify";
import { TbNews } from "react-icons/tb"
import { AiFillCloseCircle } from "react-icons/ai";
import * as Yup from "yup"
import Swal from "sweetalert2";
import { useFormik } from 'formik'


const signUpSchema = Yup.object({
  Image: Yup.string().required("Please select image"),
  Title: Yup.string().required("Please enter title"),
  Tags: Yup.string().required("Please enter tags"),
  Date: Yup.string().required("Please select date"),
  Description: Yup.string().required("Please enter description")
});


const NewsList = () => {
  const navigate = useNavigate();
  const [model, setModel] = React.useState(false);
  const NewsList = [
    {
      News_id: 1,
      photo: "CBL_Images/FWCAQ_Luanda_358.webp",
      Title: "The LJ Cup",
      Tags: "Wellbenix",
      Description: "Lorem ipsum dolor sit amet consectekjdbfvjdjfbhvjdbfvjdb",
      Date: "20/04/2022"
    },
    {
      News_id: 2,
      photo: "CBL_Images/FWCAQ_Luanda_358.webp",
      Title: "NBA National",
      Tags: "FeesManager",
      Description: "Lorem ipsum dolor sit amet consectekjdbfvjdjfbhvjdbfvjdb",
      Date: "20/10/2022"
    },
    {
      News_id: 3,
      photo: "CBL_Images/FWCAQ_Luanda_358.webp",
      Title: "The Basketball Legue",
      Tags: "jhbd",
      Description: "Lorem ipsum dolor sit amet consectekjdbfvjdjfbhvjdbfvjdb",
      Date: "04/12/2022"
    },
    {
      News_id: 4,
      photo: "CBL_Images/FWCAQ_Luanda_358.webp",
      Title: "The LJ",
      Tags: "jhbsdjh",
      Description: "Lorem ipsum dolor sit amet consectekjdbfvjdjfbhvjdbfvjdb",
      Date: "25/12/2022"
    }
  ]
  const [NewsLists, setNewsList] = React.useState(NewsList)
  const initialValues = {
    Image: "",
    Title: "",
    Tags: "",
    Date: "",
    Description: "",
  };

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit(data) {
      // ---------------- Confirmation for update -----------------------
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be Add News!!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Add it!",
      }).then((result) => {
        if (result.isConfirmed) {
          const response = "Create";
          if (response) {
            navigate('/news')
            toast.success("News Add Successfully!");
            setModel(false)
          } else {
            toast.error("Something went wrong");
          }
        }
      });
    }
  })
  const handleDelete = (News_id) => {
    const newlist = NewsList.filter((News) => News.News_id != News_id)
    setNewsList(newlist);
  }
  return (
    <>
      <div className='relative'>
        {model && (
          <div className='w-full h-full bg-black  '>
            <div className='flex justify-center shadow-2xl  '>
              <div className='absolute sm:mx-0  w-[90%] xl:w-[75%] opacity-100 shadow-2xl rounded top-5 sm:top-2 md:top-4 lg:top-10 xl:top-10 bg-white z-50'>
                <div className=''>
                  <div className='flex justify-end '>
                    <button onClick={() => { setModel(false) }} className='absolute translate-x-4 -translate-y-4 font-bold text-2xl p-2 text-[#571217] '>
                      <AiFillCloseCircle />
                    </button>
                  </div>
                  <div className='  rounded-md  my-5 xl:py-10  px-5 xl:px-10'>
                    <h1 className='font-semibold text-lg lg:text-2xl pb-5 xl:pb-10'>
                      Add News
                    </h1>
                    <form action="" className=" space-y-5 xl:space-y-10" onSubmit={handleSubmit}>
                      <div className='flex flex-col lg:flex-row items-center space-y-5 md:space-y-4 lg:space-y-0 lg:space-x-5 xl:space-x-10'>
                        <div className="firstname flex flex-col space-y-2 w-full ">
                          <label htmlFor="Firstname">Photo</label>
                          <input type="file"
                            name='Image'
                            value={values.Image}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="rounded-md py-[3px] md:py-[3px] w-full xl:py-2 px-3 outline-non border border-slate-300 outline-blue-200"

                          />
                          {errors.Image && touched.Image
                            ?
                            <p className='form-error text-red-600 text-sm font-semibold'>{errors.Image}</p>
                            :
                            null}
                        </div>
                        <div className="email flex flex-col space-y-2  w-full ">
                          <label htmlFor="email">Title</label>
                          <input type="text"
                            name="Title"
                            id="Title"
                            value={values.Title}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="rounded-md py-1 md:py-[5px] xl:py-[10px] px-3 outline-non border border-slate-300 outline-blue-200"
                            placeholder="Enter title " />
                          {errors.Title && touched.Title
                            ?
                            <p className='form-error text-red-600 text-sm font-semibold'>{errors.Title}</p>
                            :
                            null}
                        </div>
                      </div>
                      <div className='flex flex-col lg:flex-row items-center space-y-5 lg:space-y-0 lg:space-x-5 xl:space-x-10'>
                        <div className="phone flex flex-col space-y-2 w-full ">
                          <label htmlFor="phone">Tags</label>
                          <input type="text"
                            name="Tags"
                            id="Tags"
                            value={values.Tags}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="rounded-md py-1 md:py-[5px] xl:py-[10px] px-3 outline-non border border-slate-300 outline-blue-200"
                            placeholder="Enter tags " />
                          {errors.Tags && touched.Tags
                            ?
                            <p className='form-error text-red-600 text-sm font-semibold'>{errors.Tags}</p>
                            :
                            null}
                        </div>
                        <div className="password flex flex-col space-y-2 w-full ">
                          <label htmlFor="password">Date</label>
                          <input type="date"
                            name="Date"
                            id="Date"
                            value={values.Date}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="rounded-md py-1 md:py-[5px] xl:py-[10px] px-3 outline-non border border-slate-300 outline-blue-200"
                          />
                          {errors.Date && touched.Date
                            ?
                            <p className='form-error text-red-600 text-sm font-semibold'>{errors.Date}</p>
                            :
                            null}
                        </div>
                      </div>
                      <div className="confirmpassword flex flex-col space-y-2 w-full ">
                        <label htmlFor="confirm password">Description</label>
                        <input type="text"
                          name="Description"
                          id="Description"
                          value={values.Description}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="rounded-md py-1 md:py-[5px] xl:py-[10px] px-3 w-[100%] outline-non border  border-slate-300 outline-blue-200"
                          placeholder="Enter description " />
                        {errors.Description && touched.Description
                          ?
                          <p className='form-error text-red-600 text-sm font-semibold'>{errors.Description}</p>
                          :
                          null}
                      </div>
                      <div className='flex justify-center items-center w-full space-x-5'>
                        <button type="submit" className="
               bg-slate-900   relative inline-flex items-center justify-center  px-4 py-1.5 
              sm:px-8 sm:py-[6px] xl:px-32 xl:py-2 overflow-hidden font-medium tracking-tighter text-white rounded-lg cursor-pointer group"
                        >
                          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#ee6730] rounded-lg group-hover:w-full group-hover:h-56"></span>
                          <span className="relative">Submit</span>
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
          <div className=' xl:px-10 h-full'>
            <div className='flex justify-between py-5 md:py-10 px-5'>
              <h1 className=' font-semibold md:text-2xl'>
                News List
              </h1>
              <button
                onClick={() => { setModel(true) }}
                type="submit"
                className="bg-slate-900  relative inline-flex items-center justify-center px-2  sm:px-4  py-1 sm:py-1.5  overflow-hidden font-medium tracking-tighter text-white rounded-lg cursor-pointer group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#ee6730] rounded-lg group-hover:w-full group-hover:h-56"></span>
                <div className='flex items-center space-x-2'>

                  <span className="relative text-[10px] sm:text-xs md:text-sm xl:text-base">Add News</span>
                  <TbFilePlus className='relative text-xs md:text-xl' />
                </div>
              </button>
            </div>
            <div className='md:px-5 py-3'>
              <ul className='flex md:px-2 2xl:px-10 justify-between bg-gray-300 md:rounded-lg py-[10px] shadow-sm text-black font-medium px-2 '>
                <li className='w-20 text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base '>Sr No</li>
                <li className='w-20 text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base '>Photo</li>
                <li className='w-20 text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base '>Title</li>
                <li className='w-20 text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base '>Tags</li>
                <li className='w-52 text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base '>Description</li>
                <li className='w-20 text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base '>Date</li>
                <li className='w-20 text-center text-[8px] sm:text-[9.5px] md:text-[12px] 2xl:text-base '>Action</li>
              </ul>
              {
                NewsLists.length > 0 ?
                  NewsLists.map((News, index) => {
                    return (
                      <ul key={index} className='flex items-center space-x-2 justify-between font-normal md:px-2 2xl:px-10 py-2 rounded-lg cursor-pointer hover:bg-gray-100 bg-white shadow-sm my-3'>
                        <li className='w-20 text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm text-center'>{News.News_id}</li>
                        <li className='w-20 flex justify-center items-center'> 
                          <img src={News.photo} alt="" className='rounded-full border -[3px] shadow-sm w-5 h-5 sm:w-8 sm:h-8 md:w-14 md:h-14 2xl:w-20 2xl:h-20' />
                        </li> 
                        <li className='w-20 text-center text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm '>{News.Title}</li>
                        <li className='w-20 text-center text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm '>{News.Tags}</li>
                        <li className='w-52 text-center text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm overflow-hidden'>{News.Description}</li>
                        <li className='w-20 text-center text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm'>{News.Date}</li>
                        <li className='w-20 text-center flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-3'>
                          <FiEdit className='text-[11px] md:text-sm lg:text-[19px] ' onClick={() => setModel(true)}  />
                          <MdDelete className='text-[11px] md:text-sm lg:text-[21px] text-red-500' onClick={() => handleDelete(News.News_id)} />
                        </li>
                      </ul>
                    )
                  })
                  :
                  <div className='flex justify-center items-center w-full py-10'>
                    <TbNews className=" text-2xl sm:text-3xl md:text-[30px] text-gray-400 mr-2" />
                    <p className='text-xs xs:text-sm sm:text-lg 2xl:text-[23px] font-medium text-gray-400'>New Not Found</p>
                  </div>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};




export default NewsList
