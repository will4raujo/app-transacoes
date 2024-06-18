'use client'
import SubmitButton from '@/components/submitButton'
import InputText from '@/components/inputText'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Paragraph from '@/components/paragraph'
import ValidationItem from '@/components/validationItem'
import { useRouter } from 'next/navigation'
import api from '@/services/api'

export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  function handleSignUp() {
    
    if (!name || !email || !password) {
      return alert("Preencha todos os campos")
    }

    api.post('/accounts', { name, email, password })
      .then(() => {
        alert("Conta criada com sucesso")
        router.push('/sign-in')

      })
      .catch(() => {
        alert("Erro ao criar conta")
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
    <>
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
  
      <SubmitButton text="Cadastrar" onClick={handleSignUp} type='button' />

      <Link href="/sign-in" className='text-white self-center hover:underline'>
        Já tenho uma conta
      </Link>
    </>
  )
}
