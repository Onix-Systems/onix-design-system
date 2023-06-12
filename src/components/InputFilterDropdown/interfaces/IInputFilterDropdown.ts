import { IInputProps } from '../../Input/interfaces/IInput';

export interface IFilter {
  text: string
  checked: boolean,
}

export interface IInputFilterDropdownProps extends IInputProps {
  buttonText: string
  heading: string
  filters: IFilter[]
  showActionButtons?: boolean
}
