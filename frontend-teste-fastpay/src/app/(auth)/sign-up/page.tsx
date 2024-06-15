import SubmitButton from '@/components/submitButton'
import InputText from '@/components/inputText'
import Link from 'next/link'
import InputPassword from '@/components/inputPassword'

export default function SignUp() {

  return (
    <>
      <legend className="text-white self-center">Crie sua conta</legend>

      <InputText placeholder="Nome" />
      <InputText placeholder="E-mail" />
      <InputPassword placeholder="Senha" />

      <SubmitButton text="Cadastrar" />

      <Link href="/sign-in" className='text-white self-center hover:underline'>
        Já tenho uma conta
      </Link>
    </>
  )
}
