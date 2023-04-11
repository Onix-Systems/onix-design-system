import { MouseEvent } from 'react';

export interface ICloseButton {
  onClick?: (event: MouseEvent<HTMLButtonElement & HTMLAnchorElement>) => void,
  variant?: 'outlined' | 'contained' | 'contained-red',
  alt?: string,
  customClass?: string,
}
