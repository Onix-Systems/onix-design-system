import React, { FC, memo } from 'react';
import { IIconButtonProps } from './interfaces/IIconButton';
import styles from './sass/IconButton.module.scss';

import CloseIcon from '../../assets/icons/close.svg';

const IconButton: FC<IIconButtonProps> = ({
  icon,
  onClick,
  alt = 'icon',
  variant = 'outlined',
  size = 'medium',
  customClass = '',
}) => (
  <button
    className={`${styles.button} ${styles[variant]} ${styles[size]} ${customClass}`}
    onClick={onClick}
    type="button"
  >
    <img className={styles.icon} src={icon} alt={alt} />
  </button>
);

export default memo(IconButton);
