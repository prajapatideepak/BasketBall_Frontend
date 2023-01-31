import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { HiArrowLeft } from "react-icons/hi"
import { FiKey } from "react-icons/fi"
import { Formik, useFormik } from 'formik'
import * as Yup from "yup"
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import image from "../../../public/CBL_Images/7xm.xyz732342.jpg"

const signUpSchema = Yup.object({
    password: Yup.string().required("Please enter password"),
    confirm_password: Yup.string().required().oneOf([Yup.ref("password"), null],"Confirm Password must match")
});


const initialValues = {
    password: "",
    confirm_password: "",

};


function Password() {

    const notify = () => toast("Password reset Successfully!!");
    const navigate = useNavigate();


    const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit(res) {
            console.log(res, "Res")
            notify()
            navigate("/login")
        }
    })

    console.log(errors, "formik")


    return (
        <div className='flex sm:justify-center lg:justify-start xl:justify-between items-center h-screen bg-white px-10 lg:px-20'>
            <div className="img  hidden lg:block">
                <img src={image} alt="landing" className="lg:w-[500px] lg:h-[400px]  xl:w-[650px] xl:h-[500px] 2xl:h-[500px] 2xl:w-[700px]" />
            </div>
            <div className='lg:px-10 lg:py-10  lg:relative 2xl:right-20'>
                <div className='flex justify-center items-center mt-4 py-5 '>
                    <div className='bg-[#ee663024] px-2 py-2 rounded-full'>
                        <div className='bg-[#ee66304f] px-2 py-2 rounded-full'>
                            <FiKey className='  text-[#ee6730] rounded-full  text-xl ' />
                        </div>
                    </div>
                </div>
                <div className='py-3 space-y-3'>
                    <h1 className='text-3xl font-bold text-center'>Set new password</h1>
                    <div>
                        <p className='font-semibold text-gray-500 text-center text-xs sm:text-base '>Your new password must be different to</p>
                        <p className='font-semibold text-gray-500 text-center text-xs sm:text-base '>Previously used password.</p>
                    </div>
                </div>
                <div className="py-3">
                    <form action="" className='' onSubmit={handleSubmit}>
                        <div className='space-y-7'>
                            <div className='space-y-2'>
                                <label htmlFor="Password" className='font-semibold text-base'>Password</label>
                                <input type="password"
                                    value={values.password}
                                    placeholder='Enter Your Password'
                                    autoComplete='off'
                                    name='password'
                                    id='password'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='w-full rounded-md py-2 px-3 outline-non border border-slate-300 outline-blue-200' />
                                {errors.password && touched.password
                                    ?
                                    <p className='form-error text-red-600 text-sm font-semibold'>{errors.password}</p>
                                    :
                                    null}
                            </div>
                            <div className='space-y-2'>
                                <label htmlFor="confirm_Password" className='font-semibold text-base'>Confirm Password</label>
                                <input type="password"
                                    value={values.Confirm_password}
                                    placeholder='Enter Your Confirm Password'
                                    autoComplete='off'
                                    name='confirm_password'
                                    id='confirm_password'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='w-full rounded-md py-2 px-3 outline-non border border-slate-300 outline-blue-200 ' />
                                    {errors.confirm_password && touched.confirm_password
                                    ?
                                    <p className='form-error text-red-600 text-sm font-semibold'>{errors.confirm_password}</p>
                                    :
                                    null}
                            </div>
                        </div>
                        <div className='py-10'>
                        <button type="submit" className="bg-slate-900  relative inline-flex items-center justify-center w-full px-4 py-1.5 sm:px-8 sm:py-[10px] overflow-hidden font-medium tracking-tighter text-white rounded-lg cursor-pointer group">
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#ee6730] rounded-lg group-hover:w-full group-hover:h-56"></span>
                            <span className="relative">Reset Password</span>
                        </button>
                        </div>
                    </form>

                </div>
                <Link to={"/login"}>
                    <div className='flex justify-center  items-center font-semibold text-slate-400 cursor-pointer hover:text-black space-x-2'>
                        <HiArrowLeft className='text-xl' />
                        <p className=''>Back to Log in</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Password