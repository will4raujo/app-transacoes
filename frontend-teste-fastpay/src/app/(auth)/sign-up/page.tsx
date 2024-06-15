'use client'
import SubmitButton from '../../../components/submitButton'
import InputText from '../../../components/inputText'
import circleCheck from '../../../../public/circle-check.svg'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function SignUp() {

  const [password, setPassword] = useState('');
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

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <legend className="text-white">Crie sua conta</legend>
      
      <InputText placeholder="Nome"/>
      <InputText placeholder="E-mail"/>
      <input 
        type="password" 
        placeholder="Senha" 
        value={password} 
        onChange={handleChange}
        className="text-zinc-500 bg-zinc-900 h-[48px] pl-4 rounded-md"
      />
      <div className='flex gap-1 flex-col'>
        <div className='flex gap-2 items-center'>
          {validations.length &&
            <Image src={circleCheck} alt="circle check" width={16} height={16} quality={100}/>
          }
          <p className='text-zinc-500 text-sm '>no mínimo 8 caracteres </p>
        </div>
        <div className='flex gap-2 items-center'>
          {validations.uppercase &&
            <Image src={circleCheck} alt="circle check" width={16} height={16} quality={100}/>
          }
          <p className='text-zinc-500 text-sm'>uma letra maiúscula</p>
        </div>
        <div className='flex gap-2 items-center'>
          {validations.lowercase &&
            <Image src={circleCheck} alt="circle check" width={16} height={16} quality={100}/>
          }
          <p className='text-zinc-500 text-sm'>uma letra minúscula</p>
        </div>
        <div className='flex gap-2 items-center'>
          {validations.number &&
            <Image src={circleCheck} alt="circle check" width={16} height={16} quality={100}/>
          }
          <p className='text-zinc-500 text-sm'>um número</p>
        </div>
        <div className='flex gap-2 items-center'>
          {validations.specialChar &&
            <Image src={circleCheck} alt="circle check" width={16} height={16} quality={100}/>
          }
          <p className='text-zinc-500 text-sm'>um caractere especial</p>
        </div>
      </div>

      <SubmitButton text="Cadastrar"/>

      <Link href="/sign-in" className='text-white'>
        Já tenho uma conta
      </Link>
    </>
  )
}
