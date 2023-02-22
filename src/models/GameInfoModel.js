import * as Yup from "yup";

export const GameInfoSchema = Yup.object({
  height: Yup.number().min(56).max(500),
  weight: Yup.number().min(15).max(350),
  playerPosition: Yup.string().required("Please Select Your Position"),
  JerseyNumber: Yup.number()
    .min(0)
    .max(999)
    .required("Please Enter Your Jersey Number ")
    .integer(),
  Experience: Yup.string().required(
    "Please Write Something about Yourself and Your Experience "
  ),
});
