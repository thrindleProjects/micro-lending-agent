import { AnimatePresence, motion } from 'framer-motion';
import ReactSelect from 'react-select';

import { SelectWrapper } from './styled';
import { SelectProps } from './types';
import InputLabel from '../InputLabel';

type Option = { readonly value: string };

const Select: React.FC<SelectProps> = ({
  label,
  id,
  error,
  options,
  errorText,
  onChangeValue,
  onFocus,
  disabled,
  required,
  onBlurEvent,
  placeholder,
  name,
}) => {
  const handleChange = (option: Option | null) => {
    // logic here
    if (onChangeValue && option) {
      onChangeValue(id, option.value, true);
    }
  };

  const handleBlur = () => {
    if (onBlurEvent) {
      onBlurEvent(id, true, true);
    }
  };

  return (
    <SelectWrapper className='flex w-full flex-col gap-2' error={error}>
      {label && !!label.length && <InputLabel id={id} label={label} />}
      <ReactSelect
        placeholder={`Select ${placeholder || label || 'option'}`}
        options={options}
        onBlur={handleBlur}
        onFocus={onFocus}
        id={id}
        onChange={handleChange}
        isDisabled={disabled}
        required={required}
        name={name}
        captureMenuScroll={true}
        classNames={{
          option: (state) =>
            `hover:bg-amali-green hover:text-white bg-transparent text-xs lg:text-sm px-2 md:px-6 py-2 focus:bg-amali-green focus-within:bg-amali-green ${
              state.isSelected ? 'font-bold' : ''
            } ${state.isFocused ? 'bg-[#42B0A8] bg-opacity-10' : ''}`,
          control: () =>
            `w-full border-x-0 border-b-2 border-t-0 px-2 py-2 md:py-[0.375rem] text-xs outline-none transition-all duration-300 ease-in placeholder:text-xs md:px-4 lg:py-3 lg:text-sm xl:placeholder:text-sm flex react-select`,
        }}
        styles={{
          control: () => {
            return {};
          },
          option: () => ({}),
          valueContainer: (baseStyles) => ({
            ...baseStyles,
            padding: 0,
            margin: 0,
          }),
          input: (baseStyles) => ({ ...baseStyles, margin: 0 }),
          indicatorSeparator: () => ({}),
          placeholder: (base) => ({ ...base, margin: 0, padding: 0 }),
        }}
        // onChange={onChange}
      />
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
    </SelectWrapper>
  );
};

export default Select;
