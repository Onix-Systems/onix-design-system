import React, { FC } from 'react';
import { TextBig } from '../../Typography/Typography';
import styles from '../sass/DropdownSelectItem.module.scss';
import { IDropdownItem } from '../interfaces/IDropdownSelect';

const DropdownItem: FC<IDropdownItem> = ({ customClass, name, onClick }) => (
  <div onClick={onClick} role="presentation" className={`${styles.container} ${customClass}`}>
    <TextBig>{name}</TextBig>
  </div>
);

export default DropdownItem;
