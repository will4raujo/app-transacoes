'use client'
import { useEffect, useState } from 'react'
import { useTransactionHook } from '@/hooks/transaction.hook'
import { useCategoryHook } from '@/hooks/category.hook'

export default function Summary() {
  const { getSummary } = useTransactionHook()
  const [summary, setSummary] = useState<{ categoryName: string, transactionCount: number, totalValue: number }[]>([])

  const fetchSummary = async () => {
    const response = await getSummary()
    setSummary(response as any)
  }

  useEffect(() => {
    fetchSummary()
  }, [])

  return (
    <main className='w-full px-4 md:px-10 py-5 flex flex-col gap-5 mb-[80px] md:mx-auto max-w-[800px]'>
      <h1 className='text-3xl font-bold'>Relatório de despesas por categoria</h1>
      {summary.length > 0 ? (
        <table className='w-full border-collapse border border-zinc-400'>
          <thead>
            <tr>
              <th className='border border-zinc-400 px-4 py-2'>Categoria</th>
              <th className='border border-zinc-400 px-4 py-2'>Total de Transações</th>
              <th className='border border-zinc-400 px-4 py-2'>Valor Total</th>
            </tr>
          </thead>
          <tbody>
            {summary.map((item, index) => (
              <tr key={index}>
                <td className='border border-zinc-400 px-4 py-2'>{item.categoryName}</td>
                <td className='border border-zinc-400 px-4 py-2'>{item.transactionCount}</td>
                <td className='border border-zinc-400 px-4 py-2'>{item.totalValue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Carregando...</p>
      )}
    </main>
  )
}
