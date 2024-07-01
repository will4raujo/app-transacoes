'use client'
import SubmitButton from '@/components/submitButton'
import InputText from '@/components/inputText'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Paragraph from '@/components/paragraph'
import ValidationItem from '@/components/validationItem'
import { useRouter } from 'next/navigation'
import api from '@/services/api'
import { useAsyncHook } from '@/hooks/async.hook'

export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { isLoading } = useAsyncHook()

  const router = useRouter()

  function handleSignUp() {
    const asyncHook = useAsyncHook.getState()
    asyncHook.loading()

    if (!name || !email || !password) {
      asyncHook.sucess()
      return alert("Preencha todos os campos")
    }

    if (Object.values(validations).includes(false)) {
      asyncHook.sucess();
      return alert("A senha não atende aos requisitos");
    }

    api.post('/accounts', { name, email, password })
      .then(() => {
        alert("Conta criada com sucesso")
        asyncHook.sucess()
        router.push('/sign-in')

      })
      .catch(() => {
        alert("Erro ao criar conta")
        asyncHook.sucess()
      })
  }

  const [showValidations, setShowValidations] = useState(false);
  const [validations, setValidations] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });

  useEffect(() => {
    setValidations({
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    });
  }, [password]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setShowValidations(true);
  };
  
  return (
    <form className='flex flex-col w-[350px] md:w-[478px] gap-6 bg-black/60 border-zinc-900 border-2 p-5 md:p-10 rounded-md'>
      <legend className="text-white self-center">Crie sua conta</legend>

      <InputText placeholder="Nome" onChange={e => setName(e.target.value)} />
      <InputText placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
      
      <div className='w-full flex flex-col gap-1'>
        <InputText placeholder="Senha" type='password' onChange={e => {
          setPassword(e.target.value)
          handleChange(e)
          }} />
        <Paragraph>A senha deve ter no mínimo 8 caracteres</Paragraph>
      </div>
      {
        showValidations && (
          <>
            <div className='flex gap-1 flex-col'>
              <ValidationItem isValid={validations.length}>no mínimo 8 caracteres</ValidationItem>
              <ValidationItem isValid={validations.uppercase}>uma letra maiúscula</ValidationItem>
              <ValidationItem isValid={validations.lowercase}>uma letra minúscula</ValidationItem>
              <ValidationItem isValid={validations.number}>um número</ValidationItem>
              <ValidationItem isValid={validations.specialChar}>um caractere especial</ValidationItem>
            </div>
          </>
        )
      }
  
      <SubmitButton text="Cadastrar" onClick={handleSignUp} type='button' loading={isLoading} />

      <Link href="/sign-in" className='text-white self-center hover:underline'>
        Já tenho uma conta
      </Link>
    </form>
  )
}
