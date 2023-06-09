import { ReactNode } from 'react';
import { IButtonProps } from '../../Button/interfaces/IButton';

export interface IButtonDropdownProps extends IButtonProps {
  children: ReactNode
  buttonStyles?: string
  buttonText?: string
}
