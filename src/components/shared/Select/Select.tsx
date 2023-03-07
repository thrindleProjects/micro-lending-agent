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
      {/* <SelectInput
        error={error}
        className='flex w-full flex-row items-center border-x-0 border-t-0 border-b-2 py-4 px-2 text-xs shadow-inner outline-none transition-all duration-300 ease-in placeholder:text-xs focus:outline-none md:px-4 lg:py-5 xl:text-sm xl:placeholder:text-sm'
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
            <option key={index} value={option.value} label={option.label}>
              {option.label}
            </option>
          ))}
      </SelectInput> */}
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
            `w-full border-x-0 border-b-2 border-t-0 px-2 py-4 text-xs outline-none transition-all duration-300 ease-in placeholder:text-xs md:px-4 lg:py-4 lg:text-sm xl:placeholder:text-sm flex react-select`,
        }}
        styles={{
          control: () => {
            return {};
          },
          option: () => ({}),
          indicatorSeparator: () => ({}),
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
