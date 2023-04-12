import React, { FC, memo } from 'react';
import { IToggle } from './interface/IToggle';
import styles from './sass/Toggle.module.scss';

const Toggle: FC<IToggle> = ({
  name,
  label,
  ...props
}) => (
  <div className={styles.toggle}>
    {label && <span>{label}</span>}
    <label htmlFor={name} className={styles.control}>
      <input
        type="checkbox"
        name={name}
        id={name}
        {...props}
      />
      <span className={styles.slider} />
    </label>
  </div>
);

export default memo(Toggle);
