import { FC } from "react"
import "./Input.scss"

type Props = {
  type?: React.HTMLInputTypeAttribute
  placeholder?: string
  name?: string
  value?: string | number | readonly string[]
  error?: string
  multiple?: boolean
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
  multiple,
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
        multiple={multiple}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {error && <span className="input__error">{error}</span>}
    </div>
  )
}
