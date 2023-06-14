import React, { FC } from 'react';
import { IIconsProps } from './interfaces/IIcons';

const AttachmentIcon: FC<IIconsProps> = ({ fill = 'currentColor' }) => (
  <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d={'M1.29002 11.2895C1.68002 11.6795 2.31002 11.6795 2.70002 11.2895L7.29002 6.69953C7.68002'
      + ' 6.30953 7.68002 5.67953 7.29002 5.28953L2.70002 0.699532C2.31002 0.309532 1.68002 0.309532 '
      + '1.29002 0.699532C0.90002 1.08953 0.90002 1.71953 1.29002 2.10953L5.17002 5.99953L1.29002'
      + ' 9.87953C0.90002 10.2695 0.91002 10.9095 1.29002 11.2895Z'}
      fill={fill}
    />
  </svg>

);

export default AttachmentIcon;
