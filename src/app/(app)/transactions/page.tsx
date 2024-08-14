import TransactionsList from '@/components/transactionList'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Transações',
}

export default function Transactions() {

  return (
    <main className='w-full px-4 md:px-10 py-5 pr-9 flex flex-col gap-5 mb-[80px] md:mx-auto max-w-[1024px]'>
      <div className='flex flex-col md:flex-row gap-4 justify-between'>
        <h1 className='text-3xl font-bold'>Transações financeiras</h1>
        <Link href='/transactions/new' passHref className='bg-violet-500 min-w-[120px] h-[45px] px-2 pt-2 pb-0 text-white rounded-md text-center hover:bg-violet-600 transition-colors duration-200'>Nova transação</Link>
      </div>
      <TransactionsList />
    </main>
  )
}