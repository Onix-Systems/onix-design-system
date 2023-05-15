import React from 'react';
import { IInputProps } from './interfaces/IInput';
import styles from './sass/Input.module.scss';

const Input: React.FC<IInputProps> = ({
  name,
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
  <label
    htmlFor={name}
    className={`
      ${styles.wrapper}
      ${styles[variant]}
      ${disabled && styles.disabled}
    `}
  >
    {iconLeft && <div className={`${styles.iconLeft} ${iconLeftClass}`}>{iconLeft}</div>}
    <input
      className={`
          ${styles.input}
          ${styles[variant]}
          ${iconRight ? styles.paddingRight : ''}
          ${iconLeft ? styles.paddingLeft : ''}
          ${error && styles.error}
          ${isFocused && styles.focus}
        `}
      disabled={disabled}
      id={name}
      name={name}
      {...props}
    />
    {iconRight && <div className={`${styles.iconRight} ${iconRightClass}`}>{iconRight}</div>}
  </label>
);

export default Input;
