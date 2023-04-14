import React, { FC, memo } from 'react';
import { IIconButtonProps } from './interfaces/IIconButton';
import { IconButtonVariants, Sizes } from '../../constants/general';
import styles from './sass/IconButton.module.scss';

const IconButton: FC<IIconButtonProps> = ({
  icon,
  variant = IconButtonVariants.Contained,
  size = Sizes.Medium,
  disabled = false,
  className = '',
  ...props
}) => (
  <button
    className={`${styles.button} ${styles[variant]} ${styles[size]} ${disabled ? styles.disabled : ''} ${className}`}
    type="button"
    {...props}
  >
    <img className={styles.icon} src={icon} alt="icon" />
  </button>
);

export default memo(IconButton);
