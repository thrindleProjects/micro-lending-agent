import { Icon } from '@iconify/react';
import { AnimatePresence, motion } from 'framer-motion';
import dynamic from 'next/dynamic';

import { FileInput } from './styled';
import { InputFileProps } from './types';

const InputFile: React.FC<InputFileProps<HTMLInputElement>> = (props) => {
  const {
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
    showPreview,
    // previewAt,
  } = props;

  const InputLabel = dynamic(() => import('@/components/shared/InputLabel'));
  const InputFilePreview = dynamic(
    () => import('@/components/shared/inputFilePreview')
  );

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files && Array.from(e.target.files);
    if (!files) {
      return;
    }
    // if (value && value.length && multiple) {
    //   const allFiles = value.concat(files);
    //   const filenames = allFiles.map((file) => file.name);
    //   const isValid = new Set(filenames).size === filenames.length;
    //   if (!isValid) {
    //     (await import('react-hot-toast')).toast.error(
    //       'Cannot have duplicate file names'
    //     );
    //     return;
    //   }
    //   onChange(id, allFiles);
    //   return;
    // }
    onChange(id, files);
    return;
  };

  return (
    <div className='flex w-full flex-col gap-2'>
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
          className='absolute left-0 top-0 h-full w-full opacity-0'
          required={required}
          onChange={handleFileUpload}
          multiple={Boolean(multiple)}
          accept={`${extensions ? extensions : '.doc, .docx, .pdf'}`}
        />
        <div className='grid grid-cols-7'>
          <span className='col-span-1 grid place-items-center text-xl'>
            <Icon icon='material-symbols:photo-camera-outline' />
          </span>
          <span className='col-span-5 flex items-center py-4 pl-2 lg:py-4 xl:py-5'>
            {value && value.length
              ? value.length === 1
                ? value[0].name
                : 'Upload more'
              : placeholder}
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
      {showPreview && value && !!value.length && (
        <InputFilePreview value={value} />
      )}
    </div>
  );
};

export default InputFile;
