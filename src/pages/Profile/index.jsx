import React from "react"
import image from "../../../public/CBL_Images/60111-removebg-preview.png"
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from "yup"
import "yup-phone"
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";




const signUpSchema = Yup.object({
  firstname: Yup.string().min(2).max(25).matches(/^[a-zA-Z]+$/, "Please enter only characters").required("Please enter your first name"),
  lastname: Yup.string().min(2).max(25).matches(/^[a-zA-Z]+$/, "Please enter only characters").required("Please enter your last name"),
  email: Yup.string().email().required("Please enter your email"),
  phone: Yup.string().min(10).max(10).matches(/^[0-9]+$/, "Please enter only numbers").phone(null, true, "Invalid phone number").required("Please enter your phone number"),
  password: Yup.string().required("Please enter password"),
  confirmpassword: Yup.string().required("Confirm password is required").oneOf([Yup.ref("password"), null], "Confirm Password must match"),
});


const initialValues = {
  firstname: "shad",
  lastname: "shad",
  email: "shad@gmail.com",
  phone: "1234567890",
  password: "shad",
  confirmpassword: "shad",
};




function VisitorProfile() {

  const [isOnSubmit, setIsOnSubmit] = React.useState(false);
  const [updatetoggle, setupdatetoggle] = React.useState(true)
  const [submittoggle, setsubmittoggle] = React.useState(false)
  const [isEnable, setIsEnable] = React.useState(true);
  const navigate = useNavigate();


  const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit(res) {
      // ---------------- Confirmation for update -----------------------
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be update your profile!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, update it!'
      }).then((result) => {
        if (result.isConfirmed) {
          const response = "Done";
          if (response) {
            navigate('/');
            toast.success('Profile Update Successfully!')
          }
          else {
            toast.error('Something went wrong')
          }
        }
      })
    }
  })

  // --------------- Update Button ---------------------------------
  function handleupdate() {
    setIsEnable(false)
    setupdatetoggle(false)
    setsubmittoggle(true)
  }

  // --------------- Clear Button -----------------------------------
  function handleclear() {
    setupdatetoggle(true)
    setIsEnable(true);
    setsubmittoggle(false)
  }





  return (
    <>

      <div className=" w-full flex flex-col justify-center items-center min-h-screen px-10 xl:px-20 py-10">
        <form action="" className=" mt-14 2xl:mt-12 w-full 2xl:w-[70%] px-5 md:px-10 py-5 md:py-7  rounded-2xl bg-white shadow-2xl " onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center items-center pb-8 md:pb-7 space-y-2">
            <img src={image} alt="" className="w-28 lg:w-[15%] border rounded-full p-2 px-4 bg-[#ee6730]" />
            <p className="text-[#ee6730] font-semibold text-2xl">Visitor Profile</p>
          </div>
          <div className="space-y-5">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-x-10 md:space-y-0  ">
              <div className="firstname flex flex-col space-y-2 w-full ">
                <label htmlFor="Firstname">First Name</label>
                <input type="text"
                  name="firstname"
                  disabled={isEnable}
                  value={values.firstname}
                  id="firstname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="rounded-md py-2 px-3 w-full bg-slate-100 focus:bg-white outline-blue-200"
                  placeholder="Enter your fist name " />
                {errors.firstname && touched.firstname
                  ?
                  <p className='form-error text-red-600 text-sm font-semibold'>{errors.firstname}</p>
                  :
                  null}
              </div>
              <div className="lastname flex flex-col space-y-2 w-full ">
                <label htmlFor="lastname">Last Name</label>
                <input type="text"
                  name="lastname"
                  id="lastname"
                  disabled={isEnable}
                  value={values.lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="rounded-md py-2 px-3 bg-slate-100 focus:bg-white outline-blue-200"
                  placeholder="Enter your last name " />
                {errors.lastname && touched.lastname
                  ?
                  <p className='form-error text-red-600 text-sm font-semibold'>{errors.lastname}</p>
                  :
                  null}
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-x-10 md:space-y-0  ">
              <div className="email flex flex-col space-y-2 w-full ">
                <label htmlFor="email">Email</label>
                <input type="email"
                  name="email"
                  id="email"
                  value={values.email}
                  disabled={isEnable}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="rounded-md py-2 px-3 bg-slate-100 focus:bg-white outline-blue-200"
                  placeholder="Enter your email " />
                {errors.email && touched.email
                  ?
                  <p className='form-error text-red-600 text-sm font-semibold'>{errors.email}</p>
                  :
                  null}
              </div>
              <div className="phone flex flex-col space-y-2 w-full ">
                <label htmlFor="phone">Phone</label>
                <input type="text"
                  name="phone"
                  id="phone"
                  value={values.phone}
                  disabled={isEnable}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="rounded-md py-2 px-3 bg-slate-100 focus:bg-white outline-blue-200"
                  placeholder="Enter your phone number " />
                {errors.phone && touched.phone
                  ?
                  <p className='form-error text-red-600 text-sm font-semibold'>{errors.phone}</p>
                  :
                  null}
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-x-10 md:space-y-0  ">
              <div className="password flex flex-col space-y-2 w-full ">
                <label htmlFor="password">Password</label>
                <input type="password"
                  name="password"
                  id="password"
                  disabled={isEnable}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="rounded-md py-2 px-3 bg-slate-100 focus:bg-white outline-blue-200"
                  placeholder="Enter password " />
                {errors.password && touched.password
                  ?
                  <p className='form-error text-red-600 text-sm font-semibold'>{errors.password}</p>
                  :
                  null}
              </div>
              <div className="confirmpassword flex flex-col space-y-2 w-full ">
                <label htmlFor="confirm password">Confirm password</label>
                <input type="password"
                  name="confirmpassword"
                  id="confirmpassword"
                  disabled={isEnable}
                  value={values.confirmpassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="rounded-md py-2 px-3 bg-slate-100 focus:bg-white outline-blue-200"
                  placeholder="Enter confirm password " />
                {errors.confirmpassword && touched.confirmpassword
                  ?
                  <p className='form-error text-red-600 text-sm font-semibold'>{errors.confirmpassword}</p>
                  :
                  null}
              </div>
            </div>
            {updatetoggle ?
              <div className="w-full flex justify-center py-4 ">
                <button
                  type="submit"
                  className="bg-slate-900 relative inline-flex items-center justify-center px-6 py-2 overflow-hidden text-white rounded-lg cursor-pointer group"
                  onClick={handleupdate}
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#ee6730] rounded-lg group-hover:w-full group-hover:h-56"></span>
                  <span className="relative">Update</span>
                </button>
              </div>
              :
              null
            }
            {submittoggle ?
              <div className="w-full flex justify-center py-4 ">
                <button
                  type="reset"
                  className="bg-[#ee6730] relative inline-flex items-center justify-center px-8 py-2 overflow-hidden text-white rounded-lg cursor-pointer group mr-3"
                  onClick={handleclear}
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-slate-900 rounded-lg group-hover:w-full group-hover:h-56"></span>
                  <span className="relative">Clear</span>
                </button>
                <button
                  type="submit"
                  className="bg-slate-900 relative inline-flex items-center justify-center px-6 py-2 overflow-hidden text-white rounded-lg cursor-pointer group"
                  onClick={handleSubmit}
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#ee6730] rounded-lg group-hover:w-full group-hover:h-56"></span>
                  <span className="relative">SUBMIT</span>
                </button>
              </div>
              :
              null
            }
          </div>
        </form>
      </div>
    </>
  )
}

export default VisitorProfile

