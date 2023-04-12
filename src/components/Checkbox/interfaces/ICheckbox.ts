import { ComponentPropsWithRef } from 'react';

export interface ICheckbox extends ComponentPropsWithRef<'input'> {
  id: string,
  checked?: boolean,
  text?: string,
}
