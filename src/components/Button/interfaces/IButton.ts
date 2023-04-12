import { ComponentPropsWithRef } from 'react';
import { Colors, Variants, ButtonSizes } from '../../../constants/general';

export interface IButtonProps extends ComponentPropsWithRef<'button'> {
  text?: string,
  isLoading?: boolean,
  variant: Variants,
  color: Colors,
  size: ButtonSizes,
  iconLeft?: string,
  iconRight?: string,
}
