import React from 'react';
import styles from './sass/Input.module.scss';
import { IInputProps } from './interfaces/IInput';

const Input: React.FC<IInputProps> = ({
  iconLeftClass = '',
  iconRightClass = '',
  className = '',
  variant = 'default',
  name,
  iconLeft,
  iconRight,
  type,
  disabled,
  error,
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
      ${className}
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
