import React, { FC } from 'react';
import { IDropdownItem } from '../interfaces/IDropdown';
import { TextBig } from '../../Typography/Typography';
import styles from '../sass/DropdownItem.module.scss';

const DropdownItem: FC<IDropdownItem> = ({ customClass, name, onClick }) => (
  <div onClick={onClick} role="presentation" className={`${styles.container} ${customClass}`}>
    <TextBig>{name}</TextBig>
  </div>
);

export default DropdownItem;
