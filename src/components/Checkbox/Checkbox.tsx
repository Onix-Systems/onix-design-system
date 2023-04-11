import React, { FC, memo } from 'react';
import { ICheckbox } from './interfaces/ICheckbox';
import styles from './sass/Checkbox.module.scss';

const Checkbox: FC<ICheckbox> = ({
  id,
  customClass = '',
  checked,
  disabled = false,
  label = '',
  onChange,
}) => (
  <label htmlFor={id} className={`${styles.labelContainer} ${disabled ? styles.disabled : ''} ${customClass}`}>
    <span className={`${styles.checkbox} ${checked ? styles.checked : ''}`}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        className={styles.input}
        onChange={onChange}
        disabled={disabled}
      />
      <span className={styles.checkmark} />
    </span>
    {label && <span className={styles.label}>{label}</span>}
  </label>
);

export default memo(Checkbox);
