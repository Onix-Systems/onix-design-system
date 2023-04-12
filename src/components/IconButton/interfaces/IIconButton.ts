import { ComponentPropsWithRef } from 'react';
import { IconButtonVariants, Sizes } from '../../../constants/general';

export interface IIconButtonProps extends ComponentPropsWithRef<'button'> {
  icon: string,
  onClick?: () => void,
  size?: Sizes,
  variant?: IconButtonVariants,
  alt?: string,
  disabled?: boolean,
  className?: string,
}
