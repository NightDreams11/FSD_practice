import { FC, useState } from "react"
import { ChildStep } from "../ChildStep/ChildStep"
import { Button } from "../../../../shared/ui"
import { ParentStep } from "../ParentStep/ParentStep"
import { useFormikHook } from "../../lib/useFormikHook"
import "./Form.scss"

export const Form: FC = () => {
  const [step, setStep] = useState(1)
  const [isChildFulfilled, setIsChildFulfilled] = useState(false)
  const [isParentFulfilled, setIsParentFulfilled] = useState(false)
  const formik = useFormikHook()

  const nextStep = () => {
    if (step < 2) {
      setStep(step + 1)
    }
  }
  const previousStep = () => {
    if (step !== 1) {
      setStep(step - 1)
    }
  }

  const registerStep = () => {
    switch (step) {
      case 1:
        return <ChildStep formik={formik} isFullfilled={setIsChildFulfilled} />
      case 2:
        return (
          <ParentStep formik={formik} isFullfilled={setIsParentFulfilled} />
        )
    }
  }

  return (
    <form className="register-form-body" onSubmit={formik.handleSubmit}>
      {registerStep()}
      <div className="register-form-body__buttons">
        <Button type="submit" onClick={previousStep}>
          Previous
        </Button>
        <Button type="submit" disabled={!isChildFulfilled} onClick={nextStep}>
          Next
        </Button>
        <Button
          disabled={!isChildFulfilled || !isParentFulfilled}
          type="submit"
        >
          Submit
        </Button>
      </div>
    </form>
  )
}
