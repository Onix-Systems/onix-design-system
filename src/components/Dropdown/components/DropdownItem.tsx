import React, { FC } from 'react';
import { IDropdownItem } from '../interfaces/IDropdown';
import styles from '../sass/DropdownItem.module.scss';

const DropdownItem: FC<IDropdownItem> = ({ customClass, name, onClick }) => (
  // TODO: Change to typography from another branch
  <div onClick={onClick} role="presentation" className={`${styles.container} ${customClass}`}>
    <p>{name}</p>
  </div>
);

export default DropdownItem;
