import { Themes } from '../../../constants/defines';

export interface IButtonProps {
  label: string
  onPress: () => void
  themeName?: Themes
  isDisabled?: boolean
  customClass?: string
}
