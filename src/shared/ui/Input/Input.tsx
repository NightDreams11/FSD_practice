import { FC } from "react"
import "./Input.scss"

type Props = {
  type?: React.HTMLInputTypeAttribute
  placeholder?: string
  name?: string
  value?: string | number | readonly string[]
  error?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
}

export const Input: FC<Props> = ({
  type,
  name,
  placeholder,
  value,
  error,
  onChange,
  onFocus,
  onBlur,
}) => {
  return (
    <div className="input">
      <input
        className="input__input"
        name={name}
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {error && <span className="input__error">{error}</span>}
    </div>
  )
}
