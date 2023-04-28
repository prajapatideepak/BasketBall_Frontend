import React from "react"
import image from "../../../public/CBL_Images/7xm.xyz557949.jpg"
import { Link } from 'react-router-dom'
import google from "../../../public/CBL_Images/google.png"
import { useFormik } from 'formik'
import * as Yup from "yup"
import "yup-phone"
import { HiArrowLeft } from "react-icons/hi"
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authentication } from "../../redux/actions/User";
import { useGoogleLogin } from '@react-oauth/google';
import { BsFillPatchCheckFill } from "react-icons/bs"
import ReCAPTCHA from "react-google-recaptcha";
import { RECAPTCHA_SITE_KEY } from '../../../constant'
import { useSignupMutation, useGoogleLoginMutation } from "../../services/authentication"


const signUpSchema = Yup.object({
    fullname: Yup.string()
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value; 
      }
      return true;
    })
    .min(2, "Name must be atleast 2 characters long")
    .max(25, "Name shouldn't be more than 25 characters").matches(/^[a-zA-Z ]+$/, "Please enter only characters").required("Please enter your full name"),

    email: Yup.string().email()
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value; 
      }
      return true;
    })
    .required("Please enter your email"),

    phone: Yup.string()
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value; 
      }
      return true;
    })
    .min(10, "Enter valid mobile no.").max(10, "Enter valid mobile no.").matches(/^[0-9]+$/, "Please enter only numbers").phone(null, true, "Invalid phone number").required("Please enter your phone number"),
    password: Yup.string()
    .required("Please enter password")
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value; 
      }
      return true;
    }),

    Confirmpassword: Yup.string().required("Confirm password is required")
    .oneOf([Yup.ref("password"), null], "Confirm Password must match"),

    terms: Yup.string().required("Please select Terms and Conditions"),
});


const initialValues = {
    fullname: "",
    email: "",
    phone: "",
    password: "",
    Confirmpassword: "",
    terms: "",
};


