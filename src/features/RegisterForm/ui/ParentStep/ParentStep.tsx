import { ChangeEvent, FC, useEffect } from "react"
import { FieldName, Formik, InitialFormikValues } from "../../lib/types"
import { Input } from "../../../../shared/ui"
import { getIn } from "formik"
import { useHandleUpload } from "../../lib/useHandleUpload"

type Props = {
  isFullfilled: (value: boolean) => void
  formik: Formik<InitialFormikValues>
}

export const ParentStep: FC<Props> = ({ formik, isFullfilled }) => {
  const [setFileList] = useHandleUpload()

  useEffect(() => {
    isFullfilled(
      !!formik.values.parent.name &&
        !!formik.values.parent.surname &&
        !!formik.values.parent.email &&
        !!formik.values.parent.password &&
        !!formik.values.parent.passwordConfirmation &&
        formik.values.parent.password ===
          formik.values.parent.passwordConfirmation
    )
  }, [formik.values.parent, isFullfilled])

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue("parent.name", e.target.value)
  }
  const handleSurname = (e: ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue("parent.surname", e.target.value)
  }
  const handlePatronymic = (e: ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue("parent.patronymic", e.target.value)
  }
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue("parent.password", e.target.value)
  }
  const handleConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue("parent.passwordConfirmation", e.target.value)
  }
  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue("parent.email", e.target.value)
  }
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFileList(e.target.files)
  }

  const isError = (fieldName: FieldName) => {
    // There is some bug with nested objects.
    // If you want to get touched.child.name it always equals undefind.
    // The way to get value is using getIn
    if (getIn(formik.touched, fieldName)) {
      if (formik.errors.parent) {
        return formik.errors.parent[fieldName]
      }
    }
  }

  return (
    <>
      <h2>Parent</h2>
      <Input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formik.values.parent.name}
        error={isError("name")}
        onChange={handleName}
        onBlur={formik.handleBlur}
      />
      <Input
        type="text"
        name="surname"
        placeholder="Enter your surname"
        value={formik.values.parent.surname}
        error={isError("surname")}
        onChange={handleSurname}
        onBlur={formik.handleBlur}
      />
      <Input
        type="text"
        name="patronymic"
        placeholder="Enter your patronymic"
        value={formik.values.parent.patronymic}
        error={isError("patronymic")}
        onChange={handlePatronymic}
        onBlur={formik.handleBlur}
      />
      <Input
        type="text"
        name="email"
        placeholder="Enter your email"
        value={formik.values.parent.email}
        error={isError("email")}
        onChange={handleEmail}
        onBlur={formik.handleBlur}
      />
      <Input
        type="password"
        name="password"
        placeholder="Enter your password"
        value={formik.values.parent.password}
        error={isError("password")}
        onChange={handlePassword}
        onBlur={formik.handleBlur}
      />
      <Input
        type="password"
        name="passwordConfirmation"
        placeholder="Confirm your password"
        value={formik.values.parent.passwordConfirmation}
        error={isError("passwordConfirmation")}
        onChange={handleConfirmPassword}
        onBlur={formik.handleBlur}
      />
      <Input type="file" multiple onChange={handleFileChange} />
    </>
  )
}
