export interface IIconButtonProps {
  icon: string,
  onClick?: () => void,
  variant?: 'outlined' | 'contained' | 'contained-red',
  alt?: string,
  customClass?: string,
}
