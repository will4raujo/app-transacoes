import Header from "@/components/header";
import Footer from "@/components/footer";
import { ReactNode } from "react";
export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className='relative mx-auto grid min-h-screen w-full grid-rows-[min-content_max-content] gap-5'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}