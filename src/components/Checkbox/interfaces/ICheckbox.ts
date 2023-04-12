import { ComponentPropsWithRef } from 'react';

export interface ICheckbox extends ComponentPropsWithRef<'input'> {
  id: string,
  customClass?: string
  checked?: boolean,
  text?: string,
}
