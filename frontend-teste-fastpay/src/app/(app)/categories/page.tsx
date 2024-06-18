'use client'
import InputText from "@/components/inputText";
import SubmitButton from "@/components/submitButton";
import { Suspense, useRef } from "react";
import { useState, useEffect } from "react";

type CategoryType = 'fixed' | 'variable';

type Category = {
  id: number;
  name: string;
  type: CategoryType;
}

type PersonalCategory = {
  categories: Category[];
}

type BusinessCategory = {
  categories: Category[];
}

type CategoriesObject = {
  personal: PersonalCategory[];
  business: BusinessCategory[];
}

const categoriesData = {
  personal: {
    categories: [
      { id: 1, name: 'Alimentação', type: 'variable' },
      { id: 2, name: 'Transporte', type: 'variable' },
      { id: 3, name: 'Lazer', type: 'variable' },
      { id: 4, name: 'Saúde', type: 'variable' },
      { id: 5, name: 'Educação', type: 'variable' },
      { id: 6, name: 'Moradia', type: 'fixed' },
      { id: 7, name: 'Internet', type: 'fixed' },
      { id: 8, name: 'Telefone', type: 'fixed' },
      { id: 9, name: 'Plano de saúde', type: 'fixed' },
      { id: 10, name: 'Seguro de vida', type: 'fixed' },
      { id: 11, name: 'Seguro veicular', type: 'fixed' },
    ]
  },
  business: {
    categories: [
      { id: 1, name: 'Salário', type: 'fixed' },
      { id: 2, name: 'Vendas', type: 'variable' },
      { id: 3, name: 'Despesas Gerais', type: 'variable' },
    ]
  }
}

export default function Categories() {
  const [selectedCategoryModel, setSelectedCategoryModel] = useState<'personal' | 'business'>('personal');
  const [selectedCategoryType, setSelectedCategoryType] = useState<'predefined' | 'custom'>('predefined');

  const handleCategoryModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategoryModel(event.target.value as 'personal' | 'business');
  }

  const handleCategoryTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategoryType(event.target.value as 'predefined' | 'custom');
  }

  const addNewCategory = () => {
    console.log('Adicionar nova categoria');
  }

  return (
    <main className='w-full px-4 md:px-10 py-5 flex flex-col gap-5 mb-[80px] max-w-[1024px] mx-auto'>
      <h1 className='text-3xl font-bold'>Categorias</h1>
      <div>
        <form className="flex flex-col gap-4 ">
          <div className='flex gap-4 items-center'>
            <div>
              <label className='text-violet-400' htmlFor="categoryModel">Modelo</label>
              <select className="flex items-center gap-2 max-w-[238px] h-[48px] rounded-md border-2 border-zinc-500 bg-black/60 p-1 px-2" onChange={handleCategoryModelChange} value={selectedCategoryModel}>
                <option value='personal'>Pessoal</option>
                <option value='business'>Empresarial</option>
              </select>
            </div>
            <div>
            <label className='text-violet-400' htmlFor="categoryType">Tipo do modelo</label>
            <select className="flex items-center gap-2 max-w-[238px] h-[48px] rounded-md border-2 border-zinc-500 bg-black/60 p-1 px-2" onChange={handleCategoryTypeChange} value={selectedCategoryType}>
              <option value='predefined'>Pré-definida</option>
              <option value='custom'>Personalizada</option>
            </select>
            </div>
          </div>
          <div className="flex gap-4 flex-col md:flex-row md:items-end">
            <div className="w-auto md:w-[358px]">
              <span className='text-violet-400'>Adicionar nova categoria</span>
              <InputText placeholder='Nome da categoria' />
            </div>
            <div className="flex gap-4 flex-wrap items-end">
              <div>
                <label className='text-violet-400' htmlFor="categoryType">Tipo da categoria</label>
                <select className="flex items-center gap-2 w-full h-[48px] rounded-md border-2 border-zinc-500 bg-black/60 p-1 px-2">
                  <option value='fixed'>Fixa</option>
                  <option value='variable'>Variável</option>
                </select>
              </div>
              <SubmitButton text='Adicionar' />
            </div>
          </div>
        </form>
      </div>
      <div className="min-w-[378px] w-auto mt-12">
        <h2 className='text-xl mb-2 text-violet-400'>Lista de categorias</h2>
        <Suspense fallback={<p>Carregando...</p>}>
          {selectedCategoryType === 'predefined' && (
            <>
              <hr className="bg-zinc-700" />
              <h3 className='text-lg text-violet-200'>Categorias fixas</h3>
              <div className="flex gap-2 flex-wrap my-6">
                {categoriesData[selectedCategoryModel].categories.filter(category => category.type === 'fixed').map(category => (
                  <span className='bg-zinc-500 text-white p-1 rounded-md cursor-pointer' key={category.id}>{category.name}</span>
                ))}
              </div>
              <hr className="bg-zinc-700" />
              <h3 className='text-lg text-violet-200'>Categorias variáveis</h3>
              <div className="flex gap-2 flex-wrap my-6">
                {categoriesData[selectedCategoryModel].categories.filter(category => category.type === 'variable').map(category => (
                  <span className='bg-zinc-500 text-white p-1 rounded-md cursor-pointer' key={category.id}>{category.name}</span>
                ))}
              </div>
            </>
          )}
        </Suspense>
        <div className="flex justify-end">
          <SubmitButton text='Salvar' />
        </div>
      </div>
    </main>
  )
}