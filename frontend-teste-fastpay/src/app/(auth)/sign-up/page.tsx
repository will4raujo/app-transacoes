import SignUpForm from "@/components/signUpForm"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Cadastro',
}

export default function SignUp() {
  
  return (
    <SignUpForm />
  )
}
