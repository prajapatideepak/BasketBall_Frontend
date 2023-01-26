import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Formik, useFormik } from 'formik'
import * as Yup from "yup"
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import image from "../../../public/CBL_Images/7xm.xyz288133.jpg"
import google from "../../../public/CBL_Images/google.png"

const signUpSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().required("Please enter password")
});


const initialValues = {
    email: "",
    password: "",
};

function Login() {

    const notify = () => toast("Password reset Successfully!!");
    const navigate = useNavigate();


    const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit(res) {
            console.log(res, "Res")
            notify()
            navigate("/")
        }
    })

    console.log(errors, "formik")


    return (
        <div className='flex justify-center h-screen items-center  bg-white  lg:space-x-32 xl:space-52 2xl:space-x-48'>
            <div className="img lg:w-[450px] lg:h-[350px] xl:w-[500px] xl:h-[400px] 2xl:h-[500px] 2xl:w-[600px] hidden lg:block">
                <img src={image} alt="landing" className="" />
            </div>

            <div className=' 2xl:w-[27%] px-5 mt-4  '>
                <div className=' space-y-3  '>
                    <h1 className='text-3xl font-bold text-center uppercase'>Login</h1>
                    <p className=' text-gray-500 text-center text-xs sm:text-base '>Wellcome back! Please enter your details.</p>
                </div>
                <div className='border py-2 my-7 flex justify-center items-center px-5 rounded-md space-x-2 cursor-pointer hover:border-[#ee6730] duration-200'>
                    <img src={google} alt="" className='w-7' />
                    <p>Log in with Google</p>
                </div>
                <div className='flex justify-center items-center'>
                    Or
                </div>
                <form action="" className='space-y-3' onSubmit={handleSubmit}>
                    <div className='space-y-5 py-4 '>
                        <div className='space-y-2'>
                            <label htmlFor="Email" className='font-semibold text-base'>Email</label>
                            <input type="Email"
                                value={values.email}
                                placeholder='Enter Your Email'
                                autoComplete='off'
                                name='email'
                                id='email'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className='w-full rounded-md py-2 px-3 outline-non border border-slate-300 focus:outline-blue-500' />
                            {errors.email && touched.email
                                ?
                                <p className='form-error text-red-600 text-sm font-semibold'>{errors.email}</p>
                                :
                                null}
                        </div>
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
                                className='w-full rounded-md py-2 px-3 outline-non border border-slate-300 focus:outline-blue-500' />
                            {errors.password && touched.password
                                ?
                                <p className='form-error text-red-600 text-sm font-semibold'>{errors.password}</p>
                                :
                                null}
                        </div>
                    </div>
                    <Link to={"/ForgetPassword"}>
                        <div className=' flex justify-end items-end'>
                            <h1 className='text-sm underline font-semibold text-[#ee6730] cursor-pointer'>Forget Password?</h1>
                        </div>
                    </Link>
                    <div className='py-1'>

                        <button type='submit' className='py-2  uppercase bg-[#ee6730] hover:shadow-none hover:border-[#ee6730] border-[#ee6730] border hover:bg-white hover:text-[#ee6730] duration-500 shadow-sm font-sans shadow-[#ee6730] px-20 rounded-md w-full text-white font-semibold text-base'>
                            Submit
                        </button>
                    </div>
                </form>
                <div className='text-center mt-5 text-slate-600'>
                    Don't have an account?
                    <Link to={"/register"}>
                        <span className='text-black font-semibold cursor-pointer hover:text-[#ee6730] px-1'>Sign up for free</span>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Login

