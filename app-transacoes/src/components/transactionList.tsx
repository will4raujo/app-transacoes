'use client'
import { Suspense, useEffect } from 'react'
import { PenLine, Trash } from 'lucide-react'
import { useTransactionHook } from '@/hooks/transaction.hook'
import { useRouter } from 'next/navigation'
import formatCurrency from '@/components/formatCurrency'

export default function TransactionsList() {
  const { transactions, getTransactions, deleteTransaction } = useTransactionHook()

  const fetchTransactions = () => {
    getTransactions()
  }

  const router = useRouter()

  const handleEditTransaction = (id: string) => {
    router.push(`/transactions/${id}`)
  }

  const handleDeleteTransaction = (id: string) => {
    const confirmDelete = window.confirm('Tem certeza que deseja deletar essa transação?')
    if (confirmDelete) {
      deleteTransaction(id)
      fetchTransactions()
    }
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <table className='w-full'>
        <thead className='bg-zinc-900 text-white'>
          <tr>
            <th className='p-2'>Descrição</th>
            <th className='p-2'>Valor</th>
            <th className='p-2'>Data</th>
            <th className='p-2 hidden md:table-cell'>Categoria</th>
            <th className='p-2'>Ações</th>
          </tr>
        </thead>
        <tbody>
          <Suspense fallback={<p>Carregando lista de transações...</p>}>
            {transactions?.map(transaction => (
              <tr key={transaction.id}>
                <td className='p-2'>{transaction.description}</td>
                <td className='p-2 text-center'>{formatCurrency(transaction.value)}</td>
                <td className='p-2 text-center'>{transaction.date}</td>
                <td className='p-2 text-center hidden md:table-cell'>{transaction.category?.name}</td>
                <td className='p-2 flex gap-2 justify-center'>
                  <button onClick={() => handleEditTransaction(transaction.id?.toString() ?? '')} className='bg-zinc-900 p-1 rounded-md hover:bg-zinc-600 transition-colors duration-200'>
                    <PenLine size={24} />
                  </button>
                  <button onClick={() => handleDeleteTransaction(transaction.id?.toString() ?? '')} className='bg-zinc-900 p-1 rounded-md hover:bg-zinc-600 transition-colors duration-200'>
                    <Trash size={24} />
                  </button>
                </td>
              </tr>
            ))}
          </Suspense>
        </tbody>
      </table>
  )
}