import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Badge from '../components/Badge/Badge';

export default {
  title: 'Example/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'success',
  message: 'Success',
};
