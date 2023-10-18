import { useFormik } from "formik"
import { InitialFormikValues } from "./types"
import { INITIAL_VALUE } from "./consts"
import { validationSchema } from "./validationSchema"

export const useFormikHook = () => {
  const formik = useFormik<InitialFormikValues>({
    initialValues: INITIAL_VALUE,
    validationSchema,
    validateOnBlur: true,
    onSubmit: (value) => {},
  })

  return formik
}
