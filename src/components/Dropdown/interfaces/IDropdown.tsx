import { InputHTMLAttributes } from 'react';

export interface IDropdownOptions {
  text: string
  value: string
}

export interface IDropdown extends InputHTMLAttributes<HTMLInputElement> {
  options: IDropdownOptions[]
  displayOptionsOnTop: boolean
}

export interface IDropdownList {
  options: IDropdownOptions[]
  onClick: (text: string) => void
}

export interface IDropdownItem {
  name: string
  customClass?: string
  onClick?: () => void
}
