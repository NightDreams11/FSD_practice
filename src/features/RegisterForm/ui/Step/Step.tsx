import { ChangeEvent, FC } from "react"
import { FieldName, Formik, InitialFormikValues } from "../../lib/types"
import { Input } from "../../../../shared/ui"

type Props = {
  next?: boolean
  formik: Formik<InitialFormikValues>
}

export const Step: FC<Props> = ({ formik }) => {
  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue("name", e.target.value)
  }
  const handleSurname = (e: ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue("surname", e.target.value)
  }
  const handlePatronymic = (e: ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue("patronymic", e.target.value)
  }
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue("password", e.target.value)
  }
  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue("email", e.target.value)
  }

  const isError = (fieldName: FieldName) => {
    if (formik.touched[fieldName]) {
      return formik.errors[fieldName]
    }
  }

  return (
    <>
      <Input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formik.values.name}
        error={isError("name")}
        onChange={handleName}
        onBlur={formik.handleBlur}
      />
      <Input
        type="text"
        name="surname"
        placeholder="Enter your surname"
        error={isError("surname")}
        onChange={handleSurname}
        onBlur={formik.handleBlur}
      />
      <Input
        type="text"
        name="patronymic"
        placeholder="Enter your patronymic"
        error={isError("patronymic")}
        onChange={handlePatronymic}
        onBlur={formik.handleBlur}
      />
      <Input
        type="text"
        name="email"
        placeholder="Enter your email"
        error={isError("email")}
        onChange={handleEmail}
        onBlur={formik.handleBlur}
      />
      <Input
        type="password"
        name="password"
        placeholder="Enter your password"
        error={isError("password")}
        onChange={handlePassword}
        onBlur={formik.handleBlur}
      />
      <Input type="password" placeholder="Confirm your password" />
      <Input type="file" />
    </>
  )
}
