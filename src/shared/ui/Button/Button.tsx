import { FC } from "react"

type Props = {
  text: string
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button: FC<Props> = ({ text, disabled, onClick }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>
  )
}
