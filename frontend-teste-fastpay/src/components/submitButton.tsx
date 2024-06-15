'use client'

export default function SubmitButton({ text } : { text: string }) {
  return (
    <button className='bg-violet-500 h-[48px] p-2 text-white  rounded-md hover:bg-violet-600 transition-colors duration-200'>
      {text}
    </button>
  )
}