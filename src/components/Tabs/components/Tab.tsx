import React from 'react';
import { TabProps } from '../interfaces/ITab';
import styles from '../sass/Tab.module.scss';

const Tab: React.FC<TabProps> = ({
  children,
  disabled,
  isActive,
  ...restProps
}) => (
  <button
    type="button"
    role="tab"
    disabled={disabled}
    className={`${styles.root} ${disabled ? styles.disabled : ''} ${isActive ? styles.active : ''}`}
    {...restProps}
  >
    {children}
  </button>
);

export default Tab;
