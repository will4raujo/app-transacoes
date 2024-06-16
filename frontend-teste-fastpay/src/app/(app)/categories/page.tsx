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
      {id : 9, name: 'Plano de saúde', type: 'fixed'},
      {id : 10, name: 'Seguro de vida', type: 'fixed'},
      {id : 11, name: 'Seguro veicular', type: 'fixed'},
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
    <main className='w-full px-4 md:px-10 py-5 flex flex-col gap-5 mb-[80px]'>
      <h1 className='text-3xl font-bold'>Categorias</h1>
      <div>
        <form className="flex flex-col gap-4 ">
          <div className='flex gap-4 items-center'>
            <select className="flex items-center gap-2 max-w-[238px] h-[48px] rounded-md border-2 border-zinc-500 bg-black/60 p-1 pl-2" onChange={handleCategoryModelChange} value={selectedCategoryModel}>
              <option value='personal'>Pessoal</option>
              <option value='business'>Empresarial</option>
            </select>
            <select className="flex items-center gap-2 max-w-[238px] h-[48px] rounded-md border-2 border-zinc-500 bg-black/60 p-1 pl-2" onChange={handleCategoryTypeChange} value={selectedCategoryType}>
              <option value='predefined'>Pré-definida</option>
              <option value='custom'>Personalizada</option>
            </select>
          </div>
          <div >
              <h2 className='text-xl mb-2 text-violet-400'>Adicionar nova categoria</h2>
              <div className="flex gap-4 flex-wrap w-[358px] md:w-auto">
              <InputText placeholder='Nome da categoria'/> 
              <select className="flex items-center gap-2 max-w-[238px] h-[48px] rounded-md border-2 border-zinc-500 bg-black/60 p-1 pl-2">
                <option value='fixed'>Fixa</option>
                <option value='variable'>Variável</option>
              </select>
              <SubmitButton text='Adicionar' />
              </div>
          </div>
        </form>
      </div>
      <div className="w-[348px] md:w-[800px]">
        <h2 className='text-xl mb-2 text-violet-400'>Lista de categorias</h2>
        <Suspense fallback={<p>Carregando...</p>}>
          { selectedCategoryType === 'predefined' && ( 
            <>
              <hr className="bg-zinc-700"/>
              <h3 className='text-lg text-violet-200'>Categorias fixas</h3>
              <div className="flex gap-2 flex-wrap mb-4">
              {categoriesData[selectedCategoryModel].categories.filter(category => category.type === 'fixed').map(category => (
                <span className='bg-zinc-500 text-white p-1 rounded-md' key={category.id}>{category.name}</span>
              ))}
                </div>
                <hr className="bg-zinc-700"/>
                <h3 className='text-lg text-violet-200'>Categorias variáveis</h3>
                <div className="flex gap-2 flex-wrap mb-4">
                {categoriesData[selectedCategoryModel].categories.filter(category => category.type === 'variable').map(category => (
                  <span className='bg-zinc-500 text-white p-1 rounded-md' key={category.id}>{category.name}</span>
                ))}
              </div>
            </>
          )}
        </Suspense>
        <SubmitButton text='Salvar' />
      </div>
    </main>
  )
}