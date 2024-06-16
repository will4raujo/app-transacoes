import BurguerMenu from './burgerMenu'
import { LogOut } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='bg-zinc-900 text-white py-4 px-6 h-[44px] w-full bg-opacity-90 flex items-center justify-between gap-10'>
      <BurguerMenu>
        <Link href='/'>Home</Link>
        <Link href='/categories'>Categorias</Link>
        <Link href='/transactions'>Transações</Link>
        <Link href='/'>Sair</Link>
      </BurguerMenu>
      <nav className='hidden md:block'>
        <ul className='flex gap-4'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/categories'>Categorias</Link>
          </li>
          <li>
            <Link href='/transactions'>Transações</Link>
          </li>
        </ul>
      </nav>

      <div className='cursor-pointer flex gap-2 items-center'>
        <span className='hidden md:block text-sm text-white'>Sair</span>
        <LogOut size={20} />
      </div>
    </header>
  )
}