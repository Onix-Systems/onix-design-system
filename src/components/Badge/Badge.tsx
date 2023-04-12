import React, { FC, memo } from 'react';
import { IBadgeProps } from './interface/IBadge';
import styles from './sass/Badge.module.scss';

const Badge: FC<IBadgeProps> = ({
  message,
  customClass,
  variant = 'gray',
}) => (
  <div className={`${styles.badge} ${styles[variant]} ${customClass}`}>
    {message}
  </div>
);

export default memo(Badge);
