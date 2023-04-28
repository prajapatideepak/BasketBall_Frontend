import * as Yup from "yup";

export const basicInfoSchema = Yup.object({
  first_name: Yup.string()
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value; 
      }
      return true;
    })
    .min(2, "Minimum 2 characters are required")
    .required("Please enter your first name")
    .matches(/[^\s*].*[^\s*]/g, "* This field cannot contain only blankspaces"),
  middle_name: Yup.string()
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value; 
      }
      return true;
    })
    .min(2, "Minimum 2 characters are required")
    .matches(/[^\s*].*[^\s*]/g, "* This field cannot contain only blankspaces"),
  last_name: Yup.string()
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value; 
      }
      return true;
    })
    .min(2, "Minimum 2 characters are required")
    .required("Please enter your last name")
    .matches(/[^\s*].*[^\s*]/g, "* This field cannot contain only blankspaces"),
  mobile: Yup.string()
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value; 
      }
      return true;
    })
    .min(10, "Please enter valid mobile no")
    .max(10, "Please enter valid mobile no")
    .required("Please enter your mobile number"),
  alternate_mobile: Yup.string()
  .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value; 
      }
      return true;
    })
  .min(10, "Please enter valid mobile no").max(10, "Please enter valid mobile no"),
  date_of_birth
    : Yup.date()
      .max(new Date(), 'Please select valid DOB')
      .required("Please enter your date of birth")
      .nullable(),

  gender: Yup.string().required("Please select gender"),

  pincode: Yup.string()
  .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value; 
      }
      return true;
    })
  .min(6, "Please enter valid pincode").max(6, "Please enter valid pincode").required("Please Enter Your Pincode"),
});
