import { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className='grid min-h-screen place-items-center'>
      {children}
    </div>
  )
}