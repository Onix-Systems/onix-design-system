import { ReactNode } from 'react';

export interface ClipboardCopyProps {
  children: ReactNode,
  copyText: string,
  className?: string,
  icon?: ReactNode,
}
