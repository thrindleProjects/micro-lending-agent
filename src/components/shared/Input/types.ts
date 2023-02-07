import {
  InputDateType,
  InputEmailType,
  InputPasswordType,
  InputTextType,
} from '@/types/appTypes';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  id: string;
  error?: boolean | string;
  label?: string;
  errorText?: string;
  type: InputPasswordType | InputTextType | InputEmailType | InputDateType;
}
