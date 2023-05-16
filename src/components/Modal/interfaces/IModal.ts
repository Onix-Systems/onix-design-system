import { ReactNode, HTMLAttributes } from 'react';

export interface IModal extends HTMLAttributes<HTMLDivElement> {
  opened?: boolean
  children: ReactNode
}
