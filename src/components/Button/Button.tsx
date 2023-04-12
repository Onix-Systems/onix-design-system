import React, { FC, memo, useMemo } from 'react';
import { IButtonProps } from './interfaces/IButton';
import { Colors, Sizes, Variants } from '../../constants/general';
import styles from './sass/Button.module.scss';
import BallPulse from '../Loaders/BallPulse/BallPulse';

const Button: FC<IButtonProps> = ({
  text = '',
  aliaLabel = '',
  disabled = false,
  isLoading = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
  variant = Variants.Contained,
  color = Colors.Primary,
  size = Sizes.Medium,
  iconLeft = null,
  iconRight = null,
  className = '',
}) => {
  const loader = useMemo(() => (
    <BallPulse
      className={styles.loader}
      color={variant === Variants.Contained || disabled ? undefined : color}
    />
  ), [disabled, variant, color]);

  return (
    <button
      aria-label={aliaLabel}
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
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {iconLeft && <img className={styles.iconLeft} src={iconLeft} alt={text} />}
      {text && <span className={isLoading ? styles.loaderText : ''}>{text}</span>}
      {isLoading && loader}
      {iconRight && <img className={styles.iconRight} src={iconRight} alt={text} />}
    </button>
  );
};
export default memo(Button);
