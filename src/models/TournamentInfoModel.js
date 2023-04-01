import * as Yup from "yup";

const validFileExtensions = { image: ['jpg', 'png', 'jpeg'] };

function isValidFileType(fileName, fileType) {
  return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
}

export const TournamentInfoSchema = Yup.object({
    tournament_name: Yup.string()
      .matches(/^[a-zA-Z ]+$/, "Please enter only characters")
      .min(2, "Team name must be at least 2 characters")
      .max(25, "Team name should not be more than 25 characters")
      .required("Tournament name is required"),

    tournament_logo: Yup.mixed()
      .test("is-valid-type", "Logo should be in jpg, jpeg or png format",
        value => {
          return isValidFileType(value && value.name.toLowerCase(), "image")
        })
      .test("is-valid-size", "Max allowed size is 2MB", value => value && value.size <= 2097152),

    city_name: Yup.string()
      .matches(/^[a-zA-Z]+$/, "Please enter only characters")
      .required("City name is required"),

    tournament_category: Yup.object().shape({
      boys: Yup.boolean(),
      girls: Yup.boolean(),
      men: Yup.boolean(),
      women: Yup.boolean(),
      mixed: Yup.boolean(),
    }).test('has-category', 'Tournament category is required', (value) =>
      Object.values(value).some(Boolean)
    ),

    starting_date: Yup.date().max(Yup.ref('ending_date'), "End date can't be before Start date").required("Start date is required"),

    ending_date: Yup.date().min(Yup.ref('starting_date'), "End date can't be before Start date").required('End date is required'),

    age_cutoff: Yup.object().shape({
      under_14: Yup.boolean(),
      under_16: Yup.boolean(),
      under_17: Yup.boolean(),
      under_19: Yup.boolean(),
      under_21: Yup.boolean(),
      under_25: Yup.boolean(),
      under_27: Yup.boolean(),
    }).test('has-category', 'Age cut-off is required', (value) =>
      Object.values(value).some(Boolean)
    ),

    tournament_level: Yup.string().required("Tournament level is required"),

    referees: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required('Referee name is required') 
            .matches(/^[a-zA-Z ]+$/, "Please enter only characters")
            .min(2, "Referee name must be at least 2 characters")
            .max(25, "Referee name should not be more than 25 characters"),
        mobile: Yup.string().required('Referee mobile is required')
            .matches(/^[0-9]+$/, "Please enter only numbers")
            .min(10, "Mobile number should be at least 10 digits")
            .max(10, "Mobile number should be at least 10 digits"),
      })
    ),

    sponsors: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required('Sponsor name is required') 
            .matches(/^[a-zA-Z ]+$/, "Please enter only characters")
            .min(2, "Sponsor name must be at least 2 characters")
            .max(25, "Sponsor name should not be more than 25 characters"),
        logo: Yup
          .mixed()
          .required("Sponsor logo is required")
          .test("is-valid-type", "Logo should be in jpg, jpeg or png format",
            value =>  isValidFileType(value && value.name.toLowerCase(), "image")
          )
          .test("is-valid-size", "Max allowed size is 2MB",
            value => value && value.size <= 2097152)
        })
    ),
  });