import { FormikValues, useFormik } from "formik"

export type Formik<T extends FormikValues> = ReturnType<typeof useFormik<T>>

export type InitialFormikValues = {
  parent: {
    name: string
    surname: string
    patronymic?: string
    documents: string
    email: string
    password: string
    passwordConfirmation: string
  }
  child: {
    name: string
    surname: string
    patronymic?: string
    documents: string
    email: string
    password: string
    passwordConfirmation: string
  }
}

export type FieldName =
  | "name"
  | "surname"
  | "patronymic"
  | "documents"
  | "email"
  | "password"
  | "passwordConfirmation"
