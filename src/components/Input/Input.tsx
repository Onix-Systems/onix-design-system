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
