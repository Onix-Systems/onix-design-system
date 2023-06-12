import React, { FC } from 'react';
import styles from './sass/Typography.module.scss';
import { ITypographyProps } from './interfaces/ITypography';

export const H1: FC<ITypographyProps> = ({ children }) => (
  <h1 className={styles.h1}>{children}</h1>
);

export const TextLarge: FC<ITypographyProps> = ({ children }) => (
  <p className={styles.textLarge}>{children}</p>
);

export const TextLargeBold: FC<ITypographyProps> = ({ children }) => (
  <p className={`${styles.textLarge} ${styles.bold}`}>{children}</p>
);

export const TextBig: FC<ITypographyProps> = ({ children }) => (
  <p className={styles.textBig}>{children}</p>
);

export const TextBigBold: FC<ITypographyProps> = ({ children }) => (
  <p className={`${styles.textBig} ${styles.bold}`}>{children}</p>
);

export const TextMedium: FC<ITypographyProps> = ({ children }) => (
  <p className={styles.textMedium}>{children}</p>
);

export const TextMediumBold: FC<ITypographyProps> = ({ children }) => (
  <p className={`${styles.textMedium} ${styles.bold}`}>{children}</p>
);
export const TextSmall: FC<ITypographyProps> = ({ children }) => (
  <p className={styles.textSmall}>{children}</p>
);

export const TextExtraSmall: FC<ITypographyProps> = ({ children }) => (
  <p className={styles.textExtraSmall}>{children}</p>
);
