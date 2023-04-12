import React, { FC, memo } from 'react';
import { IBadgeProps } from './interface/IBadge';
import styles from './sass/Badge.module.scss';
import { EBadgeVariants } from '../../constants/tsConstants';

const Badge: FC<IBadgeProps> = ({
  message,
  customClass,
  variant = EBadgeVariants.GRAY,
}) => (
  <div className={`${styles.badge} ${styles[variant]} ${customClass}`}>
    {message}
  </div>
);

export default memo(Badge);
