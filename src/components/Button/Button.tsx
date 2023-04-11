import React, { FC, memo } from 'react';
import { IButtonProps } from './interfaces/IButton';
import styles from './sass/Button.module.scss';

const Button: FC<IButtonProps> = ({
  label = '',
  disabled = false,
  onPress,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  iconLeft = null,
  iconRight = null,
  buttonClass = '',
}) => (
  <button
    className={`
      ${styles.button}
      ${styles[variant]}
      ${styles[color]}
      ${styles[size]}
      ${disabled ? styles.disabled : ''}
      ${buttonClass}
    `}
    onClick={onPress}
    disabled={disabled}
    type="button"
  >
    {iconLeft && <img className={styles.iconLeft} src={iconLeft} alt={label || ''} />}
    {label && <span>{label}</span>}
    {iconRight && <img className={styles.iconRight} src={iconRight} alt={label || ''} />}
  </button>
);

export default memo(Button);
