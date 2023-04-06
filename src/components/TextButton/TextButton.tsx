import React, { FC, memo } from 'react';
import ITextButtonProps from './interfaces/IButton';
import { cn } from '../../utils/helpers';
import { Themes } from '../../constants/defines';
import styles from './sass/TextButton.module.scss';
import themes from './sass/Themes.module.scss';

const TextButton: FC<ITextButtonProps> = ({
  label, isDisabled = false, onPress, customClass, theme,
}) => (
  <button
    className={cn(
      styles.button,
      themes[`theme_${theme || Themes.VAULTED}`],
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

export default memo(TextButton);
