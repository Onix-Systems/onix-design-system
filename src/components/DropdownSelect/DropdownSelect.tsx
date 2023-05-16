import React, { FC, useMemo, useState } from 'react';
import { IDropdownSelectProps } from './interfaces/IDropdownSelect';
import InputDropdown from '../Dropdown/InputDropdown';
import { TextBig } from '../Typography/Typography';
import styles from './sass/DropdownSelect.module.scss';

const DropdownSelect: FC<IDropdownSelectProps> = ({
  options,
  ...props
}) => {
  const [inputValue, setInputValue] = useState('');

  const filteredOptions = useMemo(() => (
    options.filter(({ text }) => text.startsWith(inputValue))
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
