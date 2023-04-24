import * as Yup from "yup";

export const GameInfoSchema = Yup.object({
  height: Yup.number()
  .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value; 
      }
      return true;
    })
  .min(56).max(500),
  weight: Yup.number()
  .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value; 
      }
      return true;
    })
  .min(15).max(350),
  playing_position: Yup.string().required("Please Select Your Position"),
  jersey_no: Yup.number()
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value; 
      }
      return true;
    })
    .min(0)
    .max(999)
    .required("Please Enter Your Jersey Number ")
    .integer(),
    about: Yup.string()
    .test('trim', 'About must not contain trailing spaces', (value) => {
      if (value) {
        return value.trimEnd() === value; 
      }
      return true;
    })
    .required(
    "Please Write Something about Yourself and Your Experience "
  ),
});
