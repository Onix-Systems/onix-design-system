import React, { FC, memo } from 'react';
import { IButtonProps } from './interfaces/IButton';
import styles from './sass/Button.module.scss';

const Button: FC<IButtonProps> = ({
  label,
  isDisabled = false,
  onPress,
}) => (
  <button
    className={styles.button}
    onClick={onPress}
    disabled={isDisabled}
    type="button"
  >
    <span>{label}</span>
  </button>
);

export default memo(Button);
