import { ComponentPropsWithRef } from 'react';

export interface ICheckbox extends ComponentPropsWithRef<'input'> {
  text?: string,
}
