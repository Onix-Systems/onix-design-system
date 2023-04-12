import React, { FC, memo } from 'react';
import { IBellProps } from './interfaces/IBell';
import styles from './sass/Bell.module.scss';

import BellIcon from '../../assets/icons/bell.svg';

const Bell: FC<IBellProps> = ({
  alt = 'bell',
  isActive = false,
  hasNotification = false,
  className = '',
  ...props
}) => (
  <button
    className={`${styles.bellButton} ${className}`}
    type="button"
    {...props}
  >
    <img className={isActive ? `${styles.activeBell}` : ''} src={BellIcon} alt={alt} />
    {hasNotification && <div className={styles.notificationDot} />}
  </button>
);

export default memo(Bell);
