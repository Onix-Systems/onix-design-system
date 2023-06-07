import React from 'react';
import { TabPanelProps } from '../interfaces/ITabPanel';

export const TabPanels: React.FC<TabPanelProps> = ({
  children,
  index,
  value,
}) => (
  <div role="tabpanel">
    {value === index && children}
  </div>
);

export default TabPanels;
