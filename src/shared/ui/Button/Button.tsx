import { FC } from "react"

type Props = {
  disabled?: boolean
  type?: "button" | "submit" | "reset"
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
}

export const Button: FC<Props> = ({ disabled, type, onClick, children }) => {
  return (
    <button onClick={onClick} disabled={disabled} type={type}>
      {children}
    </button>
  )
}
