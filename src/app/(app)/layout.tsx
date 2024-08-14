'use client'
import { useAuthHook } from "@/hooks/auth.hook";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomeLayout({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuthHook();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/sign-in');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className='relative mx-auto grid min-h-screen w-screen grid-rows-[min-content_max-content] gap-5'>
      <Header />
      {children}
      <Footer />
    </div>
  );
}