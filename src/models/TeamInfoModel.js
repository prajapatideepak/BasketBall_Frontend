import * as Yup from "yup";

export const TeamInfoSchema = Yup.object({
  team_name: Yup.string()
    .matches(/^[a-zA-Z ]+$/, "Please enter only characters")
    .min(2, "Team name must be at least 2 characters")
    .max(25, "Team name should not be more than 25 characters")
    .required("Please Enter Team Name "),
  coach_name: Yup.string()
    .matches(/^[a-zA-Z ]+$/, "Please enter only characters")
    .min(2, "Coach name must be at least 2 characters")
    .max(25, "Coach name should not be more than 25 characters"),
  coach_mobile: Yup.string()
    .matches(/^[0-9]+$/, "Please enter only numbers")
    .min(10, "Mobile number should be at least 10 digits")
    .max(10, "Mobile number should be at least 10 digits"),
  assistant_coach_name: Yup.string()
    .matches(/^[a-zA-Z ]+$/, "Please enter only characters")
    .min(2, "Asst. Coach name must be at least 2 characters")
    .max(25, "Asst. Coach name should not be more than 25 characters"),
  assistant_coach_mobile: Yup.string()
    .matches(/^[0-9]+$/, "Please enter only numbers")
    .min(10, "Mobile number should be at least 10 digits")
    .max(10, "Mobile number should be at least 10 digits"),
});
