import React, { FC, memo } from 'react';
import { ICloseButton } from './interfaces/ICloseButton';
import styles from './sass/CloseButton.module.scss';

import CloseIcon from '../../assets/icons/close.svg';
import CloseRedIcon from '../../assets/icons/closeRed.svg';

const CloseButton: FC<ICloseButton> = ({
  onClick,
  alt = 'close',
  variant = 'outlined',
  customClass = '',
}) => (
  <button className={`${styles.button} ${styles[variant]} ${customClass}`} onClick={onClick} type="button">
    <img className={styles.closeIcon} src={variant === 'contained-red' ? CloseRedIcon : CloseIcon} alt={alt} />
  </button>
);

export default memo(CloseButton);
