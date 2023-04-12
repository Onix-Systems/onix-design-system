import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconButton from '../components/IconButton/IconButton';

export default {
  title: 'Example/IconButton',
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'contained',
  size: 'medium',
};
