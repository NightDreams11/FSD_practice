import { FC } from "react"
import "./RegisterForm.scss"

export const RegisterForm: FC = () => {
  // TODO:
  // Save Formik in this file.
  // Create UserSlice in model folder
  // Create api
  // Create input in shared and move style for .register__input
  return (
    <div className="register">
      <h2>Registration</h2>
      <form className="register__form">
        <input className="register__input" type="text" />
        <input className="register__input" type="text" />
        <input className="register__input" type="text" />
        <input className="register__input" type="text" />
      </form>
    </div>
  )
}
