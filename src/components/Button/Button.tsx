import React, { FC, memo, useMemo } from 'react';
import { IButtonProps } from './interfaces/IButton';
import { EColors, ESizes, EVariants } from '../../constants/tsConstants';
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
  variant = EVariants.CONTAINED,
  color = EColors.PRIMARY,
  size = ESizes.MEDIUM,
  iconLeft = null,
  iconRight = null,
  className = '',
}) => {
  const loader = useMemo(() => {
    if (isLoading) {
      return (
        <BallPulse
          className={styles.loader}
          color={variant === EVariants.CONTAINED || disabled ? undefined : color}
        />
      );
    }
    return null;
  }, [isLoading, disabled, variant, color]);

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
      {loader}
      {iconRight && <img className={styles.iconRight} src={iconRight} alt={text} />}
    </button>
  );
};
export default memo(Button);
