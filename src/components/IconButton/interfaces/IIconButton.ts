import { ComponentPropsWithRef } from 'react';
import { IconButtonVariants, Sizes } from '../../../constants/general';

export interface IIconButtonProps extends ComponentPropsWithRef<'button'> {
  icon: string,
  size?: Sizes,
  variant?: IconButtonVariants,
}
