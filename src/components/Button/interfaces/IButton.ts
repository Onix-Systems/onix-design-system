import { Colors, Variants, ButtonSizes } from '../../../constants/general';

export interface IButtonProps {
  text?: string,
  aliaLabel?: string,
  disabled?: boolean,
  isLoading?: boolean,
  onClick?: () => void,
  onMouseEnter?: () => void,
  onMouseLeave?: () => void,
  variant: Variants,
  color: Colors,
  size: ButtonSizes,
  iconLeft?: string,
  iconRight?: string,
  className?: string,
}
