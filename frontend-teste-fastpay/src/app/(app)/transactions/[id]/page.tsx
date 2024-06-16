import InputText from "@/components/inputText";
import SubmitButton from "@/components/submitButton";

export default function Categories() {

  return (
    <main className='w-full px-4 md:px-10 py-5 flex flex-col gap-5 mb-[80px] md:mx-auto max-w-[800px]'>
      <h1 className='text-3xl font-bold'>Cadastrar transações</h1>
      <div>
        <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-3">
            <InputText placeholder="Descrição" type="text" />
          </div>
          <InputText placeholder="Valor" type="number" />
          <div className='md:col-span-2'>
          <InputText placeholder="Data" type="date" />
          </div>
          <div className='md:col-span-2'>
            <InputText placeholder="Categoria" type="text" />
          </div>
        </form>
        <div className="flex gap-4 justify-end mt-4">
          <button type="button" className='bg-zinc-500 min-w-[120px] h-[48px] p-2 text-white  rounded-md hover:bg-zinc-600 transition-colors duration-200'>Cancelar</button>
          <SubmitButton text="Cadastrar" />
        </div>
      </div>
    </main>
  )
}