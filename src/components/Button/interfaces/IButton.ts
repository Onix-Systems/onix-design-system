import { IThemes } from '../../../interfaces';

export default interface IButtonProps {
  label: string
  onPress: () => void
  theme?: IThemes
  isDisabled?: boolean
  customClass?: string
}
