import { Metadata } from "next"

import LoginTemplate from "@modules/account/templates/login-template"

export const metadata: Metadata = {
  title: "Iniciar sesión",
  description: "Inicie sesión en su cuenta de Aca Indumentaria.",
}

export default function Login() {
  return <LoginTemplate />
}
