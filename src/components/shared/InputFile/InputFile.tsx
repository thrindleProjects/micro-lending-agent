import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

import { FileInput } from './styled';
import { InputFileProps } from './types';
import InputLabel from '../InputLabel';

const InputFile: React.FC<InputFileProps<HTMLInputElement>> = ({
  error,
  label,
  value,
  onChange,
  required,
  onBlur,
  placeholder,
  className,
  errorText,
  id,
  name,
  multiple,
  extensions,
}) => {
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (!file) {
      return;
    }

    // console.log({ file, name });
    onChange(id, file);
  };

  return (
    <div className='mb-5 w-full'>
      {label && !!label.length && <InputLabel id={id} label={label} />}
      <FileInput
        className={`relative w-full border-b-2 px-2 text-xs shadow-inner outline-none transition-all duration-300 ease-in placeholder:text-xs md:px-4 xl:text-sm xl:placeholder:text-sm ${
          className ? className : ''
        }`}
      >
        <input
          type='file'
          name={name}
          id={id}
          onBlur={onBlur}
          className='absolute h-full w-full opacity-0'
          required={required}
          onChange={handleFileUpload}
          multiple={Boolean(multiple)}
          accept={`${extensions ? extensions : '.doc, .docx, .pdf'}`}
        />
        <div className='grid grid-cols-4 divide-x-2 divide-amali-grey'>
          <span className='col-span-1 py-3 text-center lg:py-4 xl:py-5'>
            {placeholder}
          </span>
          <span className='col-span-3 flex items-center py-3 pl-2 lg:py-4 xl:py-5'>
            {value && typeof value !== 'string' ? value.name : 'No file chosen'}
          </span>
        </div>
      </FileInput>
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ ease: 'easeOut', duration: 0.5 }}
            className='pt-1 pl-1 text-xs font-semibold text-red-300'
          >
            {errorText}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InputFile;
