import { Suspense } from 'react'
import Link from 'next/link'
import {PenLine, Trash, Eye} from 'lucide-react'

export default function Transactions() {
  return (
    <main className='w-full px-4 md:px-10 py-5 flex flex-col gap-5 mb-[80px] md:mx-auto max-w-[800px]'>
      <h1 className='text-3xl font-bold'>Transações financeiras</h1>
      <div className='flex gap-4 justify-end'>
        <Link href='/transactions/new' passHref className='bg-zinc-500 min-w-[120px] h-[48px] p-2 text-white rounded-md hover:bg-zinc-600 transition-colors duration-200'>Nova transação</Link>
      </div>
      <Suspense fallback={<p>Carregando lista de transações...</p>}>
        <table className='w-full'>
          <thead className='bg-zinc-900 text-white'>
            <tr>
              <th className='p-2'>Descrição</th>
              <th className='p-2'>Valor</th>
              <th className='p-2'>Data</th>
              <th className='p-2'>Categoria</th>
              <th className='p-2'>Ações</th>
            </tr>
          </thead>
          <tbody>
            {transactionsData.map(transaction => (
              <tr key={transaction.id}>
                <td className='p-2 text-center'>{transaction.description}</td>
                <td className='p-2 text-center'>{transaction.value}</td>
                <td className='p-2 text-center'>{transaction.date}</td>
                <td className='p-2 text-center'>{transaction.category}</td>
                <td className='p-2 flex gap-2 justify-center'>
                  <button className='bg-zinc-900 p-1 rounded-md hover:bg-zinc-600 transition-colors   duration-200'>
                    <Eye size={24} />
                  </button>
                  <button className='bg-zinc-900 p-1 rounded-md hover:bg-zinc-600 transition-colors duration-200'>
                    <PenLine size={24} />
                  </button>
                  <button className='bg-zinc-900 p-1 rounded-md hover:bg-zinc-600 transition-colors duration-200'>
                    <Trash size={24} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Suspense>

    </main>
  )
}

const transactionsData = [
  {
    id: 1,
    description: 'Salário',
    value: 5000,
    date: '2022-09-10',
    category: 'Salário'
  },
  {
    id: 2,
    description: 'Aluguel',
    value: 1500,
    date: '2022-09-10',
    category: 'Moradia'
  },
  {
    id: 3,
    description: 'Mercado',
    value: 500,
    date: '2022-09-10',
    category: 'Alimentação'
  },
  {
    id: 4,
    description: 'Freelancer',
    value: 1000,
    date: '2022-09-10',
    category: 'Freelancer'
  },
  {
    id: 5,
    description: 'Aluguel',
    value: 1500,
    date: '2022-09-10',
    category: 'Moradia'
  }
]