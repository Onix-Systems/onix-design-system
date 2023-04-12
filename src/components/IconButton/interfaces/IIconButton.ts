import { EIconButtonVariants, ESizes } from '../../../constants/tsConstants';

export interface IIconButtonProps {
  icon: string,
  onClick?: () => void,
  size?: ESizes,
  variant?: EIconButtonVariants,
  alt?: string,
  disabled?: boolean,
  className?: string,
}
