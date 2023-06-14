import { ReactNode } from 'react';
import { IInputProps } from '../../Input/interfaces/IInput';

export interface IDropdownSelect extends IInputProps {
  dropdownCustomClass?: string
  children: ReactNode
  onInputChange: (value: string) => void
}
