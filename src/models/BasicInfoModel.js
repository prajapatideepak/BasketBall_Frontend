import * as Yup from "yup";

export const basicInfoSchema = Yup.object({
  firstName: Yup.string()
    .min(2)
    .required("Please Enter Your First Name")
    .matches(/[^\s*].*[^\s*]/g, "* This field cannot contain only blankspaces"),
  middleName: Yup.string()
    .min(2)
    .matches(/[^\s*].*[^\s*]/g, "* This field cannot contain only blankspaces"),
  lastName: Yup.string()
    .min(2)
    .required("Please Enter Your Last Name")
    .matches(/[^\s*].*[^\s*]/g, "* This field cannot contain only blankspaces"),
  mobileNo: Yup.string()
    .min(10)
    .max(10)
    .required("Please Enter Your Mobile number"),
  alternativeNo: Yup.string().min(10).max(10),
  dob: Yup.date()
    .max(new Date())
    .required("Please Enter Your BirthDate")
    .nullable(),
  gender: Yup.string().required("Please Select Gender"),
  pincode: Yup.string().min(6).max(6).required("Please Enter Your Pincode"),
});
