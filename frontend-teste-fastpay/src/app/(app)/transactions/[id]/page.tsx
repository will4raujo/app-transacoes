import TransactionForm from '@/components/transactionForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Transação',
}

export default function Transaction() {
  
  return (
    <main className='w-full px-4 md:px-10 py-5 pr-9 flex flex-col gap-5 mb-[80px] md:mx-auto max-w-[800px]'>
      <TransactionForm />
    </main>
  )
}
