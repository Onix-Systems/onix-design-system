import React from 'react';
import { IInputProps } from './interfaces/IInput';
import styles from './sass/Input.module.scss';

const Input: React.FC<IInputProps> = ({
  iconLeft,
  iconRight,
  iconLeftClass = '',
  iconRightClass = '',
  type,
  variant = 'default',
  className,
  disabled,
  error,
  isFocused,
  onLeftIconClick,
  onRightIconClick,
  ...props
}) => (
  <label className={`
      ${styles.wrapper}
      ${isFocused && styles.focused}
      ${styles[variant]}
      ${disabled && styles.disabled}
    `}
  >
    {iconLeft && (
      <img
        onClick={onLeftIconClick}
        role="presentation"
        className={`${styles.iconLeft} ${iconLeftClass}`}
        src={iconLeft}
        alt="icon"
      />
    )}
    <input
      className={`
          ${styles.input}
          ${variant && variant !== 'default' && styles[variant]}
          ${iconRight ? styles.paddingRight : ''}
          ${iconLeft ? styles.paddingLeft : ''}
          ${error && styles.error}
        `}
      disabled={disabled}
      {...props}
    />
    {iconRight && (
      <img
        onClick={onRightIconClick}
        role="presentation"
        className={`${styles.iconRight} ${iconRightClass}`}
        src={iconRight}
        alt="icon"
      />
    )}
  </label>
);

export default Input;
