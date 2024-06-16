'use client'
import InputText from "@/components/inputText";
import SubmitButton from "@/components/submitButton";
import { Suspense } from "react";
import { useState, useEffect } from "react";

type CategoryType = 'fixed' | 'variable';

type Category = {
  type: CategoryType;
  name: string;
}

type CategoriesObject = {
  personal: {
    predefined: Category[];
    custom: Category[];
  };
  business: {
    predefined: Category[];
    custom: Category[];
  };
};

type CategoryProps = {
  expenseModel: keyof CategoriesObject;
  expenseType: keyof CategoriesObject['personal'];
}

const categories: CategoriesObject = {
  personal: {
    predefined: [
      { type: 'fixed', name: 'Moradia' },
      { type: 'fixed', name: 'Educação' },
      { type: 'fixed', name: 'Roupas' },
      { type: 'fixed', name: 'Outros' },
      { type: 'variable', name: 'Alimentação' },
      { type: 'variable', name: 'Transporte' },
      { type: 'variable', name: 'Entretenimento' },
    ],
    custom: []
  },
  business: {
    predefined: [
      { type: 'fixed', name: 'Salário' },
      { type: 'fixed', name: 'Freelancer' },
      { type: 'fixed', name: 'Outros' },
      { type: 'variable', name: 'Aluguel' },
      { type: 'variable', name: 'Transporte' },
      { type: 'variable', name: 'Entretenimento' },
    ],
    custom: []
  }
}

export default function Categories({ expenseModel, expenseType }: CategoryProps) {
  const [selectedExpenseModel, setSelectedExpenseModel] = useState<keyof CategoriesObject>(expenseModel);
  const [selectedExpenseType, setSelectedExpenseType] = useState<keyof CategoriesObject['personal']>(expenseType);

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedExpenseModel(e.target.value as keyof CategoriesObject);
  }

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedExpenseType(e.target.value as keyof CategoriesObject['personal']);
  }

  useEffect(() => {
    setSelectedExpenseModel(expenseModel);
    setSelectedExpenseType(expenseType);
  }, [expenseModel, expenseType]);

  const currentCategories = categories[selectedExpenseModel][selectedExpenseType];

  const fixedCategories = currentCategories.filter(category => category.type === 'fixed');
  const variableCategories = currentCategories.filter(category => category.type === 'variable');

  return (
    <main className='w-full px-6 md:px-10 py-5 flex flex-col gap-5'>
      <h1 className='text-3xl font-bold'>Categorias</h1>
      <div>
        <h2 className='text-xl mb-2'>Adicionar nova categoria</h2>
        <form className="flex gap-4 ">
          <select className="flex items-center gap-2 max-w-[238px] rounded-md border-2 border-zinc-500 bg-black/60 p-1 pl-2" value={selectedExpenseModel} onChange={handleModelChange}>
            <option value='personal'>Pessoal</option>
            <option value='business'>Empresarial</option>
          </select>
          <select className="flex items-center gap-2 max-w-[238px] rounded-md border-2 border-zinc-500 bg-black/60 p-1 pl-2" value={selectedExpenseType} onChange={handleTypeChange}>
            <option value='predefined'>Predefinida</option>
            <option value='custom'>Personalizada</option>
          </select>
          { selectedExpenseType === 'custom' && (
            <>
              <InputText placeholder='Nome da categoria' /> 
              <SubmitButton text='Adicionar' />
            </>
          )}
        </form>
      </div>
      <div>
        <h2 className='text-xl mb-2'>Lista de categorias</h2>
        <Suspense fallback={<p>Carregando...</p>}>
          <h2>{selectedExpenseModel === 'personal' ? 'Pessoal' : 'Empresarial'}</h2>
          <h3>{selectedExpenseType === 'predefined' ? 'Predefinida' : 'Personalizada'}</h3>
          <div>
            <h4 className='text-lg font-semibold'>Fixas</h4>
            <ul>
              {fixedCategories.map((category, index) => (
                <li key={index}>{category.name}</li>
              ))}
            </ul>
            <h4 className='text-lg font-semibold'>Variáveis</h4>
            <ul>
              {variableCategories.map((category, index) => (
                <li key={index}>{category.name}</li>
              ))}
            </ul>
          </div>
        </Suspense>
      </div>
    </main>
  )
}