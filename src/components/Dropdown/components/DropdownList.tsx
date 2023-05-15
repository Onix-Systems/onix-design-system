import React, { FC } from 'react';
import { IDropdownList } from '../interfaces/IDropdown';
import DropdownItem from './DropdownItem';
import styles from '../sass/DropdownList.module.scss';

const DropdownList: FC<IDropdownList> = ({ options, onClick }) => (
  <div className={styles.container}>
    {options.map(({
      text,
      value,
    }) => (
      <DropdownItem key={`${text} ${value}`} name={text} onClick={() => onClick(text)} />
    ))}
  </div>
);

export default DropdownList;
