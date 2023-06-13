import React, { FC } from 'react';
import styles from './sass/CheckboxGroup.module.scss';
import { ICheckboxGroup } from './interfaces/ICheckboxGroup';

const CheckboxGroup: FC<ICheckboxGroup> = ({ children, isHorizontal = false, customClass = '' }) => (
  <div className={`${styles.container} ${isHorizontal && styles.horizontal} ${customClass}`}>
    {children}
  </div>
);

export default CheckboxGroup;
