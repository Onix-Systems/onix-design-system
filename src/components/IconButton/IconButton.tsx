import React, { FC, memo } from 'react';
import { IIconButtonProps } from './interfaces/IIconButton';
import { IconButtonVariants, Sizes } from '../../constants/general';
import styles from './sass/IconButton.module.scss';

const IconButton: FC<IIconButtonProps> = ({
  icon,
  onClick,
  alt = 'icon',
  variant = IconButtonVariants.Contained,
  size = Sizes.Medium,
  disabled = false,
  className = '',
  ...props
}) => (
  <button
    className={`${styles.button} ${styles[variant]} ${styles[size]} ${disabled ? styles.disabled : ''} ${className}`}
    onClick={onClick}
    type="button"
    {...props}
  >
    <img className={styles.icon} src={icon} alt={alt} />
  </button>
);

export default memo(IconButton);
