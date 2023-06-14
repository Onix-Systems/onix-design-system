import React, { FC, useMemo, useState } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';
import { IDropdownSelect } from './interfaces/IDropdownSelect';
import Input from '../Input/Input';
import DropdownList from './components/DropdownList';
import DropdownDownIcon from '../Icons/DropdownDownIcon';
import DropdownUpIcon from '../Icons/DropdownUpIcon';
import InputDropdown from '../Dropdowns/InputDropdown';
import { TextBig } from '../Typography/Typography';
import styles from './sass/DropdownSelect.module.scss';
import { IDropdownSelect } from './interfaces/IDropdownSelect';

const DropdownSelect: FC<IDropdownSelect> = ({
  displayOptionsOnTop = false,
  autoComplete = 'off',
  options,
  ...props
}) => {
  const [inputValue, setInputValue] = useState('');

  const filteredOptions = useMemo(() => (
    options.filter(({ text }) => text.toLowerCase().startsWith(inputValue.toLowerCase()))
  ), [inputValue, options]);

  const handleChangeInputValue = (value: string) => setInputValue(value);

  return (
    <InputDropdown
      dropdownCustomClass={styles.container}
      value={inputValue}
      onInputChange={handleChangeInputValue}
      {...props}
    >
      {filteredOptions.map(({
        text,
        value,
      }) => (
        <div
          key={[text, value].join()}
          onClick={() => handleChangeInputValue(text)}
          role="presentation"
          className={styles.dropdownItem}
        >
          <TextBig>{text}</TextBig>
        </div>
      ))}
    </InputDropdown>
  );
};

export default DropdownSelect;
