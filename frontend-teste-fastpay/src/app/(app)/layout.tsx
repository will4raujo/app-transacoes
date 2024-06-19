'use client'
import { useAuthHook } from "@/hooks/auth.hook";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuthHook()

  return (
    <>
      {isAuthenticated && (
        <div className='relative mx-auto grid min-h-screen w-full grid-rows-[min-content_max-content] gap-5'>
        <Header />
        {children}
        <Footer />
      </div>
      )}
      {!isAuthenticated && (
        <div className='flex flex-col items-center justify-center h-screen'>
          <h1 className='text-3xl font-bold'>Você precisa estar logado para acessar essa página</h1>
        </div>
      )}
    </>
  )
}