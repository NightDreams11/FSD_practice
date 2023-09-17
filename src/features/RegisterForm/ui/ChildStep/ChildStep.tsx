import { ChangeEvent, FC } from "react"
import { FieldName, Formik, InitialFormikValues } from "../../lib/types"
import { Input } from "../../../../shared/ui"
import { getIn } from "formik"

type Props = {
  formik: Formik<InitialFormikValues>
}

export const ChildStep: FC<Props> = ({ formik }) => {
  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue("child.name", e.target.value)
  }
  const handleSurname = (e: ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue("child.surname", e.target.value)
  }
  const handlePatronymic = (e: ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue("child.patronymic", e.target.value)
  }
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue("child.password", e.target.value)
  }
  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue("child.email", e.target.value)
  }

  const isError = (fieldName: FieldName) => {
    // There is some bug with nested objects.
    // If you want to get touched.child.name it always equals undefind.
    // The way to get value is using getIn
    if (getIn(formik.touched, fieldName)) {
      if (formik.errors.child) {
        return formik.errors.child[fieldName]
      }
    }
  }

  return (
    <>
      <h2>Child</h2>
      <Input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formik.values.child.name}
        error={isError("name")}
        onChange={handleName}
        onBlur={formik.handleBlur}
      />
      <Input
        type="text"
        name="surname"
        placeholder="Enter your surname"
        value={formik.values.child.surname}
        error={isError("surname")}
        onChange={handleSurname}
        onBlur={formik.handleBlur}
      />
      <Input
        type="text"
        name="patronymic"
        placeholder="Enter your patronymic"
        value={formik.values.child.patronymic}
        error={isError("patronymic")}
        onChange={handlePatronymic}
        onBlur={formik.handleBlur}
      />
      <Input
        type="text"
        name="email"
        placeholder="Enter your email"
        value={formik.values.child.email}
        error={isError("email")}
        onChange={handleEmail}
        onBlur={formik.handleBlur}
      />
      <Input
        type="password"
        name="password"
        placeholder="Enter your password"
        value={formik.values.child.password}
        error={isError("password")}
        onChange={handlePassword}
        onBlur={formik.handleBlur}
      />
      <Input type="password" placeholder="Confirm your password" />
      <Input type="file" />
    </>
  )
}
