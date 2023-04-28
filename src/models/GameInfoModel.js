import * as Yup from "yup";

export const GameInfoSchema = Yup.object({
  height: Yup.number()
  .min(100, "Height should be min 100 CM").max(230, "Height should not be greater than 230 CM"),
  weight: Yup.number()
  .min(15, "Weight should be min 15 KG").max(120, "Weight should not be greater than 120 KG"),
  playing_position: Yup.string().required("Please select your position"),
  jersey_no: Yup.number()
    .min(1, "Jersey no. must be greater than 1")
    .max(999, "Jersey no. should not be greater than 999")
    .required("Please enter jersey number")
    .integer(),
    about: Yup.string()
    .test('trim', 'About must not contain trailing spaces', (value) => {
      if (value) {
        return value.trimEnd() === value; 
      }
      return true;
    })
    .required(
    "Please write something about yourself and your experience"
  ),
});
