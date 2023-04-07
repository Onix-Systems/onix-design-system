import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CloseButton from '../components/CloseButton/CloseButton';

export default {
  title: 'Example/CloseButton',
  component: CloseButton,
} as ComponentMeta<typeof CloseButton>;

const Template: ComponentStory<typeof CloseButton> = (args) => <CloseButton {...args} />;

export const Default = Template.bind({});
Default.args = {
};
