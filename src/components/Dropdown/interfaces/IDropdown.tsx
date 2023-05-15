import { InputHTMLAttributes } from 'react';

export interface IDropdownOptions {
  text: string
  value: string
}

export interface IDropdown extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  placeholder?: string
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
