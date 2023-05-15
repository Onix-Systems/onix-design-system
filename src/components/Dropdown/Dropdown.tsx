import React, { FC, useMemo, useState } from 'react';
import { IDropdown } from './interfaces/IDropdown';
import useOutsideClick from '../../hooks/useOutsideClick';
import styles from './sass/Dropdown.module.scss';
import DropdownList from './components/DropdownList';

const Dropdown: FC<IDropdown> = ({
  name,
  placeholder,
  options,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [dropdownShown, setDropdownShown] = useState(false);

  const filteredOptions = useMemo(() => (
    options.filter(({ text }) => text.startsWith(inputValue))
  ), [inputValue, options]);

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
      <label htmlFor={name} className={styles.label}>
        <input
          autoComplete="off"
          onChange={handleChange}
          onFocus={handleFocus}
          id={name}
          name={name}
          placeholder={placeholder}
          value={inputValue}
        />
      </label>
      {dropdownShown && <DropdownList options={filteredOptions} onClick={handleItemClick} />}
    </div>
  );
};

export default Dropdown;
