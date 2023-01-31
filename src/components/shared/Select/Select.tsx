import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

import { SelectInput } from './styled';
import { SelectProps } from './types';
import InputLabel from '../InputLabel';

const Select: React.FC<SelectProps> = ({
  label,
  id,
  error,
  options,
  errorText,
  value,
  onChange,
  onFocus,
  disabled,
  required,
  onBlur,
  placeholder,
  name,
}) => {
  return (
    <div className='mb-5 w-full'>
      {label && !!label.length && <InputLabel id={id} label={label} />}
      <SelectInput
        error={error}
        className='flex w-full flex-row items-center border-b-2 py-3 px-2 text-xs shadow-inner outline-none transition-all duration-300 ease-in placeholder:text-xs focus:outline-none md:px-4 lg:py-4 xl:py-5 xl:text-sm xl:placeholder:text-sm'
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        disabled={disabled}
        required={required}
        onBlur={onBlur}
        placeholder={placeholder}
        id={id}
        name={name}
      >
        <option value='' label={placeholder}>
          Select a {label}
        </option>
        {options &&
          options.map((option, index) => (
            <option key={index} value={option.value} label={option.name}>
              {option.name}
            </option>
          ))}
      </SelectInput>
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

export default Select;
