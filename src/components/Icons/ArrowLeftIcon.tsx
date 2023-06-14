import React, { FC } from 'react';
import { IIconsProps } from './interfaces/IIcons';

const AttachmentIcon: FC<IIconsProps> = ({ fill = 'currentColor' }) => (
  <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d={'M6.70998 0.710469C6.31998 0.320469 5.68998 0.320469 5.29998 0.710469L0.70998 5.30047C0.31998 '
      + '5.69047 0.31998 6.32047 0.70998 6.71047L5.29998 11.3005C5.68998 11.6905 6.31998 11.6905 6.70998 '
      + '11.3005C7.09998 10.9105 7.09998 10.2805 6.70998 9.89047L2.82998 6.00047L6.70998 2.12047C7.09998 '
      + '1.73047 7.08998 1.09047 6.70998 0.710469Z'}
      fill={fill}
    />
  </svg>

);

export default AttachmentIcon;
