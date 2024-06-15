import SubmitButton from '../../../components/submitButton'
import InputText from '../../../components/inputText'

import Link from 'next/link'

export default function SignIn() {

  return (
    <>
      <legend className="text-white self-center">Faça seu login</legend>

      <InputText placeholder="E-mail"/>
      <InputText placeholder="Senha"/>

      <SubmitButton text="Entrar"/>

      <Link href="/sign-up" className='text-white self-center hover:underline'>
        Ainda não tenho uma conta
      </Link>
    </>
  )
}