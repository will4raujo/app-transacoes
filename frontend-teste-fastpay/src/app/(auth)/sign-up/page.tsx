import SubmitButton from '../../../components/submitButton'
import InputText from '../../../components/inputText'

import Link from 'next/link'

export default function SignUp() {

  return (
    <>
      <legend className="text-white">Crie sua conta</legend>
      
      <InputText placeholder="Nome"/>
      <InputText placeholder="E-mail"/>
      <InputText placeholder="Senha"/>

      <SubmitButton text="Cadastrar"/>

      <Link href="/sign-in" className='text-white'>
        Já tenho uma conta
      </Link>
    </>
  )
}