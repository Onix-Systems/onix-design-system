import { InputHTMLAttributes } from 'react';

export type InputVariant = 'default' | 'underline';
export type InputType = 'text' | 'submit' | 'reset';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  iconLeft?: string,
  iconRight?: string,
  className?: string,
  disabled?: boolean,
  error?: boolean,
  isFocused?: boolean,
  type?: InputType,
  variant?: InputVariant,
}
