export interface IDropdownOptions {
  text: string
  value: string
}

export interface IDropdown {
  name: string
  placeholder?: string
  options: IDropdownOptions[]
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
