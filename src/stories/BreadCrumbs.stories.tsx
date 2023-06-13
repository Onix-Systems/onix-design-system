import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BreadCrumbs } from '../components';

export default {
  title: 'Test/BreadCrumbs',
  component: BreadCrumbs,
} as ComponentMeta<typeof BreadCrumbs>;

const Template: ComponentStory<typeof BreadCrumbs> = (args) => <BreadCrumbs {...args} />;

export const Default = Template.bind({});
Default.args = {
  breadcrumbItems: [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'About',
      url: '/about',
    },
    {
      name: 'Contact',
      url: '/about11',
    },
  ],
};
