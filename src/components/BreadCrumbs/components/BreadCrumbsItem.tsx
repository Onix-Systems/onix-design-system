import React from 'react';
import styles from '../sass/BreadcrumbItem.module.scss';
import { BreadcrumbItemProps } from '../interfaces/IBreadCrumbs';

const BreadCrumbsItem: React.FC<BreadcrumbItemProps> = ({
  separator = '/',
  url = null,
  name,
  isLast,
}) => (
  <li key={name} className={styles.item}>
    {url && !isLast ? (
      <a href={url} className={styles.link}>
        {name}
      </a>
    ) : (
      <span className={styles.name}>{name}</span>
    )}
    {!isLast && <span className={styles.separator}>{separator}</span>}
  </li>
);

export default BreadCrumbsItem;
