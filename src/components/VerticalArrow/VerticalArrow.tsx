import React, { FC, memo } from 'react';
import { IVerticalArrowProps } from './interfaces/VerticalArrow';
import styles from './sass/VerticalArrow.module.scss';

import ArrowUpIcon from '../../assets/icons/verticalArrowUp.svg';

const VerticalArrow: FC<IVerticalArrowProps> = ({
  arrowDirection = 'up',
  alt = 'arrow',
  customClass = '',
}) => (
  <button type="button" className={`${styles.buttonArrow} ${customClass}`}>
    <img className={`${arrowDirection === 'down' ? styles.arrowDown : ''}`} src={ArrowUpIcon} alt={alt} />
  </button>
);

export default memo(VerticalArrow);
