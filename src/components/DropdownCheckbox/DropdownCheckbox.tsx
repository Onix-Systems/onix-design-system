import React, { FC } from 'react';
import ButtonDropdown from '../Dropdowns/ButtonDropdown';
import Checkbox from '../Checkbox/Checkbox';
import CheckboxGroup from '../CheckboxGroup/CheckboxGroup';
import { Colors, Sizes, Variants } from '../../constants/general';
import styles from './sass/DropdownCheckbox.module.scss';
import { IDropdownCheckboxProps } from './interfaces/IDropdownCheckbox';

const DropdownCheckbox: FC<IDropdownCheckboxProps> = ({
  options,
  onChange,
  buttonText,
  variant = Variants.Outlined,
  size = Sizes.Medium,
  color = Colors.Primary,
}) => (
  <ButtonDropdown buttonText={buttonText} variant={variant} size={size} color={color}>
    <CheckboxGroup customClass={styles.checkboxContainer}>
      {options.map(({
        text,
        value,
      }) => (
        <Checkbox key={[text, value].join()} text={text} onChange={() => onChange(value)} />
      ))}
    </CheckboxGroup>
  </ButtonDropdown>
);

export default DropdownCheckbox;
