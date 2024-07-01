'use client'
import InputText from '@/components/inputText'
import SubmitButton from '@/components/submitButton'
import { useCategoryHook } from '@/hooks/category.hook'
import { useTransactionHook } from '@/hooks/transaction.hook'
import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { useAsyncHook } from '@/hooks/async.hook'

export default function TransactionForm() {

  const { categories, getAllCategories } = useCategoryHook()
  const { addTransaction, editTransaction, getTransactionById, transaction } = useTransactionHook()
  const { id } = useParams()
  const router = useRouter()

  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [date, setDate] = useState('')
  const [category, setCategory] = useState('')

  const { isLoading } = useAsyncHook()

  useEffect(() => {
    if (id && id !== 'new') {
      getTransactionById(id as string)
    } else {
      setDescription('')
      setValue('')
      setDate('')
      setCategory('')
    }
    getAllCategories()
  }, [id, getTransactionById, getAllCategories])

  useEffect(() => {
    if (transaction && id !== 'new') {
      setDescription(transaction.description)
      setValue(transaction.value.toString())
      setDate(new Date(transaction.date).toISOString().split('T')[0])
      setCategory(transaction.categoryId.toString())
    }
  }, [transaction, id])

  const formatCurrency = (value: string) => {
    const numberValue = parseFloat(value.replace(/\D/g, '')) / 100
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(numberValue)
  }

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/[^\d]/g, '')
    const formattedValue = formatCurrency(inputValue)
    setValue(formattedValue)
  }

  const handleCancel = () => {
    confirm('Deseja cancelar a transação? Todas as informações serão perdidas') && router.push('/transactions')
  }

  const handleSaveTransaction = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!description || !value || !date || !category) {
      return alert('Preencha todos os campos')
    }

    const transactionData = {
      description: description,
      value: parseFloat(value.replace(/\D/g, '')) / 100,
      date: new Date(date).toISOString(),
      categoryId: Number(category),
    }

    if (id === 'new') {
      await addTransaction(transactionData)
      router.push('/transactions')
    }

    if (id !== 'new') {
      await editTransaction(id as string, transactionData)
      router.push('/transactions')
    }
  }

  return (
    <>
      <h1 className='text-3xl font-bold'>{id ? 'Editar' : 'Cadastrar'} Transação</h1>
      <div>
        <form className='grid grid-cols-1 md:grid-cols-4 gap-4' onSubmit={handleSaveTransaction}>
          <div className='md:col-span-3'>
            <InputText placeholder='Descrição' type='text' value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>
          <InputText placeholder='Valor' type='text' value={value} onChange={handleValueChange} required />
          <div className='md:col-span-2'>
            <InputText placeholder='Data' type='date' value={date} onChange={(e) => setDate(e.target.value)} required />
          </div>
          <div className='md:col-span-2'>
            <select className='flex items-center gap-2 w-full h-[48px] rounded-md border-2 border-zinc-500 bg-black/60 p-1 px-2' onChange={(e) => setCategory(e.target.value)} required value={category}>
              <option value='' disabled hidden>
                {id === 'new' ? 'Selecione uma categoria' : 'aguarde...'}
              </option>
              {categories?.map((category, index) => (
                <option key={index} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>

          <div className='flex gap-4 justify-end md:col-span-4'>
            <button type='button' className='bg-zinc-600 min-w-[120px] h-[48px] p-2 text-white rounded-md hover:bg-zinc-500 transition-colors duration-200' onClick={handleCancel}>
              Cancelar
            </button>
            <SubmitButton text={id !== 'new' ? 'Salvar' : 'Cadastrar'} type='submit' loading={isLoading} />
          </div>
        </form>
      </div>
    </>
  )
}