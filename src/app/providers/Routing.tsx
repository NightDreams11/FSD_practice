import { FC } from "react"
import { Route, Routes } from "react-router-dom"
import { RegisterPage } from "../../pages/Register"

export const Routing: FC = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  )
}
