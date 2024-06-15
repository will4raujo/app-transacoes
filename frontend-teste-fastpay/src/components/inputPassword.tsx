'use client'
import React, { useEffect, useState } from 'react';
import Paragraph from './paragraph';
import ValidationItem from './validationItem';

export default function InputPassword({ placeholder }: { placeholder: string }) {

  const [password, setPassword] = useState('');
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

      <div className='w-full flex flex-col gap-1'>
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={handleChange}
          className="text-zinc-500 bg-zinc-900 h-[48px] pl-4 rounded-md"
        />
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
    </>
  )
}