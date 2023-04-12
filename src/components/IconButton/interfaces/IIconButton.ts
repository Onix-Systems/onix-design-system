export interface IIconButtonProps {
  icon: string,
  onClick?: () => void,
  size?: 'small' | 'medium' | 'big',
  variant?: 'outlined' | 'outlined-active' | 'contained' | 'contained-red' | 'contained-primary',
  alt?: string,
  customClass?: string,
}
