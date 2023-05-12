import React, { FC } from 'react';
import { IRadioProps } from './interfaces/IRadio';
import styles from './sass/Radio.module.scss';

const Radio: FC<IRadioProps> = ({
  className = '',
  label,
  checked,
  disabled,
  id,
  ...props
}) => (
  <label
    htmlFor={id}
    className={`${styles.wrapper} ${disabled ? styles.disabled : ''} ${className}`}
  >
    <span className={`${styles.radio} ${checked ? styles.radio : ''}`}>
      <input
        id={id}
        type="radio"
        className={styles.input}
        checked={checked}
        disabled={disabled}
        {...props}
      />
      <span className={styles.checkmark} />
    </span>
    {label && <span className={styles.label}>{label}</span>}
  </label>
);

export default Radio;
