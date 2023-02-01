import React from 'react';

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  id: string;
  error?: boolean | string;
  label?: string;
  errorText?: string;
  options?: { name: string; value: string }[];
}
