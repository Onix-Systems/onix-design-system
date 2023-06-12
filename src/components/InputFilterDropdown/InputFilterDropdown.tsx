import React, {
  useState, FC, useEffect, useMemo,
} from 'react';
import Button from '../Button/Button';
import { TextBigBold } from '../Typography/Typography';
import { IFilter, IInputFilterDropdownProps } from './interfaces/IInputFilterDropdown';
import { Variants } from '../../constants/general';
import Checkbox from '../Checkbox/Checkbox';
import CheckboxGroup from '../CheckboxGroup/CheckboxGroup';
import ButtonDropdown from '../Dropdowns/ButtonDropdown';
import Input from '../Input/Input';
import { DropdownDownIcon, DropdownUpIcon, SearchIcon } from '../Icons';
import styles from './sass/InputFilterDropdown.module.scss';

const InputFilterDropdown: FC<IInputFilterDropdownProps> = ({
  buttonText,
  heading,
  filters,
  showActionButtons = true,
}) => {
  const [dropdownShown, setDropdownShown] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [currentFilters, setCurrentFilters] = useState<IFilter[]>([]);

  const handleDropdownButtonClick = () => setDropdownShown((prevState) => !prevState);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const inputText = (e.target as HTMLInputElement).value;
    setInputValue(inputText);
  };

  const handleFilterClick = (filter: string) => {
    setCurrentFilters((prevState) => {
      const prevFilters = [...prevState];
      const clickedFilterIndex = prevFilters.findIndex(({ text }) => text === filter);
      prevFilters[clickedFilterIndex].checked = !prevFilters[clickedFilterIndex].checked;
      return prevFilters;
    });
  };

  const filtersToDisplay = useMemo(() => (
    currentFilters.filter(({ text }) => text.toLowerCase().startsWith(inputValue.toLowerCase()))
  ), [inputValue, currentFilters]);

  const setAllItemsToValue = (value: boolean) => {
    setCurrentFilters((prevState) => prevState.map((filter) => (
      filtersToDisplay.includes(filter) ? { text: filter.text, checked: value } : filter
    )));
  };

  useEffect(() => {
    setCurrentFilters(filters);
  }, [filters]);

  return (
    <div className={styles.container}>
      <ButtonDropdown
        variant={Variants.Outlined}
        text={buttonText}
        className={dropdownShown ? styles.dropdownButtonActive : styles.dropdownButton}
        iconRight={dropdownShown ? <DropdownDownIcon /> : <DropdownUpIcon />}
        onClick={handleDropdownButtonClick}
      >
        <div className={styles.dropdownContainer}>
          <Input
            placeholder="search"
            className={styles.input}
            variant="underline"
            iconLeft={<SearchIcon />}
            value={inputValue}
            onChange={handleInputChange}
          />
          <div className={styles.info}>
            <TextBigBold>{heading}</TextBigBold>
            {showActionButtons && (
              <div className={styles.buttonContainer}>
                <Button
                  onClick={() => setAllItemsToValue(false)}
                  variant={Variants.Text}
                  text="clear"
                  className={styles.actionButton}
                />
                <Button
                  onClick={() => setAllItemsToValue(true)}
                  variant={Variants.Text}
                  className={styles.actionButton}
                  text="select all"
                />
              </div>
            )}
          </div>
          <CheckboxGroup>
            {filtersToDisplay.map(({ text, checked }) => (
              <Checkbox key={text} checked={checked} text={text} onChange={() => handleFilterClick(text)} />
            ))}
          </CheckboxGroup>
        </div>
      </ButtonDropdown>
    </div>
  );
};

export default InputFilterDropdown;
