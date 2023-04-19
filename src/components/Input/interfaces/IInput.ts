import { InputHTMLAttributes } from 'react';

export type InputVariant = 'default' | 'underline';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  iconLeft?: string,
  iconRight?: string,
  iconLeftClass?: string,
  iconRightClass?: string,
  className?: string,
  disabled?: boolean,
  error?: boolean,
  isFocused?: boolean,
  variant?: InputVariant,
  onLeftIconClick?: () => void,
  onRightIconClick?: () => void,
}
