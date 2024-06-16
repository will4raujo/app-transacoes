import { InputHTMLAttributes } from "react"

type InputTextProps = {
  placeholder: string
} & InputHTMLAttributes<HTMLInputElement>

export default function InputText({ placeholder, type , ...rest }: InputTextProps) {
  return <input 
    type={type}
    placeholder={placeholder}
    className="text-zinc-500 bg-zinc-900 h-[48px] pl-4 rounded-md w-full"
    {...rest} 
  />
}