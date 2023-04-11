export interface IToggle {
  name: string,
  onChange: () => void,
  checked?: boolean,
  disabled?: boolean,
  ariaLabel?: string,
  label?: string,
}
