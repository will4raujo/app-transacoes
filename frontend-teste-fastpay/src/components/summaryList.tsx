'use client'
import { useEffect, useState } from 'react'
import { useTransactionHook } from '@/hooks/transaction.hook'
import formatCurrency from '@/components/formatCurrency'

export default function SummaryList() {
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
    <>
    {summary.length > 0 ? (
      <table className='w-full'>
        <thead className='bg-zinc-900 text-white'>
          <tr>
            <th className='px-4 py-2 text-center'>Categoria</th>
            <th className='px-4 py-2 text-center'>Total de Transações</th>
            <th className='px-4 py-2 text-center'>Valor Total</th>
          </tr>
        </thead>
        <tbody>
          {summary.map((item, index) => (
            <tr key={index}>
              <td className='px-4 py-2'>{item.categoryName}</td>
              <td className='px-4 py-2 text-center'>{item.transactionCount}</td>
              <td className='px-4 py-2 text-center'>{formatCurrency(item.totalValue)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>Cadastre ao menos uma transação para que o relatório seja apresentado</p>
    )}
    </>
  )
}