import { ChangeEvent } from 'react';

export interface ICheckbox {
  id: string,
  customClass?: string
  checked?: boolean
  disabled?: boolean
  label?: string,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}
