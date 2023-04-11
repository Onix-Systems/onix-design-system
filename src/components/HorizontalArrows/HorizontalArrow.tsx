import React, { FC, memo } from 'react';
import { IHorizontalArrow } from './interfaces/IHorizontalArrow';
import styles from './sass/HorizontalArrow.module.scss';

import ArrowUpIcon from '../../assets/icons/horizontalArrowUp.svg';

const HorizontalArrow: FC<IHorizontalArrow> = ({
  arrowDirection = 'up',
  alt = 'arrow',
  customClass = '',
}) => (
  <button type="button" className={`${styles.buttonArrow} ${customClass}`}>
    <img className={`${arrowDirection === 'down' ? styles.arrowDown : ''}`} src={ArrowUpIcon} alt={alt} />
  </button>
);

export default memo(HorizontalArrow);
