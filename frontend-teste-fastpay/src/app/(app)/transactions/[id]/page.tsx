'use client'
import InputText from '@/components/inputText';
import SubmitButton from '@/components/submitButton';
import { useCategoryHook } from '@/hooks/category.hook';
import { useTransactionHook } from '@/hooks/transaction.hook';
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Transaction() {
  const { categories } = useCategoryHook()
  const { addTransaction } = useTransactionHook()

  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [date, setDate] = useState('')
  const [category, setCategory] = useState('')

  const router = useRouter()

  const handleAddTransaction = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!description || !value || !date || !category) {
      return alert('Preencha todos os campos')
    }
    addTransaction({
      description: description,
      value: Number(value),
      date: new Date(date).toISOString(),
      categoryId: Number(category)
    })
  }

  return (
    <main className='w-full px-4 md:px-10 py-5 flex flex-col gap-5 mb-[80px] md:mx-auto max-w-[800px]'>
      <h1 className='text-3xl font-bold'>Cadastrar transações</h1>
      <div>
        <form className='grid grid-cols-1 md:grid-cols-4 gap-4' onSubmit={handleAddTransaction}>
          <div className='md:col-span-3'>
            <InputText placeholder='Descrição' type='text' onChange={(e) => setDescription(e.target.value)} required />
          </div>
          <InputText placeholder='Valor' type='number' onChange={(e) => setValue(e.target.value)} required />
          <div className='md:col-span-2'>
            <InputText placeholder='Data' type='date' onChange={(e) => setDate(e.target.value)} required />
          </div>
          <div className='md:col-span-2'>
            <select className='flex items-center gap-2 w-full h-[48px] rounded-md border-2 border-zinc-500 bg-black/60 p-1 px-2' onChange={(e) => setCategory(e.target.value)} required value={category}>
              {categories?.map((category, index) => (
                <option key={index} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>

          <div className='flex gap-4 justify-end md:col-span-4'>
            <button type='button' className='bg-zinc-600 min-w-[120px] h-[48px] p-2 text-white  rounded-md hover:bg-zinc-500 transition-colors duration-200' onClick={() => router.push('/transactions')}>
              Cancelar
            </button>
            <SubmitButton text='Cadastrar' type='submit' />
          </div>
        </form>
      </div>
    </main>
  )
}