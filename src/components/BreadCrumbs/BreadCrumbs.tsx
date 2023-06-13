import React from 'react';
import BreadCrumbsItem from './components/BreadCrumbsItem';
import { BreadCrumbsProps } from './interfaces/IBreadCrumbs';
import styles from './sass/Breadcrumb.module.scss';
import ClipboardCopy from '../ClipboardCopy/ClipboardCopy';

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({
  breadcrumbItems,
  separator = '/',
  lastIsCopyable = false,
}) => (
  <nav className={styles.wrapper}>
    <ol className={styles.list}>
      {breadcrumbItems.map((item, index, array) => (
        array.length - 1 === index && lastIsCopyable ? (
          <ClipboardCopy key={item.name} copyText={`${window.location.origin}${item.url}`}>
            <BreadCrumbsItem
              key={item.name}
              isLast={array.length - 1 === index}
              separator={separator}
              {...item}
            />
          </ClipboardCopy>
        ) : (
          <BreadCrumbsItem
            key={item.name}
            isLast={array.length - 1 === index}
            separator={separator}
            {...item}
          />
        )
      ))}
    </ol>
  </nav>
);

export default BreadCrumbs;
