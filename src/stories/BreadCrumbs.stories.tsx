import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BreadCrumbs } from '../components';

export default {
  title: 'Test/BreadCrumbs',
  component: BreadCrumbs,
  argTypes: {},
  args: {
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
  },
} as ComponentMeta<typeof BreadCrumbs>;

const Template: ComponentStory<typeof BreadCrumbs> = (args) => <BreadCrumbs {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const CustomSeparator = Template.bind({});
CustomSeparator.args = {
  separator: '>',
  lastIsCopyable: true,
};
