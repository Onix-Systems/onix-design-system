import React, { ButtonHTMLAttributes } from 'react';

export type SizeType = 'lg' | 'md' | 'sm' | 'xs' | undefined;
export type ColorSchemeType = 'gray' | 'black' | 'primary' | 'secondary' | 'danger';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  size?: SizeType;
  disabled?: boolean;
  color?: ColorSchemeType;
}
