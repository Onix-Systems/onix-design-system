export interface IIconButtonProps {
  icon: string,
  onClick?: () => void,
  size?: 'small' | 'medium' | 'big',
  variant?: 'outlined' | 'contained' | 'contained-red',
  alt?: string,
  customClass?: string,
}
