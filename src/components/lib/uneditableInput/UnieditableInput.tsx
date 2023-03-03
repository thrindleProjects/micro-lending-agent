import { UnieditableInputProps } from '@/components/lib/uneditableInput/type';

const UnieditableInput: React.FC<UnieditableInputProps> = ({ text, label }) => {
  return (
    <div className='w-full'>
      <p className='text-text-color-a pb-1 text-xs font-semibold md:text-sm '>
        {label}
      </p>
      <div className='h-10 border-b-2 border-[#42b0a8] bg-[#42b0a820] px-2'>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default UnieditableInput;
