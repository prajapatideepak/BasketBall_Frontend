import * as Yup from "yup";

export const GameInfoSchema = Yup.object({
  height: Yup.number()
  .transform((value, originalValue) => {
        return originalValue.trim();
    })
  .min(56).max(500),
  weight: Yup.number()
  .transform((value, originalValue) => {
        return originalValue.trim();
  })
  .min(15).max(350),
  playing_position: Yup.string().required("Please Select Your Position"),
  jersey_no: Yup.number()
    .transform((value, originalValue) => {
        return originalValue.trim();
    })
    .min(0)
    .max(999)
    .required("Please Enter Your Jersey Number ")
    .integer(),
    about: Yup.string()
    .transform((value, originalValue) => {
        return originalValue.trim();
    })
    .required(
    "Please Write Something about Yourself and Your Experience "
  ),
});
