import { ReactNode } from 'react'

export default function Paragraph({ children } : { children: ReactNode }) {
  return (
    <p className='text-zinc-500 text-sm'>
      {children}
    </p>
  )
}