import { IStaticImageData } from '../../../interfaces/general';

export default interface IIconButton {
  icon: string | IStaticImageData
  width?: number
  height?: number
  onPress: () => void
  isDisabled?: boolean
  buttonClass?: string
}
