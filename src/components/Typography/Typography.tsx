import React, { FC } from 'react';
import styles from './sass/Typography.module.scss';

export const H1: FC<{ children: React.ReactNode }> = ({ children }) => (
  <h1 className={styles.h1}>{children}</h1>
);

export const TextLarge: FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className={styles.textLarge}>{children}</p>
);

export const TextLargeBold: FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className={`${styles.textLarge} ${styles.bold}`}>{children}</p>
);

export const TextBig: FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className={styles.textBig}>{children}</p>
);

export const TextBigBold: FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className={`${styles.textBig} ${styles.bold}`}>{children}</p>
);

export const TextMedium: FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className={styles.textMedium}>{children}</p>
);

export const TextMediumBold: FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className={`${styles.textMedium} ${styles.bold}`}>{children}</p>
);
export const TextSmall: FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className={styles.textSmall}>{children}</p>
);

export const TextExtraSmall: FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className={styles.textExtraSmall}>{children}</p>
);
