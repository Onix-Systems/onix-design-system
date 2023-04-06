import { IThemes } from '../../../interfaces';

export default interface ITextButtonProps {
  label: string
  onPress: () => void
  theme?: IThemes
  isDisabled?: boolean
  customClass?: string
}
