import React from 'react';
import { IInputProps } from './interfaces/IInput';
import styles from './sass/Input.module.scss';

const Input: React.FC<IInputProps> = ({
  iconLeft,
  iconRight,
  type,
  variant = 'default',
  className,
  disabled,
  error,
  isFocused,
  ...rest
}) => (
  <div className={`
      ${styles.wrapper}
      ${isFocused && styles.focused}
      ${styles[variant]}
      ${disabled && styles.disabled}
    `}
  >
    {iconLeft && <img className={styles.iconLeft} src={iconLeft} alt="icon" />}
    <input
      type={type}
      className={`
          ${styles.input}
          ${variant && variant !== 'default' && styles[variant]}
          ${error && styles.error}
        `}
      disabled={disabled}
      {...rest}
    />
    {iconRight && <img className={styles.iconRight} src={iconRight} alt="icon" />}
  </div>
);

export default Input;
