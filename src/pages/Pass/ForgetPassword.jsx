import React from 'react'
import { Link } from 'react-router-dom'
import { HiArrowLeft } from "react-icons/hi"
import { FiKey } from "react-icons/fi"
import { useFormik } from 'formik'
import * as Yup from "yup"
import { toast } from 'react-toastify';
import { useSendResetPasswordLinkMutation } from '../../services/authentication'
import "yup-phone"

const signUpSchema = Yup.object({
    email: Yup.string().email("Please enter valid email").required("Please enter your email")
    .transform((value, originalValue) => {
        return originalValue.trim();
    })
});

const initialValues = {
    email: ""
};

function ForgetPassword() {

    const [isOnSubmit, setIsOnSubmit] = React.useState(false);

    const [sendResetPasswordLink, {isLoading}] = useSendResetPasswordLinkMutation()

    const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        async onSubmit(data) {
            const response = await sendResetPasswordLink(data.email)
            if (response.error) {
                toast.error(response.error.data.message);
            }
            else if (response.data.success) {
                setIsOnSubmit(true)
            }
        }
    })

    return (
        <div className='flex sm:justify-center lg:justify-start xl:justify-between items-center h-screen bg-white px-10 lg:px-20'>
            <div className="img lg:w-[500px] lg:h-[500px] xl:w-[650px] xl:h-[650px] 2xl:h-[700px] 2xl:w-[700px] hidden lg:block">
                <img src="/CBL_Images/7xm.xyz917787.jpg" alt="landing" className="" />
            </div>
            <div className='lg:px-10 lg:py-10  lg:relative 2xl:right-20'>
                <div className='flex justify-center items-center py-5 '>
                    <div className='bg-[#ee663024] px-2 py-2 rounded-full'>
                        <div className='bg-[#ee66304f] px-2 py-2 rounded-full'>
                            <FiKey className='  text-[#ee6730] rounded-full  text-xl ' />
                        </div>
                    </div>
                </div>
                <div className='py-3 space-y-3'>
                    <h1 className={`${isOnSubmit ? "hidden" : "block"} text-3xl font-bold text-center`}>Reset your password</h1>
                    <div className={`${isOnSubmit ? "hidden" : "block"}`}>
                        <p className='font-semibold text-gray-500 text-center text-xs sm:text-base '>No worries, we'll send you reset password link</p>
                        <p className='font-semibold text-gray-500 text-center text-xs sm:text-base '>on your email</p>
                    </div>
                    <div className={`${isOnSubmit ? "block" : "hidden"} text-green-600`}>
                        <p className='font-semibold text-center text-xs sm:text-base '>Reset password link has been sent to your email.</p>
                        <p className='font-semibold text-center text-xs sm:text-base '>Please check it.</p>
                    </div>
                </div>
                <div className={`${isOnSubmit ? "hidden" : "block"} py-3`}>
                    <form action="" className=' space-y-2' onSubmit={handleSubmit}>
                        <label htmlFor="Email" className='font-semibold text-base'>Email</label>
                        <input type="text"
                            value={values.phone}
                            placeholder='Enter your email number'
                            autoComplete='off'
                            name='email'
                            id='email'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='w-full rounded-md py-2 px-3 outline-non border border-slate-300 outline-blue-200 ' />
                        {
                            errors.email && touched.email
                            ?
                                <p className='form-error text-red-600 text-sm font-semibold'>{errors.email}</p>
                            :
                                null
                        }

                        <div className='py-5'>
                            <button type="submit" disabled={isLoading} className={`${isLoading ? 'opacity-60' : ''} bg-slate-900  relative inline-flex items-center justify-center w-full px-4 py-1.5 sm:px-8 sm:py-[10px] overflow-hidden font-medium tracking-tighter text-white rounded-lg cursor-pointer group`}>
                                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#ee6730] rounded-lg group-hover:w-full group-hover:h-56"></span>
                                <span className="relative">{isLoading ? 'Loading...' : 'SEND'}</span>
                            </button>
                        </div>
                    </form>

                </div>
                <Link to={"/login"}>
                    <div className='flex justify-center py-3 items-center font-semibold text-slate-400 cursor-pointer hover:text-black space-x-2'>
                        <HiArrowLeft className='text-xl' />
                        <p className=''>Back to Login</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}




export default ForgetPassword
