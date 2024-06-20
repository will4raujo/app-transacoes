'use client'
import BurguerMenu from './burgerMenu'
import { LogOut } from 'lucide-react'
import Link from 'next/link'
import { useAuthHook } from '@/hooks/auth.hook'
import { useRouter } from 'next/navigation'

export default function Header() {
  const { logout } = useAuthHook()
  const routes = useRouter()

  const handleLogout = () => {
    logout()
    routes.push('/sign-in')
  }

  return (
    <header className='bg-zinc-900 text-white py-4 px-4 h-[44px] w-full bg-opacity-90 flex items-center justify-between gap-10'>
      <BurguerMenu>
        <Link href='/'>Home</Link>
        <Link href='/categories'>Categorias</Link>
        <Link href='/transactions'>Transações</Link>
        <Link href='/summary'>Relatório</Link>
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
          <li>
            <Link href='/summary'>Relatório</Link>
          </li>
        </ul>
      </nav>

      <div className='cursor-pointer flex gap-2 items-center' onClick={handleLogout}>
        <span className='hidden md:block text-lg text-white'>Sair</span>
        <LogOut size={20} />
      </div>
    </header>
  )
}