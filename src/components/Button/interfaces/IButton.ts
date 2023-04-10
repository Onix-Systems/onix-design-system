export interface IButtonProps {
  label?: string,
  onPress: () => void,
  disabled?: boolean,
  styles?: string,
  variant: 'text' | 'contained' | 'outlined',
  color: 'primary' | 'warning' | 'error',
  size: 'small' | 'medium' | 'big' | 'large',
  iconLeft?: string,
  iconRight?: string,
}
