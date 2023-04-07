import { Themes } from '../../../constants/defines';

export interface ITextButton {
  label: string
  onPress: () => void
  themeName?: Themes
  isDisabled?: boolean
  customClass?: string
}
