import { IInputProps } from '../../Input/interfaces/IInput';

export interface IDropdownOptions {
  text: string
  value: string
}

export interface IDropdownSelectProps extends IInputProps {
  options: IDropdownOptions[]
}

export interface IDropdownListProps {
  options: IDropdownOptions[]
  onClick: (text: string) => void,
}

export interface IDropdownItemProps {
  className?: string
  name: string
  onClick: () => void
}
