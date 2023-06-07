import React, { MouseEvent } from 'react';

export interface TabProps {
  disabled?: boolean;
  isActive?: boolean;
  children: React.ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
