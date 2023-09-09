import { FC, useState } from "react"
import { Step } from "../Step/Step"
import { useFormik } from "formik"
import { InitialFormikValues } from "../../lib/types"
import { Button } from "../../../../shared/ui"
import * as Yup from "yup"
import "./Form.scss"

export const Form: FC = () => {
  const [step, setStep] = useState(1)

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Field is required")
      .min(2, "Minimum 2 symbols"),
    surname: Yup.string()
      .required("Field is required")
      .min(2, "Minimum 2 symbols"),
    patronymic: Yup.string().min(2, "Minimum 2 symbols"),
    password: Yup.string()
      .required("Field is required")
      .min(5, "Minimum 5 symbols"),
    email: Yup.string().email("Invalid email").required("Field is required"),
  })

  const formik = useFormik<InitialFormikValues>({
    initialValues: {
      name: "",
      surname: "",
      patronymic: "",
      email: "",
      password: null,
      documents: "",
    },
    validationSchema,
    validateOnBlur: true,
    onSubmit: (value) => {},
  })

  const nextStep = () => {
    setStep(step + 1)
  }

  const registerStep = () => {
    switch (step) {
      case 1:
        return <Step formik={formik} />
      case 2:
        return <Step formik={formik} next />
    }
  }

  return (
    <form className="register-form-body">
      {registerStep()}
      <Button text="Next" onClick={nextStep} />
    </form>
  )
}
