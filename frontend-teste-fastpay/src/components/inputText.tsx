export default function InputText({ placeholder } : { placeholder: string }) {
  return <input type="text" placeholder={placeholder} className="text-zinc-500 bg-zinc-900 h-[48px] pl-4 rounded-md"/>
}