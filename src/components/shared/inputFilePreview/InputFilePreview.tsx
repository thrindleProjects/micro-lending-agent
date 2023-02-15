import React from 'react';

import ImageComponent from '@/components/shared/ImageComponent';

type InputFilePreviewProps = React.FC<{
  value: File[];
}>;

const InputFilePreview: InputFilePreviewProps = ({ value }) => {
  return (
    <div className='flex h-20 w-full gap-4 overflow-x-auto '>
      {value.map((file) => {
        const isImage = file.type.startsWith('image/');
        return (
          <div key={file.name} className='relative h-full'>
            {isImage ? (
              <ImageComponent alt={file.name} src={URL.createObjectURL(file)} />
            ) : (
              <object
                data={URL.createObjectURL(file)}
                type={file.type}
                className='h-full w-auto'
              >
                {/* <p>{file.name}</p> */}
              </object>
            )}
            {/* <p>{file.name}</p> */}
          </div>
        );
      })}
    </div>
  );
};

export default InputFilePreview;
