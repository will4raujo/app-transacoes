import { Metadata } from 'next'
import CategoriesForm from '@/components/categoriesForm'

export const metadata: Metadata = {
  title: 'Categorias',
}

export default function Categories() {

  return (
    <main className='w-full px-4 md:px-10 py-5 pr-9 flex flex-col gap-5 mb-[80px] max-w-[1024px] mx-auto'>
      <h1 className='text-3xl font-bold'>Categorias</h1>
      <CategoriesForm />
    </main>
  );
}