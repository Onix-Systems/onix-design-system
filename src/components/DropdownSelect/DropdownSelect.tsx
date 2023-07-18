import React, { FC, useMemo, useState } from 'react';
import InputDropdown from '../Dropdowns/InputDropdown';
import { TextBig } from '../Typography/Typography';
import styles from './sass/DropdownSelect.module.scss';
import { IDropdownSelectProps } from './interfaces/IDropdownSelect';

const DropdownSelect: FC<IDropdownSelectProps> = ({
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
      autoComplete={autoComplete}
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
