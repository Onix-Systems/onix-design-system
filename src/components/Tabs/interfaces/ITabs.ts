import React, { ReactNode } from 'react';

export interface TabsProps {
  value: number;
  children: ReactNode;
  onChange: (event: React.MouseEvent<HTMLButtonElement>, index: number) => void;
}