function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isOnSubmit, setIsOnSubmit] = React.useState(false);
    const [recaptcha, setRecaptcha] = React.useState("")
    const [recaptchaError, setRecaptchaError] = React.useState(false)

    const [signup, {isLoading}] = useSignupMutation()
    const [googleLogin, {...googleAuth}] = useGoogleLoginMutation()

    const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        async onSubmit(data) {
            if(recaptcha == ''){
                setRecaptchaError(true);
                return
            }
            if(recaptchaError){
                return
            }

            data.recaptcha = recaptcha
            const res = await signup(data);

             if (res.error) {
                toast.error(res.error.data.message);
            }
            else if (res.data.success) {
                setIsOnSubmit(true)
            }
        }
    })

    const loginWithGoogle = async (access_token)=>{
        const res = await googleLogin(access_token)
        if (res.error) {
            toast.error(res.error.data.message);
        }
        else if (res.data.success) {
            navigate("/"); 
            dispatch(authentication(res.data.token, res.data.user));
            toast.success(res.data.message);
        }
    }

    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => loginWithGoogle(tokenResponse.access_token),
        onError: error => {toast.error(error)}
    });

    const handleRecaptcha = (value) => {
        setRecaptchaError(false)
        setRecaptcha(value)

        setTimeout(() => {
            setRecaptchaError(true)
        }, 60000);
    }

    React.useEffect(() => {
        // Define the 'otpless' function
        window.otpless = (otplessUser) => {
        // Retrieve the user's details after successful login
        const waName = otplessUser.waName;
        const waNumber = otplessUser.waNumber;
                
        // Handle the signup/signin process
        // ...
        };
        }, []);

    return (
        <>
            <div className="  flex justify-center items-center px-10 sm:px-20  bg-white mt-5 ">
                <div className="flex xl:flow-row justify-center items-center">
                    <div className="2xl:w-[50%] xl:block hidden">
                        <img src={image} alt="" />
                    </div>
                    <div className=" w-[100%] xl:px-10 xl:mx-10 2xl:w-[50%]">
                        <div className={`${isOnSubmit ? "block" : "hidden"} space-y-5 `}>
                            <div className="flex justify-center items-center ">
                                <BsFillPatchCheckFill className="text-5xl text-green-700" />
                            </div>
                            <div className="space-y-2">
                                <p className='font-semibold text-green-500 text-center text-2xl sm:text-base '>Signup Successful !</p>
                                <p className='font-semibold text-gray-500 text-center text-2xl sm:text-base '>Verification link has been send to your</p>
                                <p className='font-semibold text-gray-500 text-center text-2xl sm:text-base '> Email or SMS. Please check it.</p>
                            </div>
                            {/* <Link to={"/login"}>
                                <div className='flex justify-center  py-5 items-center font-semibold text-slate-400 cursor-pointer hover:text-black space-x-2'>
                                    <HiArrowLeft className='text-xl' />
                                    <p className=''>Login</p>
                                </div>
                            </Link> */}
                        </div>
                        <h1 className={`${isOnSubmit ? "hidden" : "block"} text-[#ee6730] text-3xl text-center font-bold`}>Sign Up</h1>
                        <div className={`${isOnSubmit ? "hidden" : "block"}`}>
                            <div className={`${googleAuth.isLoading ? 'opacity-60' : ''} border py-2 my-8 flex justify-center items-center px-5 rounded-md space-x-2 cursor-pointer hover:border-[#ee6730] duration-200`} 
                            onClick={()=>{
                                if(googleAuth.isLoading) return
                                login();
                            }}
                            >
                                <img src={google} alt="" className='w-7' />
                                <p>Continue with Google</p>
                            </div>
                            <div className='flex text-slate-500 justify-center  text-lg  items-center'>
                                OR
                            </div>
                            <div className="py-5">
                                <form action="" className="space-y-5" onSubmit={handleSubmit}>
                                    <div className="flex flex-col md:flex-row justify-center items-center w-full md:space-y-0 md:space-x-5 space-y-5 lg:space-x-7">
                                        <div className="firstname flex flex-col space-y-2 w-full ">
                                            <label htmlFor="Firstname">Full Name</label>
                                            <input type="text"
                                                name="fullname"
                                                value={values.fullname}
                                                id="fullname"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className="rounded-md py-2 px-3 outline-non border border-slate-300 outline-blue-200"
                                                placeholder="Enter your full name " />
                                            {errors.fullname && touched.fullname
                                                ?
                                                <p className='form-error text-red-600 text-sm font-semibold'>{errors.fullname}</p>
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
                                            <label htmlFor="phone">Mobile</label>
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
                                                name="Confirmpassword"
                                                id="Confirm password"
                                                value={values.Confirmpassword}
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
                                                <Link to={"/terms-and-condition"}>
                                                    <p className="text-base text-[#ee6730] cursor-pointer">Terms and Conditions</p>
                                                </Link>
                                            </div>
                                            {errors.terms && touched.terms
                                                ?
                                                <p className='form-error text-red-600 text-[12px] font-semibold'>{errors.terms}</p>
                                                :
                                                null}
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center w-full md:space-y-0 md:space-x-5 space-y-5 lg:space-x-7">
                                        <ReCAPTCHA
                                            name="recaptcha"
                                            sitekey= {RECAPTCHA_SITE_KEY}
                                            onChange={handleRecaptcha}
                                        />
                                         {recaptchaError
                                            ?
                                            <p className='form-error text-red-600 text-[12px] font-semibold'>Please verify you are not a robot</p>
                                            :
                                            null}
                                    </div>

                                    <button type="submit" className={` ${isLoading ? 'opacity-70' : ''}
                                    bg-slate-900   relative inline-flex items-center justify-center w-full px-4 py-1.5 
                                    sm:px-8 sm:py-[10px] overflow-hidden font-medium tracking-tighter text-white rounded-lg cursor-pointer group`}
                                    disabled={isLoading}
                                    >
                                        <span className={`absolute w-0 h-0 transition-all duration-500 ease-out bg-[#ee6730] rounded-lg group-hover:w-full ${isLoading ? '' : "group-hover:h-56"}`}></span>
                                        <span className="relative">{isLoading ? 'Loading...' : 'Create Account'}</span>
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
