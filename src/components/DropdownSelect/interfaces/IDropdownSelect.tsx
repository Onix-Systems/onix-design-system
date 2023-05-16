import { IInputProps } from '../../Input/interfaces/IInput';

export interface IDropdownOptions {
  text: string
  value: string
}

export interface IDropdownSelectProps extends IInputProps {
  options: IDropdownOptions[]
  displayOptionsOnTop: boolean
}
