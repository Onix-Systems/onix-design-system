import React from 'react';
import { BreadcrumbItemProps } from '../interfaces/IBreadCrumbs';
import styles from '../sass/BreadcrumbItem.module.scss';

const BreadCrumbsItem: React.FC<BreadcrumbItemProps> = ({
  url = null,
  name,
  isLast,
  separator = '/',
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
