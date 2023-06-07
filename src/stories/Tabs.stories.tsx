import React, { useState } from 'react';
import { ComponentMeta } from '@storybook/react';
import Tabs from '../components/Tabs/Tabs';
import Tab from '../components/Tabs/components/Tab';
import TabPanel from '../components/Tabs/components/TabPanel';

export default {
  title: 'Test/Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

export const Default = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <Tabs
        value={selectedTab}
        onChange={(event, index) => setSelectedTab(index)}
      >
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab disabled>Disabled</Tab>
      </Tabs>
      <TabPanel value={selectedTab} index={0}>Item 1</TabPanel>
      <TabPanel value={selectedTab} index={1}>Item 2</TabPanel>
    </>
  );
};
