import { ComponentPropsWithRef, ReactNode } from 'react';

export interface ITypographyProps extends ComponentPropsWithRef<'p'> {
  children: ReactNode,
}
