import { FC } from "react"
import { Form } from "../Form/Form"
import "./RegisterForm.scss"

export const RegisterForm: FC = () => {
  return (
    <div className="register-form">
      <h2>Registration step: {`${1}`}</h2>
      <Form />
    </div>
  )
}
