import React, { FC, memo, useMemo } from 'react';
import { IButtonProps } from './interfaces/IButton';
import { Colors, Sizes, Variants } from '../../constants/general';
import BallPulse from '../Loaders/BallPulse/BallPulse';
import styles from './sass/Button.module.scss';

const Button: FC<IButtonProps> = ({
  text = '',
  disabled = false,
  isLoading = false,
  variant = Variants.Contained,
  color = Colors.Primary,
  size = Sizes.Medium,
  iconLeft = null,
  iconRight = null,
  className = '',
  ...props
}) => {
  const loader = useMemo(() => (
    <BallPulse
      className={styles.loader}
      color={variant === Variants.Contained || disabled ? undefined : color}
    />
  ), [disabled, variant, color]);

  return (
    <button
      type="button"
      className={`
      ${styles.button}
      ${styles[variant]}
      ${styles[color]}
      ${styles[size]}
      ${disabled ? styles.disabled : ''}
      ${className}
    `}
      disabled={disabled || isLoading}
      {...props}
    >
      {iconLeft}
      {text && <span className={isLoading ? styles.loaderText : ''}>{text}</span>}
      {isLoading && loader}
      {iconRight}
    </button>
  );
};
export default memo(Button);
