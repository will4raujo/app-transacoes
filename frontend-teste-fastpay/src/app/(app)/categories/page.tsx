'use client'
import InputText from "@/components/inputText";
import SubmitButton from "@/components/submitButton";
import { Suspense } from "react";
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
      { id: 1, name: 'Alimentação', type: 'fixed' },
      { id: 2, name: 'Transporte', type: 'variable' },
      { id: 3, name: 'Lazer', type: 'variable' },
      { id: 4, name: 'Saúde', type: 'variable' },
      { id: 5, name: 'Educação', type: 'variable' },
      { id: 6, name: 'Moradia', type: 'fixed' },
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

  return (
    <main className='w-full px-6 md:px-10 py-5 flex flex-col gap-5'>
      <h1 className='text-3xl font-bold'>Categorias</h1>
      <div>
        <form className="flex gap-4 items-end ">
          <div className='flex gap-4 items-center'>
            <select className="flex items-center gap-2 max-w-[238px] h-[48px] rounded-md border-2 border-zinc-500 bg-black/60 p-1 pl-2" onChange={handleCategoryModelChange} value={selectedCategoryModel}>
              <option value='personal'>Pessoal</option>
              <option value='business'>Empresarial</option>
            </select>
            <select className="flex items-center gap-2 max-w-[238px] h-[48px] rounded-md border-2 border-zinc-500 bg-black/60 p-1 pl-2" onChange={handleCategoryTypeChange} value={selectedCategoryType}>
              <option value='predefined'>Predefinida</option>
              <option value='custom'>Personalizada</option>
            </select>
          </div>
          <div>
              <h2 className='text-xl mb-2'>Adicionar nova categoria</h2>
              <div className="flex gap-4">
              <InputText placeholder='Nome da categoria' /> 
              <select className="flex items-center gap-2 max-w-[238px] h-[48px] rounded-md border-2 border-zinc-500 bg-black/60 p-1 pl-2">
                <option value='fixed'>Fixa</option>
                <option value='variable'>Variável</option>
              </select>
              <SubmitButton text='Adicionar' />
              </div>
          </div>
        </form>
      </div>
      <div>
        <h2 className='text-xl mb-2'>Lista de categorias</h2>
        <Suspense fallback={<p>Carregando...</p>}>
          { selectedCategoryType === 'predefined' && ( 
            <>
              <h3 className='text-lg font-bold'>Categorias fixas</h3>
              <ul>
              {categoriesData[selectedCategoryModel].categories.filter(category => category.type === 'fixed').map(category => (
                <li key={category.id}>{category.name}</li>
              ))}
                </ul><h3 className='text-lg font-bold'>Categorias variáveis</h3><ul>
                {categoriesData[selectedCategoryModel].categories.filter(category => category.type === 'variable').map(category => (
                  <li key={category.id}>{category.name}</li>
                ))}
              </ul>
            </>
          )}
        </Suspense>
        <SubmitButton text='Salvar' />
      </div>
    </main>
  )
}