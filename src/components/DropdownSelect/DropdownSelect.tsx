import React, { FC, useMemo, useState } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';
import Input from '../Input/Input';
import DropdownList from './components/DropdownList';
import DropdownDownIcon from '../Icons/DropdownDownIcon';
import DropdownUpIcon from '../Icons/DropdownUpIcon';
import styles from './sass/DropdownSelect.module.scss';
import { IDropdownSelect } from './interfaces/IDropdownSelect';

const DropdownSelect: FC<IDropdownSelect> = ({
  displayOptionsOnTop = false,
  autoComplete = 'off',
  options,
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
        className={styles.input}
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

export default DropdownSelect;
