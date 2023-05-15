import React, { FC, useMemo, useState } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';
import { IDropdown } from './interfaces/IDropdown';
import Input from '../Input/Input';
import DropdownList from './components/DropdownList';
import DropdownDownIcon from '../Icons/DropdownDownIcon';
import DropdownUpIcon from '../Icons/DropdownUpIcon';
import styles from './sass/Dropdown.module.scss';

const Dropdown: FC<IDropdown> = ({
  options,
  displayOptionsOnTop = false,
  autoComplete = 'off',
  ...props
}) => {
  const [inputValue, setInputValue] = useState('');
  const [dropdownShown, setDropdownShown] = useState(false);

  const filteredOptions = useMemo(() => (
    options.filter(({ text }) => text.startsWith(inputValue))
  ), [inputValue, options]);

  const optionsShowCondition = useMemo(() => (
    dropdownShown && filteredOptions.length > 0
  ), [filteredOptions, dropdownShown]);

  const dropdownIcon = useMemo(() => {
    if (displayOptionsOnTop) {
      return optionsShowCondition ? <DropdownDownIcon /> : <DropdownUpIcon />;
    }
    return optionsShowCondition ? <DropdownUpIcon /> : <DropdownDownIcon />;
  }, [optionsShowCondition, displayOptionsOnTop]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setDropdownShown(true);
  };

  const handleBlur = () => setDropdownShown(false);

  const ref = useOutsideClick(handleBlur);

  const handleFocus = () => setDropdownShown(true);

  const handleItemClick = (text: string) => {
    setInputValue(text);
    setDropdownShown(false);
  };

  return (
    <div className={styles.container} ref={ref as React.Ref<HTMLDivElement>}>
      {optionsShowCondition && displayOptionsOnTop && (
        <DropdownList options={filteredOptions} onClick={handleItemClick} />
      )}
      <Input
        value={inputValue}
        iconRight={dropdownIcon}
        iconRightClass={styles.iconRight}
        onFocus={handleFocus}
        onChange={handleChange}
        autoComplete={autoComplete}
        {...props}
      />
      {optionsShowCondition && !displayOptionsOnTop && (
        <DropdownList options={filteredOptions} onClick={handleItemClick} />
      )}
    </div>
  );
};

export default Dropdown;
