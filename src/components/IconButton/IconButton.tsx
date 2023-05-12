import React from 'react';
import styles from './sass/IconButton.module.scss';
import { IconButtonProps } from './interfaces/IIconButton';

const IconButton: React.FC<IconButtonProps> = ({
  size = 'MEDIUM',
  color = 'GRAY',
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
