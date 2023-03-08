import { lazy, react, useState } from 'react'
import { useNavigate } from "react-router-dom";
import * as Yup from "yup"
import { useFormik } from 'formik'
import { toast } from 'react-toastify';



const signUpSchema = Yup.object({
  Image: Yup.string().required("Please select image"),
  Title: Yup.string().required("Please enter title"),
  Tags: Yup.string().required("Please enter tags"),
  Date: Yup.string().required("Please select date"),
  Description: Yup.string().required("Please enter description")
});

const NewsAddEdit = () => {
  const navigate = useNavigate();
  const initialValues = {
    Image: "",
    Title: "",
    Tags: "",
    Date: "",
    Description: "",
  };

  const notify = () => toast("News add successfully!!");
  const [isOnSubmit, setIsOnSubmit] = useState(false);

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit(res) {
      setIsOnSubmit(true)
      notify()
      navigate('/news')
    }
  })
  return (
    <>
      <div className=' w-full flex justify-center items-center h-full '>
        <div className='flex w-full justify-center items-center'>
          <div className=' bg-white shadow-lg rounded-md  my-5 w-[80%] py-10  px-10'>
            <h1 className=' font-semibold text-2xl pb-10'>
              Add News
            </h1>
            <form action="" className="space-y-10" onSubmit={handleSubmit}>
              <div className='flex items-center space-x-10'>
                <div className="firstname flex flex-col space-y-2 w-full ">
                  <label htmlFor="Firstname">Photo</label>
                  <input type="file"
                    name='Image'
                    value={values.Image}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="rounded-md py-2 px-3 outline-non border border-slate-300 outline-blue-200"

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
                    className="rounded-md py-[10px] px-3 outline-non border border-slate-300 outline-blue-200"
                    placeholder="Enter title " />
                  {errors.Title && touched.Title
                    ?
                    <p className='form-error text-red-600 text-sm font-semibold'>{errors.Title}</p>
                    :
                    null}
                </div>
              </div>
              <div className='flex items-center space-x-10'>
                <div className="phone flex flex-col space-y-2 w-full ">
                  <label htmlFor="phone">Tags</label>
                  <input type="text"
                    name="Tags"
                    id="Tags"
                    value={values.Tags}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="rounded-md py-[10px] px-3 outline-non border border-slate-300 outline-blue-200"
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
                    className="rounded-md py-[10px] px-3 outline-non border border-slate-300 outline-blue-200"
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
                  className="rounded-md py-[10px] px-3 w-[100%] outline-non border  border-slate-300 outline-blue-200"
                  placeholder="Enter description " />
                {errors.Description && touched.Description
                  ?
                  <p className='form-error text-red-600 text-sm font-semibold'>{errors.Description}</p>
                  :
                  null}
              </div>
              <div className='flex justify-center items-center w-full pt-5 space-x-5'>
                <button type="submit" onClick={() => { navigate(-1); }} className="
                bg-[#ee6730]   relative inline-flex items-center justify-center  px-4 py-1.5 
              sm:px-8 sm:py-[10px] overflow-hidden font-medium tracking-tighter text-white rounded-lg cursor-pointer group"
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-slate-900 rounded-lg group-hover:w-full group-hover:h-56"></span>
                  <span className="relative">Back</span>
                </button>
                <button type="submit" className="
               bg-slate-900   relative inline-flex items-center justify-center  px-4 py-1.5 
              sm:px-8 sm:py-[10px] overflow-hidden font-medium tracking-tighter text-white rounded-lg cursor-pointer group"
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#ee6730] rounded-lg group-hover:w-full group-hover:h-56"></span>
                  <span className="relative">Submit</span>
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  );
};

export default NewsAddEdit
