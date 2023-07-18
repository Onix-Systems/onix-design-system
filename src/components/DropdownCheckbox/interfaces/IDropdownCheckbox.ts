import { Variants, Colors, Sizes } from '../../../constants/general';

export interface IDropdownCheckboxOption {
  text: string
  value: string
}

export interface IDropdownCheckboxProps {
  variant?: Variants
  color?: Colors
  size?: Sizes
  options: IDropdownCheckboxOption[]
  onChange: (value: string) => void
  buttonText?: string
}
