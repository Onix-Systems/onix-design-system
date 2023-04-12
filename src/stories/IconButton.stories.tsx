import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconButton from '../components/IconButton/IconButton';

import CloseIcon from '../assets/icons/close.svg';

export default {
  title: 'Example/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'outlined',
  size: 'medium',
  icon: CloseIcon,
};
