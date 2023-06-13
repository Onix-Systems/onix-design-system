import React, { FC, useState } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';
import { IDropdownSelect } from './interfaces/IInputDropdown';
import Input from '../Input/Input';
import { DropdownDownIcon, DropdownUpIcon } from '../Icons';
import styles from './sass/InputDropdown.module.scss';

const InputDropdown: FC<IDropdownSelect> = ({
  autoComplete = 'off',
  dropdownCustomClass = '',
  children,
  onInputChange,
  ...props
}) => {
  const [dropdownShown, setDropdownShown] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value);
    setDropdownShown(true);
  };

  const handleBlur = () => setDropdownShown(false);

  const ref = useOutsideClick(handleBlur);

  const handleFocus = () => setDropdownShown(true);

  return (
    <div className={styles.container} ref={ref as React.Ref<HTMLDivElement>}>
      <Input
        iconRight={dropdownShown ? <DropdownDownIcon /> : <DropdownUpIcon />}
        iconRightClass={styles.iconRight}
        onFocus={handleFocus}
        onChange={handleChange}
        autoComplete={autoComplete}
        {...props}
      />
      {dropdownShown && (
        <div
          className={`${styles.optionsList} ${dropdownCustomClass}`}
          role="presentation"
          onClick={handleBlur}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default InputDropdown;
