import { FormikValues, useFormik } from "formik"

export type Formik<T extends FormikValues> = ReturnType<typeof useFormik<T>>

export type InitialFormikValues = {
  name: string
  surname: string
  patronymic?: string
  documents: string
  email: string
  password: number | null
}

export type FieldName =
  | "name"
  | "surname"
  | "patronymic"
  | "documents"
  | "email"
  | "password"
