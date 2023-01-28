import React from "react"
import image from "../../../public/CBL_Images/7xm.xyz557949.jpg"
import { Link } from 'react-router-dom'
import google from "../../../public/CBL_Images/google.png"
import { useFormik } from 'formik'
import * as Yup from "yup"
import "yup-phone"
import { HiArrowLeft } from "react-icons/hi"
import { toast } from 'react-toastify';
import { BsFillPatchCheckFill } from "react-icons/bs"


const signUpSchema = Yup.object({
    firstname: Yup.string().min(2).max(25).matches(/^[a-zA-Z]+$/, "Please enter only characters").required("Please enter your first name"),
    lastname: Yup.string().min(2).max(25).matches(/^[a-zA-Z]+$/, "Please enter only characters").required("Please enter your last name"),
    email: Yup.string().email().required("Please enter your email"),
    phone: Yup.string().min(10).max(10).matches(/^[0-9]+$/, "Please enter only numbers").phone(null, true, "Invalid phone number").required("Please enter your phone number"),
    password: Yup.string().required("Please enter password"),
    Confirmpassword: Yup.string().required("Confirm password is required").oneOf([Yup.ref("password"), null], "Confirm Password must match"),
    terms: Yup.string().required("Please select Terms and Conditions"),
    policy: Yup.string().required("Please select Terms and Conditions")
});


const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    Confirmpassword: "",
    terms: "",
    policy: ""
};




