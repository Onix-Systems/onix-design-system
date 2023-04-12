import { EColors, EVariants, EButtonSizes } from '../../../constants/tsConstants';

export interface IButtonProps {
  text?: string,
  aliaLabel?: string,
  disabled?: boolean,
  isLoading?: boolean,
  onClick?: () => void,
  onMouseEnter?: () => void,
  onMouseLeave?: () => void,
  variant: EVariants,
  color: EColors,
  size: EButtonSizes,
  iconLeft?: string,
  iconRight?: string,
  className?: string,
}
