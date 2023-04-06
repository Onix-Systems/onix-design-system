import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconButton from '../components/IconButton/IconButton';

export default {
  title: 'Example/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: 'assets/code-brackets.svg',
};
