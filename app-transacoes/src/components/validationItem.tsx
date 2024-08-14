import Image from 'next/image';
import circleCheck from '../../public/circle-check.svg';
import Paragraph from './paragraph';
import { ReactNode } from 'react';

interface ValidationItemProps {
  isValid: boolean;
  children: ReactNode;
}

export default function ValidationItem({ isValid, children }: ValidationItemProps) {
  return (
    <div className='flex gap-2 items-center'>
      {isValid && (
        <Image src={circleCheck} alt="circle check" width={16} height={16} quality={100} />
      )}
      <Paragraph>{children}</Paragraph>
    </div>
  );
};
