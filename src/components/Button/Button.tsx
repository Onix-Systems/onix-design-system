import React, { FC, memo } from 'react';
import IButtonProps from './interfaces/IButton';
import { cn } from '../../utils/helpers';
import { Themes } from '../../constants/defines';
import styles from './sass/Button.module.scss';
import themes from './sass/Themes.module.scss';

const Button: FC<IButtonProps> = ({
  label, isDisabled = false, onPress, customClass, theme = Themes.VAULTED,
}) => (
  <button
    className={cn(
      styles.button,
      themes[`theme_${theme}`],
      customClass,
    )}
    onClick={onPress}
    disabled={isDisabled}
    type="button"
  >
    <span>
      {label}
    </span>
  </button>
);

export default memo(Button);
