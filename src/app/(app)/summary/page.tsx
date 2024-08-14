import SummaryList from "@/components/summaryList"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Despesas por categoria',
}

export default function Summary() {
  return (
    <main className='w-full px-4 md:px-10 py-5 pr-9 flex flex-col gap-5 mb-[80px] md:mx-auto max-w-[800px]'>
      <h1 className='text-3xl font-bold'>Relatório de despesas por categoria</h1>
      <SummaryList />
    </main>
  )
}
