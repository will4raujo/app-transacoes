import { ReactNode } from 'react'

export default function AuthLayout({ children } : { children: ReactNode }) {
  return (
    <div className='grid min-h-screen place-items-center'>
      <form className='flex flex-col w-[350px] md:w-[478px] gap-6 bg-black/60 border-zinc-900 border-2 p-5 md:p-14 rounded-md'>
        {children}
      </form>
    </div>
  )
}