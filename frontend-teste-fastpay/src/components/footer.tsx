import Paragraph from "./paragraph";

export default function Footer() {
  return (
    <footer className='fixed bottom-0 left-0 bg-zinc-900 text-white py-4 p-0 md:px-6 h-[44px] w-full bg-opacity-90 flex items-center justify-center md:justify-around gap-6'>
      <Paragraph>
        &copy; 2024 - Willian Araujo
      </Paragraph>

      <Paragraph>
        Processo Seletivo FastPay
      </Paragraph>
    </footer>
  )
}