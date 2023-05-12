import React from 'react';
import styles from './sass/IconButton.module.scss';
import { IconButtonProps } from './interfaces/IIconButton';

const IconButton: React.FC<IconButtonProps> = ({
  size = 'md',
  color = 'gray',
  icon,
  disabled,
  className,
  ...props
}) => (
  <button
    type="button"
    className={`
      ${styles.button}
      ${styles[size]}
      ${styles[color]}
      ${className}
    `}
    disabled={disabled}
    {...props}
  >
    {icon}
  </button>
);

export default IconButton;
