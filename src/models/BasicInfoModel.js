import * as Yup from "yup";

export const basicInfoSchema = Yup.object({
  first_name: Yup.string()
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value; 
      }
      return true;
    })
    .min(2)
    .required("Please Enter Your First Name")
    .matches(/[^\s*].*[^\s*]/g, "* This field cannot contain only blankspaces"),
  middle_name: Yup.string()
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value; 
      }
      return true;
    })
    .min(2)
    .matches(/[^\s*].*[^\s*]/g, "* This field cannot contain only blankspaces"),
  last_name: Yup.string()
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value; 
      }
      return true;
    })
    .min(2)
    .required("Please Enter Your Last Name")
    .matches(/[^\s*].*[^\s*]/g, "* This field cannot contain only blankspaces"),
  mobile: Yup.string()
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value; 
      }
      return true;
    })
    .min(10)
    .max(10)
    .required("Please Enter Your Mobile number"),
  alternate_mobile: Yup.string()
  .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value; 
      }
      return true;
    })
  .min(10).max(10),
  date_of_birth
    : Yup.date()
      .max(new Date())
      .required("Please Enter Your BirthDate")
      .nullable(),

  gender: Yup.string().required("Please Select Gender"),

  pincode: Yup.string()
  .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value; 
      }
      return true;
    })
  .min(6).max(6).required("Please Enter Your Pincode"),
});
