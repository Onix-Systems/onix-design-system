import { IStaticImageData } from '../../../interfaces/general';

export interface IIconButton {
  icon: string | IStaticImageData
  width?: number
  height?: number
  onPress: () => void
  isDisabled?: boolean
  buttonClass?: string
}
