import SignInForm from "@/components/signInForm"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'login',
}

export default function SignIn() {
  return (
    <SignInForm />
  )
}