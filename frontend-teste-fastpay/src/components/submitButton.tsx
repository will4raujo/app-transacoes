'use client'


type SubmitButtonProps = {
  text: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  loading?: boolean
}

export default function SubmitButton({ text, onClick, type, loading, ...rest }: SubmitButtonProps) {
  
  return (
    <button onClick={onClick} className='bg-violet-500 min-w-[120px] h-[48px] p-2 text-white  rounded-md hover:bg-violet-600 transition-colors duration-200' type={type} {...rest}>
      {loading ? 'aguarde...' : text}
    </button>
  )
}