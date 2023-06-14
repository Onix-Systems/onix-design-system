import { ReactNode, InputHTMLAttributes } from 'react';

export type InputVariant = 'default' | 'underline';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  iconLeft?: ReactNode,
  iconRight?: ReactNode,
  iconLeftClass?: string,
  iconRightClass?: string,
  className?: string,
  disabled?: boolean,
  error?: boolean,
  variant?: InputVariant,
  onLeftIconClick?: () => void,
  onRightIconClick?: () => void,
}
