import React, { FC, memo } from 'react';
import { ICheckbox } from './interfaces/ICheckbox';
import { TextBig } from '../Typography/Typography';
import styles from './sass/Checkbox.module.scss';

const Checkbox: FC<ICheckbox> = ({
  id,
  className = '',
  checked,
  disabled = false,
  text = '',
  image = null,
  imageStyles = '',
  ...props
}) => (
  <label htmlFor={id} className={`${styles.labelContainer} ${disabled ? styles.disabled : ''} ${className}`}>
    <span className={`${styles.checkbox} ${checked ? styles.checked : ''}`}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        className={styles.input}
        disabled={disabled}
        {...props}
      />
      <span className={styles.checkmark} />
    </span>
    {image && <img src={image} alt={text} className={`${styles.image} ${imageStyles}`} />}
    {text && <TextBig>{text}</TextBig>}
  </label>
);

export default memo(Checkbox);
