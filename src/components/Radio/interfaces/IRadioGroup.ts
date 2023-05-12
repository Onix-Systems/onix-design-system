import { ChangeEvent, ReactNode } from 'react';

export interface IRadioGroupProps {
  horizontal?: boolean
  children?: ReactNode
  name: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  value: string | number | readonly string[] | undefined,
}
