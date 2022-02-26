import * as yup from "yup";

export const schemaValidation = yup
  .object({
    email: yup
      .string()
      .required("You forgot to enter your email")
      .email("Enter a valid email address"),
    password: yup.string().required("You forgot to enter your password"),
  })
  .required();
