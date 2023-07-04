import React from "react";
import { Link, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { authentication } from "../../redux/actions/User";
import { useGoogleLogin } from '@react-oauth/google';
import { useSigninMutation, useGoogleLoginMutation } from "../../services/authentication";

const signUpSchema = Yup.object({
  mobile: Yup.string()
      .required("Please enter your mobile no.")
      .matches(/^[0-9]+$/, "Please enter only numbers")
      .min(10, "Mobile number should be at least 10 digits")
      .max(10, "Mobile number should be at least 10 digits"),
  password: Yup.string().required("Please enter password"),
});

const initialValues = {
  mobile: "",
  password: "",
};

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signin, {isLoading}] = useSigninMutation()
  const [googleLogin, {...googleAuth}] = useGoogleLoginMutation()

  const loginWithGoogle = async (access_token)=>{
    const res = await googleLogin(access_token)
     if (res.error) {
        toast.error(res.error.data.message);
      }
      else if (res.data.success) {
        if(!res.data.user.is_verified){
          navigate("/user/resend-verification-link"); 

        }
        else{
          navigate("/"); 
          dispatch(authentication(res.data.token, res.data.user));
          toast.success(res.data.message);
        }
      }
  }
  
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => loginWithGoogle(tokenResponse.access_token),
    onError: error => {toast.error(error)}
  });

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      async onSubmit(data) {
        const res = await signin(data)
        
        if (res.error) {
          toast.error(res.error.data.message);
        }
        else if (res.data.success) {
          navigate("/"); 
          dispatch(authentication(res.data.token, res.data.user));
          toast.success(res.data.message);
        }
      },
    });

  return (
    <div className="flex justify-center xs:items-start  items-center lg:space-x-32 xl:space-52 2xl:space-x-48 bg-gray-50 pt-16  pb-24 lg:pb-32 xl:min-h-screen">
      <div className="img lg:w-[450px]  lg:h-[350px] xl:w-[500px] xl:h-[400px] 2xl:h-[600px] 2xl:w-[550px] hidden lg:block">
        <img src='/CBL_Images/7xm.xyz288133.jpg' alt="landing" className="" />
      </div>

      <div className=" 2xl:w-[27%] px-5 ">
        <div className=" space-y-3  ">
          <h1 className="text-3xl font-bold text-center uppercase text-[#ee6730]">
            Login
          </h1>
          <p className=" text-gray-500 text-center text-xs sm:text-base ">
            Wellcome back! Please enter your details.
          </p>
        </div>
        <div className={`${googleAuth.isLoading ? 'opacity-60' : ''} border py-2 my-7 flex justify-center items-center px-5 rounded-md space-x-2 cursor-pointer hover:border-[#ee6730] duration-200`} onClick={()=>{
          if(googleAuth.isLoading) return
          login();
        }}>
          <img src='/CBL_Images/google.png' alt="" className="w-7" />
          <p>Log in with Google</p>
        </div>
        <div className="flex text-slate-500 justify-center items-center">
          Or continue with
        </div>
        <form action="" className="space-y-3" onSubmit={handleSubmit}>
          <div className="space-y-5 py-4 ">
            <div className="space-y-2">
              <label htmlFor="Email" className="font-semibold text-base">
                Mobile
              </label>
              <input
                type="text"
                value={values.mobile}
                placeholder="Enter Your Mobile No."
                autoComplete="off"
                name="mobile"
                id="mobile"
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full rounded-md py-2 px-3 outline-non border border-slate-300 outline-blue-200"
              />
              {errors.mobile && touched.mobile ? (
                <p className="form-error text-red-600 text-sm font-semibold">
                  {errors.mobile}
                </p>
              ) : null}
            </div>
            <div className="space-y-2">
              <label htmlFor="Password" className="font-semibold text-base">
                Password
              </label>
              <input
                type="password"
                value={values.password}
                placeholder="Enter Your Password"
                autoComplete="off"
                name="password"
                id="password"
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full rounded-md py-2 px-3 outline-non border border-slate-300 outline-blue-200"
              />
              {errors.password && touched.password ? (
                <p className="form-error text-red-600 text-sm font-semibold">
                  {errors.password}
                </p>
              ) : null}
            </div>
          </div>
          <Link to={"/forget-password"}>
            <div className=" flex justify-end items-end">
              <h1 className="text-sm underline font-semibold text-[#ee6730] cursor-pointer">
                Forget Password?
              </h1>
            </div>
          </Link>
          <div className="py-1">
            <button
              type="submit"
              disabled={isLoading}
              className={`${isLoading? 'opacity-60' : ''} bg-slate-900  relative inline-flex items-center justify-center w-full px-4 py-1.5 sm:px-8 sm:py-[10px] overflow-hidden font-medium tracking-tighter text-white rounded-lg cursor-pointer group`}
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#ee6730] rounded-lg group-hover:w-full group-hover:h-56"></span>
              <span className="relative">{isLoading? 'Loading...' : 'SUBMIT'}</span>
            </button>
          </div>
        </form>
        <div className="text-center mt-5 text-slate-500 xs:pb-0 pb-16">
          Don't have an account?
          <Link to={"/register"}>
            <span className="hover:text-black font-semibold cursor-pointer text-[#ee6730] px-2">
              Create an account
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
