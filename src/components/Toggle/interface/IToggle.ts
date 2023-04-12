import { ComponentPropsWithRef } from 'react';

export interface IToggle extends ComponentPropsWithRef<'input'> {
  name: string,
  checked?: boolean,
  label?: string,
}
