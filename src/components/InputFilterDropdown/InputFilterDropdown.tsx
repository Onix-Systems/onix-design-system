import React, {
  useState, FC, useEffect, useMemo,
} from 'react';
import Button from '../Button/Button';
import { TextBigBold } from '../Typography/Typography';
import Checkbox from '../Checkbox/Checkbox';
import CheckboxGroup from '../CheckboxGroup/CheckboxGroup';
import ButtonDropdown from '../Dropdowns/ButtonDropdown';
import Input from '../Input/Input';
import { Variants } from '../../constants/general';
import { DropdownDownIcon, DropdownUpIcon, SearchIcon } from '../Icons';
import styles from './sass/InputFilterDropdown.module.scss';
import { IFilter, IInputFilterDropdownProps } from './interfaces/IInputFilterDropdown';

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
      filtersToDisplay.includes(filter) ? { ...filter, checked: value } : filter
    )));
  };

  useEffect(() => {
    setCurrentFilters(filters);
  }, [filters]);

  return (
    <div className={styles.container}>
      <ButtonDropdown
        variant={Variants.Outlined}
        buttonText={buttonText}
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
                  className={styles.actionButton}
                >
                  clear
                </Button>
                <Button
                  onClick={() => setAllItemsToValue(true)}
                  variant={Variants.Text}
                  className={styles.actionButton}
                >
                  select all
                </Button>
              </div>
            )}
          </div>
          <CheckboxGroup>
            {filtersToDisplay.map(({ text, checked, image }) => (
              <Checkbox
                key={text}
                checked={checked}
                text={text}
                image={image}
                onChange={() => handleFilterClick(text)}
              />
            ))}
          </CheckboxGroup>
        </div>
      </ButtonDropdown>
    </div>
  );
};

export default InputFilterDropdown;
