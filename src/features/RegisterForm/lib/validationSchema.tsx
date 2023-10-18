import * as Yup from "yup"

export const validationSchema = Yup.object({
  parent: Yup.object({
    name: Yup.string()
      .required("Field is required")
      .min(2, "Minimum 2 symbols"),
    surname: Yup.string()
      .required("Field is required")
      .min(2, "Minimum 2 symbols"),
    patronymic: Yup.string().min(2, "Minimum 2 symbols"),
    email: Yup.string().email("Invalid email").required("Field is required"),
    password: Yup.string()
      .required("Field is required")
      .min(5, "Minimum 5 symbols"),
    passwordConfirmation: Yup.string().test(
      "password-should-match",
      "Passwords must match",
      function (value) {
        return this.parent.password === value
      }
    ),
  }),
  child: Yup.object({
    name: Yup.string()
      .required("Field is required")
      .min(2, "Minimum 2 symbols"),
    surname: Yup.string()
      .required("Field is required")
      .min(2, "Minimum 2 symbols"),
    patronymic: Yup.string().min(2, "Minimum 2 symbols"),
    email: Yup.string().email("Invalid email").required("Field is required"),
    password: Yup.string()
      .required("Field is required")
      .min(5, "Minimum 5 symbols"),
    passwordConfirmation: Yup.string().test(
      "password-should-match",
      "Passwords must match",
      function (value) {
        return this.parent.password === value
      }
    ),
  }),
})
