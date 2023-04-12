import { EBadgeVariants } from '../../../constants/tsConstants';

export interface IBadgeProps {
  message: string,
  customClass?: string,
  variant: EBadgeVariants,
}
