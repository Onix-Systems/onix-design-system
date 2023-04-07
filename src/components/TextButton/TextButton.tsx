import React, { FC, memo } from 'react';
import { ITextButton } from './interfaces/IButton';
import { cn, useTheme } from '../../utils';
import styles from './sass/TextButton.module.scss';

const TextButton: FC<ITextButton> = ({
  label, isDisabled = false, onPress, customClass, themeName,
}) => {
  const theme = useTheme(themeName);

  return (
    <button
      className={cn(
        styles.button,
        styles[theme],
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
};

export default memo(TextButton);
