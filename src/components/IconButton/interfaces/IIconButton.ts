import React, { ButtonHTMLAttributes } from 'react';
import { IconButtonColors, IconButtonSizes } from '../../../constants/general';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  size?: IconButtonSizes;
  disabled?: boolean;
  color?: IconButtonColors;
}
