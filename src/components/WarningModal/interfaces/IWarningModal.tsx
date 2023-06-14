import { ReactNode } from 'react';

export interface IWarningModal {
  title: string
  text: string
  buttonLeft: ReactNode
  buttonRight: ReactNode
  onClose: () => void
}
