import React, { FC, memo } from 'react';
import IIconButton from './interfaces/IIconButton';
import { cn } from '../../utils/helpers';
import styles from './sass/IconButton.module.scss';

const IconButton: FC<IIconButton> = ({
  icon,
  width = 21,
  height = 21,
  onPress,
  isDisabled,
  buttonClass,
}) => (
  <button
    className={cn(styles.button, buttonClass)}
    onClick={onPress}
    type="button"
    disabled={isDisabled}
  >
    <img
      width={width}
      height={height}
      src={typeof icon === 'string' ? icon : icon.src}
      alt=""
    />
  </button>
);

export default memo(IconButton);
