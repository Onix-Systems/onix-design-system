import React, { useState, FC } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';
import { IButtonDropdownProps } from './interfaces/IButtonDropdown';
import { Button } from '../index';
import styles from './sass/ButtonDropdown.module.scss';

const ButtonDropdown: FC<IButtonDropdownProps> = ({
  children, buttonStyles, buttonText, ...props
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const closeDropdown = () => setShowDropdown(false);

  const ref = useOutsideClick(closeDropdown);

  const handleButtonClick = () => setShowDropdown((prevState) => !prevState);

  return (
    <div className={styles.container} ref={ref as React.Ref<HTMLDivElement>}>
      <Button onClick={handleButtonClick} className={buttonStyles} text={buttonText} {...props} />
      {showDropdown && children}
    </div>
  );
};

export default ButtonDropdown;
