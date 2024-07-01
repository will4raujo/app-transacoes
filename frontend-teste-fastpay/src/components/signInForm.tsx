'use client'
import SubmitButton from './submitButton'
import InputText from './inputText'
import Link from 'next/link'
import { useState } from 'react'
import { useAuthHook } from '@/hooks/auth.hook'
import { useRouter } from 'next/navigation'
import { useAsyncHook } from '@/hooks/async.hook'

export default function SignInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const routes = useRouter()

  const { isLoading } = useAsyncHook()

  const { login } = useAuthHook((state ) => ({
    login: state.login,
  }))
  
  async function handleSignIn(event: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault()
    const isAthenticated = await login({ email, password })
    if (isAthenticated) {
      routes.push('/')
    } 
  }

  return (
    <form onSubmit={handleSignIn} className='flex flex-col w-[350px] md:w-[478px] gap-6 bg-black/60 border-zinc-900 border-2 p-5 md:p-10 rounded-md'>
      <legend className="text-white self-center">Faça seu login</legend>

      <InputText placeholder="E-mail" required onChange={(e) => setEmail(e.target.value)}/>
      <InputText placeholder="Senha" type="password" required onChange={(e) => setPassword(e.target.value)}/>

      <SubmitButton text="Entrar" type='submit' loading={isLoading}/>

      <Link href="/sign-up" className='text-white self-center hover:underline'>
        Ainda não tenho uma conta
      </Link>
    </form>
  )
}