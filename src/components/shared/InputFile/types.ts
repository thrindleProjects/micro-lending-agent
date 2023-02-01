import { FormikErrors, FormikValues } from 'formik';
import { FocusEventHandler } from 'react';

import { InputFileType } from '@/types/appTypes';

export interface InputFileProps<T> {
  value?: File | string;
  label?: string;
  id: string;
  className?: string;
  error?: boolean | string;
  errorText?: string;
  type: InputFileType;
  placeholder: string;
  multiple?: boolean | undefined;
  required?: boolean | undefined;
  name: string;
  onBlur?: FocusEventHandler<T> | undefined;
  onChange: (
    field: string,
    value: File,
    shouldValidate?: boolean | undefined
  ) => Promise<FormikErrors<FormikValues>> | Promise<void>;
  extensions?: string;
}