function Register() {

    const notify = () => toast("Link Send Successfully!!");
    const [isOnSubmit, setIsOnSubmit] = React.useState(false);

    const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit(res) {
            console.log(res, "Res")
            setIsOnSubmit(true)
            notify()
        }
    })

    console.log(errors, "formik")


    return (
        <>
            <div className="min-h-screen flex justify-center items-center px-10 sm:px-20 bg-white ">
                <div className="flex xl:flow-row justify-center items-center">
                    <div className=" 2xl:w-[50%]  xl:block hidden">
                        <img src={image} alt="" />
                    </div>
                    <div className=" w-[100%] xl:px-10 py-10 xl:mx-10 2xl:w-[50%]">
                        <div className={`${isOnSubmit ? "block" : "hidden"} space-y-5 `}>
                            <div className="flex justify-center items-center ">
                                <BsFillPatchCheckFill className="text-5xl text-green-700" />
                            </div>
                            <div className="space-y-2">
                                <p className='font-semibold text-gray-500 text-center text-2xl sm:text-base '>The verification link is  send successfully to on your</p>
                                <p className='font-semibold text-gray-500 text-center text-2xl sm:text-base '> Mail or SMS Please check it.</p>
                            </div>
                            <Link to={"/login"}>
                                <div className='flex justify-center  py-5 items-center font-semibold text-slate-400 cursor-pointer hover:text-black space-x-2'>
                                    <HiArrowLeft className='text-xl' />
                                    <p className=''>Back to Account Create</p>
                                </div>
                            </Link>
                        </div>
                        <h1 className={`${isOnSubmit ? "hidden" : "block"} text-[#ee6730] text-3xl text-center font-bold`}>Sign Up</h1>
                        <div className={`${isOnSubmit ? "hidden" : "block"}`}>
                            <div className='border py-2 my-8 flex justify-center items-center px-5 rounded-md space-x-2 cursor-pointer hover:border-[#ee6730] duration-200'>
                                <img src={google} alt="" className='w-7' />
                                <p>Continue with Google</p>
                            </div>
                            <div className='flex text-slate-500 justify-center  text-lg  items-center'>
                                Or
                            </div>
                            <div className="py-5">
                                <form action="" className="space-y-5" onSubmit={handleSubmit}>
                                    <div className="flex flex-col md:flex-row justify-center items-center w-full md:space-y-0 md:space-x-5 space-y-5 lg:space-x-7">
                                        <div className="firstname flex flex-col space-y-2 w-full ">
                                            <label htmlFor="Firstname">First Name</label>
                                            <input type="text"
                                                name="firstname"
                                                value={values.firstname}
                                                id="firstname"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className="rounded-md py-2 px-3 outline-non border border-slate-300 outline-blue-200"
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
                                                value={values.lastname}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className="rounded-md py-2 px-3 outline-non border border-slate-300 outline-blue-200"
                                                placeholder="Enter your last name " />
                                            {errors.lastname && touched.lastname
                                                ?
                                                <p className='form-error text-red-600 text-sm font-semibold'>{errors.lastname}</p>
                                                :
                                                null}
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row justify-center items-center w-full md:space-y-0 md:space-x-5 space-y-5 lg:space-x-7">
                                        <div className="email flex flex-col space-y-2 w-full ">
                                            <label htmlFor="email">Email</label>
                                            <input type="email"
                                                name="email"
                                                id="email"
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className="rounded-md py-2 px-3 outline-non border border-slate-300 outline-blue-200"
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
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className="rounded-md py-2 px-3 outline-non border border-slate-300 outline-blue-200"
                                                placeholder="Enter your phone number " />
                                            {errors.phone && touched.phone
                                                ?
                                                <p className='form-error text-red-600 text-sm font-semibold'>{errors.phone}</p>
                                                :
                                                null}
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row justify-center items-center w-full md:space-y-0 md:space-x-5 space-y-5 lg:space-x-7">
                                        <div className="password flex flex-col space-y-2 w-full ">
                                            <label htmlFor="password">Password</label>
                                            <input type="password"
                                                name="password"
                                                id="password"
                                                value={values.password}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className="rounded-md py-2 px-3 outline-non border border-slate-300 outline-blue-200"
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
                                                name="Confirm password"
                                                id="Confirm password"
                                                value={values.confirm_password}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className="rounded-md py-2 px-3 outline-non border border-slate-300 outline-blue-200"
                                                placeholder="Enter confirm password " />
                                            {errors.Confirmpassword && touched.Confirmpassword
                                                ?
                                                <p className='form-error text-red-600 text-sm font-semibold'>{errors.Confirmpassword}</p>
                                                :
                                                null}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between md:space-y-0 md:space-x-5 py-2 space-y-3">
                                        <div className="flex flex-col">
                                            <div className="flex items-center space-x-2">
                                                <input type="checkbox"
                                                    className="border border-slate-500 cursor-pointer"
                                                    name="terms"
                                                    id="terms"
                                                    value={values.terms}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                <p className="text-base text-[#ee6730] cursor-pointer">Terms and Conditions</p>
                                            </div>
                                            {errors.terms && touched.terms
                                                ?
                                                <p className='form-error text-red-600 text-sm font-semibold'>{errors.terms}</p>
                                                :
                                                null}
                                        </div>
                                        <div className="flex flex-col ">
                                            <div className="flex space-x-2">
                                                <input type="checkbox"
                                                    className="border border-slate-500 cursor-pointer"
                                                    name="policy"
                                                    id="policy"
                                                    value={values.policy}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                <p className="text-base text-[#ee6730] cursor-pointer">Privacy and Policy</p>
                                            </div>
                                            {errors.policy && touched.policy
                                                ?
                                                <p className='form-error text-red-600 text-sm font-semibold'>{errors.policy}</p>
                                                :
                                                null}
                                        </div>
                                    </div>

                                    <button type="submit"  className="
                                    bg-slate-900   relative inline-flex items-center justify-center w-full px-4 py-1.5 
                                    sm:px-8 sm:py-[10px] overflow-hidden font-medium tracking-tighter text-white rounded-lg cursor-pointer group"
                                    >
                                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#ee6730] rounded-lg group-hover:w-full group-hover:h-56"></span>
                                        <span className="relative">Create Account</span>
                                    </button>
                                    <p className="text-slate-500 flex justify-center items-center">Already have an account?
                                        <Link to={"/Login"}>
                                            <span className="text-[#ee6730]  font-medium cursor-pointer px-1">Log in</span>
                                        </Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
