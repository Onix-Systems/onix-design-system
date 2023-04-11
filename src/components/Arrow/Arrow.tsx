import React, { FC, memo } from 'react';
import { IArrowProps } from './interfaces/Arrow';
import styles from './sass/Arrow.module.scss';

import ArrowUpIcon from '../../assets/icons/verticalArrowUp.svg';

const Arrow: FC<IArrowProps> = ({
  arrowDirection = 'up',
  size = 'medium',
  variant = 'outlined',
  alt = 'arrow',
  customClass = '',
}) => (
  <button type="button" className={`${styles.buttonArrow} ${styles[size]} ${styles[variant]} ${customClass}`}>
    <img className={`${styles.arrowIcon} ${styles[arrowDirection]}`} src={ArrowUpIcon} alt={alt} />
  </button>
);

export default memo(Arrow);
