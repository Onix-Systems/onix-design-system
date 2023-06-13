import React, { FC } from 'react';
import { IIconsProps } from './interfaces/IIcons';

const DropdownUpIcon: FC<IIconsProps> = ({ fill = 'currentColor' }) => (
  <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d={'M5.75226 2.51062L3.58807 0.254763C3.26218 -0.0849214 2.73576 -0.0849214 2.40987 0.254763L0.245676'
        + ' 2.51062C-0.280751 3.05934 0.0952678 4 0.83895 4L5.16735 4C5.91103 4 6.27869 3.05934 5.75226 2.51062Z'}
      fill={fill}
    />
  </svg>

);

export default DropdownUpIcon;
