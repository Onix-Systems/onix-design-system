import React, { FC, memo } from 'react';
import { IIconButtonProps } from './interfaces/IIconButton';
import { EIconButtonVariants, ESizes } from '../../constants/tsConstants';
import styles from './sass/IconButton.module.scss';

const IconButton: FC<IIconButtonProps> = ({
  icon,
  onClick,
  alt = 'icon',
  variant = EIconButtonVariants.CONTAINED,
  size = ESizes.MEDIUM,
  disabled = false,
  className = '',
}) => (
  <button
    className={`${styles.button} ${styles[variant]} ${styles[size]} ${disabled ? styles.disabled : ''} ${className}`}
    onClick={onClick}
    type="button"
  >
    <img className={styles.icon} src={icon} alt={alt} />
  </button>
);

export default memo(IconButton);
