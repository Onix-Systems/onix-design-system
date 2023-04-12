import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IconButtonVariants } from '../constants/general';
import IconButton from '../components/IconButton/IconButton';
import CloseIcon from '../assets/icons/close.svg';

export default {
  title: 'Example/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: IconButtonVariants.Contained,
  icon: CloseIcon,
};
