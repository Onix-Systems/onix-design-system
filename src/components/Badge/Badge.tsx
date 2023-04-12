import React, { FC, memo } from 'react';
import { IBadgeProps } from './interface/IBadge';
import { EBadgeShape, EBadgeVariants } from '../../constants/tsConstants';
import styles from './sass/Badge.module.scss';

const Badge: FC<IBadgeProps> = ({
  message,
  customClass,
  variant = EBadgeVariants.GRAY,
  shape = EBadgeShape.ROUND,
}) => (
  <div className={`${styles.badge} ${styles[variant]} ${styles[shape]} ${customClass}`}>
    {message}
  </div>
);

export default memo(Badge);
