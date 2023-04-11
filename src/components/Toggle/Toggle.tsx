import React, { FC, memo } from 'react';
import { IToggle } from './interface/IToggle';
import styles from './sass/Toggle.module.scss';

const Toggle: FC<IToggle> = ({
  name,
  onChange,
  checked = false,
  disabled = false,
  ariaLabel,
  label,
}) => (
  <div className={styles.toggle}>
    {label && <span>{label}</span>}
    <label htmlFor={name} className={styles.control}>
      <input
        type="checkbox"
        name={name}
        id={name}
        onChange={onChange}
        checked={checked}
        disabled={disabled}
        aria-label={ariaLabel}
      />
      <span className={styles.slider} />
    </label>
  </div>
);

export default memo(Toggle);
