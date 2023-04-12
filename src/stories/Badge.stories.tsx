import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Badge from '../components/Badge/Badge';
import { EBadgeVariants } from '../constants/tsConstants';

export default {
  title: 'Example/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: EBadgeVariants.SUCCESS,
  message: 'Success',
};
